import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GalleryItemComponent} from "./gallery/gallery-item/gallery-item.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {ReactiveFormsModule} from "@angular/forms";

import {GalleryAddComponent} from './gallery/gallery-add/gallery-add.component';

import {HttpClientModule} from "@angular/common/http";
import {GalleryRoutingModule} from  './gallery-routing.module';
import {TruncatePipe} from "./truncate.pipe";
import {HighlightDirective} from "./gallery/highlight.directive";
import {MaterialModule} from "../material/material.module";
import {GalleryDialogComponent} from './gallery/gallery-dialog/gallery-dialog.component';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        GalleryRoutingModule,
        HttpClientModule,
        MaterialModule,
        FlexLayoutModule
    ],
    declarations: [GalleryComponent, GalleryItemComponent, GalleryAddComponent, TruncatePipe, HighlightDirective, GalleryDialogComponent],
    exports: [GalleryComponent, GalleryItemComponent, GalleryAddComponent, HighlightDirective],
    entryComponents: [GalleryDialogComponent],

})
export class GalleryModuleModule {
}
