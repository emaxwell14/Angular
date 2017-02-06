import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core'

import {Note} from './note'
import {NoteTabComponent} from './note-tab.component'
import {NoteService} from './note.service'

/**
* Class for the list of notes.
* For each note a list element is created with its name and details. When
* clicked the current note is updated in the Note
*/
@Component({
  moduleId: module.id,
  selector: 'note-list',
  templateUrl: 'note-list.component.html'
})
export class NoteListComponent {
  notes: Note[];

  /**
  * Constructor creates the NoteService
  */
  constructor(private noteService: NoteService) {
  }

  /**
  * Calls the service to update the selected note
  */
  onSelect(note: Note): void {
    this.noteService.changeSelectedNote(note);
  }

  /**
  * Get the list of notes from the service
  */
  ngOnInit() {
    this.notes = this.noteService.getNotes();
  }

}
