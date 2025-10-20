import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VideoBackgroundComponent } from './video-background/video-background';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, VideoBackgroundComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  protected readonly title = signal('app-angular');
}
