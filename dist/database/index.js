"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
try {
    (0, typeorm_1.createConnection)();
}
catch (error) {
    console.log(error);
}
