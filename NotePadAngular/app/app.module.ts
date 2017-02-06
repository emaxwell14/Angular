import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}   from './app.component';
import {NoteListComponent} from './note-list.component';
import {NoteTabComponent} from './note-tab.component';
import {NoteBookComponent} from './note-book.component';
import {NoteService} from './note.service';
import { FormsModule }   from '@angular/forms';


@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, NoteListComponent, NoteTabComponent,
  NoteBookComponent],
  bootstrap: [AppComponent],
  providers: [NoteService]
})
export class AppModule{}
