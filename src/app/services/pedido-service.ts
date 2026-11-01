import { Injectable, signal } from '@angular/core';
import { pizzaPedido } from './pizzaPedido';
import { pizza } from '../card-pizza/pizza';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
 pedido = signal<pizzaPedido[]>([]);

anadirPizza(pizza: pizza) {
  this.pedido.update(pedidoActual => {
    const pizzaEncontrada = pedidoActual.find(
      elemento => elemento.pizza.id === pizza.id
    );

    if (pizzaEncontrada) {
      return pedidoActual.map(elemento =>
        elemento.pizza.id === pizza.id
          ? { ...elemento, cantidad: elemento.cantidad + 1 }
          : elemento
      );
    } else {
      return [...pedidoActual, {
        pizza: pizza,
        cantidad: 1
      }];
    }
  });
}

quitarPizza(pizza: pizza) {
  this.pedido.update(pedidoActual => {
    const pizzaEncontrada = pedidoActual.find(
      elemento => elemento.pizza.id === pizza.id
    );

    if (!pizzaEncontrada) {
      return pedidoActual;
    }

    if (pizzaEncontrada.cantidad > 1) {
      return pedidoActual.map(elemento =>
        elemento.pizza.id === pizza.id
          ? { ...elemento, cantidad: elemento.cantidad - 1 }
          : elemento
      );
    }

    return pedidoActual.filter(
      elemento => elemento.pizza.id !== pizza.id
    );
  });
}
obtenerCantidad(pizza: pizza) {
  const pizzaEncontrada = this.pedido().find(
    elemento => elemento.pizza.id === pizza.id
  );

  return pizzaEncontrada ? pizzaEncontrada.cantidad : 0;
}
}
