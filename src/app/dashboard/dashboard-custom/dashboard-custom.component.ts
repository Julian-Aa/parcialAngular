import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/auth/auth-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard-custom',
  templateUrl: './dashboard-custom.component.html',
  styleUrls: ['./dashboard-custom.component.css'],
})
export class DashboardCustomComponent implements OnInit {
  constructor(private AuthService: AuthServiceService) {}

  userName: string = this.AuthService.getUserC().nombre;

  ngOnInit(): void {
    this.showWelcomeMessage();
  }
  showWelcomeMessage(): void {
    Swal.fire({
      title: `¡Bienvenido, ${this.userName}!`,
      icon: 'success',
      showCancelButton: true,
    }).then((result) => {});
  }
}
