import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-org-template',
  templateUrl: './org-template.component.html',
  styles: []
})
export class OrgTemplateComponent implements OnInit {

  bannerInner: string;
  selectedBanner: string;
  selectedTemplate = 'genericActivity';
  bannerValuesPrepare = ['caseStudy', 'checkUnderstanding', 'preAssessment', 'readings', 'research', 'video'];
  bannerValuesTeach = ['caseStudy', 'fieldExperience', 'groupPresentation', 'groupProblemSolving',
  'groupProject', 'iceBreaker', 'insightSharing', 'jigsawActivity', 'peerAccountability', 'peerFeedback',
  'rolePlayDiscussion', 'structuredDebate', 'studyGroup', 'supportForum', 'topicDiscussion'];
  bannerValuesPonder = ['assessment', 'demonstrateProficiency', 'practiceApply', 'presentation', 'reflection'];
  templates: string[] = ['genericActivity', 'genericQuiz'];

  constructor() { }

  updateTemplate(value: string) {
    this.selectedTemplate = value;
    console.log(this.selectedTemplate);
  }

  updateBanner(value: string) {
    this.selectedBanner = value;
    this.bannerInner = this.selectedBanner.split(' ')[1];
    console.log(this.selectedBanner);
  }

  ngOnInit() {
  }

}
