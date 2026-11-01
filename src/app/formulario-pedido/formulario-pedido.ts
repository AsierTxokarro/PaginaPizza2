import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PedidoService } from '../services/pedido-service';
import { form } from '@angular/forms/signals';
import { FormsModule } from '@angular/forms';


@Component({
  imports: [RouterLink, FormsModule],
  selector: 'app-formulario-pedido',
  styleUrl: './formulario-pedido.scss',
  templateUrl: './formulario-pedido.html',
})
export class FormularioPedido {
  pedidoService = inject(PedidoService);

  metodoPago = signal("");

  numeroTarjeta = signal("");
  bizum = signal("");
  
  validarTarjeta(): boolean {
  return /^\d{16}$/.test(this.numeroTarjeta());
}
  validarBizum(): boolean {
    return /^\d{9}$/.test(this.bizum());
  }

}
