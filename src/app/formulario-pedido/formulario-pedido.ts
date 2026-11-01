import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
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

  private router = inject(Router);
  pedidoService = inject(PedidoService);

  metodoPago = signal("");

  numeroTarjeta = signal("");
  bizum = signal("");
  horaEntrega = signal("");
  direccion = signal("");
  
  validarTarjeta(): boolean {
  return /^\d{16}$/.test(this.numeroTarjeta());
}
  validarBizum(): boolean {
    return /^\d{9}$/.test(this.bizum());
  }

  validarFormulario(): boolean {
  if (!this.horaEntrega()) return false;

  if (this.direccion().trim() === '') return false;

  if (this.metodoPago() === '') return false;

  if (this.metodoPago() === 'tarjeta' && !this.validarTarjeta()) {
    return false;
  }

  if (this.metodoPago() === 'bizum' && !this.validarBizum()) {
    return false;
  }

  return true;
}
pagar(){
  if(!this.validarFormulario()){
    alert("Debes introducir datos correctos antes de realizar el pedido");
    return
  }

  alert("Le agredecemos la confianza! Su pedido esta preparandose")
  this.pedidoService.pedido.set([]);
}

borrar(){
  this.router.navigate(['/']);
}

}
