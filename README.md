<h1 align="center">Vidsy QA Interview Homework Task</h1>

<p align="center">
  Task to be carried out for Vidsy QA interviews 👍
</p>

## Index

1. [Introduction](#introduction)
1. [Exercise](#exercise)
1. [Existing Code](#existing-code)
1. [Tasks](#tasks)
1. [Debugging](#debugging)

## Introduction

The Vidsy team would like you to complete a number of tasks to fix, refactor and extend an
existing testing framework. The test is an opportunity to showcase your technical ability and
highlight how you approach new technologies.

**Treat this like writing production code**, and show us your best!

## Exercise

To be able to run the testing framework and start work on the task, you will need the following
installed on your machine:

1. Docker
1. Docker Compose
1. Make

Then set up the existing project locally on your machine:

1. Clone this repository locally
1. Create a new private GitHub repository
1. As you complete the task, push changes to your new private GitHub repository

Now you're ready to start the task! Please complete the tasks detailed below.

When complete, add `thaffenden` as a contributor on the GitHub repository and email your Vidsy
hiring manager to confirm your task is ready to be reviewed 🎉

## Existing Code

The Vidsy engineers have started off the project with two example tests, written in Typescript using
[WebdriverIO](https://webdriver.io).

You can run the tests using:

```
VIDSY_EMAIL='...' VIDSY_PASSWORD='...' make test
```

> ⚠️ **Note**: The values for the environment variables will be sent to you in the email from your
> Vidsy hiring manager.

> ️️️⚠️ **Note**: The first time you run the tests will take longer as it will pull down a number of
> new Docker containers.

## Tasks

#### Task 1

The two examples tests are failing! Locate the cause of the failures and fix them.

#### Task 2

The Vidsy engineers have deliberately written the project so that it could be improved in a number
of ways.

Refactor it to follow modern best practices and be more maintainable. Treat this as production code,
we want to see you at your best!

#### Task 3

A Vidsy creator can use the site to update their first and last names via the settings page:

https://creator.staging.vidsy.co/settings

For this task, add a new test to check that as a user I can edit and save the first and last name
values on the settings page.

#### Task 4

Add a document called `IMPROVEMENTS.md` detailing any additional improvements you would want to implement to make this a more robust and fleshed out automation framework.

## Debugging

The test suite has been set up to host a local web server at the following URI:

```
localhost:8080
```

This will allow you to view all the running tests, and view the screen of a specific test.
