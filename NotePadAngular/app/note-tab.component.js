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
var NoteTabComponent = (function () {
    function NoteTabComponent(noteService) {
        this.noteService = noteService;
    }
    NoteTabComponent.prototype.onEdit = function (note) {
        // Call edit method in service
    };
    NoteTabComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.noteService.noteChange.subscribe(function (item) { return _this.selectedNote(item); });
    };
    NoteTabComponent.prototype.selectedNote = function (note) {
        this.note = note;
    };
    NoteTabComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    NoteTabComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'note-tab',
            templateUrl: 'note-tab.component.html',
        }), 
        __metadata('design:paramtypes', [note_service_1.NoteService])
    ], NoteTabComponent);
    return NoteTabComponent;
}());
exports.NoteTabComponent = NoteTabComponent;
//# sourceMappingURL=note-tab.component.js.map