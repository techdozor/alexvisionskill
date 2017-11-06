# Alexa Vision API Skill

### The MIT License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Introduction
Alexa Vision Skill depends on the nodejs implementation that levelrages Google Vision API: https://github.com/techdozor/visionapi

Needs to be hosted on AWS Lambda service.

Below diagram outlines how it works

![Settings Window](https://github.com/techdozor/alexvisionskill/blob/master/AWSProcess.png)

**server.js** can be found in https://github.com/techdozor/visionapi
**index.js** is in thie repository

## Step by set for setup

1. Deploy and configure https://github.com/techdozor/visionapi as described in README.
2. Deploy index.js in this repository as part of Lambda. Most of the details are outlined in the following documentation: https://developer.amazon.com/docs/custom-skills/host-a-custom-skill-as-an-aws-lambda-function.html
3. Create new Alexa Skill. I found the following videos to be userful: https://www.youtube.com/channel/UCbx0SPpWT6yB7_yY_ik7pmg this one is especially good as it takes you through all the steps in one video: https://www.youtube.com/watch?v=L7-AlwYJs_k

Have fun!





