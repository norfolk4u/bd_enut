//import Note from "./models/Note";

export default (io) => {
  io.on("connection", (socket) => {
    // console.log(socket.handshake.url);
    console.log("nuevo socket connectado:", socket.id);
    /*
    // Send all messages to the client
    const emitNotes = async () => {
      const notes = await Note.find();
      socket.emit("server:loadnotes", notes);
    };
    emitNotes();

    socket.on("client:newnote", async (data) => {
      const newNote = new Note(data);
      const savedNote = await newNote.save();
      io.emit("server:newnote", savedNote);
    });

    socket.on("client:deletenote", async (noteId) => {
      await Note.findByIdAndDelete(noteId);
      const notes = await Note.find();
      io.emit("server:loadnotes", notes);
    });

    socket.on("client:getnote", async (noteId) => {
      const note = await Note.findById(noteId);
      socket.emit("server:selectednote", note);
    });

    socket.on("client:updatenote", async (updatedNote) => {
      await Note.findByIdAndUpdate(updatedNote._id, {
        title: updatedNote.title,
        description: updatedNote.description,
      });
      emitNotes();
    });
    */
    socket.on("serverPHP:msg", async (msg) => {
          
        console.log(msg);
        //Recibe desde PHP  y Emite a los clientes
        io.emit("serverNode:msg", msg);

    });


    socket.on("disconnect", () => {
      console.log(socket.id, "disconnected");
    });
  });
};