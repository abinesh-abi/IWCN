let express = require('express')
let app = express()
let cors = require('cors')
const notes = require('./controller/notes')


app.use(cors())
app.use(express.json())

app.post('/note',notes.createNotes)
app.get('/notes',notes.getNotes)
app.delete('/note/:id',notes.deleteNote)

app.listen(8000,()=>console.log('server runnig'))