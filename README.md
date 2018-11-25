# THROW Test

Goal of this repository is to prove that a throw in a callback is bad.
Because if it is executed in the same frame as the call it will work as expected but if it is not the error will not be caught.

## How-to
1. Run ```npm install```
1. Run ```npm test```

## Understanding the result
* A test succeeds when an error is caught, because every test should catch an error
* Test "throw test - handleAsAsync - nextFrame" fails due to missing error, this happens because the promise is done before the callback is executed. Than the test finishes before the frame which throws the error is executed. When that frame would be executed it would also end with an uncaught error.
* Test "throw test - handleWrongWithPromise - nextFrame" fails due to the uncaught error in the process.
