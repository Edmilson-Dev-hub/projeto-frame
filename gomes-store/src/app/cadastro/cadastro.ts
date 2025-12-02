import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router'; // 1. Importe o Router

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {
  
  // 2. Injete o Router no construtor (igual você fez na Home)
  constructor(private router: Router) {}

  pathtohome() {
    // 3. Use o navigate para forçar a troca de página
    this.router.navigate(['/home']);
  }
}