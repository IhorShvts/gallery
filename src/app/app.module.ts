import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {GalleryModuleModule} from './gallery-module/gallery-module.module';
import {GalleryService} from "./gallery.service";
import { AppRoutingModule } from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        GalleryModuleModule,
        HttpClientModule,
        AppRoutingModule

    ],
    providers: [GalleryService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
