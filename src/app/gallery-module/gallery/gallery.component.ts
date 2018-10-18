import {Component, OnInit} from '@angular/core';
import {Picture} from "./Picture";
import {GalleryService} from '../../gallery.service';
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
    collection: Picture[] = [];
    gallery: string = 'My gallery';

    constructor(private galleryService: GalleryService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.getPictures();
    }

    save(): void {
        localStorage["Collection"] = JSON.stringify(this.collection);
    }

    getCollection() {
        this.collection = JSON.parse(localStorage["Collection"] || "null");
    }

    getPictures() {
        this.route.data.subscribe(data => {
            data.posts.forEach(post => {
                if (post.id > 10) {
                    this.collection.unshift(post);
                } else {
                    this.collection.push(post);
                }
                this.save();
                this.getCollection();
            });
        })
    }

    removePost(picId: number): void {
        if (confirm('Are you sure ?')) {
            this.galleryService.remove(picId).subscribe(res => {
                this.collection.splice(this.collection.findIndex(n => n.id === picId), 1);
                this.save();
                this.getCollection();
            })
        }

    }

}
