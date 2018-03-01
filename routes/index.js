/* eslint-env node */
var express = require('express');
const path = require('path');
var router = express.Router();
// var generation = require('../modules/generation');
var ejs = require('ejs');
var fs = require('fs');

require.extensions['.ejs'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};

// var activityTemplates = require('../views/templates.ejs')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../dist/index.html'), {
    title: 'Express'
  });
  console.log('get');
});

router.route('/api/course-name').get((req, res) => {
  var ltiParams = req.session.lti.params;
  var courseName = ltiParams.context_title;
  res.send(JSON.stringify(courseName));
})

router.route('/api/course-class').get((req, res) => {
  var ltiParams = req.session.lti.params;
  var courseClass = ltiParams.context_label.toLowerCase().replace(" ", "");
  res.send(JSON.stringify(courseClass));
})

router.route('/api/course-id').get((req, res) => {
  var ltiParams = req.session.lti.params;
  var courseNumber = (ltiParams.content_item_return_url).split('/')[4];
  res.send(JSON.stringify(courseNumber));
})

router.route('/api/return-url').get((req, res) => {
  var ltiParams = req.session.lti.params;
  var returnUrl = ltiParams.content_item_return_url;
  res.send(JSON.stringify(returnUrl));
})

/* Handle LTI launch */
/* This uses the Content Item service which is documented here:
   https://canvas.instructure.com/doc/api/file.content_item.html */
router.post('/', function (req, res, next) {
  var filename = path.join(__dirname, '../dist/index.html');
  console.log(filename);
  res.sendFile(filename, console.log);
})

module.exports = router;
