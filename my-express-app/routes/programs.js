var express = require('express');
var router = express.Router();
const db = require("../model/helper");

// GET programs by patienId
router.get("/:id", async function(req, res, next) {
 let patientId = req.params.id
//  let programId = req.params.programId;

  try {
    let results = await db(`SELECT * FROM programs WHERE patientId = ${patientId}`);
    let programs = results.data;
    // if (programs.length === 0) {
    
    //   res.status(404).send({ error: "Programs not found" });
    // } else {
    //   res.send(programs);
    // }
    res.send(programs);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// GET each program
router.get("/:patientId/:programId", async function(req, res, next) {
  let patientId = req.params.patientId
  let programId = req.params.programId;
 
   try {
     let results = await db(`SELECT * 
     FROM programs
     WHERE patientId = ${patientId} AND id = ${programId}
    `);

     let programs = results.data;
     // if (programs.length === 0) {
     
     //   res.status(404).send({ error: "Programs not found" });
     // } else {
     //   res.send(programs);
     // }
     res.send(programs);
   } catch (err) {
     res.status(500).send({ error: err.message });
   }
 });
 
// // GET all programs 
router.get("/", async function(req, res, next) {
 
  try {
    let results = await db('SELECT * FROM programs');
    let programs = results.data;
  //   if (exercises.length === 0) {
  //     //students array is empty so no students found
  //     res.status(404).send({ error: "Exercises not found" });
  //   } else {
  //     res.send(exercises);
  //   }
    res.send(programs);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// GET data of a program (all its exercises)
router.get("/:programId", async function(req, res, next) {
    let index = req.params.programId;
  
    try {
      let results = await db(`SELECT * FROM exercises
      WHERE programId = ${index}
     `);
  
      let exercises = results.data;
    //   if (exercises.length === 0) {
    //     //students array is empty so no students found
    //     res.status(404).send({ error: "Exercises not found" });
    //   } else {
    //     res.send(exercises);
    //   }
      res.send(exercises);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  });

  //post a new program
    router.post("/:patientId", async (req, res, next) => {
    let { programTitle, creationDate } = req.body;
    let patientId = req.params.patientId
    let sql = `
        INSERT INTO programs (programTitle, creationDate, patientId)
        VALUES ('${programTitle}','${creationDate}', ${patientId})
    `;
  
    try {
        await db(sql);
        let result = await db('SELECT * FROM programs');
        let programs = result.data;
        res.status(201).send(programs);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
  });
  
  //delete a program
  router.delete("/:id", async (req, res, next) => {
    let index = req.params.id;
  
    try {
        let result = await db(`SELECT * FROM programs WHERE id = ${index}`);
        if (result.data.length === 0) {
            res.status(404).send({ error: 'Program not found' });
        } else {
            await db(`DELETE FROM programs WHERE id = ${index}`);
            let result = await db('SELECT * FROM programs');
            let programs = result.data;
            res.send(programs);
        } 
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
  });
  
  //modify a program
  router.put("/:id", async (req, res, next) => {
    let index = req.params.id;
    let { programTitle } = req.body;
  
    try {
        let result = await db(`SELECT * FROM programs WHERE id = ${index}`);
        if (result.data.length === 0) {
            res.status(404).send({ error: 'Program not found' });
        } else {
            let sql = `
                UPDATE programs 
                SET programTitle = '${programTitle}'
                WHERE id = ${index}
            `;
  
            await db(sql);
            let result = await db('SELECT * FROM programs');
            let programs = result.data;
            res.send(programs);
        }
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
  });
  

  module.exports = router