import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PageScrollConfig } from 'ngx-page-scroll';

import { LtiParamsService } from '../lti-params.service';

@Component({
  selector: 'app-page-templates',
  templateUrl: './page-templates.component.html',
  styleUrls: ['./page-templates.component.css']
})
export class PageTemplatesComponent implements OnInit {

  localNav: string[] = ['Generic', 'Prepare', 'TOA', 'PonderProve'];

  templates: string[] = ['orgTemplate', 'homeTemplate'];

  contentItems = {
    '@context': 'http://purl.imsglobal.org/ctx/lti/v1/ContentItem',
    '@graph': [{
      '@type': 'ContentItem',
      'text': '',
      'mediaType': 'text/html',
      'placementAdvice': {
        'presentationDocumentTarget': 'embed'
        }
      }]
  };
  contentItemsJson: string;

  courseName: string;
  courseId: string;
  courseClass: string;
  returnUrl: string;

  genericActive = false;
  prepareActive = false;
  toaActive = false;
  proveActive = false;

  genericActivityCode = false;
  genericContentCode = false;
  homePageCode = false;
  teachingNotesCode = false;
  introductionCode = false;

  conceptMappingCode = false;
  interviewCode = false;
  learningContractCode = false;
  noteTakingCode = false;
  practiceCode = false;
  prepareCode = false;
  pretestCode = false;
  projectPlanCode = false;
  quizWritingCode = false;
  researchCode = false;
  signUpCode = false;
  studyCode = false;

  caseStudyCode = false;
  fieldExperienceCode = false;
  groupProblemSolvingCode = false;
  groupProjectCode = false;
  iceBreakerCode = false;
  insightSharingCode = false ;
  jigsawTeachingCode = false;
  peerAccountabilityCode = false;
  peerFeedbackCode = false;
  presentationCode = false;
  qnaSupportForumCode = false;
  rolePlayCode = false;
  structuredDebateCode = false;
  studyGroupCode = false;
  toaCode = false;
  topicDiscussionCode = false;

  accountabilityQuizCode = false;
  examCode = false;
  exerciseCode = false;
  paperEssayCode = false;
  ponderProveCode = false;
  portfolioCode = false;
  postTestCode = false;
  projectCode = false;
  quizCode = false;
  reflectionCode = false;
  reportCode = false;
  worksheetCode = false;
  
  constructor(private _ltiParamsService: LtiParamsService) {
    PageScrollConfig.defaultScrollOffset = 80;
    PageScrollConfig.defaultDuration = 0;
  }

  updateFeature(feature) {
    // insert the html string to the content items
    this.contentItems['@graph'][0].text = feature;
    this.contentItemsJson = JSON.stringify(this.contentItems);
    // make sure that the value updates before you submit
    const input = <HTMLInputElement>document.getElementById('contentItems');
    input.value = this.contentItemsJson;
    console.log(this.contentItemsJson);
    // submit the form
    const form = <HTMLFormElement>document.getElementById('submit');
    form.submit();
  }

  toggleGeneric(): void {
    this.genericActive = !this.genericActive;
  }
  togglePrepare(): void {
    this.prepareActive = !this.prepareActive;
  }
  toggleToa(): void {
    this.toaActive = !this.toaActive;
  }
  toggleProve(): void {
    this.proveActive = !this.proveActive;
  }

  ngOnInit(): void {
    this.courseName = this._ltiParamsService.getCourseName();
    this.courseId = this._ltiParamsService.getCourseId();
    this.courseClass = this._ltiParamsService.getCourseClass();
    this.returnUrl = this._ltiParamsService.getReturnUrl();
  }

}
