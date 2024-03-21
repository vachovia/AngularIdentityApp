import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-validation-messages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './validation-messages.component.html',
  styleUrl: './validation-messages.component.scss',
})
export class ValidationMessagesComponent {
  @Input() errorMessages: string[] | undefined;
}
