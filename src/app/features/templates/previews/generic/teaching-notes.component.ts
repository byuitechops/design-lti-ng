import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-teaching-notes',
  templateUrl: './teaching-notes.component.html',
  styles: []
})
export class TeachingNotesComponent implements OnInit {

  @Input() courseClass: string;

  constructor(private elementRef: ElementRef) { }

  getHtmlContent() {
    return this.elementRef.nativeElement.innerHTML;
  }

  ngOnInit() {
  }
}
