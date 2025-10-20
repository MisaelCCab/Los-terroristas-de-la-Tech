import { Component } from '@angular/core';

@Component({
  selector: 'app-video-background',
  standalone: true,
  templateUrl: './video-background.html',
  styleUrls: ['./video-background.scss']
})
export class VideoBackgroundComponent {
  videoSrc = 'videos/MINE.mp4';
}
