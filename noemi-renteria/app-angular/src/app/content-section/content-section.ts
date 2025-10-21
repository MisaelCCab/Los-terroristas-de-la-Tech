import { Component } from '@angular/core';

@Component({
  selector: 'app-content-section',
  standalone: true,
  templateUrl: './content-section.html',
  styleUrls: ['./content-section.scss']
})
export class ContentSectionComponent {
  nombre = 'Adaia Renteria';
  especialidad = 'Desarrollo de Software Area Multiplataforma';
  pasion = 'Me gusta escuchar música';
}

