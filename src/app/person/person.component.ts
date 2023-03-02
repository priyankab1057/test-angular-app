import { Component } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  personDetails? :Person;
  selectedPerson() {
    this.personDetails = { id: 1, name: 'Riya' };
  }
 

}
