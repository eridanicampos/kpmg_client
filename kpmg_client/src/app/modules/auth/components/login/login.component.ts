import { Component } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) { }

  onLogin() {
    this.authService.login(this.email, this.password).subscribe(response => {
      // Armazene o token e redirecione
      localStorage.setItem('token', response.token);
      console.log('Login bem-sucedido', response);
    });
  }
}
