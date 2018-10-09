import {Component, OnInit, Input} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

import {GalleryService} from "../../../gallery.service";
import {Picture} from "../Picture";

@Component({
    selector: 'app-gallery-add',
    templateUrl: './gallery-add.component.html',
    styleUrls: ['./gallery-add.component.css']
})
export class GalleryAddComponent implements OnInit {
    @Input() collection: Picture[];


    angForm: FormGroup;
    isAdded: boolean = false;
    confirmationString: string = 'New post has been added';

    constructor(private fb: FormBuilder, private galleryService: GalleryService) {
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
        this.galleryService.add(title, url).subscribe(res => {
            this.isAdded = true;

        });
    }
}
