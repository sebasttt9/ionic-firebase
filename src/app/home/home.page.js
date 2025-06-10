"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePage = void 0;
var core_1 = require("@angular/core");
var angular_1 = require("@ionic/angular");
var camera_1 = require("@capacitor/camera");
var toast_1 = require("@capacitor/toast");
var common_1 = require("@angular/common");
var network_1 = require("@capacitor/network");
var preferences_1 = require("@capacitor/preferences");
var forms_1 = require("@angular/forms");
var HomePage = function () {
    var _classDecorators = [(0, core_1.Component)({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
            imports: [angular_1.IonicModule, common_1.CommonModule, forms_1.FormsModule],
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var HomePage = _classThis = /** @class */ (function () {
        function HomePage_1(authService, router, nav, cdr, http // <-- Inyecta HttpClient aquí
        ) {
            this.authService = authService;
            this.router = router;
            this.nav = nav;
            this.cdr = cdr;
            this.http = http;
            this.isOnline = true;
            this.nombreUsuario = '';
        }
        HomePage_1.prototype.ngOnInit = function () {
            var _this = this;
            this.checkNetworkStatus();
            this.networkListener = network_1.Network.addListener('networkStatusChange', function (status) {
                _this.isOnline = status.connected;
                _this.cdr.detectChanges();
            });
        };
        HomePage_1.prototype.ngOnDestroy = function () {
            if (this.networkListener) {
                this.networkListener.remove();
            }
        };
        HomePage_1.prototype.checkNetworkStatus = function () {
            return __awaiter(this, void 0, void 0, function () {
                var status;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, network_1.Network.getStatus()];
                        case 1:
                            status = _a.sent();
                            this.isOnline = status.connected;
                            return [2 /*return*/];
                    }
                });
            });
        };
        HomePage_1.prototype.logout = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.authService.logout()];
                        case 1:
                            _a.sent();
                            alert('Cierre de sesión exitoso');
                            this.router.navigate(['/login']);
                            return [2 /*return*/];
                    }
                });
            });
        };
        HomePage_1.prototype.tomarFoto = function () {
            return __awaiter(this, void 0, void 0, function () {
                var image;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, camera_1.Camera.getPhoto({
                                quality: 90,
                                allowEditing: false,
                                resultType: camera_1.CameraResultType.DataUrl,
                            })];
                        case 1:
                            image = _a.sent();
                            this.foto = image.dataUrl;
                            this.mostrarToast('¡Foto tomada exitosamente!');
                            return [2 /*return*/];
                    }
                });
            });
        };
        HomePage_1.prototype.mostrarToast = function (mensaje) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, toast_1.Toast.show({
                                text: mensaje,
                                duration: 'short'
                            })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        HomePage_1.prototype.login = function () {
            this.nav.navigateRoot('/home');
        };
        HomePage_1.prototype.guardarNombre = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, preferences_1.Preferences.set({
                                key: 'nombre',
                                value: this.nombreUsuario,
                            })];
                        case 1:
                            _a.sent();
                            this.mostrarToast('Nombre guardado');
                            return [2 /*return*/];
                    }
                });
            });
        };
        HomePage_1.prototype.leerNombre = function () {
            return __awaiter(this, void 0, void 0, function () {
                var value;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, preferences_1.Preferences.get({ key: 'nombre' })];
                        case 1:
                            value = (_a.sent()).value;
                            this.nombreUsuario = value || '';
                            this.mostrarToast("Nombre le\u00EDdo: ".concat(this.nombreUsuario));
                            return [2 /*return*/];
                    }
                });
            });
        };
        HomePage_1.prototype.borrarNombre = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, preferences_1.Preferences.remove({ key: 'nombre' })];
                        case 1:
                            _a.sent();
                            this.nombreUsuario = '';
                            this.mostrarToast('Nombre borrado');
                            return [2 /*return*/];
                    }
                });
            });
        };
        // NUEVO: función para cargar personajes de la API
        HomePage_1.prototype.cargarPersonajes = function () {
            var _this = this;
            this.http.get('https://rickandmortyapi.com/api/character').subscribe({
                next: function (data) {
                    console.log('Personajes cargados:', data.results);
                    _this.mostrarToast("Cargados ".concat(data.results.length, " personajes. Revisa la consola."));
                },
                error: function (err) {
                    console.error('Error al cargar personajes:', err);
                    _this.mostrarToast('Error al cargar personajes');
                }
            });
        };
        return HomePage_1;
    }());
    __setFunctionName(_classThis, "HomePage");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        HomePage = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return HomePage = _classThis;
}();
exports.HomePage = HomePage;
