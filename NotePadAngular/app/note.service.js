"use strict";
exports.NOTES = [
    { id: 11, name: 'Shopping', body: 'Fish, Chips' },
    { id: 12, name: 'Movies', body: 'Scarface, Star Wars' },
    { id: 13, name: 'TV', body: 'South Park, Futurama, The Wire' },
    { id: 14, name: 'TODO', body: 'Gym, Clothes' },
    { id: 15, name: 'Other', body: 'blah blah' }
];
var NoteService = (function () {
    function NoteService() {
    }
    NoteService.prototype.getNotes = function () {
        return exports.NOTES;
    };
    return NoteService;
}());
exports.NoteService = NoteService;
//# sourceMappingURL=note.service.js.map