import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Picture} from './Picture';
import {GalleryService} from '../../gallery.service';
import {ActivatedRoute} from '@angular/router';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {GalleryDialogComponent} from './gallery-dialog/gallery-dialog.component';


@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class GalleryComponent implements OnInit {
    collection: Picture[] = [];
    gallery = 'Orcs from gundabad';
    toggDate: boolean[] = [];
    dialogRef: MatDialogRef<GalleryDialogComponent>;

    constructor(private galleryService: GalleryService,
                private route: ActivatedRoute,
                private dialog: MatDialog) {
    }

    ngOnInit() {
        this.getPictures();
    }

    toggleDate(picId: number) {
        this.toggDate[picId] = !this.toggDate[picId];
    }

    save(): void {
        localStorage['Collection'] = JSON.stringify(this.collection);
    }

    getCollection() {
        this.collection = JSON.parse(localStorage['Collection'] || 'null');
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
        });
    }

    removePost(picId: number): void {
        if (confirm('Are you sure ?')) {
            this.galleryService.remove(picId).subscribe(res => {
                this.collection.splice(this.collection.findIndex(n => n.id === picId), 1);
                this.save();
                this.getCollection();
            });
        }
    }

    openDialog(pic) {
        this.dialogRef = this.dialog.open(GalleryDialogComponent, {
            data: pic
        });
    }
}
