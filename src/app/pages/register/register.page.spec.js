"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var register_page_1 = require("./register.page");
describe('RegisterPage', function () {
    var component;
    var fixture;
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(register_page_1.RegisterPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
