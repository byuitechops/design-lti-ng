import { Component, OnInit, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-prepare-rwl-instructions',
  templateUrl: './prepare-rwl-instructions.component.html',
  styles: []
})
export class PrepareRwlInstructionsComponent implements OnInit {

  @Input() courseClass: string;

  constructor(private elementRef: ElementRef) { }

  getHtmlContent() {
    return this.elementRef.nativeElement.innerHTML;
  }

  ngOnInit() {
  }
}
