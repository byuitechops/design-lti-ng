import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { GenericActivityComponent } from './previews/generic/generic-activity.component';
import { GenericContentComponent } from './previews/generic/generic-content.component';

@Component({
  selector: 'app-org-template',
  templateUrl: './org-template.component.html',
  styles: []
})
export class OrgTemplateComponent implements OnInit {

  @Input() courseClass: string;

  @Output() select: EventEmitter<string> = new EventEmitter();
  @ViewChild(GenericActivityComponent) activity: GenericActivityComponent;
  @ViewChild(GenericContentComponent) quiz: GenericContentComponent;

  bannerInner: string;
  selectedBanner: string;
  selectedTemplate = 'genericActivity';
  bannerValuesPrepare = ['caseStudy', 'checkUnderstanding', 'preAssessment', 'readings', 'research', 'video'];
  bannerValuesTeach = ['caseStudy', 'fieldExperience', 'groupPresentation', 'groupProblemSolving',
  'groupProject', 'iceBreaker', 'insightSharing', 'jigsawActivity', 'peerAccountability', 'peerFeedback',
  'rolePlayDiscussion', 'structuredDebate', 'studyGroup', 'supportForum', 'topicDiscussion'];
  bannerValuesPonder = ['assessment', 'demonstrateProficiency', 'practiceApply', 'presentation', 'reflection'];
  genericTemplates: string[] = ['genericActivity', 'genericContent', 'teachingNotes', 'introduction'];
  prepareTemplates: string[] = ['conceptMapping', 'interview', 'learningContract', 'noteTaking', 'practice', 'prepare',
  'pretest', 'projectPlan', 'quizWriting', 'research', 'signUp', 'study'];
  toaTemplates: string[] = ['caseStudy', 'fieldExperience', 'groupProblemSolving', 'groupProject', 'iceBreaker', 'insightSharing',
  'jigsawTeaching', 'peerAccountability', 'peerFeedback', 'presentation', 'q&ASupportForum', 'rolePlay', 'structuredDebate', 'studyGroup',
  'teachOneAnother', 'topicDiscussion'];
  ponderProveTemplates: string[] = ['accountabilityQuiz', 'exam', 'exercise', 'paperEssay', 'ponderProve', 'portfolio', 'postTest',
  'project', 'quiz', 'reflection', 'report', 'worksheet'];

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

  chooseFeature() {
    const banner = <HTMLElement>document.querySelector('.byui');
    let html: string = '<div class="byui">' + banner.innerHTML + '</div>';
    if (this.selectedTemplate === 'genericActivity') {
      html += this.activity.getHtmlContent().trim();
    } else if (this.selectedTemplate === 'genericQuiz') {
      html += this.quiz.getHtmlContent().trim();
    }

    console.log(html);
    this.select.emit(html);
  }

  ngOnInit() {
  }

}
