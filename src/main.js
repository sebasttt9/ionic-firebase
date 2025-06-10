"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var standalone_1 = require("@ionic/angular/standalone");
var ionicons_1 = require("ionicons");
var icons_1 = require("ionicons/icons");
var loader_1 = require("@ionic/pwa-elements/loader");
var app_routes_1 = require("./app/app.routes");
var app_component_1 = require("./app/app.component");
// Importa AngularFire
var app_1 = require("@angular/fire/app");
var auth_1 = require("@angular/fire/auth");
var environment_prod_1 = require("./environments/environment.prod");
(0, platform_browser_1.bootstrapApplication)(app_component_1.AppComponent, {
    providers: [
        { provide: router_1.RouteReuseStrategy, useClass: standalone_1.IonicRouteStrategy },
        (0, standalone_1.provideIonicAngular)(),
        (0, router_1.provideRouter)(app_routes_1.routes, (0, router_1.withPreloading)(router_1.PreloadAllModules)),
        (0, app_1.provideFirebaseApp)(function () { return (0, app_1.initializeApp)(environment_prod_1.firebaseConfig); }),
        (0, auth_1.provideAuth)(function () { return (0, auth_1.getAuth)(); }),
    ],
});
(0, ionicons_1.addIcons)({
    'mail-outline': icons_1.mailOutline,
    'key-outline': icons_1.keyOutline,
    'eye-outline': icons_1.eyeOutline,
    'eye-off-outline': icons_1.eyeOffOutline,
});
(0, loader_1.defineCustomElements)(window);
