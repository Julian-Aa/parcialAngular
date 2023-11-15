import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/auth/auth-service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private AuthService: AuthServiceService) {}
  userName: string = this.AuthService.getUser().nombre;

  ngOnInit(): void {
    this.showWelcomeMessage();
  }

  showWelcomeMessage(): void {
    Swal.fire({
      title: `¡Bienvenido, ${this.userName}!`,
      text: '¿Qué deseas hacer?',
      icon: 'success',
      showCancelButton: true,
      confirmButtonText: 'Crear Usuario',
      cancelButtonText: 'Crear Producto',
    }).then((result) => {
      if (result.isConfirmed) {
        this.createUser();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        this.createProduct();
      }
    });
  }

  createUser(): void {
    Swal.fire('Crear Usuario', 'Funcionalidad de crear usuario', 'info');
  }

  createProduct(): void {
    Swal.fire('Crear Producto', 'Funcionalidad de crear producto', 'info');
  }
}
