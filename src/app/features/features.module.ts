import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PageTemplatesComponent } from './page-templates.component';
import { WebFeaturesComponent } from './web-features.component';
import { CapitalizePipe } from '../shared/capitalize.pipe';
import { RangePipe } from '../shared/range.pipe';
import { GenericActivityComponent } from './templates/previews/generic-activity.component';
import { GenericQuizComponent } from './templates/previews/generic-quiz.component';
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
import { ContentBoxComponent } from './web-features/content-box.component';
import { BannerImageComponent } from './web-features/banner-image.component';
import { FeatureWrapperComponent } from './feature-wrapper.component';
import { DynamicModule } from 'ng-dynamic-component';
import { OrgTemplateComponent } from './templates/org-template.component';
import { HomePageComponent } from './templates/home-page.component';
import { HomePagePreviewComponent } from './templates/previews/home-page-preview.component';
import { PrepareReadWatchListenComponent } from './templates/previews/prepare-rwl.component';
import { PrepareRwlInstructionsComponent } from './templates/previews/prepare-rwl-instructions.component';
import { PreparePreAssesmentComponent } from './templates/previews/prepare-pre-assesment.component';
import { PrepareInterviewComponent } from './templates/previews/prepare-interview.component';
import { PrepareConceptMatchingComponent } from './templates/previews/prepare-concept-matching.component';
import { PrepareNoteTakingComponent } from './templates/previews/prepare-note-taking.component';
import { PrepareInfoGatheringComponent } from './templates/previews/prepare-info-gathering.component';
import { PrepareScholarlyResearchComponent } from './templates/previews/prepare-scholarly-research.component';
import { PrepareLearningContractComponent } from './templates/previews/prepare-learning-contract.component';
import { PrepareProjectPlanComponent } from './templates/previews/prepare-project-plan.component';
import { PrepareSignUpComponent } from './templates/previews/prepare-sign-up.component';
import { PrepareQuizWritingComponent } from './templates/previews/prepare-quiz-writing.component';
import { ToaPresentationComponent } from './templates/previews/toa-presentation.component';
import { ToaCaseStudyComponent } from './templates/previews/toa-case-study.component';
import { ToaFieldExperienceComponent } from './templates/previews/toa-field-experience.component';
import { ToaGroupProblemSolvingComponent } from './templates/previews/toa-group-problem-solving.component';
import { ToaGroupProjectComponent } from './templates/previews/toa-group-project.component';
import { ToaIcebreakerComponent } from './templates/previews/toa-icebreaker.component';
import { ToaInsightSharingComponent } from './templates/previews/toa-insight-sharing.component';
import { ToaJigsawTeachingComponent } from './templates/previews/toa-jigsaw-teaching.component';
import { ToaPeerAccountabilityComponent } from './templates/previews/toa-peer-accountability.component';
import { ToaPeerFeedbackComponent } from './templates/previews/toa-peer-feedback.component';
import { ToaQnaSupportForumComponent } from './templates/previews/toa-qna-support-forum.component';
import { ToaRolePlayDiscussionComponent } from './templates/previews/toa-role-play-discussion.component';
import { ToaStructuredDebateComponent } from './templates/previews/toa-structured-debate.component';
import { ToaStudyGroupComponent } from './templates/previews/toa-study-group.component';
import { ToaTopicDiscussionComponent } from './templates/previews/toa-topic-discussion.component';
import { PonderProveUnansweredQuestionsComponent } from './templates/previews/ponder-prove-unanswered-questions.component';
import { PonderProveQuizComponent } from './templates/previews/ponder-prove-quiz.component';
import { PonderProveExamComponent } from './templates/previews/ponder-prove-exam.component';
import { PonderPresentationComponent } from './templates/previews/ponder-presentation.component';
import { PonderProveProjectComponent } from './templates/previews/ponder-prove-project.component';
import { PonderProveEssayComponent } from './templates/previews/ponder-prove-essay.component';
import { PonderProveWorksheetWorkbookComponent } from './templates/previews/ponder-prove-worksheet-workbook.component';
import { PonderProvePortfolioComponent } from './templates/previews/ponder-prove-portfolio.component';
import { PonderProveReflectiveWriteUpComponent } from './templates/previews/ponder-prove-reflective-write-up.component';


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
      TableComponent])
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
    GenericQuizComponent,
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
    PonderProveReflectiveWriteUpComponent
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
