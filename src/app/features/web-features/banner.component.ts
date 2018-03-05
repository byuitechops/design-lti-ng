import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styles: []
})
export class BannerComponent implements OnInit {

  bannerOutValue: string;
  bannerOutInner: string;
  prepare: string[] = ['caseStudy', 'checkUnderstanding', 'preAssessment', 'readings', 'research', 'video'];
  teach: string[] = ['caseStudy', 'fieldExperience', 'groupPresentation', 'groupProblemSolving', 'groupProject',
  'iceBreaker', 'insightSharing', 'jigsawActivity', 'peerAccountability', 'peerFeedback',
  'rolePlayDiscussion', 'structuredDebate', 'studyGroup', 'supportForum', 'topicDiscussion'];
  ponder: string[] = ['assessment', 'demonstrateProficiency', 'practiceApply', 'presentation', 'reflection'];

  updateBanner(value: string) {
    this.bannerOutValue = value;
    console.log(this.bannerOutValue);
    this.bannerOutInner = value.split(' ')[1];
    console.log(this.bannerOutInner);
  }

  constructor() { }

  ngOnInit() {
  }

}
