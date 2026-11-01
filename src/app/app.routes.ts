import { Routes } from '@angular/router';
import { ListaPizzas } from './lista-pizzas/lista-pizzas';
import { FormularioPedido } from './formulario-pedido/formulario-pedido';

export const routes: Routes = [
    {path: '', component: ListaPizzas},
    {path: 'formulario-pedido.html', component: FormularioPedido}
];
