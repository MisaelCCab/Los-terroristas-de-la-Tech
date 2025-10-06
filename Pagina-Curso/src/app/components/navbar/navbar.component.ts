import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,      // <- aquí
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'] 
})
export class NavbarComponent { }
