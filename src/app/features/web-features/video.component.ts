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
  iframeCode: string;
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
        this.convertYoutube();
        break;
      case 'kaltura':
        this.convertKaltura();
        break;
      default:
        break;
    }

    this.embedcode += this.iframeCode + ' </div>';
    this.output = this.embedcode;
    console.log(this.output);
  }

  convertYoutube() {
    this.videoid = this.url.split('v=').pop();
    this.makeEmbedCode();
    if (this.link) {
      this.iframeCode = '<a href=\'https://www.youtube.com/watch?v='
                      + this.videoid + '\' >'
                      + this.title + '</a> (<a href=\''
                      + this.htmlTranscript + '\'>HTML Transcript</a>, <a href=\''
                      + this.rtfTranscript + '\'>RTF Transcript</a>)';
    } else {
      this.getHeightWidth();
      this.iframeCode = '<iframe width='
                      + this.width + ' height='
                      + this.height + ' src=\'https://www.youtube.com/embed/'
                      + this.videoid + '\' frameborder=\'0 \' allowfullscreen></iframe><p>(<a href=\''
                      + this.htmlTranscript + '\'>HTML Transcript</a>, <a href=\''
                      + this.rtfTranscript + '\'>RTF Transcript</a>)</p>';
    }
  }

  convertKaltura() {
    this.videoid = this.url.split('/').pop();
    this.makeEmbedCode();
    if (this.link) {
      this.iframeCode = '<a href=\'https://video.byui.edu/media/'
                      + this.videoid + '\' >'
                      + this.title + '</a> (<a href=\''
                      + this.htmlTranscript + '\'>HTML Transcript</a>, <a href=\''
                      + this.rtfTranscript + '\'>RTF Transcript</a>)';
    } else {
      this.getHeightWidth();
      this.iframeCode = '<iframe width='
                      + this.width + ' height='
                      // tslint:disable-next-line:max-line-length
                      + this.height + ' src=\'https://cdnapisec.kaltura.com/p/1157612/sp/115761200/embedIframeJs/uiconf_id/29018071/partner_id/1157612?iframeembed=true&amp;playerId=kaltura_player_1485805514&amp;entry_id='
                      + this.videoid + '&amp;flashvars[streamerType]=auto\' frameborder=\'0 \' allowfullscreen=\'\'></iframe><p>(<a href=\''
                      + this.htmlTranscript + '\'>HTML Transcript</a>, <a href=\''
                      + this.rtfTranscript + '\'>RTF Transcript</a>)</p>';
    }
  }

  getHeightWidth() {
    switch (this.aspect) {
      case '16-9':
          switch (this.size) {
              case 'sm':
                  this.height = 180;
                  this.width = 320;
                  break;
              case 'med':
                  this.height = 270;
                  this.width = 480;
                  break;
              case 'lg':
                  this.height = 360;
                  this.width = 640;
                  break;
              default:
                  break;
          }
          break;
      case '4-3':
          switch (this.size) {
              case 'sm':
                  this.height = 240;
                  this.width = 320;
                  break;
              case 'med':
                  this.height = 360;
                  this.width = 480;
                  break;
              case 'lg':
                  this.height = 480;
                  this.width = 640;
                  break;
              default:
                  break;
          }
          break;
    }
  }

  makeEmbedCode() {
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

  reverseParse() {

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
