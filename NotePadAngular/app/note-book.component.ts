import {Component, OnInit} from '@angular/core'

import {Note} from './note'
import {NoteTabComponent} from './note-tab.component'
import {NoteService} from './note.service'

@Component({
  moduleId: module.id,
  selector: 'note-book',
  templateUrl: 'note-book.component.html'
})
export class NoteBookComponent implements OnInit{
  notes: Note[];
  selectedNote: Note;

  constructor(private noteService: NoteService){
  }

  ngOnInit(): void {
    this.notes = this.noteService.getNotes();
  }

}
