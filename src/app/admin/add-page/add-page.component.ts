import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../shared/product.service';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.scss'],
})
export class AddPageComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  submited = false;

  constructor(private productServ: ProductService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      type: new FormControl(null, Validators.required),
      title: new FormControl(null, Validators.required),
      photo: new FormControl(null, Validators.required),
      info: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
    });
  }
  modules = {
    toolbar: [['image']],
  };
  submit() {
    if (this.form.invalid) return;
    this.submited = true;
    const product = {
      type: this.form.value.type,
      title: this.form.value.title,
      photo: this.form.value.photo,
      info: this.form.value.info,
      price: this.form.value.price,
      date: new Date().toString(),
    };

    this.productServ.create(product).subscribe((res) => {
      this.form.reset();
      this.submited = false;
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
