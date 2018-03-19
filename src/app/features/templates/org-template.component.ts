import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { GenericActivityComponent } from './previews/generic-activity.component';

@Component({
  selector: 'app-org-template',
  templateUrl: './org-template.component.html',
  styles: []
})
export class OrgTemplateComponent implements OnInit {

  @Input() courseClass: string;

  @Output() select: EventEmitter<string> = new EventEmitter();
  @ViewChild(GenericActivityComponent) preview: GenericActivityComponent;

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
