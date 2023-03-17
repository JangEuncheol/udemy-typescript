"use strict";
// let userInput: unknown;
let userInput; // 유니온써라
let userName;
userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("an error occurred!", 500);
