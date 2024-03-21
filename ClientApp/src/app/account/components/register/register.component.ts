import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AccountService } from '../../account.service';
import { Router } from '@angular/router';
import { SharedService } from '../../../shared/shared.service';
import { ValidationMessagesComponent } from '../../../shared/components';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ValidationMessagesComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit, OnDestroy {
  registerForm: FormGroup = new FormGroup({});
  submitted = false;
  errorMessages: string[] = [];
  sub?: Subscription;

  constructor(
    private accountService: AccountService,
    private sharedService: SharedService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.registerForm = this.formBuilder.group({
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15),
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$'),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(15),
        ],
      ],
    });
  }

  register() {
    this.submitted = true;
    this.errorMessages = [];

    if (this.registerForm.valid) {
      this.sub = this.accountService
        .register(this.registerForm.value)
        .subscribe({
          next: (response: any) => {
            this.sharedService.showNotification(
              true,
              response.value.title,
              response.value.message
            );
            this.router.navigateByUrl('/login');
          },
          error: (error) => {
            if (error.error.errors) {
              this.errorMessages = error.error.errors;
            } else {
              this.errorMessages.push(error.error);
            }
          },
        });
    }
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
