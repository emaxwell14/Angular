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
var NoteListComponent = (function () {
    function NoteListComponent(noteService) {
        this.noteService = noteService;
    }
    NoteListComponent.prototype.onSelect = function (note) {
        this.noteService.changeNote(note);
    };
    NoteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selected = this.noteService.getSelectedNote();
        this.notes = this.noteService.getNotes();
        this.subscription = this.noteService.noteListChange.subscribe(function (item) { return _this.notes = item; });
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