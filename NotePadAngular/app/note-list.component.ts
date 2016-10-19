import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core'

import {Note} from './note'
import {NoteTabComponent} from './note-tab.component'
import {NoteService} from './note.service'

@Component({
  moduleId: module.id,
  selector: 'note-list',
  templateUrl: 'note-list.component.html'
})
export class NoteListComponent{
@Input() notes: Note[];
@Input() selected: Note;
@Output() selectedChange: EventEmitter<Note> = new EventEmitter<Note>();

  onSelect(note: Note): void {
    this.selectedChange.emit(note);
  }

}
