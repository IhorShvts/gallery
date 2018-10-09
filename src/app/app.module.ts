import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';

import {GalleryModuleModule} from './gallery-module/gallery-module.module';
import {GalleryService} from "./gallery.service";



@NgModule({
    declarations: [
        AppComponent,

    ],
    imports: [
        BrowserModule,
        GalleryModuleModule,


    ],
    providers: [GalleryService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
