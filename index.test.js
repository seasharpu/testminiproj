"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const add_1 = __importDefault(require("./add"));
(0, globals_1.describe)('sum module', () => {
    (0, globals_1.test)('adds 1 + 2 to equal 3', () => {
        (0, globals_1.expect)((0, add_1.default)(1, 2)).toBe(3);
    });
});
