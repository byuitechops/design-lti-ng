import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CapitalizePipe } from '../shared/capitalize.pipe';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-web-features',
  templateUrl: './web-features.component.html',
  styleUrls: ['./web-features.component.css'],
})
export class WebFeaturesComponent implements OnInit {

  private fragment: string;
  makePrimary = false;
  positions: string[] = ['left', 'center', 'right'];
  sizes: string[] = ['full', 'half', 'quarter'];
  calloutPosition = 'right';
  calloutSize = 'quarter';
  calloutChecked = false;
  columnNumbers: number[] = [1, 2, 3];
  numberOfColumns = 1;
  dialogPrompt: string;
  dialogTitle: string;
  dialogContent: string;
  imageSize = 'quarter';
  imagePosition = 'right';
  imageClearfix = false;
  imageSource: string;
  slideCount = 0;
  slideSource: string[] = [];
  slideAlt: string[] = [];
  tableStriped = false;

  _accordionHeading: string;
  get accordionHeading(): string {
    return this._accordionHeading;
  }
  set accordionHeading(value: string) {
    this._accordionHeading = value;
  }

  _accordionContent: string;
  get accordionContent(): string {
    return this._accordionContent;
  }
  set accordionContent(value: string) {
    this._accordionContent = value;
  }

  _buttonText: string;
  get buttonText(): string {
    return this._buttonText;
  }
  set buttonText(value: string) {
    this._buttonText = value;
  }

  _calloutText: string;
  get calloutText(): string {
    return this._calloutText;
  }
  set calloutText(value: string) {
    this._calloutText = value;
  }

  _imageCaption: string;
  get imageCaption(): string {
    return this._imageCaption;
  }
  set imageCaption(value: string) {
    this._imageCaption = value;
  }

  _imageAlt: string;
  get imageAlt(): string {
    return this._imageAlt;
  }
  set imageAlt(value: string) {
    this._imageAlt = value;
  }

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

  constructor(private route: ActivatedRoute) {  }

  changeCalloutPosition(value: string): void {
    this.calloutPosition = value;
  }

  changeCalloutSize(value: string): void {
    this.calloutSize = value;
  }

  changeImagePosition(value: string): void {
    this.imagePosition = value;
  }

  changeImageSize(value: string): void {
    this.imageSize = value;
  }

  changeNumberOfColumns(value: number): void {
    this.numberOfColumns = value;
  }

  updateImageSource(value: string): void {
    this.imageSource = value;
  }

  updateSlideCount(value: number): void {
    if (value <= 0) {
      this.slideCount = 0;
    } else {
      this.slideCount = value;
    }
    this.slideSource.length = this.slideCount;
    this.slideAlt.length = this.slideCount;
  }

  updateSlide(value: string, index: number): void {
    this.slideSource[index] = value;
  }

  updateSlideAlt(value: string, index: number): void {
    this.slideAlt[index] = value;
  }

  array(value: string): any[] {
    const num = Number(value);
    return Array.from(Array(num).keys());
  }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit(): void {
    try {
      document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) { }
  }
}
