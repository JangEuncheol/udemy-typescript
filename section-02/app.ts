// let userInput: unknown;
let userInput: string | number; // 유니온써라
let userName: string;

userInput = 5;
userInput = "Max";

if (typeof userInput === "string") {
    userName = userInput;
}

function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code };
}

generateError("an error occurred!", 500);

