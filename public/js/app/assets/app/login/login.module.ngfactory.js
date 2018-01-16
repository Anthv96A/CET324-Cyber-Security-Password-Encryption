/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as i0 from '@angular/core';
import * as i1 from './login.module';
import * as i2 from './login.component.ngfactory';
import * as i3 from './signup/signup.component.ngfactory';
import * as i4 from './loginform/loginform.component.ngfactory';
import * as i5 from '@angular/common';
import * as i6 from '@angular/http';
import * as i7 from '@angular/forms';
import * as i8 from '@angular/router';
import * as i9 from './login-routing.module';
import * as i10 from './login.component';
import * as i11 from './signup/signup.component';
import * as i12 from './loginform/loginform.component';
export var LoginModuleNgFactory = i0.ɵcmf(i1.LoginModule, [], function (_l) {
    return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i2.LoginComponentNgFactory, i3.SignUpComponentNgFactory, i4.LoginformComponentNgFactory]],
            [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i5.NgLocalization, i5.NgLocaleLocalization, [i0.LOCALE_ID]), i0.ɵmpd(4608, i6.BrowserXhr, i6.BrowserXhr, []), i0.ɵmpd(4608, i6.ResponseOptions, i6.BaseResponseOptions, []),
        i0.ɵmpd(5120, i6.XSRFStrategy, i6.ɵb, []), i0.ɵmpd(4608, i6.XHRBackend, i6.XHRBackend, [i6.BrowserXhr, i6.ResponseOptions, i6.XSRFStrategy]), i0.ɵmpd(4608, i6.RequestOptions, i6.BaseRequestOptions, []), i0.ɵmpd(5120, i6.Http, i6.ɵc, [i6.XHRBackend, i6.RequestOptions]), i0.ɵmpd(4608, i7.ɵi, i7.ɵi, []), i0.ɵmpd(512, i5.CommonModule, i5.CommonModule, []),
        i0.ɵmpd(512, i8.RouterModule, i8.RouterModule, [[2, i8.ɵa], [2, i8.Router]]), i0.ɵmpd(512, i9.LoginRoutingModule, i9.LoginRoutingModule, []), i0.ɵmpd(512, i6.HttpModule, i6.HttpModule, []), i0.ɵmpd(512, i7.ɵba, i7.ɵba, []), i0.ɵmpd(512, i7.FormsModule, i7.FormsModule, []),
        i0.ɵmpd(512, i1.LoginModule, i1.LoginModule, []), i0.ɵmpd(1024, i8.ROUTES, function () {
            return [[{ path: '', redirectTo: '/login/signin', pathMatch: 'full' }, { path: 'login',
                        component: i10.LoginComponent, children: [{ path: 'signup', component: i11.SignUpComponent },
                            { path: 'signin', component: i12.LoginformComponent }] }]];
        }, [])]);
});
