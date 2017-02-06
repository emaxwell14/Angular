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
* Component for editing a note. It has twoway binding on the note name and body.
* It is subscribed to the selected note event.
*/
var NoteTabComponent = (function () {
    function NoteTabComponent(noteService) {
        this.noteService = noteService;
    }
    /**
    * Subscribes to the note change event in the noteService. Clear the
    * edit title boolean.
    */
    NoteTabComponent.prototype.ngOnInit = function () {
        var _this = this;
        // TODO better way to get default
        this.note = this.noteService.getNotes()[0];
        this.subscription = this.noteService.noteChange.subscribe(function (item) { return _this.note = item; });
        this.titleEdit = false;
    };
    NoteTabComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    /**
    * Called when the title is clicked. The boolean shows and hides the text area
    * for editing
    */
    NoteTabComponent.prototype.toggleTitleEdit = function () {
        this.titleEdit = !this.titleEdit;
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