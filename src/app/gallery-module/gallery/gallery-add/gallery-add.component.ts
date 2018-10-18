import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

import {GalleryService} from "../../../gallery.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-gallery-add',
    templateUrl: './gallery-add.component.html',
    styleUrls: ['./gallery-add.component.css']
})
export class GalleryAddComponent implements OnInit {
    angForm: FormGroup;
    isAdded: boolean = false;
    confirmationString: string = 'New post has been added';

    constructor(private fb: FormBuilder, private galleryService: GalleryService,
                private router: Router) {
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
            this.router.navigate(['/gallery']);
        });
    }
}
