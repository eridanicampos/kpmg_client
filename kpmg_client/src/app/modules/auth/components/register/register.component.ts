import { Component } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  nome: string = '';
  email: string = '';
  senha: string = '';

  constructor(private authService: AuthService) { }

  onRegister() {
    this.authService.register(this.nome, this.email, this.senha).subscribe(response => {
      console.log('Usuário registrado com sucesso', response);
    });
  }
}
