# Project Cyborg

### License Info
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

What do you get when you mix artificial intelligence, cloud, and serverless?

You are exactly right! You get a new open source initiative with the code name “Cyborg”. Cyborg is a representative of Software Defined Senses (SDSens) (first introduced as part of this project).

Currently this open source project and overall is pretty young and We have a vision of expanding it further whether myself or with the help of the community (assuming interest).

As we all know human has five core senses: sight, hearing, smell, taste, and touch.

Today personal assistants (like Alexa, but not limited to that) have ability to hear, and starting to develop (early stages) intelligence to think like humans (certainly far from singularity for sure), however the rest of the important senses are still missing which will be developed as part of SDSens.

The goal of this Cyborg project and broader scope of SDSens is introduce full set of senses starting with the sight.

## What is the vision?

At the final stages once this project achieves more maturity, We envision its first physical incarnation in some form of hardware architecture that combines personal assistant (or a robot) with “embedded” camera(s) where camera(s) becomes eye(s) of the Cybog. Certainly adding more senses in the future would be possibility as well as expansion of SDSens  vision.

The opportunities are obvious and endless anywhere from healthcare, security (personal as well as national), entertainment, child care, etc. etc. etc.

## How did it start?

This project was started as a Science Fair project for Cross Roads Elementary School in Irmo, SC (https://www.lexrich5.org/cris) by Dan (http://dan.techdozor.org). Main focus of this project is to introduce a new Alexa Vision Skill that can recognize images. This project results into two independent but connected projects:

* project Cyborg which is a framework to interact with the personal assistant (like Alexa). This project is implemented in nodejs and hosted using AWS Lambda service. https://github.com/techdozor/cyborg
* Vision API project is the one that provides the core image (future video) recognition. https://github.com/techdozor/visionapi
Both of the project are hosted on github and open source under MIT license.

After success of the Science Fair project, myself and group of common thinkers (including Dan mentioned above) decided to start working on the expansion of the project and SDSens as a whole.

We are looking forward to expand this project with the help of the community as well as introduce the new movement SDSens which would build software senses for the robots.

## How does it work?

It is recommended for all of the compnents to be hosted on AWS (including AWS Lambda service).

Below diagram outlines how it works

![Settings Window](https://github.com/techdozor/alexvisionskill/blob/master/AWSProcess.png)

**server.js** can be found in https://github.com/techdozor/visionapi

**index.js** is in thie repository

## Step by set for setup

1. Deploy and configure https://github.com/techdozor/visionapi as described in README.
2. Deploy index.js in this repository as part of Lambda. Most of the details are outlined in the following documentation: https://developer.amazon.com/docs/custom-skills/host-a-custom-skill-as-an-aws-lambda-function.html
3. Create new Alexa Skill. I found the following videos to be userful: https://www.youtube.com/channel/UCbx0SPpWT6yB7_yY_ik7pmg this one is especially good as it takes you through all the steps in one video: https://www.youtube.com/watch?v=L7-AlwYJs_k
4. Make sure to specify the environment variables pointing to the location of the visionapi (see above) var httpUrl = 'http://' + process.env.SERVER_ADDR + ':' + process.env.SERVER_PORT + '/result'

Have fun!

### Future consideration and exansion of the project
1. Experiment and adopt to one of the deep learning frameworks from AWS.
2. Create a real-time by using a camera and let Alexa explain what she sees in real-time (or close to it).
3. Start expanding on other senses as part of SDSens

### Read more:
On my blog http://blog.techdozor.org
