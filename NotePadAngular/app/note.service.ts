
import {OnInit} from '@angular/core'
import { Note } from './note';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import {Observer} from 'rxjs/Observer';
import { Injectable } from '@angular/core';

// TODO Replace with real server call
export const NOTES: Note[] = [
  {id: 11, name: 'Shopping', body: 'Fish, Chips'},
  {id: 12, name: 'Movies', body:  'Scarface, Star Wars'},
  {id: 13, name: 'TV', body:  'South Park, Futurama, The Wire'},
  {id: 14, name: 'TODO', body: 'Gym, Clothes'},
  {id: 15, name: 'Other', body:'blah blah'}
];

@Injectable()
export class NoteService {
  // Represents the class sending
  noteChange: Observable<Note>;

  // Represents the class receiving
  private observer: Observer<Note>;

  /**
   * Sets up event for when the selected note changes
   */
  constructor() {
     // share() allows multiple subscribers
    this.noteChange = new Observable(observer =>
      this.observer = observer).share();
  }

  /**
  * Return the list of notes for the list
  */
  getNotes() : Note[] {
    return NOTES;
  }
  /**
   * When the selected note changes, tell subscribers
   */
  changeSelectedNote(number) {
    this.observer.next(number);
  }
}
