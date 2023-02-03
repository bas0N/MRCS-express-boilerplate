import { Request, Response } from "express";
import { generateResult, handleResult } from "handlin";
import * as SampleService from "../services/sample.service";

export const getSampleData = async (req: Request, res: Response) => {
  try {
    const result = await SampleService.getSampleData();
    return handleResult(result, req, res);
  } catch (e) {
    if (e instanceof Error) {
      console.log(e);
      return handleResult(
        generateResult({
          code: 500,
          message: e.message,
        }),
        req,
        res
      );
    }
  }
};
