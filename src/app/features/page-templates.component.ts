import { Component, OnInit, AfterViewInit } from '@angular/core';
import { LtiParamsService } from '../lti-params.service';

@Component({
  selector: 'app-page-templates',
  templateUrl: './page-templates.component.html',
  styleUrls: []
})
export class PageTemplatesComponent implements OnInit {
  bannerInner: any;
  selectedBanner: string;
  selectedTemplate = 'genericActivity';
  bannerValuesPrepare = ['caseStudy', 'checkUnderstanding', 'preAssessment', 'readings', 'research', 'video'];
  bannerValuesTeach = ['caseStudy', 'fieldExperience', 'groupPresentation', 'groupProblemSolving',
  'groupProject', 'iceBreaker', 'insightSharing', 'jigsawActivity', 'peerAccountability', 'peerFeedback',
  'rolePlayDiscussion', 'structuredDebate', 'studyGroup', 'supportForum', 'topicDiscussion'];
  bannerValuesPonder = ['assessment', 'demonstrateProficiency', 'practiceApply', 'presentation', 'reflection'];
  templates: string[] = ['genericActivity', 'genericQuiz'];
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
  courseName: string;
  courseId: string;
  courseClass: string;
  returnUrl: string;

  constructor(private _ltiParamsService: LtiParamsService) { }

  ngOnInit(): void {
    this.courseName = this._ltiParamsService.getCourseName();
    this.courseId = this._ltiParamsService.getCourseId();
    this.courseClass = this._ltiParamsService.getCourseClass();
    this.returnUrl = this._ltiParamsService.getReturnUrl();
  }

  updateTemplate(value: string) {
    this.selectedTemplate = value;
    console.log(this.selectedTemplate);
  }

  updateBanner(value: string) {
    this.selectedBanner = value;
    this.bannerInner = this.selectedBanner.split(' ')[1];
    console.log(this.selectedBanner);
  }
}
