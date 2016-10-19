// TODO replace
import { Note } from './note';

export const NOTES: Note[] = [
  {id: 11, name: 'Shopping', body: 'Fish, Chips'},
  {id: 12, name: 'Movies', body:  'Scarface, Star Wars'},
  {id: 13, name: 'TV', body:  'South Park, Futurama, The Wire'},
  {id: 14, name: 'TODO', body: 'Gym, Clothes'},
  {id: 15, name: 'Other', body:'blah blah'}
];


export class NoteService {

  getNotes() : Note[] {
    return NOTES;
  }
}
