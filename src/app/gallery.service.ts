import {Injectable} from '@angular/core';
import {Picture} from "./gallery-module/gallery/Picture";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GalleryService {
    galleryUrl: string = 'http://localhost:5555/posts';
    httpOptions: object = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    };


    constructor(private http: HttpClient) {
    }

    getPictures(): Observable<Picture[]> {
        return this.http.get<Picture[]>(`${this.galleryUrl}`);
    }

    remove(picId: number): Observable<Picture> {
        return this.http.delete<Picture>(`${this.galleryUrl}/${picId}`, this.httpOptions);
    }

    add(title: string, url: string): Observable<Picture> {
        const postObj = {
            title,
            url
        };
        return this.http.post<Picture>(this.galleryUrl, postObj, this.httpOptions);
    }


    edit(id: number): Observable<Picture> {
        return this.http.get<Picture>(`${this.galleryUrl}/${id}`);
    }

    update(title: string, url: string, id: number): Observable<Picture> {
        const postEdObj = {
            title,
            url
        };
        console.log(`${this.galleryUrl}/${id}`);
        console.log(postEdObj);
        return this.http.put<Picture>(`${this.galleryUrl}/${id}`, postEdObj, this.httpOptions);
    }
}
