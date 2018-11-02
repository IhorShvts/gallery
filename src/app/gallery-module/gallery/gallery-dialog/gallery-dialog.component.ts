import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
    selector: 'app-post-dialog',
    templateUrl: 'gallery--dialog.component.html',
    styleUrls: ['gallery--dialog.component.css']
})
export class GalleryDialogComponent implements OnInit {

    constructor(private dialogRef: MatDialogRef<GalleryDialogComponent>,
                @Inject(MAT_DIALOG_DATA) private data) {
    }

    ngOnInit() {
    }

    cancel(): void {
        this.dialogRef.close();
    }
}
