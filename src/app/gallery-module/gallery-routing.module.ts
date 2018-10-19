import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RouterModule, Routes} from "@angular/router";

import {GalleryItemComponent} from "./gallery/gallery-item/gallery-item.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {GalleryAddComponent} from './gallery/gallery-add/gallery-add.component';
import {AuthGuard} from  '../auth.guard';
import { PostsResolver } from  '../posts.resolver';
import {PostResolver} from "../post.resolver";


const galleryRoutes: Routes = [
    {
        path: '',
        canActivate: [AuthGuard],
        children: [
            {path: '', component: GalleryComponent, resolve: {posts: PostsResolver}},
            {path: 'add', component: GalleryAddComponent},
            {path: ':id', component: GalleryItemComponent, resolve: {post: PostResolver}},
        ]
    },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(galleryRoutes)
    ],
    exports: [RouterModule],
    declarations: []
})
export class GalleryRoutingModule {
}
