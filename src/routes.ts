import { Router, Request, Response, response } from "express";
import {UserController} from './controller/UserController';
import {ActivyController} from './controller/ActivyController';
import {CourseUnitController} from './controller/CourseUnitController';
import {AuthenticateController} from './controller/AuthenticateController';
import authenticated from './middlewares/authenticated';

const userController = new UserController()
const activyController = new ActivyController()
const courseunitcontroller = new CourseUnitController()
const authenticatecontroller = new AuthenticateController()

const routes = Router();

routes.post('/auth', authenticatecontroller.create);

routes.get('/user', authenticated, userController.show)
routes.get('/activy', authenticated, activyController.show)
routes.get('/courseUnit', authenticated, courseunitcontroller.show)

routes.post('/user', userController.create);
routes.post('/activy', authenticated, activyController.create);
routes.post('/courseUnit', authenticated, courseunitcontroller.create);

export default routes;