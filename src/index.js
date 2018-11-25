/**
 * Created by René Simon <mail@rene-simoneu> on 25.11.18.
 */

function throwError() {
    throw new Error('BAAM error');
}

function executeCallbackInSameFrame(callback) {
    try {
        throwError();
        callback();
    } catch (error) {
        callback(error);
    }
}

function executeCallbackInNextFrame(callback) {
    setTimeout(function() {
        executeCallbackInSameFrame(callback);
    }, 0);
}

async function handleAsAsync(func) {
    try {
        func(function(error) {
            if (error) {
                throw error;
            }
        });
    } catch (error) {
        throw error;
    }
}

function handleCorrectlyWithPromise(func) {
    return new Promise((resolve, reject) => {
        try {
            func(function(error) {
                if (error) {
                    reject(error);
                } else {
                    resolve();
                }
            });
        } catch (error) {
            reject(error);
        }
    });
}

function handleWrongWithPromise(func) {
    return new Promise((resolve, reject) => {
        try {
            func(function(error) {
                if (error) {
                    throw error;
                }
                resolve();
            });
        } catch (error) {
            reject(error);
        }
    });
}

function execute(handler, executor, done) {
    handler(executor).then(() => {
        done();
    }).catch(error => {
        done(error);
    });
}

module.exports = {
    execute,
    executeCallbackInSameFrame,
    executeCallbackInNextFrame,
    handleAsAsync,
    handleWrongWithPromise,
    handleCorrectlyWithPromise,
};
