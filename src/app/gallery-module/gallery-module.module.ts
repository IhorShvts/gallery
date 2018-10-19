import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GalleryItemComponent} from "./gallery/gallery-item/gallery-item.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {ReactiveFormsModule} from "@angular/forms";

import {GalleryAddComponent} from './gallery/gallery-add/gallery-add.component';

import {HttpClientModule} from "@angular/common/http";
import { GalleryRoutingModule } from  './gallery-routing.module';



@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        GalleryRoutingModule,
        HttpClientModule

    ],
    declarations: [GalleryComponent, GalleryItemComponent, GalleryAddComponent],
    exports: [GalleryComponent, GalleryItemComponent, GalleryAddComponent],
})
export class GalleryModuleModule {
}
