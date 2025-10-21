import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app';
import { ContentSectionComponent } from './content-section/content-section';
import { ImageSectionComponent } from './image-section/image-section';
import { VideoBackgroundComponent } from './video-background/video-background';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    ContentSectionComponent,
    ImageSectionComponent,
    VideoBackgroundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
