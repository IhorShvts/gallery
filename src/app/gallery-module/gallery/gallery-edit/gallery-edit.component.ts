import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from '@angular/router';
import {GalleryService} from "../../../gallery.service";
import {Picture} from "../Picture";


@Component({
    selector: 'app-gallery-edit',
    templateUrl: './gallery-edit.component.html',
    styleUrls: ['./gallery-edit.component.css']
})
export class GalleryEditComponent implements OnInit {
    angFormEd: FormGroup;
    post: Picture;

    constructor(private fb: FormBuilder, private router: Router,
                private route: ActivatedRoute, private galleryService: GalleryService) {
    }

    ngOnInit() {
        this.createFormEd();
        this.editPost();
    }

    editPost(): void {
        this.route.params.subscribe(params => {
            this.galleryService.edit(params['id']).subscribe(res => {
                this.post = res;
                this.angFormEd.setValue({titleEd: res.title, urlEd: res.url})
            })
        })
    }

    updatePost(title: string, url: string): void {
        const id: number = this.post.id;
        this.route.params.subscribe(params => {
            this.galleryService.update(title, url, params['id']).subscribe(res => {
                if (res.id === id) {
                    this.post.title = title;
                    this.post.url = url;
                    this.router.navigate(['/gallery']);
                }
            });
        });
    }

    createFormEd(): void {
        this.angFormEd = this.fb.group({
            titleEd: ['', Validators.required],
            urlEd: ['', Validators.required]
        });
    }

}
