import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {GalleryItemComponent} from "./gallery/gallery-item/gallery-item.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [GalleryComponent, GalleryItemComponent],
  exports:[GalleryComponent,GalleryItemComponent],
})
export class GalleryModuleModule { }
