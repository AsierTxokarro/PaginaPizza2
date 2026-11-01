import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PedidoService } from '../services/pedido-service';

@Component({
  imports: [RouterLink],
  selector: 'app-formulario-pedido',
  styleUrl: './formulario-pedido.scss',
  templateUrl: './formulario-pedido.html',
})
export class FormularioPedido {
  pedidoService = inject(PedidoService);
  
}
