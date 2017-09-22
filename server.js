let express = require("express");
let app = express();

let mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/noteSchema');
let NoteSchema = new mongoose.Schema({
   note: { type: String, require: true },
}, { timestamps: { createdAt: 'created_at'} });
mongoose.model("Note", NoteSchema);
let Note = mongoose.model("Note");

const path = require("path");

let bodyParser = require("body-parser")
// app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public/dist'));


app.get("/notes", (req, res, next) => {
   Note.find({}, null, {sort: '-created_at'}, function(err, notes){
      console.log("server > get '/notes/'" + notes)
      res.json(notes)
   })

})

app.post("/notes", (req, res, next) => {
   console.log("server > create");
   let noteInstance = new Note(req.body);
   noteInstance.save(function(err){
      if (err){
         return res.json(err)
      }
      Note.find({}, null, {sort: '-created_at'}, function(err, notes){
         res.json(notes);
      })
   })
})

app.all("*", (req, res, next) => {
   res.sendfile(path.resolve("./public/dist/index.html"))
})

app.listen(1337, ()=> console.log("listening to 1337"))
