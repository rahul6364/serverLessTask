"use strict";
const { v4 } = require("uuid");
const AWS = require("aws-sdk");

const getTasks = async (event) => {

  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  let tasks;

  try{
  const result = await dynamoDb.scan({
    TableName: "Tasks"
  }).promise();
  tasks = result.Items;
  }catch(err){
    console.log(err);
  }
  
  return {
    statusCode: 200,
    body: JSON.stringify(tasks),
    };
};

module.exports = {
    handler: getTasks,
};