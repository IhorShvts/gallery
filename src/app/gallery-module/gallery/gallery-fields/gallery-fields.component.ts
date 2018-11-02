import { Component, Input, Output, EventEmitter, OnInit, ViewChild } from '@angular/core';
import {FormGroup, FormBuilder, Validators, AbstractControl, NgForm} from "@angular/forms";
import {Picture} from '../Picture';
import {ActivatedRoute, Router} from '@angular/router';
import {GalleryService} from "../../../gallery.service";

@Component({
  selector: 'app-gallery-fields',
  templateUrl: './gallery-fields.component.html',
  styleUrls: ['./gallery-fields.component.css']
})
export class GalleryFieldsComponent implements OnInit {
  @Input() galleryItem: Picture;
  @Output() update: EventEmitter<any> = new EventEmitter();

  @ViewChild('form') form: HTMLFormElement;

  pic: Picture;
  angFormEd: FormGroup;

  constructor(private route: ActivatedRoute,
              private galleryService: GalleryService,
              private fb: FormBuilder,
              private router: Router,) {

  }

  ngOnInit() {
    this.createFormEd();
  }

  createFormEd(): void {
    this.angFormEd = this.fb.group({
      titleEd: ['', Validators.required],
      urlEd: ['', Validators.required]
    });
  }

  onSubmit(form: NgForm) {
    this.update.emit(this.galleryItem);

  }
}
