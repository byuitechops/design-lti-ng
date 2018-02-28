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

router.route('*/api/course-name').get((req, res) => {
  var ltiParams = req.session.lti.params;
  var courseName = ltiParams.context_title;
  res.send(courseName);
})

router.route('*/api/course-class').get((req, res) => {
  var ltiParams = req.session.lti.params;
  var courseClass = ltiParams.context_label.toLowerCase().replace(" ", "");
  res.send(courseClass);
})

router.route('*/api/course-number').get((req, res) => {
  var ltiParams = req.session.lti.params;
  var courseNumber = (ltiParams.content_item_return_url).split('/')[4];
  res.send(courseNumber);
})

/* Handle LTI launch */
/* This uses the Content Item service which is documented here:
   https://canvas.instructure.com/doc/api/file.content_item.html */
router.post('/', function (req, res, next) {
  // var ltiParams = req.session.lti.params
  // /* prepare the class (B 380 -> b380) */
  // var courseClass = ltiParams.context_label.toLowerCase().replace(" ", "")
  // console.log(courseClass);
  // var courseNumber = (ltiParams.content_item_return_url).split('/')[4];
  // var courseName = ltiParams.context_title;
  // // var homePage = generation.renderHomePage(courseName, courseNumber, courseClass);
  // var content_items = {
  //   "@context": "http://purl.imsglobal.org/ctx/lti/v1/ContentItem",
  //   "@graph": [{
  //     "@type": "ContentItem",
  //     "text": '',
  //     "mediaType": "text/html",
  //     "placementAdvice": {
  //       "presentationDocumentTarget": "embed"
  //       }
  //     }]
  // }

  var filename = path.join(__dirname, '../dist/index.html');
  console.log(filename);
  res.sendFile(filename, {
    title: 'Express'
  }, console.log);
})

module.exports = router;
