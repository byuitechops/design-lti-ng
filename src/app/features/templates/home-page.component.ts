import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styles: []
})
export class HomePageComponent implements OnInit {

  @Input() courseName: string;
  @Input() courseId: string;
  @Input() courseClass: string;

  constructor() { }

  ngOnInit() {
  }

}
