import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  
  constructor(private router: Router) {}
  pathtologin() {
    this.router.navigate(['/login']); 
  }
  pathtoprodutos() {
    this.router.navigate(['/produtos']); 
  }
  pathtocontatos() {
    this.router.navigate(['/contatos']); 
  }
  pathtocadastro() {
    this.router.navigate(['/cadastro']); 
  }
}