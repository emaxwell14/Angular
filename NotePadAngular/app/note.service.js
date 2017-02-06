"use strict";
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/share');
exports.NOTES = [
    { id: 11, name: 'Shopping', body: 'Fish, Chips' },
    { id: 12, name: 'Movies', body: 'Scarface, Star Wars' },
    { id: 13, name: 'TV', body: 'South Park, Futurama, The Wire' },
    { id: 14, name: 'TODO', body: 'Gym, Clothes' },
    { id: 15, name: 'Other', body: 'blah blah' }
];
var NoteService = (function () {
    function NoteService() {
        var _this = this;
        // share() allows multiple subscribers
        this.noteChange = new Observable_1.Observable(function (observer) {
            return _this.observer = observer;
        }).share();
    }
    NoteService.prototype.ngOnInit = function () {
        this.selectedNote = exports.NOTES[0];
        this.changeSelectedNote(exports.NOTES[0]);
    };
    NoteService.prototype.getNotes = function () {
        return exports.NOTES;
    };
    NoteService.prototype.changeSelectedNote = function (number) {
        this.selectedNote = number;
        this.observer.next(number);
    };
    NoteService.prototype.getSelectedNote = function () {
        return this.selectedNote;
    };
    return NoteService;
}());
exports.NoteService = NoteService;
//# sourceMappingURL=note.service.js.map