import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GalleryModuleModule } from './gallery-module/gallery-module.module';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    GalleryModuleModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
