import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-page-templates',
  templateUrl: './page-templates.component.html',
  styleUrls: ['./page-templates.component.css']
})
export class PageTemplatesComponent implements OnInit {
  selectedTemplate = 'genericActivity';
  templates: string[] = ['genericActivity', 'genericQuiz'];

  constructor() { }

  ngOnInit() {
  }

  updateTemplate(value: string) {
    this.selectedTemplate = value;
    console.log(this.selectedTemplate);
  }

}
