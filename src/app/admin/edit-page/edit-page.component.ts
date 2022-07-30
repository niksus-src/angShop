import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../shared/product.service";
import {switchMap} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductFromBD} from "../../shared/types";

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {

  form: FormGroup = new FormGroup({
    type: new FormControl(null, Validators.required),
    title: new FormControl(null, Validators.required),
    photo: new FormControl(null, Validators.required),
    info: new FormControl(null, Validators.required),
    price: new FormControl(null, Validators.required),
  })
  product: ProductFromBD = {
    info: "",
    photo: "",
    price: "",
    title: "",
    type: "",
    date: "",
    id: ""
  }
  submited = false
  modules = {
    toolbar: [['image']],
  };

  constructor(private route: ActivatedRoute, private productServ: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap( params => {
        return this.productServ.getById(params['id'])
      })
    ).subscribe(product => {
      this.product = product
      this.form = new FormGroup({
        type: new FormControl(product.type, Validators.required),
        title: new FormControl(product.title, Validators.required),
        photo: new FormControl(product.photo, Validators.required),
        info: new FormControl(product.info, Validators.required),
        price: new FormControl(product.price, Validators.required),
      })
    })
  }

  submit() {
    if (this.form.invalid) return;
    this.submited = true;

    this.productServ.update({
      ...this.product,
      type: this.form.value.type,
      title: this.form.value.title,
      photo: this.form.value.photo,
      info: this.form.value.info,
      price: this.form.value.price,
      date: new Date().toString()
    }).subscribe((res) => {
      this.submited = false;
      this.router.navigate(['/admin', 'dashboard'])
    });
  }

  get type() {
    return this.form.get('type');
  }
  get title() {
    return this.form.get('title');
  }
  get photo() {
    return this.form.get('photo');
  }
  get info() {
    return this.form.get('info');
  }
  get price() {
    return this.form.get('price');
  }
}
