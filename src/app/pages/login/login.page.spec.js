"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var login_page_1 = require("./login.page");
describe('LoginPage', function () {
    var component;
    var fixture;
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(login_page_1.LoginPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
