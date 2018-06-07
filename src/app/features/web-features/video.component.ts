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
  htmlTranscript = 'https://content.byui.edu/file/f0e0353b-0473-4808-9cfb-6ca04d0b0020/1/no-transcript.html';
  rtfTranscript = 'https://content.byui.edu/file/f0e0353b-0473-4808-9cfb-6ca04d0b0020/1/no-transcript.html';

  type = 'kaltura';
  size = 'medium';
  aspect = '16-9';

  link = false;
  download = false;
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

  updateTranscripts() {
    this.noAudio = !this.noAudio;
    if (this.noAudio) {
      this.htmlTranscript = 'https://content.byui.edu/file/f0e0353b-0473-4808-9cfb-6ca04d0b0020/1/no-audio.html';
      this.rtfTranscript = 'https://content.byui.edu/file/f0e0353b-0473-4808-9cfb-6ca04d0b0020/1/no-audio.html';
    } else {
      this.htmlTranscript = 'https://content.byui.edu/file/f0e0353b-0473-4808-9cfb-6ca04d0b0020/1/no-transcript.html';
      this.rtfTranscript = 'https://content.byui.edu/file/f0e0353b-0473-4808-9cfb-6ca04d0b0020/1/no-transcript.html';
    }
  }

  convert() {
    switch (this.type) {
      case 'youtube':
          this.videoid = this.url.split('v=').pop();
          break;
      case 'kaltura':
          this.videoid = this.url.split('/').pop();
          break;
      default:
          break;
    }

    this.embedcode += this.videoid + '" data-platform="'
                   + this.type + '" data-size="'
                   + this.size + '" data-ratio="'
                   + this.aspect + '" data-transcriptHTML="'
                   + this.htmlTranscript + '" data-transcriptRTF="'
                   + this.rtfTranscript + '" data-link="'
                   + this.link + '" data-download="'
                   + this.download + '" data-title="'
                   + this.title + '" data-starttime="'
                   + this.startTime + '" data-endtime="'
                   + this.endTime + '">"';
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
