import {Component, OnInit} from '@angular/core';
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

    constructor( private route: ActivatedRoute, private galleryService: GalleryService) {
    }

    ngOnInit() {
        this.showPost();
    }

    showPost(): void {
        this.route.params.subscribe(params => {
            this.galleryService.getPicture(params['id']).subscribe(res => {
                this.pic = res;
            })
        })
    }
}
