import {Component, OnInit, Input} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Picture} from "../Picture";

@Component({
    selector: 'app-gallery-add',
    templateUrl: './gallery-add.component.html',
    styleUrls: ['./gallery-add.component.css']
})
export class GalleryAddComponent implements OnInit {
    @Input() collection: Picture[];
    angForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.createForm();
    }

    ngOnInit() {
    }

    createForm(): void {
        this.angForm = this.fb.group({
            title: ['', Validators.required],
            url: ['', Validators.required]
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
}
