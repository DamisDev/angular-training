
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api';

@Component({
  selector: 'app-signal-form',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h2>Signal Form</h2>
    <form (ngSubmit)="submit()">
      <input [value]="name()" (input)="name.set($event.target.value)" placeholder="Nome" />
      <input [value]="email()" (input)="email.set($event.target.value)" placeholder="Email" />
      <button type="submit" >Invia</button>
    </form>
    <p>Nome: {{ name() }}</p>
    <p>Email: {{ email() }}</p>
  `
})
export class SignalFormComponent {
  name = signal('');
  email = signal('');

  constructor(private api: ApiService) {}

  submit() {
    // Log immediately so we see the submit action even if the request fails
    console.log('Invio dati', { name: this.name(), email: this.email() });

    this.api.sendData({ name: this.name(), email: this.email() }).subscribe({
      next: res => console.log('Risposta API:', res),
      error: err => console.error('Errore API:', err)
    });
  }
}
