import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent implements OnInit {

  cardForm: FormGroup;
  public submitted = false;

  constructor() { }

  ngOnInit() {
    this.cardForm = new FormGroup({
      name: new FormControl('', [
        Validators.required
      ]),
      cardNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(16),
        Validators.maxLength(16)]),
      expiration: new FormControl('', [
        Validators.required,
        //Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)
      ]),
      securityCode: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(3)
      ])
    });
  }

  onSubmit() : boolean {
    return this.submitted;
  }

  onReset() {
    this.cardForm.reset();
  }

}
