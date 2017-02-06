import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core'

import {Note} from './note'
import {NoteTabComponent} from './note-tab.component'
import {NoteService} from './note.service'

@Component({
  moduleId: module.id,
  selector: 'note-list',
  templateUrl: 'note-list.component.html'
})
export class NoteListComponent {
  notes: Note[];

  selected: Note;
  selectedSubscription: any

  onSelect(note: Note): void {
    this.noteService.changeSelectedNote(note);
  }

  constructor(private noteService: NoteService) {
  }

  ngOnInit() {
    this.selected = this.noteService.getSelectedNote();
    this.notes = this.noteService.getNotes();
    this.selectedSubscription = this.noteService.noteChange.subscribe(
      item => this.selected = item);
  }

}
