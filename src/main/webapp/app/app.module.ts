import './vendor.ts';

import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Ng2Webstorage, LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { JhiEventManager } from 'ng-jhipster';

import { AuthInterceptor } from './blocks/interceptor/auth.interceptor';
import { AuthExpiredInterceptor } from './blocks/interceptor/auth-expired.interceptor';
import { ErrorHandlerInterceptor } from './blocks/interceptor/errorhandler.interceptor';
import { NotificationInterceptor } from './blocks/interceptor/notification.interceptor';
import { SchoolManagementSharedModule } from 'app/shared';
import { SchoolManagementCoreModule } from 'app/core';
import { SchoolManagementAppRoutingModule } from './app-routing.module';
import { SchoolManagementHomeModule } from './home/home.module';
import { SchoolManagementAccountModule } from './account/account.module';
import { SchoolManagementEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent, NavbarComponent, FooterComponent, PageRibbonComponent, ActiveMenuDirective, ErrorComponent } from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        SchoolManagementAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-' }),
        SchoolManagementSharedModule,
        SchoolManagementCoreModule,
        SchoolManagementHomeModule,
        SchoolManagementAccountModule,
        SchoolManagementEntityModule
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
            deps: [LocalStorageService, SessionStorageService]
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthExpiredInterceptor,
            multi: true,
            deps: [Injector]
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorHandlerInterceptor,
            multi: true,
            deps: [JhiEventManager]
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: NotificationInterceptor,
            multi: true,
            deps: [Injector]
        }
    ],
    bootstrap: [JhiMainComponent]
})
export class SchoolManagementAppModule {}
