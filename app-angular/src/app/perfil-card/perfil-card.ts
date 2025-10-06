// src/app/perfil-card/perfil-card.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil-card',   // <- usar este selector
  standalone: true,
  templateUrl: './perfil-card.html',
  styleUrls: ['./perfil-card.scss']
})
export class PerfilCard {
  nombre = 'Mairene';
  puesto = 'Entornos virtuales';
  // agrega aquí más propiedades o métodos si los necesitas
}
