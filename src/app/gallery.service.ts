import {Injectable} from '@angular/core';
import {Picture} from "./gallery-module/gallery/Picture";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
    providedIn: 'root'
})
export class GalleryService {
    galleryUrl: string = 'http://localhost:5555/posts';

    constructor(private http: HttpClient) {
    }

    getPictures(): Observable<Picture[]> {
        return this.http.get<Picture[]>(`${this.galleryUrl}`);
    }

    remove(picId: number): Observable<Picture> {
        return this.http.delete<Picture>(`${this.galleryUrl}/${picId}`, httpOptions);
    }

    add(title: string, url: string): Observable<Picture> {
        const postObj = {
            title,
            url
        };
        return this.http.post<Picture>(this.galleryUrl, postObj, httpOptions);
    }

    getPicture(id: number): Observable<Picture> {
        return this.http.get<Picture>(`${this.galleryUrl}/${id}`);
    }

    update(title: string, url: string, id: number): Observable<Picture> {
        const postEdObj = {
            title,
            url
        };
        return this.http.patch<Picture>(`${this.galleryUrl}/${id}`, postEdObj, httpOptions);
    }
}
