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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
var core_1 = require("@angular/core");
var auth_1 = require("@angular/fire/auth");
var auth_2 = require("@angular/fire/auth");
var AuthService = function () {
    var _classDecorators = [(0, core_1.Injectable)({
            providedIn: 'root'
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var AuthService = _classThis = /** @class */ (function () {
        function AuthService_1(auth, router) {
            var _this = this;
            this.auth = auth;
            this.router = router;
            this.currentUser = null;
            // Detecta cambios de autenticación y redirige
            (0, auth_2.onAuthStateChanged)(this.auth, function (user) {
                _this.currentUser = user;
                var currentUrl = _this.router.url;
                // Si el usuario está autenticado y está en login o register, redirige a home
                if (user && (currentUrl === '/login' || currentUrl === '/register')) {
                    _this.router.navigate(['/home']);
                }
                // Si NO está autenticado y está en una ruta que NO sea login ni register, redirige a login
                if (!user &&
                    currentUrl !== '/login' &&
                    currentUrl !== '/register') {
                    _this.router.navigate(['/login']);
                }
            });
        }
        // Obtener el usuario actual
        AuthService_1.prototype.getUser = function () {
            return this.currentUser;
        };
        // Login con email y contraseña
        AuthService_1.prototype.loginWithEmail = function (email, password) {
            return (0, auth_1.signInWithEmailAndPassword)(this.auth, email, password);
        };
        // Registro con email y contraseña
        AuthService_1.prototype.registerWithEmail = function (email, password) {
            return (0, auth_1.createUserWithEmailAndPassword)(this.auth, email, password);
        };
        // Login con Google
        AuthService_1.prototype.loginWithGoogle = function () {
            return (0, auth_1.signInWithPopup)(this.auth, new auth_1.GoogleAuthProvider());
        };
        // Login con Facebook
        AuthService_1.prototype.loginWithFacebook = function () {
            return (0, auth_1.signInWithPopup)(this.auth, new auth_1.FacebookAuthProvider());
        };
        // Cerrar sesión
        AuthService_1.prototype.logout = function () {
            localStorage.removeItem('userEmail');
            localStorage.removeItem('Email');
            return (0, auth_1.signOut)(this.auth);
        };
        return AuthService_1;
    }());
    __setFunctionName(_classThis, "AuthService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AuthService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AuthService = _classThis;
}();
exports.AuthService = AuthService;
