import express from 'express';
import httpGetAllLaunches, {
  httpAddNewLaunch,
  httpAbortLaunch,
} from './launches.controller.js';

const launchesRouter = express.Router();

launchesRouter
  .get('/', httpGetAllLaunches)
  .post('/', httpAddNewLaunch)
  .delete('/:id', httpAbortLaunch);

export default launchesRouter;
