// TODO replace
import {OnInit} from '@angular/core'

import { Note } from './note';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import {Observer} from 'rxjs/Observer';

export const NOTES: Note[] = [
  {id: 11, name: 'Shopping', body: 'Fish, Chips'},
  {id: 12, name: 'Movies', body:  'Scarface, Star Wars'},
  {id: 13, name: 'TV', body:  'South Park, Futurama, The Wire'},
  {id: 14, name: 'TODO', body: 'Gym, Clothes'},
  {id: 15, name: 'Other', body:'blah blah'}
];


export class NoteService implements OnInit{
  selectedNote: Note;

  // Represents the class sending
  noteChange: Observable<Note>;
  // Represents the class receiving
  private observer: Observer<Note>;

  constructor() {
     // share() allows multiple subscribers
    this.noteChange = new Observable(observer =>
      this.observer = observer).share();
   }

   ngOnInit() {
     this.selectedNote = NOTES[0];
     this.changeSelectedNote(NOTES[0]);
   }


  getNotes() : Note[] {
    return NOTES;
  }

  changeSelectedNote(number) {
     this.selectedNote = number;
     this.observer.next(number);
   }
   getSelectedNote() {
     return this.selectedNote;
   }
}
