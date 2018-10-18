import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
    CanActivateChild,
    Resolve
} from '@angular/router';
import {Picture} from "./gallery-module/gallery/Picture";
import {GalleryService} from "./gallery.service";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class PostsResolver implements Resolve<Picture[]> {
    constructor( private galleryService: GalleryService) {
    }
    resolve(): Observable<Picture[]> {
        return this.galleryService.getPictures();
    }
}