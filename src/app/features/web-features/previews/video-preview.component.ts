import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-preview',
  templateUrl: './video-preview.component.html',
  styles: []
})
export class VideoPreviewComponent implements OnInit {

  videoid = "Y7DlpSTSYzY";
  type = "youtube";
  size = "medium";
  aspect = "16-9";

  htmlTranscript = "https://content.byui.edu/file/f0e0353b-0473-4808-9cfb-6ca04d0b0020/1/no-transcript.html";
  rtfTranscript = "https://content.byui.edu/file/f0e0353b-0473-4808-9cfb-6ca04d0b0020/1/no-transcript.html";
  
  link = false;
  download = false;
  title = "RIP Argentina";
  startTime = "undefined";
  endTime = "undefined";

  width = "640";
  height = "320";
  videoUrl = "https://www.youtube.com/embed/Y7DlpSTSYzY";

  constructor() { }

  ngOnInit() {
  }

}
