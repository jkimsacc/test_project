import { Component, OnInit } from '@angular/core';
import { NoteService } from './../note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

   notes = [];

   constructor(private _noteService: NoteService) {
      this._noteService.noteObserver.subscribe((notes) =>{
         this.notes = notes;
      })
      this.getNotes();
   }
   ngOnInit() {
   }
   getNotes(){
      this._noteService.retrieveNotes();
   }
}
