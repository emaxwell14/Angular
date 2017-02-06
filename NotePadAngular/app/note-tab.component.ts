import { Component, Input, Output, EventEmitter} from '@angular/core';

import { Note } from './note';
import { NoteService } from './note.service';

/**
* Component for editing a note. It has twoway binding on the note name and body.
* It is subscribed to the selected note event.
*/
@Component({
  moduleId: module.id,
  selector: 'note-tab',
  templateUrl: 'note-tab.component.html',
})
export class NoteTabComponent {
   note: Note
   subscription: any
   titleEdit: boolean

   constructor (private noteService: NoteService) {
   }

   /**
   * Subscribes to the note change event in the noteService. Clear the
   * edit title boolean.
   */
   ngOnInit() {
     // TODO better way to get default
     this.note = this.noteService.getNotes()[0];

     this.subscription = this.noteService.noteChange.subscribe(
     item => this.note = item);
     this.titleEdit = false;
   }

   ngOnDestroy() {
     this.subscription.unsubscribe();
   }

   /**
   * Called when the title is clicked. The boolean shows and hides the text area
   * for editing
   */
   toggleTitleEdit() {
     this.titleEdit = !this.titleEdit;
   }
}
