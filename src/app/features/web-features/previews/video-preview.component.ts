import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-preview',
  templateUrl: './video-preview.component.html',
  styles: []
})
export class VideoPreviewComponent implements OnInit {

  @Input() videoid = 'Y7DlpSTSYzY';
  @Input() type = 'youtube';
  @Input() size = 'medium';
  @Input() aspect = '16-9';
  @Input() htmlTranscript = 'https://content.byui.edu/file/f0e0353b-0473-4808-9cfb-6ca04d0b0020/1/no-transcript.html';
  @Input() rtfTranscript = 'https://content.byui.edu/file/f0e0353b-0473-4808-9cfb-6ca04d0b0020/1/no-transcript.html';
  @Input() link = false;
  @Input() download = false;
  @Input() title = 'RIP Argentina';
  @Input() startTime = 'undefined';
  @Input() endTime = 'undefined';
  @Input() videoUrl = 'https://www.youtube.com/embed/Y7DlpSTSYzY';

  @Input() width = '640';
  @Input() height = '320';

  kalturaTest = 'https://cdnapisec.kaltura.com/p/1157612/sp/115761200/embedIframeJs/uiconf_id/29018071/partner_id/1157612?iframeembed=true&amp;playerId=kaltura_player_1485805514&amp;entry_id=0_jagdrr11&amp;flashvars[streamerType]=auto';

  constructor() { }

  ngOnInit() {
  }

  test() {
    console.log("url: ", this.videoUrl);
    console.log("height: ", this.height);
    console.log("width: ", this.width);
  }

}
