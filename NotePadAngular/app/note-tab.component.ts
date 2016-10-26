import { Component, Input, Output, EventEmitter} from '@angular/core';

import { Note } from './note';
import { NoteService } from './note.service';

@Component({
  moduleId: module.id,
  selector: 'note-tab',
  templateUrl: 'note-tab.component.html',
})
export class NoteTabComponent {
   note: Note;

   onEdit(note: Note): void {
     // Call edit method in service
   }

   subscription: any
   constructor (private noteService: NoteService) {}

   ngOnInit() {
     this.subscription = this.noteService.noteChange.subscribe(
       item => this.selectedNote(item));
   }

   selectedNote(note: Note) {
    this.note = note;
  }

   ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
