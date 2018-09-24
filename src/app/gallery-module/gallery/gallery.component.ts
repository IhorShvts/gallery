import {Component, OnInit} from '@angular/core';
import {myCollection} from '../../gallery-data';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Picture} from "./Picture";


@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
    collection = myCollection;
    gallery: string = 'My gallery';
    toggle: boolean = false;
    toggleCreate: boolean = false;
    angForm: FormGroup;
    angFormEd: FormGroup;
    formUpdate: boolean = false;
    edData: Picture;


    constructor(private fb: FormBuilder) {
        this.createForm();
        this.createFormEd();
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

    createForm(): void {
        this.angForm = this.fb.group({
            title: ['', Validators.required],
            url: ['', Validators.required]
        });
    }

    createFormEd(): void {
        this.angFormEd = this.fb.group({
            titleEd: ['', Validators.required],
            urlEd: ['', Validators.required]
        });
    }

    addPost(title: string, url: string): void {
        const id: number = Math.max(0, ...this.collection.map(({id}) => id)) + 1;
        const post: Picture = {
            title,
            url,
            id
        };
        this.collection.unshift(post);
    }

    editPost(picId: Picture): void {
        this.formUpdate = true;
        this.edData = picId;
    }

    updatePost(title: string, url: string): void {
        const id: number = this.edData.id;
        this.collection.forEach(post => {
            if (post.id === id) {
                this.edData.title = title;
                this.edData.url = url;
            }
        });
        this.formUpdate = false;
    }

    ngOnInit() {
    }

}
