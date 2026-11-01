import { Component, output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-navbar',
  styleUrl: './navbar.scss',
  templateUrl: './navbar.html',
})
export class Navbar {
  listaFiltrada = output<string>();

  buscarIngrediente(ingrediente: string) {
  this.listaFiltrada.emit(ingrediente);
}
}
