"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
exports.routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent: function () { return Promise.resolve().then(function () { return require('src/app/home/home.page'); }).then(function (m) { return m.HomePage; }); },
        //canActivate: [authGuard]
    },
    {
        path: 'login',
        loadComponent: function () { return Promise.resolve().then(function () { return require('./pages/login/login.page'); }).then(function (m) { return m.LoginPage; }); }
    },
    {
        path: 'register',
        loadComponent: function () { return Promise.resolve().then(function () { return require('./pages/register/register.page'); }).then(function (m) { return m.RegisterPage; }); }
    }
];
