import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ApiService } from '../services/api';

@Component({
  selector: 'app-signal-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signal-form.html',
  styleUrl: './signal-form.scss'
})
export class SignalFormComponent {
  name = signal('');
  email = signal('');
  submitting = signal(false);

  constructor(private api: ApiService) {}

  submit(form: NgForm) {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    this.submitting.set(true);
    console.log('Invio dati', { name: this.name(), email: this.email() });

    this.api.sendData({ name: this.name(), email: this.email() }).subscribe({
      next: res => console.log('Risposta API:', res),
      error: err => console.error('Errore API:', err),
      complete: () => {
        this.submitting.set(false);
        this.name.set('');
        this.email.set('');
        form.resetForm();
      }
    });
  }
}
