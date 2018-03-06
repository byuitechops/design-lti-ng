# Repository Title

## Purpose

This is an implementation of the byui-design-lti in Angular. It is a tool that provides course designers quick and easy access to frequenly used html elements. Express and lti-middleware are used to handle lti requests.


## How to Install

To install dependencies, navigate to this repositoty in the console and type:

```
npm install --save repository-name
```

## How to Run

To start the development server, type this in the console:

```npm start```

This will run the Angular serve command which will open a new window in your browser and run the app. To start the Express server for development in Canvas, type:

```
npm run build
npm restart
```

Navigate to the WYSIWYG course editor in Canvas and choose the drop down for more tools and click the Toolbox dev tool. The server will update automatically when you make changes to server files. If you want the app to reflect changes made to the UI, you have to rebuild the tool using npm run build.

**Make sure to explain any inputs shown above in the section below.**

## CLI

See information about the Angular Cli for helpful production tips: https://github.com/angular/angular-cli

### Inputs

Lti parameters are sent to the app in the lti launch. There is a lti object sent with the launch that has information such as the return url, course information and who is using the tool.

### Outputs

The lti-service returns lti parameters from the endpoints in routes/index.js. 

```
router.route('/api/course-name').get((req, res) => {
  var ltiParams = req.session.lti.params; // use this ltiParams object if you need any more info about the user
  var courseName = ltiParams.context_title;
  res.send(JSON.stringify(courseName));
})
```

The tool returns the selected html element to the WYSIWYG.

## Requirements

- Must present a clean UI for course designers
- Must provide a fluid experience
- Must return useful stylized

## Development

### Execution Process
- Include the main steps that your code goes through to accomplish its goal
- These do not need to be overly technical, but enough for a developer to read and follow along in the code (i.e. "Use a ForEach to loop through each file" is too technical)
- Use a heading for each step

Example:

#### Start the Express server
This will do all of the heavy lifting required for the lti app.

#### Accept post request from LTI
Serve the UI for the app at the conclusion of the request.

#### Respond to selection by the designer
Prepare the content items object for the return post request to Canvas.

#### Return content via post
Use form submission (post) to return content to Canvas through the content items object

### Setup
- Include anything important for a developer to know if they are setting up the tool to develop it more.
- This could include instructions to install certain developer dependencies.

Example:

Make sure to include `canvas-wrapper` as a developer dependency when you need it:

```
npm i --save-dev byuitechops/canvas-wrapper
```

Here are instructions on how to set up the development server:

.....

### Unit Tests
- Explain each of your unit tests and their inputs.
- Provide all inputs used in testing so developers can use the same tests (or add on to them). For example, attach a CSV for each test case.

### Design

![App Design Layout](./src/assets/design-lti-ng.png?raw=true "App Design")
