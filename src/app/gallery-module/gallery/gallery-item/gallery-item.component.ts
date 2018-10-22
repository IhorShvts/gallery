import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Picture} from '../Picture';
import { ActivatedRoute } from '@angular/router';
import {GalleryService} from "../../../gallery.service";

@Component({
    selector: 'app-gallery-item',
    templateUrl: './gallery-item.component.html',
    styleUrls: ['./gallery-item.component.css']
})
export class GalleryItemComponent implements OnInit {
   pic: Picture;
   angFormEd: FormGroup;
   exist: boolean = false;
   toggleEdit: boolean = false;

    constructor( private route: ActivatedRoute, private galleryService: GalleryService, private fb: FormBuilder,) {

    }

    ngOnInit() {
        this.createFormEd();
        this.showPost();
    }
    makeToggleEdit(): void {
        this.toggleEdit = !this.toggleEdit;
    }

    createFormEd(): void {
        this.angFormEd = this.fb.group({
            titleEd: ['', Validators.required],
            urlEd: ['', Validators.required]
        });
    }

    showPost(): void {
        this.route.data.subscribe(params => {
            this.exist = true;
            this.pic = params.post;
            this.angFormEd.setValue({titleEd: params.post.title, urlEd: params.post.url});
        })
    }
    updatePost(title: string, url: string): void {
        this.route.params.subscribe(params => {
            this.galleryService.update(title, url, params['id']).subscribe(res => {
                if (res.id === this.pic.id) {
                    this.pic.title = title;
                    this.pic.url = url;
                } else {
                    this.exist = false;
                }
            });
        });
    }
}
