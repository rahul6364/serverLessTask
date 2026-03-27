"use strict";

const welcome = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hello everyOne, this is a serverless framework project",
      },
      null,
      2
    ),
  };
};

module.exports = {
    handler: welcome,
};
