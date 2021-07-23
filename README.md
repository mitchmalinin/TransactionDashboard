# Setup

- I use an .env file to load in the API endpoint. It is stored to http://localhost:8888/, so if the server is not on that port it needs to be changed.
- Class diagrams created in Figma: https://www.figma.com/file/gCIVWOz0lJMRbRH42yW0ff/Untitled?node-id=0%3A1

# Project Decisions

1. Project Creation

- I choose to use npx-create-react-app with the typescript template because I was short on time and could not afford loosing time on configuring the project from the ground up.
- This proved to be the wrong choice later on for when I had to spend some time understanding how to override the babel/webpack files for the styled components plugin.

2. State

- I chose to use the useReducer + useContext combo to create my transaction "global" state, and updated the state using a FLUX pattern.
- I know that this method is not practical for data that is constantly changing, but I felt it was ok for this project.
- Normally, I would use this combo and create multiple context per situation to avoid optimization issues when using useReducer + useContext wrapped globally.

3. Styles

- I am a huge fan of styled-components, and I know blockchain.com uses them, so I decided to use that library.
- I created a style file for every component, and that seemed to work well!

4. Features

- I had to get the basic requirements down, before I chose to do anything else.
- One feature that I really wanted to do, but I kept running into issues was to have the filter tab work for all three simultaneously.
- ex: User selects Btc that are Sent and Confirmed
- That feature was taking me an extreme amount of time to figure out, and I just had to move on to finish other more important tasks.
- I also really wanted to create a modal that showed the transaction details when a user clicks a transaction block.
- I would have used React portal, and created a modal that way.

# Project Pain Points

1. Webpack

- I configured a webpack file myself in other projects, so I am aware of the optimization benefits.
- Unfortunately, I was not able to create my own webpack file due to the time constraint.
- I would love to explain how I would create this in an interview about the project.

2. Typescript

- This was the major pain point of this project.
- I am a beginner in typescript, but I wanted to challenge myself in using it for this project.
- I spent a lot of time debugging typescript errors, but I also learned a lot in the process.

3. Time

- Since I only had 2 days to build this, I had to figure out what was most important to show off my skill set. For this reason I chose to focus on functionality & design.
- I would have loved to optomize it more, and really improve the UX/performance.
- I would have also loved to write unit tests as well, but in order to write proper ones, it takes up a lot time. I had to prioritize functionality first, but I know how critical tests are.

4. Bugs

- There are small bugs here and there that I really wanted to fix.
- Unfortunately, I can tend to get hungup on them, which is something I could not do for this project.
- They are still bugging me now, and I dream in my sleep about fixing them.

5. Optimization

- I could have made mobile and web image files.
- Of course, there is the webpack config that is able to minify css/js and tree shake.
