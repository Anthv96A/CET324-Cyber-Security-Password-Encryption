/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as i0 from '@angular/core';
import * as i1 from './app.module';
import * as i2 from './app.component';
import * as i3 from './validation/errors/error.component.ngfactory';
import * as i4 from './validation/success/success.component.ngfactory';
import * as i5 from './home/home.component.ngfactory';
import * as i6 from './login/login.component.ngfactory';
import * as i7 from './login/signup/signup.component.ngfactory';
import * as i8 from './login/loginform/loginform.component.ngfactory';
import * as i9 from './login/change-password/change-password.component.ngfactory';
import * as i10 from './app.component.ngfactory';
import * as i11 from '@angular/common';
import * as i12 from '@angular/platform-browser';
import * as i13 from '@angular/forms';
import * as i14 from '@angular/router';
import * as i15 from './can-deactivate.guard';
import * as i16 from '@angular/http';
import * as i17 from './validation/errors/error.service';
import * as i18 from './home/home.service';
import * as i19 from './validation/success/success.service';
import * as i20 from './login/login.service';
import * as i21 from './auth.guard';
import * as i22 from './validation/errors/error.component';
import * as i23 from './validation/success/success.component';
import * as i24 from './home/home.component';
import * as i25 from './login/login.component';
import * as i26 from './login/signup/signup.component';
import * as i27 from './login/loginform/loginform.component';
import * as i28 from './login/change-password/change-password.component';
import * as i29 from './app-routing.module';
import * as i30 from './home/home-routing.module';
import * as i31 from './home/home.module';
import * as i32 from './login/login-routing.module';
import * as i33 from './login/login.module';
export var AppModuleNgFactory = i0.ɵcmf(i1.AppModule, [i2.AppComponent], function (_l) {
    return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i3.ErrorComponentNgFactory, i4.SuccessComponentNgFactory, i5.HomeComponentNgFactory,
                    i6.LoginComponentNgFactory, i7.SignUpComponentNgFactory, i8.LoginformComponentNgFactory,
                    i9.ChangePasswordComponentNgFactory, i10.AppComponentNgFactory]], [3, i0.ComponentFactoryResolver],
            i0.NgModuleRef]), i0.ɵmpd(5120, i0.LOCALE_ID, i0.ɵm, [[3, i0.LOCALE_ID]]),
        i0.ɵmpd(4608, i11.NgLocalization, i11.NgLocaleLocalization, [i0.LOCALE_ID]),
        i0.ɵmpd(5120, i0.APP_ID, i0.ɵf, []), i0.ɵmpd(5120, i0.IterableDiffers, i0.ɵk, []), i0.ɵmpd(5120, i0.KeyValueDiffers, i0.ɵl, []),
        i0.ɵmpd(4608, i12.DomSanitizer, i12.ɵe, [i11.DOCUMENT]), i0.ɵmpd(6144, i0.Sanitizer, null, [i12.DomSanitizer]), i0.ɵmpd(4608, i12.HAMMER_GESTURE_CONFIG, i12.HammerGestureConfig, []), i0.ɵmpd(5120, i12.EVENT_MANAGER_PLUGINS, function (p0_0, p1_0, p2_0, p2_1) {
            return [new i12.ɵDomEventsPlugin(p0_0), new i12.ɵKeyEventsPlugin(p1_0),
                new i12.ɵHammerGesturesPlugin(p2_0, p2_1)];
        }, [i11.DOCUMENT, i11.DOCUMENT, i11.DOCUMENT, i12.HAMMER_GESTURE_CONFIG]),
        i0.ɵmpd(4608, i12.EventManager, i12.EventManager, [i12.EVENT_MANAGER_PLUGINS,
            i0.NgZone]), i0.ɵmpd(135680, i12.ɵDomSharedStylesHost, i12.ɵDomSharedStylesHost, [i11.DOCUMENT]), i0.ɵmpd(4608, i12.ɵDomRendererFactory2, i12.ɵDomRendererFactory2, [i12.EventManager, i12.ɵDomSharedStylesHost]), i0.ɵmpd(6144, i0.RendererFactory2, null, [i12.ɵDomRendererFactory2]), i0.ɵmpd(6144, i12.ɵSharedStylesHost, null, [i12.ɵDomSharedStylesHost]), i0.ɵmpd(4608, i0.Testability, i0.Testability, [i0.NgZone]), i0.ɵmpd(4608, i12.Meta, i12.Meta, [i11.DOCUMENT]),
        i0.ɵmpd(4608, i12.Title, i12.Title, [i11.DOCUMENT]), i0.ɵmpd(4608, i13.ɵi, i13.ɵi, []), i0.ɵmpd(5120, i14.ActivatedRoute, i14.ɵf, [i14.Router]),
        i0.ɵmpd(4608, i14.NoPreloading, i14.NoPreloading, []), i0.ɵmpd(6144, i14.PreloadingStrategy, null, [i14.NoPreloading]), i0.ɵmpd(135680, i14.RouterPreloader, i14.RouterPreloader, [i14.Router, i0.NgModuleFactoryLoader,
            i0.Compiler, i0.Injector, i14.PreloadingStrategy]), i0.ɵmpd(4608, i14.PreloadAllModules, i14.PreloadAllModules, []), i0.ɵmpd(5120, i14.ROUTER_INITIALIZER, i14.ɵi, [i14.ɵg]), i0.ɵmpd(5120, i0.APP_BOOTSTRAP_LISTENER, function (p0_0) {
            return [p0_0];
        }, [i14.ROUTER_INITIALIZER]), i0.ɵmpd(4608, i15.CanDeactivateGuard, i15.CanDeactivateGuard, []), i0.ɵmpd(4608, i16.BrowserXhr, i16.BrowserXhr, []),
        i0.ɵmpd(4608, i16.ResponseOptions, i16.BaseResponseOptions, []),
        i0.ɵmpd(5120, i16.XSRFStrategy, i16.ɵb, []), i0.ɵmpd(4608, i16.XHRBackend, i16.XHRBackend, [i16.BrowserXhr, i16.ResponseOptions, i16.XSRFStrategy]),
        i0.ɵmpd(4608, i16.RequestOptions, i16.BaseRequestOptions, []), i0.ɵmpd(5120, i16.Http, i16.ɵc, [i16.XHRBackend, i16.RequestOptions]), i0.ɵmpd(4608, i17.ErrorService, i17.ErrorService, []), i0.ɵmpd(4608, i18.HomeService, i18.HomeService, [i16.Http, i17.ErrorService]), i0.ɵmpd(4608, i19.SuccessService, i19.SuccessService, []), i0.ɵmpd(4608, i20.UserService, i20.UserService, [i16.Http,
            i17.ErrorService, i19.SuccessService]), i0.ɵmpd(4608, i21.AuthGuard, i21.AuthGuard, [i14.Router]), i0.ɵmpd(512, i11.CommonModule, i11.CommonModule, []),
        i0.ɵmpd(1024, i0.ErrorHandler, i12.ɵa, []), i0.ɵmpd(1024, i0.NgProbeToken, function () {
            return [i14.ɵb()];
        }, []), i0.ɵmpd(512, i14.ɵg, i14.ɵg, [i0.Injector]), i0.ɵmpd(1024, i0.APP_INITIALIZER, function (p0_0, p0_1, p1_0) {
            return [i12.ɵc(p0_0, p0_1), i14.ɵh(p1_0)];
        }, [[2, i12.NgProbeToken], [2, i0.NgProbeToken], i14.ɵg]), i0.ɵmpd(512, i0.ApplicationInitStatus, i0.ApplicationInitStatus, [[2, i0.APP_INITIALIZER]]), i0.ɵmpd(131584, i0.ɵe, i0.ɵe, [i0.NgZone, i0.ɵConsole, i0.Injector, i0.ErrorHandler, i0.ComponentFactoryResolver,
            i0.ApplicationInitStatus]), i0.ɵmpd(2048, i0.ApplicationRef, null, [i0.ɵe]), i0.ɵmpd(512, i0.ApplicationModule, i0.ApplicationModule, [i0.ApplicationRef]),
        i0.ɵmpd(512, i12.BrowserModule, i12.BrowserModule, [[3, i12.BrowserModule]]),
        i0.ɵmpd(512, i13.ɵba, i13.ɵba, []), i0.ɵmpd(512, i13.FormsModule, i13.FormsModule, []), i0.ɵmpd(1024, i14.ɵa, i14.ɵd, [[3, i14.Router]]), i0.ɵmpd(512, i14.UrlSerializer, i14.DefaultUrlSerializer, []), i0.ɵmpd(512, i14.ChildrenOutletContexts, i14.ChildrenOutletContexts, []),
        i0.ɵmpd(256, i14.ROUTER_CONFIGURATION, {}, []), i0.ɵmpd(1024, i11.LocationStrategy, i14.ɵc, [i11.PlatformLocation, [2, i11.APP_BASE_HREF], i14.ROUTER_CONFIGURATION]),
        i0.ɵmpd(512, i11.Location, i11.Location, [i11.LocationStrategy]), i0.ɵmpd(512, i0.Compiler, i0.Compiler, []), i0.ɵmpd(512, i0.NgModuleFactoryLoader, i0.SystemJsNgModuleLoader, [i0.Compiler, [2, i0.SystemJsNgModuleLoaderConfig]]),
        i0.ɵmpd(1024, i14.ROUTES, function () {
            return [[{ path: 'error', component: i22.ErrorComponent }, { path: 'success', component: i23.SuccessComponent }],
                [{ path: 'home', component: i24.HomeComponent, canActivate: [i21.AuthGuard] }],
                [{ path: '', redirectTo: '/login/signin', pathMatch: 'full' }, { path: 'login',
                        component: i25.LoginComponent, children: [{ path: 'signup', component: i26.SignUpComponent },
                            { path: 'signin', component: i27.LoginformComponent }, { path: 'change',
                                component: i28.ChangePasswordComponent }] }]];
        }, []), i0.ɵmpd(1024, i14.Router, i14.ɵe, [i0.ApplicationRef, i14.UrlSerializer,
            i14.ChildrenOutletContexts, i11.Location, i0.Injector, i0.NgModuleFactoryLoader,
            i0.Compiler, i14.ROUTES, i14.ROUTER_CONFIGURATION, [2, i14.UrlHandlingStrategy],
            [2, i14.RouteReuseStrategy]]), i0.ɵmpd(512, i14.RouterModule, i14.RouterModule, [[2, i14.ɵa], [2, i14.Router]]), i0.ɵmpd(512, i29.AppRoutingModule, i29.AppRoutingModule, []), i0.ɵmpd(512, i30.HomeRoutingModule, i30.HomeRoutingModule, []), i0.ɵmpd(512, i31.HomeModule, i31.HomeModule, []),
        i0.ɵmpd(512, i32.LoginRoutingModule, i32.LoginRoutingModule, []),
        i0.ɵmpd(512, i16.HttpModule, i16.HttpModule, []), i0.ɵmpd(512, i33.LoginModule, i33.LoginModule, []), i0.ɵmpd(512, i1.AppModule, i1.AppModule, [])]);
});
