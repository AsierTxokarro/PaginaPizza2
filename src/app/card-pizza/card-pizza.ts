import { Component, inject, input } from '@angular/core';
import { pizza } from './pizza';
import { PedidoService } from '../services/pedido-service';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-card-pizza',
  styleUrl: './card-pizza.scss',
  templateUrl: './card-pizza.html',
})
export class CardPizza {
  pizza = input.required<pizza>();
  private pedidoService = inject(PedidoService);
  private router = inject(Router)

  anadir(){
    this.pedidoService.anadirPizza(this.pizza());
  }
  quitar(){
    this.pedidoService.quitarPizza(this.pizza());
  }
  cantidad(){
     return this.pedidoService.obtenerCantidad(this.pizza());
  }
  pedir(){
     this.router.navigate(['/formulario-pedido.html']);
  }
}
