import { Component } from '@angular/core';
import { pizza } from '../card-pizza/pizza';
import { CardPizza } from '../card-pizza/card-pizza';
import { Navbar } from '../navbar/navbar';
import { Header } from '../header/header';

@Component({
  imports: [CardPizza, Navbar, Header],
  selector: 'app-lista-pizzas',
  styleUrl: './lista-pizzas.scss',
  templateUrl: './lista-pizzas.html',
})
export class ListaPizzas {
  listaPizzas : pizza[] = [
    {
      id: 1,
      name: 'Margarita',
      price: 15,
      img: '/img/pizza-margarita.jpeg',
      ingridients: ['tomate', 'mozzarela', 'albahaca fresca', 'aceite']
    },
    {
       id: 2,
      name: 'Carbonara',
      price: 18,
      img: '/img/carbonara.avif',
      ingridients: ['salsa Carbonara', 'mozzarela', 'Champiñones', 'Jamon']
    },
    {
       id: 3,
      name: 'Marinara',
      price: 12,
      img: '/img/marinara.jpg',
      ingridients: ['tomate', 'Ajo', 'Aceite', 'Albahaca fresca']
    },
    {
       id: 4,
      name: 'Hawaiana',
      price: 16,
      img: '/img/hawaiana.jpg',
      ingridients: ['tomate', 'mozzarela', 'jamon', 'piña']
    }
  ]
  pizzasFiltradas = [...this.listaPizzas]; //operador de propagacion para crear una nueva lista con el contenido de la otra
 
  filtrarPizzas(ingrediente: string) {
  this.pizzasFiltradas = this.listaPizzas.filter(pizza =>
    pizza.ingridients.some(ing =>
      ing.toLowerCase().includes(ingrediente.toLowerCase())
    )
  );
}
}
