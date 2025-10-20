import { Routes } from '@angular/router';
import { ContentSectionComponent } from './content-section/content-section';
import { ImageSectionComponent } from './image-section/image-section';
import { VideoBackgroundComponent } from './video-background/video-background';

export const routes: Routes = [
	{ path: '', component: ContentSectionComponent },
	{ path: 'imagen', component: ImageSectionComponent },
	{ path: 'video', component: VideoBackgroundComponent }
];
