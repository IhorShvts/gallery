import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

import {GalleryService} from "../../../gallery.service";
import {Router} from "@angular/router";
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
    selector: 'app-gallery-add',
    templateUrl: './gallery-add.component.html',
    styleUrls: ['./gallery-add.component.css']
})
export class GalleryAddComponent implements OnInit {
    angForm: FormGroup;

    constructor(private fb: FormBuilder,
                private galleryService: GalleryService,
                private router: Router,
                private snackBar: MatSnackBar) {
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
        const date: Date = new Date();
        this.galleryService.add(title, url, date).subscribe(res => {
            this.openSnackBar();
            this.router.navigate(['/gallery']);
        });
    }

    openSnackBar() {
        this.snackBar.open('New orc has been added', 'X', {
            duration: 3000,
        });
    }
}


