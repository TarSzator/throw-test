/**
 * Created by René Simon <mail@rene-simoneu> on 25.11.18.
 */

const {
    execute,
    executeCallbackInSameFrame,
    executeCallbackInNextFrame,
    handleAsAsync,
    handleWrongWithPromise,
    handleCorrectlyWithPromise,
} = require('../src');
const expect = require('expect.js');

function getErrorTest(done) {
    return error => {
        try {
            expect(error).to.be.a(Error);
            done();
        } catch (error) {
            done(error)
        }
    }
}

describe('throw test', () => {
    describe('handleAsAsync', () => {
        it('sameFrame', done => {
            try {
                execute(handleAsAsync, executeCallbackInSameFrame, getErrorTest(done));
            } catch (error) {
                done(error);
            }
        });

        it('nextFrame', done => {
            try {
                execute(handleAsAsync, executeCallbackInNextFrame, getErrorTest(done));
            } catch (error) {
                done(error);
            }
        });
    });
    describe('handleWrongWithPromise', () => {
        it('sameFrame', done => {
            try {
                execute(handleWrongWithPromise, executeCallbackInSameFrame, getErrorTest(done));
            } catch (error) {
                done(error);
            }
        });

        it('nextFrame', done => {
            try {
                execute(handleWrongWithPromise, executeCallbackInNextFrame, getErrorTest(done));
            } catch (error) {
                done(error);
            }
        });
    });

    describe('handleCorrectlyWithPromise', () => {
        it('sameFrame', done => {
            try {
                execute(handleCorrectlyWithPromise, executeCallbackInSameFrame, getErrorTest(done));
            } catch (error) {
                done(error);
            }
        });

        it('nextFrame', done => {
            try {
                execute(handleCorrectlyWithPromise, executeCallbackInNextFrame, getErrorTest(done));
            } catch (error) {
                done(error);
            }
        });
    });
});
