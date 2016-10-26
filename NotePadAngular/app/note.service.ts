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

  // TODO implement change method
  noteListChange: Observable<Note[]>;
  private observerNotes: Observer<Note[]>;


  constructor() {
     this.noteChange = new Observable(observer =>
      this.observer = observer).share();
     // share() allows multiple subscribers

     this.noteListChange = new Observable(observer =>
       this.observerNotes = observer).share();
   }

   ngOnInit() {
     this.selectedNote = NOTES[0];
     this.changeNote(NOTES[0]);

     this.observerNotes.next(NOTES);
   }


  getNotes() : Note[] {
    return NOTES;
  }

  changeNote(number) {
     this.selectedNote = number;
     this.observer.next(number);
   }
   getSelectedNote() {
     return this.selectedNote;
   }


}
