/* eslint-env node */
var express = require('express');
const path = require('path');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../dist/index.html'), {
    title: 'Express'
  });
});

router.route('/api/course-name').get((req, res) => {
  var ltiParams = req.session.lti.params;
  var courseName = ltiParams.context_title;
});

router.route('/api/course-class').get((req, res) => {
  var ltiParams = req.session.lti.params;
  var courseClass = ltiParams.context_label.toLowerCase().replace(" ", "");
  res.send(JSON.stringify(courseClass));
});

router.route('/api/course-id').get((req, res) => {
  var ltiParams = req.session.lti.params;
  var courseNumber = (ltiParams.content_item_return_url).split('/')[4];
  res.send(JSON.stringify(courseNumber));
});

router.route('/api/return-url').get((req, res) => {
  var ltiParams = req.session.lti.params;
  var returnUrl = ltiParams.content_item_return_url;
  console.log(returnUrl)
  res.send(JSON.stringify(returnUrl));
});

router.route('/api').get((req, res) => {
  var ltiParams = req.session.lti.params;
  console.log(ltiParams);
  res.send(JSON.stringify(ltiParams));
});

/* Handle LTI launch */
router.post('/', function (req, res, next) {
  var filename = path.join(__dirname, '../dist/index.html');
  console.log(filename);
  res.sendFile(filename, console.log);
});

module.exports = router
