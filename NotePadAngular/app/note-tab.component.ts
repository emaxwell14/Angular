import { Component, Input, Output, EventEmitter} from '@angular/core';

import { Note } from './note';

@Component({
  moduleId: module.id,
  selector: 'note-tab',
  templateUrl: 'note-tab.component.html'
})
export class NoteTabComponent {
   @Input() note: Note;
   @Output() noteChange: EventEmitter<Note> = new EventEmitter<Note>();


   onChange(note: Note): void {
     this.noteChange.emit(note);
   }

}
