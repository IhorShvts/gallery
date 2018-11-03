import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {GalleryService} from './gallery.service';
import {LoggedinService} from './loggedin.service';

import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {MaterialModule} from './material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';

import {AuthGuard} from './auth.guard';
import {PostsResolver} from './posts.resolver';
import {PostResolver} from './post.resolver';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        MaterialModule,
        BrowserAnimationsModule,
        FlexLayoutModule,

    ],
    providers: [GalleryService, LoggedinService, AuthGuard, PostsResolver, PostResolver],
    bootstrap: [AppComponent]
})
export class AppModule {
}



