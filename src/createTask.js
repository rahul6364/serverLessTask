"use strict";
const { v4 } = require("uuid");
const AWS = require("aws-sdk");

const createTask = async (event) => {

  const dynamoDb = new AWS.DynamoDB.DocumentClient();

  const { task } = JSON.parse(event.body);
  const createdAt = new Date().toISOString();
  const id = v4();
  const newTask = {
    id,
    task,
    createdAt,
    completed: false
  }
  await dynamoDb.put({
    TableName: "Tasks",
    Item: newTask
  }).promise();

  return {
    statusCode: 200,
    body: JSON.stringify(newTask),
    };
};

module.exports = {
    handler: createTask,
};