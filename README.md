# Simple System Technical Assignment

This document provides an overview of the application's features, technology stack, usage instructions, testing procedures and potential improvements.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stacks](#tech-stacks)
- [Installation](#installation)
- [Testing](#testing)

## Introduction

Simple System Technical Assignment is a web application designed to search users and their repositories in github.\
It provides features for search users by keyword and display repositories. \
This application is built using a modern technology stack that includes TailwindCSS, Redux and React with Docker and Cypress.

## Features

- Search Users
  - Search users by keyword.
- Display Repositories
  - Display list of repositories for each user
  - Each item of list contains name, description and star

## Tech Stacks

- **React**
- **Redux Toolkit** *State Management*
- **TailwindCSS** *Set style for UI*
- **Docker** *Containerization*
- **Cypress** *End to end testing*

## Installation

To run this application, following these steps.

1. Clone the repository and navigate to the project directory.
2. Make a copy of the `.env.example` file in the project repository.
3. Rename the copied file to `.env`.
4. Make sure docker is installed on your system.
5. Open a terminal and run the following command:

    ```bash
      docker compose up -d
    ```

You can access the app using `http://localhost:4173`

## Testing

Run this app as dev environment

- Make sure that yarn is installed on your system.
- Open a terminal in this repo and install packages using the following command
- Install `cypress` module using the following command

    ```bash
      yarn add cypress --dev
    ```

- You can test this app using the following command

    ```bash
      yarn test
    ```
