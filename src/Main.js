"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = require("./Utils");
const uuid_1 = require("uuid");
const john = {
    age: 30,
    name: "John",
};
(0, Utils_1.printEmployee)(john);
console.log((0, uuid_1.v4)());
