import express from 'express';
import httpGetAllLaunches, { httpAddNewLaunch } from './launches.controller.js';

const launchesRouter = express.Router();

launchesRouter.get('/', httpGetAllLaunches).post('/', httpAddNewLaunch);

export default launchesRouter;
