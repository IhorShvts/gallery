import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GalleryItemComponent} from "./gallery/gallery-item/gallery-item.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";

import {GalleryAddComponent} from './gallery/gallery-add/gallery-add.component';

import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {GalleryEditComponent} from './gallery/gallery-edit/gallery-edit.component';


const appRoutes: Routes = [
    {path: '', redirectTo: '/gallery', pathMatch: 'full'},
    {path: 'gallery', component: GalleryComponent},
    {path: 'gallery-add', component: GalleryAddComponent},
    {path: 'galleryEdit/:id', component: GalleryEditComponent},

];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(
            appRoutes,
            // {enableTracing: true}
        ),
        HttpClientModule

    ],
    declarations: [GalleryComponent, GalleryItemComponent, GalleryAddComponent, GalleryEditComponent],
    exports: [GalleryComponent, GalleryItemComponent, GalleryAddComponent, GalleryEditComponent, RouterModule],
})
export class GalleryModuleModule {
}
