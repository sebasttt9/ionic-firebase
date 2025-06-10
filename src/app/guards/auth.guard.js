"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authGuard = void 0;
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var auth_1 = require("@angular/fire/auth");
var auth_2 = require("firebase/auth");
var authGuard = function () {
    var auth = (0, core_1.inject)(auth_1.Auth);
    var router = (0, core_1.inject)(router_1.Router);
    return new Promise(function (resolve) {
        (0, auth_2.onAuthStateChanged)(auth, function (user) {
            if (user) {
                resolve(true); // Usuario autenticado → permite acceso
            }
            else {
                router.navigate(['/login']); // No autenticado → redirige
                resolve(false);
            }
        });
    });
};
exports.authGuard = authGuard;
