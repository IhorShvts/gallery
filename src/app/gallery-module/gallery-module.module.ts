import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GalleryItemComponent} from "./gallery/gallery-item/gallery-item.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {ReactiveFormsModule} from "@angular/forms";
import {GalleryEditComponent} from './gallery/gallery-edit/gallery-edit.component';
import {GalleryAddComponent} from './gallery/gallery-add/gallery-add.component';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [GalleryComponent, GalleryItemComponent, GalleryEditComponent, GalleryAddComponent],
    exports: [GalleryComponent, GalleryItemComponent],
})
export class GalleryModuleModule {
}
