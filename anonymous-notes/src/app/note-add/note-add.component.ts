import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NoteService } from './../note.service';
import { Note } from './../note';

@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.css'],
})

export class NoteAddComponent implements OnInit {
   newNote = new Note();
   // @Output() addNewNoteEvent = new EventEmitter();
   constructor(private _noteService: NoteService) { }

   ngOnInit() {
   }

   addNote(note: Note){
      this._noteService.createNote(note);
      this.newNote = new Note();
   }

}
