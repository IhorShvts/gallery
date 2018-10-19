import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {GalleryModuleModule} from './gallery-module/gallery-module.module';
import {GalleryService} from "./gallery.service";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {AuthGuard} from "./auth.guard";
import {LoggedinService} from "./loggedin.service";
import {PostsResolver} from "./posts.resolver";
import {PostResolver} from "./post.resolver";

@NgModule({
    declarations: [
        AppComponent,

    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        // GalleryModuleModule,
        AppRoutingModule

    ],
    providers: [GalleryService, LoggedinService, AuthGuard,PostsResolver,PostResolver],
    bootstrap: [AppComponent]
})
export class AppModule {
}
