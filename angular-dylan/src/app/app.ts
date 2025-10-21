import { Component, signal } from '@angular/core';

@Component({
  selector: 'dylan-almaguer-root',
  templateUrl: './dylan_almaguer.component.html',
  // Usa styles.css global → no necesitas app.component.css
  // Si tienes app.component.css, descomenta esta línea:
  // styleUrls: ['./app.component.css']
})
export class App {
  protected readonly title = signal('Dylan Almaguer');
}
export class AppComponent {
  name = 'Dylan Damian Almaguer Acuña';
  specialty = 'Desarrollo de Software';
  interests = ['Cocinar', 'Escuchar música'];
}
