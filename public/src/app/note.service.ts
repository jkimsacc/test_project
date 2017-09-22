import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Note } from './note';
import "rxjs";
import { Observable } from "rxjs";
import { BehaviorSubject } from "rxjs/Rx";

@Injectable()
export class NoteService {

   notes:Array<Note> = [];
   noteObserver = new BehaviorSubject(this.notes)

   constructor(private _http: Http) { }

   createNote(note: Note){
      console.log("service > create")
      return this._http.post('/notes', note)
      .map(data => data.json()).toPromise()
   }

   retrieveNotes() {
      return this._http.get('/notes')
      .subscribe(
         (res) => {
            console.log("service > retrieve");
            this.notes = res.json();
            this.noteObserver.next(this.notes)
         },
         (err) => {
            console.log(err);
         },
      )
   }
}
