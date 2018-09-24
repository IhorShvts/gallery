import {Component, OnInit} from '@angular/core';
import {myCollection} from '../../gallery-data';
import {Picture} from "./Picture";

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
    collection: Picture[] = myCollection;
    gallery: string = 'My gallery';
    toggle: boolean = false;
    toggleCreate: boolean = false;
    formUpdate: boolean = false;
    edData: Picture;

    constructor() {
    }

    removePost(picId: number): void {
        this.collection = this.collection.filter(p => p.id !== picId);
    }

    makeToggle(): void {
        this.toggle = !this.toggle;
    }

    makeToggleCreate(): void {
        this.toggleCreate = !this.toggleCreate;
    }

    editPost(picId: Picture): void {
        this.formUpdate = true;
        this.edData = picId;
    }

    ngOnInit() {
    }

}
