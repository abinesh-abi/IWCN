const conn = require("../db/connection");

module.exports = {
  getNotes: (req, res) => {
    conn.query("SELECT * FROM notes", (err, data, fields) => {
      if (err) return res.json({ status: "failed",err }).status(500);

     return res.status(200).json({
        status: "success",
        data,
      });
    });
  },
  createNotes: (req, res) => {
    if (!req.body)
      return res.json({ status: "failed", msg: "no form data" }).status(400);
    const value = [req.body.value];
    conn.query(
      "INSERT INTO notes (value) VALUES(?)",
      [value],
      function (err, data, fields) {
        if (err){
           return res.json({ status: "failed", msg: "error",err});
        }         
        return res.status(201).json({
          status: "success",
          meg: "note Created",
        });
      }
    );
  },
  deleteNote: (req, res, next) => {
    if (!req.params.id) res.json({ status: "failed", msg: "no form data" }).status(400);
    conn.query(
      "DELETE FROM notes WHERE id=?",
      [req.params.id],
      function (err) {
        if (err) return res.json({ status: "failed", msg: "error", err});
         return res.status(201).json({
          status: "success",
          msg: "notes deleted!",
        });
      }
    );
  },
};
