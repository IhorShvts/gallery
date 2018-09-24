import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Picture} from "../Picture";

@Component({
    selector: 'app-gallery-edit',
    templateUrl: './gallery-edit.component.html',
    styleUrls: ['./gallery-edit.component.css']
})
export class GalleryEditComponent implements OnInit {
    @Input() edData: Picture;
    @Input() collection: Picture[];
    @Input() formUpdate: boolean;
    @Output() closeEdit: EventEmitter<boolean> = new EventEmitter();
    angFormEd: FormGroup;


    constructor(private fb: FormBuilder) {
        this.createFormEd();
    }

    ngOnInit() {
    }

    createFormEd(): void {
        this.angFormEd = this.fb.group({
            titleEd: ['', Validators.required],
            urlEd: ['', Validators.required]
        });
    }

    updatePost(title: string, url: string): void {
        const id: number = this.edData.id;
        this.collection.forEach(post => {
            if (post.id === id) {
                this.edData.title = title;
                this.edData.url = url;

            }
        });
    }

    editClose(): void {
        this.closeEdit.emit(this.formUpdate);
    }
}
