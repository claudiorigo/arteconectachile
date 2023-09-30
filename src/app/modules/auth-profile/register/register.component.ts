import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: any = null;
  surname: any = null;
  email: any = null;
  password: any = null;
  password_confirmation: any = null;

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit(): void {

    if (this.authService.user && this.authService.token) {
      this.router.navigate(['/']);      
    }
  }

  registro(){

    if (!this.name || !this.surname || !this.email || !this.password || !this.password_confirmation) {
      alert('Los campos son obligatorios');
      return;
    }

    if (this.password != this.password_confirmation) {
      alert('el password no coincide');
      return;
    }

    let data = {
      name: this.name,
      surname: this.surname,
      email: this.email,
      password: this.password,
      password_confirmation: this.password_confirmation,
      type_user: 1,
    };

    this.authService.registro(data).subscribe((resp:any) => {
      //console.log(resp);
      this.router.navigate(['auth/login']);
    });
  }
}
