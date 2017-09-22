import { Component, OnInit } from '@angular/core';
import { NoteService } from './../note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

   notes = [];

   constructor(private _noteService: NoteService) { }

   ngOnInit() {
      this.getNotes();
   }

   getNotes(){
      this._noteService.retrieveNotes()
      .then(notes => this.notes = notes)
   }

}
