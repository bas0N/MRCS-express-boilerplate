import { generateResponse } from "handlin";

export const getSampleData = async () => {
  const sampleObject = {
    _id: "63dd72562dae3971744d65b1",
    isActive: false,
    balance: "$2,693.75",
    name: "Floyd Kerr",
    gender: "male",
    email: "floydkerr@satiance.com",
    registered: "2016-05-22T07:04:27 -02:00",
    latitude: -5.729996,
    longitude: -124.290946,
  };
  return generateResponse({
    code: 200,
    message: "Data retrieved succesfully!",
    success: true,
    data: sampleObject,
  });
};
