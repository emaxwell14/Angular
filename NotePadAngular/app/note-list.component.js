"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var note_service_1 = require('./note.service');
/**
* Class for the list of notes.
* For each note a list element is created with its name and details. When
* clicked the current note is updated in the Note
*/
var NoteListComponent = (function () {
    /**
    * Constructor creates the NoteService
    */
    function NoteListComponent(noteService) {
        this.noteService = noteService;
    }
    /**
    * Calls the service to update the selected note
    */
    NoteListComponent.prototype.onSelect = function (note) {
        this.noteService.changeSelectedNote(note);
    };
    /**
    * Get the list of notes from the service
    */
    NoteListComponent.prototype.ngOnInit = function () {
        this.notes = this.noteService.getNotes();
    };
    NoteListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'note-list',
            templateUrl: 'note-list.component.html'
        }), 
        __metadata('design:paramtypes', [note_service_1.NoteService])
    ], NoteListComponent);
    return NoteListComponent;
}());
exports.NoteListComponent = NoteListComponent;
//# sourceMappingURL=note-list.component.js.map