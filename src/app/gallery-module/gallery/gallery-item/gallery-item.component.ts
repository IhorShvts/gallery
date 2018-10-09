import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Picture} from '../Picture';

@Component({
    selector: 'app-gallery-item',
    templateUrl: './gallery-item.component.html',
    styleUrls: ['./gallery-item.component.css']
})
export class GalleryItemComponent implements OnInit {
    @Input() pic: Picture;
    @Output() remove: EventEmitter<number> = new EventEmitter();

    constructor() {
    }

    removePost(picId: number): void {
        this.remove.emit(picId);
    }

    ngOnInit() {
    }
}
