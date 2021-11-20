"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var UserController_1 = require("./controller/UserController");
var ActivyController_1 = require("./controller/ActivyController");
var CourseUnitController_1 = require("./controller/CourseUnitController");
var AuthenticateController_1 = require("./controller/AuthenticateController");
var authenticated_1 = __importDefault(require("./middlewares/authenticated"));
var userController = new UserController_1.UserController();
var activyController = new ActivyController_1.ActivyController();
var courseunitcontroller = new CourseUnitController_1.CourseUnitController();
var authenticatecontroller = new AuthenticateController_1.AuthenticateController();
var routes = (0, express_1.Router)();
routes.post('/auth', authenticatecontroller.create);
routes.get('/user', authenticated_1.default, userController.show);
routes.get('/activy', authenticated_1.default, userController.show);
routes.get('/courseUnit', authenticated_1.default, userController.show);
routes.post('/user', userController.create);
routes.post('/activy', authenticated_1.default, activyController.create);
routes.post('/courseUnit', authenticated_1.default, courseunitcontroller.create);
routes.get('/user', function (request, response) { return response.json({
    message: "hello world"
}); });
exports.default = routes;
