import { Component } from '@angular/core';

@Component({
  selector: 'dylan-almaguer-root',
  templateUrl: './dylan_almaguer.component.html',
  // Usa styles.css global → no necesitas css local
})
export class DylanAlmaguerComponent {
  name = 'Dylan Damian Almaguer Acuña';
  specialty = 'Desarrollo de Software';
  interests = ['Cocinar', 'Escuchar música'];
}
