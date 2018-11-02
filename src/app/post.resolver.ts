import {Injectable} from '@angular/core';
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

export class PostResolver implements Resolve<Picture> {
    constructor(private galleryService: GalleryService) {
    }

    resolve(route: ActivatedRouteSnapshot): Observable<Picture> {
        return this.galleryService.getPicture(+route.paramMap.get('id'));
    }
}