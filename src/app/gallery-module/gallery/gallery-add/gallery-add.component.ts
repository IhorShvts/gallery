import {Component, OnInit, Input, Output,EventEmitter} from '@angular/core';
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
    @Input() edData: Picture;
    @Input() toggleCreate: boolean;
    @Input() formUpdate: boolean;
    @Output() closeAdd: EventEmitter<boolean> = new EventEmitter();
    @Output() closeEdit: EventEmitter<boolean> = new EventEmitter();
    angFormEd: FormGroup;
    constructor(private fb: FormBuilder) {
        this.createForm();
        this.createFormEd();
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
    addClose(): void {
        this.closeAdd.emit(this.toggleCreate);
    }

    editClose(): void {
        this.closeEdit.emit(this.formUpdate);
    }

}
