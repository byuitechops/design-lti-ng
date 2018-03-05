import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion-preview',
  template: `
            <h3>{{ accordionHeading ? accordionHeading : "Heading" }}</h3>
            <div>
                <p>{{ accordionContent ? accordionContent : "Content" }}</p>
            </div>
  `,
  styles: []
})
export class AccordionPreviewComponent implements OnInit {

  @Input() accordionHeading: string;
  @Input() accordionContent: string;

  constructor() { }

  ngOnInit() {
  }

}
