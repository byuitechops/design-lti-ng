import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { PopoverPreviewComponent } from './previews/popover-preview.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styles: []
})
export class PopoverComponent implements OnInit {


  @Output() select: EventEmitter<string> = new EventEmitter();
  @ViewChild(PopoverPreviewComponent) preview: PopoverPreviewComponent;

  _popoverBaseText: string;
  get popoverBaseText(): string {
    return this._popoverBaseText;
  }
  set popoverBaseText(value: string) {
    this._popoverBaseText = value;
  }

  _popoverText: string;
  get popoverText(): string {
    return this._popoverText;
  }
  set popoverText(value: string) {
    this._popoverText = value;
  }

  constructor() { }

  chooseFeature() {
    const html = this.preview.getHtmlContent().trim();
    console.log(html);
    this.select.emit(html);
  }

  ngOnInit() {
  }

}
