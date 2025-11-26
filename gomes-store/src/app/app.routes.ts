import { Routes } from '@angular/router';

import { Login } from './login/login';
import { Cadastro } from './cadastro/cadastro';

export const routes: Routes = [
    { // definindo a rota para o login e cadastro
        path: 'login',
        component: Login
    },

    {
        path: 'cadastro',
        component: Cadastro
    },

    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];
