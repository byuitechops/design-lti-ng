import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PageTemplatesComponent } from './page-templates.component';
import { WebFeaturesComponent } from './web-features.component';
import { CapitalizePipe } from '../shared/capitalize.pipe';
import { RangePipe } from '../shared/range.pipe';
import { GenericActivityComponent } from './templates/previews/generic/generic-activity.component';
import { GenericContentComponent } from './templates/previews/generic/generic-content.component';
import { LtiParamsService } from '../lti-params.service';
import { AccordionComponent } from './web-features/accordion.component';
import { AccordionPreviewComponent } from './web-features/previews/accordion-preview.component';
import { BannerComponent } from './web-features/banner.component';
import { ButtonComponent } from './web-features/button.component';
import { CalloutComponent } from './web-features/callout.component';
import { ColumnsComponent } from './web-features/columns.component';
import { DefinitionComponent } from './web-features/definition.component';
import { DialogComponent } from './web-features/dialog.component';
import { ImageComponent } from './web-features/image.component';
import { VideoComponent } from './web-features/video.component';
import { ImageCarouselComponent } from './web-features/image-carousel.component';
import { PopoverComponent } from './web-features/popover.component';
import { TableComponent } from './web-features/table.component';
import { BannerPreviewComponent } from './web-features/previews/banner-preview.component';
import { ButtonPreviewComponent } from './web-features/previews/button-preview.component';
import { CalloutPreviewComponent } from './web-features/previews/callout-preview.component';
import { ColumnsPreviewComponent } from './web-features/previews/columns-preview.component';
import { DefinitionPreviewComponent } from './web-features/previews/definition-preview.component';
import { DialogPreviewComponent } from './web-features/previews/dialog-preview.component';
import { ImagePreviewComponent } from './web-features/previews/image-preview.component';
import { ImageCarouselPreviewComponent } from './web-features/previews/image-carousel-preview.component';
import { PopoverPreviewComponent } from './web-features/previews/popover-preview.component';
import { TablePreviewComponent } from './web-features/previews/table-preview.component';
import { VideoPreviewComponent } from './web-features/previews/video-preview.component';
import { ContentBoxComponent } from './web-features/content-box.component';
import { BannerImageComponent } from './web-features/banner-image.component';
import { FeatureWrapperComponent } from './feature-wrapper.component';
import { DynamicModule } from 'ng-dynamic-component';
import { OrgTemplateComponent } from './templates/org-template.component';
import { HomePageComponent } from './templates/home-page.component';
import { HomePagePreviewComponent } from './templates/previews/generic/home-page-preview.component';
import { PrepareReadWatchListenComponent } from './templates/previews/prepare/prepare-rwl.component';
import { PrepareRwlInstructionsComponent } from './templates/previews/prepare/prepare-rwl-instructions.component';
import { PreparePreAssesmentComponent } from './templates/previews/prepare/prepare-pre-assesment.component';
import { PrepareInterviewComponent } from './templates/previews/prepare/prepare-interview.component';
import { PrepareConceptMatchingComponent } from './templates/previews/prepare/prepare-concept-matching.component';
import { PrepareNoteTakingComponent } from './templates/previews/prepare/prepare-note-taking.component';
import { PrepareInfoGatheringComponent } from './templates/previews/prepare/prepare-info-gathering.component';
import { PrepareScholarlyResearchComponent } from './templates/previews/prepare/prepare-scholarly-research.component';
import { PrepareLearningContractComponent } from './templates/previews/prepare/prepare-learning-contract.component';
import { PrepareProjectPlanComponent } from './templates/previews/prepare/prepare-project-plan.component';
import { PrepareSignUpComponent } from './templates/previews/prepare/prepare-sign-up.component';
import { PrepareQuizWritingComponent } from './templates/previews/prepare/prepare-quiz-writing.component';
import { ToaPresentationComponent } from './templates/previews/teach-one-another/toa-presentation.component';
import { ToaCaseStudyComponent } from './templates/previews/teach-one-another/toa-case-study.component';
import { ToaFieldExperienceComponent } from './templates/previews/teach-one-another/toa-field-experience.component';
import { ToaGroupProblemSolvingComponent } from './templates/previews/teach-one-another/toa-group-problem-solving.component';
import { ToaGroupProjectComponent } from './templates/previews/teach-one-another/toa-group-project.component';
import { ToaIcebreakerComponent } from './templates/previews/teach-one-another/toa-icebreaker.component';
import { ToaInsightSharingComponent } from './templates/previews/teach-one-another/toa-insight-sharing.component';
import { ToaJigsawTeachingComponent } from './templates/previews/teach-one-another/toa-jigsaw-teaching.component';
import { ToaPeerAccountabilityComponent } from './templates/previews/teach-one-another/toa-peer-accountability.component';
import { ToaPeerFeedbackComponent } from './templates/previews/teach-one-another/toa-peer-feedback.component';
import { ToaQnaSupportForumComponent } from './templates/previews/teach-one-another/toa-qna-support-forum.component';
import { ToaRolePlayDiscussionComponent } from './templates/previews/teach-one-another/toa-role-play-discussion.component';
import { ToaStructuredDebateComponent } from './templates/previews/teach-one-another/toa-structured-debate.component';
import { ToaStudyGroupComponent } from './templates/previews/teach-one-another/toa-study-group.component';
import { ToaTopicDiscussionComponent } from './templates/previews/teach-one-another/toa-topic-discussion.component';
import { PonderProveUnansweredQuestionsComponent } from './templates/previews/ponder-prove/ponder-prove-unanswered-questions.component';
import { PonderProveQuizComponent } from './templates/previews/ponder-prove/ponder-prove-quiz.component';
import { PonderProveExamComponent } from './templates/previews/ponder-prove/ponder-prove-exam.component';
import { PonderPresentationComponent } from './templates/previews/ponder-prove/ponder-presentation.component';
import { PonderProveProjectComponent } from './templates/previews/ponder-prove/ponder-prove-project.component';
import { PonderProveEssayComponent } from './templates/previews/ponder-prove/ponder-prove-essay.component';
import { PonderProveWorksheetWorkbookComponent } from './templates/previews/ponder-prove/ponder-prove-worksheet-workbook.component';
import { PonderProvePortfolioComponent } from './templates/previews/ponder-prove/ponder-prove-portfolio.component';
import { PonderProveReflectiveWriteUpComponent } from './templates/previews/ponder-prove/ponder-prove-reflective-write-up.component';
import { PonderProveReportComponent } from './templates/previews/ponder-prove/ponder-prove-report.component';
import { ExerciseComponent } from './templates/previews/ponder-prove/exercise.component';
import { IntroductionComponent } from './templates/previews/generic/introduction.component';
import { PracticeComponent } from './templates/previews/prepare/practice.component';
import { StudyComponent } from './templates/previews/prepare/study.component';
import { TeachingNotesComponent } from './templates/previews/generic/teaching-notes.component';
import { PonderProveComponent } from './templates/previews/ponder-prove/ponder-prove.component';
import { PrepareComponent } from './templates/previews/prepare/prepare.component';
import { TeachOneAnotherComponent } from './templates/previews/teach-one-another/teach-one-another.component';
import { AccountabilityQuizComponent } from './templates/previews/ponder-prove/accountability-quiz.component';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { GenericActivityWrapperComponent } from './templates/previews/generic-activity-wrapper.component';
import { GenericContentWrapperComponent } from './templates/previews/generic-content-wrapper.component';
import { HomePageWrapperComponent } from './templates/previews/home-page-wrapper.component';
import { TeachingNotesWrapperComponent } from './templates/previews/teaching-notes-wrapper.component';
import { IntroductionWrapperComponent } from './templates/previews/introduction-wrapper.component';
import { ConceptMappingWrapperComponent } from './templates/previews/concept-mapping-wrapper.component';
import { InterviewWrapperComponent } from './templates/previews/interview-wrapper.component';
import { LearningContractWrapperComponent } from './templates/previews/learning-contract-wrapper.component';
import { NoteTakingWrapperComponent } from './templates/previews/note-taking-wrapper.component';
import { PracticeWrapperComponent } from './templates/previews/practice-wrapper.component';
import { PrepareWrapperComponent } from './templates/previews/prepare-wrapper.component';
import { PretestWrapperComponent } from './templates/previews/pretest-wrapper.component';
import { ProjectPlanWrapperComponent } from './templates/previews/project-plan-wrapper.component';
import { QuizWritingWrapperComponent } from './templates/previews/quiz-writing-wrapper.component';
import { ResearchWrapperComponent } from './templates/previews/research-wrapper.component';
import { SignUpWrapperComponent } from './templates/previews/sign-up-wrapper.component';
import { StudyWrapperComponent } from './templates/previews/study-wrapper.component';
import { CaseStudyWrapperComponent } from './templates/previews/case-study-wrapper.component';
import { FieldExperienceWrapperComponent } from './templates/previews/field-experience-wrapper.component';
import { GroupProblemSolvingWrapperComponent } from './templates/previews/group-problem-solving-wrapper.component';
import { GroupProjectWrapperComponent } from './templates/previews/group-project-wrapper.component';
import { IceBreakerWrapperComponent } from './templates/previews/ice-breaker-wrapper.component';
import { InsightSharingWrapperComponent } from './templates/previews/insight-sharing-wrapper.component';
import { JigsawTeachingWrapperComponent } from './templates/previews/jigsaw-teaching-wrapper.component';
import { PeerAccountabilityWrapperComponent } from './templates/previews/peer-accountability-wrapper.component';
import { PeerFeedbackWrapperComponent } from './templates/previews/peer-feedback-wrapper.component';
import { PresentationWrapperComponent } from './templates/previews/presentation-wrapper.component';
import { QnaSupportForumWrapperComponent } from './templates/previews/qna-support-forum-wrapper.component';
import { RolePlayWrapperComponent } from './templates/previews/role-play-wrapper.component';
import { StructuredDebateWrapperComponent } from './templates/previews/structured-debate-wrapper.component';
import { StudyGroupWrapperComponent } from './templates/previews/study-group-wrapper.component';
import { TeachOneAnotherWrapperComponent } from './templates/previews/teach-one-another-wrapper.component';
import { TopicDiscussionWrapperComponent } from './templates/previews/topic-discussion-wrapper.component';
import { AccountabilityQuizWrapperComponent } from './templates/previews/accountability-quiz-wrapper.component';
import { ExamWrapperComponent } from './templates/previews/exam-wrapper.component';
import { ExerciseWrapperComponent } from './templates/previews/exercise-wrapper.component';
import { PaperEssayWrapperComponent } from './templates/previews/paper-essay-wrapper.component';
import { PonderProveWrapperComponent } from './templates/previews/ponder-prove-wrapper.component';
import { PortfolioWrapperComponent } from './templates/previews/portfolio-wrapper.component';
import { PostTestWrapperComponent } from './templates/previews/post-test-wrapper.component';
import { ProjectWrapperComponent } from './templates/previews/project-wrapper.component';
import { QuizWrapperComponent } from './templates/previews/quiz-wrapper.component';
import { ReflectionWrapperComponent } from './templates/previews/reflection-wrapper.component';
import { ReportWrapperComponent } from './templates/previews/report-wrapper.component';
import { WorksheetWrapperComponent } from './templates/previews/worksheet-wrapper.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'page-templates', component: PageTemplatesComponent },
      { path: 'web-features', component: WebFeaturesComponent }
    ]),
    DynamicModule.withComponents([
      AccordionComponent,
      BannerComponent,
      ButtonComponent,
      CalloutComponent,
      ColumnsComponent,
      DefinitionComponent,
      DialogComponent,
      ImageComponent,
      VideoComponent,
      ImageCarouselComponent,
      PopoverComponent,
      TableComponent]),
    NgxPageScrollModule
  ],
  exports: [
    // WebFeaturesComponent
  ],
  declarations: [
    PageTemplatesComponent,
    WebFeaturesComponent,
    CapitalizePipe,
    RangePipe,
    GenericActivityComponent,
    GenericContentComponent,
    AccordionComponent,
    AccordionPreviewComponent,
    BannerComponent,
    ButtonComponent,
    CalloutComponent,
    ColumnsComponent,
    DefinitionComponent,
    DialogComponent,
    ImageComponent,
    VideoComponent,
    ImageCarouselComponent,
    PopoverComponent,
    TableComponent,
    BannerPreviewComponent,
    ButtonPreviewComponent,
    CalloutPreviewComponent,
    ColumnsPreviewComponent,
    DefinitionPreviewComponent,
    DialogPreviewComponent,
    ImagePreviewComponent,
    ImageCarouselPreviewComponent,
    PopoverPreviewComponent,
    TablePreviewComponent,
    VideoPreviewComponent,
    ContentBoxComponent,
    BannerImageComponent,
    FeatureWrapperComponent,
    OrgTemplateComponent,
    HomePageComponent,
    HomePagePreviewComponent,
    PrepareReadWatchListenComponent,
    PrepareRwlInstructionsComponent,
    PreparePreAssesmentComponent,
    PrepareInterviewComponent,
    PrepareConceptMatchingComponent,
    PrepareNoteTakingComponent,
    PrepareInfoGatheringComponent,
    PrepareScholarlyResearchComponent,
    PrepareLearningContractComponent,
    PrepareProjectPlanComponent,
    PrepareSignUpComponent,
    PrepareQuizWritingComponent,
    ToaPresentationComponent,
    ToaCaseStudyComponent,
    ToaFieldExperienceComponent,
    ToaGroupProblemSolvingComponent,
    ToaGroupProjectComponent,
    ToaIcebreakerComponent,
    ToaInsightSharingComponent,
    ToaJigsawTeachingComponent,
    ToaPeerAccountabilityComponent,
    ToaPeerFeedbackComponent,
    ToaQnaSupportForumComponent,
    ToaRolePlayDiscussionComponent,
    ToaStructuredDebateComponent,
    ToaStudyGroupComponent,
    ToaTopicDiscussionComponent,
    PonderProveUnansweredQuestionsComponent,
    PonderProveQuizComponent,
    PonderProveExamComponent,
    PonderPresentationComponent,
    PonderProveProjectComponent,
    PonderProveEssayComponent,
    PonderProveWorksheetWorkbookComponent,
    PonderProvePortfolioComponent,
    PonderProveReflectiveWriteUpComponent,
    PonderProveReportComponent,
    ExerciseComponent,
    IntroductionComponent,
    PracticeComponent,
    StudyComponent,
    TeachingNotesComponent,
    PonderProveComponent,
    PrepareComponent,
    TeachOneAnotherComponent,
    AccountabilityQuizComponent,
    GenericActivityWrapperComponent,
    GenericContentWrapperComponent,
    HomePageWrapperComponent,
    TeachingNotesWrapperComponent,
    IntroductionWrapperComponent,
    ConceptMappingWrapperComponent,
    InterviewWrapperComponent,
    LearningContractWrapperComponent,
    NoteTakingWrapperComponent,
    PracticeWrapperComponent,
    PrepareWrapperComponent,
    PretestWrapperComponent,
    ProjectPlanWrapperComponent,
    QuizWritingWrapperComponent,
    ResearchWrapperComponent,
    SignUpWrapperComponent,
    StudyWrapperComponent,
    CaseStudyWrapperComponent,
    FieldExperienceWrapperComponent,
    GroupProblemSolvingWrapperComponent,
    GroupProjectWrapperComponent,
    IceBreakerWrapperComponent,
    InsightSharingWrapperComponent,
    JigsawTeachingWrapperComponent,
    PeerAccountabilityWrapperComponent,
    PeerFeedbackWrapperComponent,
    PresentationWrapperComponent,
    QnaSupportForumWrapperComponent,
    RolePlayWrapperComponent,
    StructuredDebateWrapperComponent,
    StudyGroupWrapperComponent,
    TeachOneAnotherWrapperComponent,
    TopicDiscussionWrapperComponent,
    AccountabilityQuizWrapperComponent,
    ExamWrapperComponent,
    ExerciseWrapperComponent,
    PaperEssayWrapperComponent,
    PonderProveWrapperComponent,
    PortfolioWrapperComponent,
    PostTestWrapperComponent,
    ProjectWrapperComponent,
    QuizWrapperComponent,
    ReflectionWrapperComponent,
    ReportWrapperComponent,
    WorksheetWrapperComponent
  ],
  providers: [
    LtiParamsService
  ],
  entryComponents: [
    AccordionComponent,
    BannerComponent,
    ButtonComponent,
    CalloutComponent,
    ColumnsComponent,
    DefinitionComponent,
    DialogComponent,
    ImageComponent,
    VideoComponent,
    ImageCarouselComponent,
    PopoverComponent,
    TableComponent
  ]
})
export class FeaturesModule { }
