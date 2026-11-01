import { Injectable } from '@angular/core';
import { pizzaPedido } from './pizzaPedido';
import { pizza } from '../card-pizza/pizza';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
 pedido : pizzaPedido[] = [];

 anadirPizza(pizza: pizza) {
  const pizzaEncontrada = this.pedido.find(
    elemento => elemento.pizza.id === pizza.id
  );

  if (pizzaEncontrada) {
    pizzaEncontrada.cantidad++;
  } else {
    this.pedido.push({
      pizza: pizza,
      cantidad: 1
    });
  }
}

quitarPizza(pizza: pizza){
     const pizzaEncontrada = this.pedido.find(
    elemento => elemento.pizza.id === pizza.id
  );
  if (pizzaEncontrada){
    if(pizzaEncontrada.cantidad > 1){
        pizzaEncontrada.cantidad--;
    } else{
       const indice = this.pedido.indexOf(pizzaEncontrada);
       this.pedido.splice(indice, 1);
    }
  }
}
obtenerCantidad(pizza:pizza){
  const pizzaEncontrada = this.pedido.find(
    elemento => elemento.pizza.id === pizza.id
  );
  return pizzaEncontrada ? pizzaEncontrada.cantidad : 0;
}
}
