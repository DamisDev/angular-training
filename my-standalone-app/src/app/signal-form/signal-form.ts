
import { Component, signal } from '@angular/core';
import { ApiService } from '../services/api';

@Component({
  selector: 'app-signal-form',
  standalone: true,
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
    this.api.sendData({ name: this.name(), email: this.email() }).subscribe(res => {
      console.log('Risposta API:', res);
    });
  }
}
