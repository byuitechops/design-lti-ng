import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styles: []
})
export class VideoComponent implements OnInit {

  url: string;
  title: string;
  startTime: string;
  endTime: string;

  noAudio = false;
  htmlTranscript: string;
  rtfTranscript: string;

  type: string = 'kaltura';
  size: string = 'medium';
  aspect: string = '16-9';

  link: boolean = false;
  download: boolean = false;
  height: number;
  width: number;
  
  embedcode = '<div class="byui-video" data-id"';
  output: string;
  videoid: string;
  
  constructor() { }

  ngOnInit() {
  }
  
  updateType(type: string) {
    this.type = type;
  }

  updateSize(size: string) {
    this.size = size;
  }

  updateAspectRatio(aspect: string) {
    this.aspect = aspect;
  }

  test() {
    console.log(this.url);
    console.log(this.title);
    console.log(this.startTime);
    console.log(this.endTime);
    console.log(this.type);
    console.log(this.size);
    console.log(this.aspect);
    console.log(this.link);
    console.log(this.download);
  }

}
