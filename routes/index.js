/* eslint-env node */
var express = require('express');
const path = require('path');
var router = express.Router();
var fs = require('fs');


/* GET home page. */
router.get('*', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../dist/index.html'), {
        title: 'Express'
    });
});

<<<<<<< HEAD
// router.route('/api/course-name').get((req, res) => {
//     var ltiParams = req.session.lti.params;
//     var courseName = ltiParams.context_title;
// });
=======
// TODO these don't do anything...
/* router.route('/api/course-name').get((req, res) => {
    var ltiParams = req.session.lti.params;
    var courseName = ltiParams.context_title;
});
>>>>>>> 03bd8f4a18bf745cd4297cd0ddbe8c008878afe7

// router.route('/api/course-class').get((req, res) => {
//     var ltiParams = req.session.lti.params;
//     var courseClass = ltiParams.context_label.toLowerCase().replace(' ', '');
//     res.send(JSON.stringify(courseClass));
// });

// router.route('/api/course-id').get((req, res) => {
//     var ltiParams = req.session.lti.params;
//     var courseNumber = ltiParams.content_item_return_url.split('/')[4];
//     res.send(JSON.stringify(courseNumber));
// });

// router.route('/api/return-url').get((req, res) => {
//     var ltiParams = req.session.lti.params;
//     var returnUrl = ltiParams.content_item_return_url;
//     console.log(returnUrl);
//     res.send(JSON.stringify(returnUrl));
// });

<<<<<<< HEAD
// router.route('/api').get((req, res) => {
//     var ltiParams = req.session.lti.params;
//     console.log(ltiParams);
//     res.send(JSON.stringify(ltiParams));
// });
=======
router.route('/api').get((req, res) => {
    var ltiParams = req.session.lti.params;
    console.log(ltiParams);
    res.send(JSON.stringify(ltiParams));
}); */
>>>>>>> 03bd8f4a18bf745cd4297cd0ddbe8c008878afe7

/* Handle LTI launch */
router.post('/', function (req, res, next) {
    var filename = path.join(__dirname, '../dist/index.html');
    var params = req.session.lti.params;
    var ltiParamsOut = {
        content_item_return_url: params.content_item_return_url,
        context_id: params.context_id,
        context_label: params.context_label,
        context_title: params.context_title,
        data: params.data
    };
    
    fs.readFile(filename, 'utf8',(err, file)=>{
        file = file.replace('</head>', `<script>var LTI_PARAMS = ${JSON.stringify(ltiParamsOut,null,4)};</script></head>`);
        console.log(file);
        res.send(file);
    });
    console.log(filename);
    // res.sendFile(filename, console.log);
});

module.exports = router;
