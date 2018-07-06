import { NgModule } from '@angular/core';

import { SchoolManagementSharedLibsModule, FindLanguageFromKeyPipe, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [SchoolManagementSharedLibsModule],
    declarations: [FindLanguageFromKeyPipe, JhiAlertComponent, JhiAlertErrorComponent],
    exports: [SchoolManagementSharedLibsModule, FindLanguageFromKeyPipe, JhiAlertComponent, JhiAlertErrorComponent]
})
export class SchoolManagementSharedCommonModule {}
