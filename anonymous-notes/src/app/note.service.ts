import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Note } from './note';
import "rxjs";
import { Observable } from "rxjs";

@Injectable()
export class NoteService {

   notes = [];

   constructor(private _http: Http) { }

   retrieveNotes(notes: Note) {
      console.log("service > retrieve")
      return this._http.get('/notes')
      .map(data => data.json()).toPromise()
   }

   createNote(note: Note){
      console.log("service > create")
      return this._http.post('/notes', note)
      .map(data => data.json()).toPromise()
   }



}
