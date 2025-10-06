// src/app/app.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PerfilCard } from './perfil-card/perfil-card'; // sin .component

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PerfilCard], // PerfilCard debe estar aquí
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  title = 'app-angular';
}
