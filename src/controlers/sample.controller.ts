import { Request, Response } from "express";
import { handleResponse, generateResponse } from "handlin";
import * as SampleService from "../services/sample.service";

export const getSampleData = async (req: Request, res: Response) => {
  try {
    //Retrieve response from the service
    const response = await SampleService.getSampleData();
    //Handle the response - return data to the user
    return handleResponse(response, req, res);
  } catch (e) {
    //In case of a potential error, catch it, generate error response and handle it immediately
    if (e instanceof Error) {
      console.log(e);
      return handleResponse(
        generateResponse({
          code: 500,
          message: e.message,
        }),
        req,
        res
      );
    }
  }
};
