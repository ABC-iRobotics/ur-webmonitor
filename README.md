# ur-webmonitor

## Overview
Simple Node.js example to show the received data in a web browser from an Universal Robot 

**NOTE**: It is an experimental software. Do not use this in production systems!

THE SOFTWARE IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL, BUT WITHOUT ANY WARRANTY. IT IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE SOFTWARE IS WITH YOU. SHOULD THE SOFTWARE PROVE DEFECTIVE, YOU ASSUME THE COST OF ALL NECESSARY SERVICING, REPAIR OR CORRECTION.

## TOC
1. [Requirements](#requirements)
2. [Installation](#installation)
3. [Configuration](#configuration)
4. [Usage](#example-usage)
5. [Bugs, feature requests, etc](#bugs-feature-requests-etc)

## Requirements
Install Node.js.

## Installation
- Clone the repository.
- Clone the https://github.com/ABC-iRobotics/ur-state-receiver.git
- Run npm -i in the cloned reposítories folders

## Configuration
1. Set the cloned ur-state-receiver path in the line: 'const URStateData = require('path_the_cloned_ur-state-receiver')'
2. Set your Universal Robot's IP: 'const urStateDataInst = new URStateData(30003, 'your_robot_ip')'

## Usage
1. Run 'node index.js' in the cloned repository folder
2. Open a browser and type http://localhost

## Acknowledgement
We acknowledge the financial support of this work by the Hungarian State and the European Union under the  EFOP-3.6.1-16-2016-00010 project.

## Bugs, feature requests, etc
Please use the [GitHub issue tracker][].

[GitHub issue tracker]: https://github.com/ABC-iRobotics/fanuc-webcontrol/issues