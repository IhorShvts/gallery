import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GalleryItemComponent} from "./gallery/gallery-item/gallery-item.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";

import {GalleryAddComponent} from './gallery/gallery-add/gallery-add.component';

import {HttpClientModule} from "@angular/common/http";
import {GalleryEditComponent} from './gallery/gallery-edit/gallery-edit.component';
import { GalleryRoutingModule } from  './gallery-routing.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        GalleryRoutingModule,
        HttpClientModule

    ],
    declarations: [GalleryComponent, GalleryItemComponent, GalleryAddComponent, GalleryEditComponent],
    exports: [GalleryComponent, GalleryItemComponent, GalleryAddComponent, GalleryEditComponent],
})
export class GalleryModuleModule {
}
