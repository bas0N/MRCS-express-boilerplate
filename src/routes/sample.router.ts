import express from "express";
import * as SampleController from "../controlers/sample.controller";
export const sampleRouter = express.Router();
sampleRouter.route("/").get(SampleController.getSampleData);
