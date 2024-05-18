#!/usr/bin/env node

import inquirer from "inquirer";
let todos_list = [];
let condition = true;

while (condition) {
  let addTask = await inquirer.prompt([
    {
      type: "input",
      name: "todo",
      message: "What do you want to do?",
    },
    //27041969
    {
      type: "confirm",
      name: "todo_more",
      message: "are you sure you want to add this ",
      default: "false",
    },
  ]);

  todos_list.push(addTask.todo);
  condition = addTask.todo_more;
  console.log(todos_list);
}
