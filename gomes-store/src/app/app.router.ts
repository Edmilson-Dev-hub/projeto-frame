import { contatos } from './contatos/contatos';
import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Cadastro } from './cadastro/cadastro';
import { Home } from './home/home';
import { Produtos } from './produtos/produtos';


export const routes: Routes = [
    {path: '',component: Home},
    {path: 'login',component: Login},
    {path: 'cadastro',component: Cadastro},
    {path: 'home',component: Home},
    {path: 'produtos',component: Produtos},
    {path: 'contatos',component: contatos}

];
