import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { BannerPreviewComponent } from './previews/banner-preview.component';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styles: []
})
export class BannerComponent implements OnInit {

  @Output() select: EventEmitter<string> = new EventEmitter();
  @ViewChild(BannerPreviewComponent) preview: BannerPreviewComponent;

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

  chooseFeature() {
    const html = this.preview.getHtmlContent().trim();
    console.log(html);
    this.select.emit(html);
  }

  constructor() { }

  ngOnInit() {
  }

}
