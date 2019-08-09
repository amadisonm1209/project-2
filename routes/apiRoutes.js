var db = require("../models");

module.exports = function(app) {
  app.get("/flavors", function(req, res) {

    db.Distillery.findAll({}).then(function(res) {
      // results are available to us inside the .then
      res.json(res);
      console.log(res);
    });

  //   db.Alcohol.findAll({
  //       where: {
  //           flavor: req.body.flavor
  //       },
  //     include: [db.Distillery]
  //   }).then(function(dbAlcohol) {
  //     res.json(dbAlcohol);
  //   });
  // });

  // app.post("/flavors/:id", function(req, res) {
  //   db.Alcohol.create(req.body).then(function(dbAlcohol) {
  //     res.json(dbAlcohol);
  //   });
  });

  // app.get("/type", function(req, res) {

  //   db.Alcohol.findAll({
  //       where: {
  //         alcoholType: req.body.type
  //       },
  //     include: [db.Distillery]
  //   }).then(function(dbAlcohol) {
  //     res.json(dbAlcohol);
  //   });
  // });

  // app.post("/type", function(req, res) {
  //   db.Alcohol.create(req.body).then(function(dbAlcohol) {
  //     res.json(dbAlcohol);
  //   });
  // });

  // app.get("/locations", function(req, res) {

  //   db.Distillery.findAll({
  //       where: {
  //           city: req.body.city
  //       },
  //     include: [db.Alcohol]
  //   }).then(function(dbDistillery) {
  //     res.json(dbDistillery);
  //   });
  // });

  // app.post("/locations", function(req, res) {
  //   db.Distillery.create(req.body).then(function(dbDistillery) {
  //     res.json(dbDistillery);
  //   });
  // });

  app.get("/api/distillery/:distId", function(req, res) {
    db.Alcohol.findAll({
      where: {
        DistilleryId: req.params.distId
      }
    }).then(function(alcohols) {
      res.json(alcohols)
    })
  })

  app.get("/api/alcohol/ratings/:AlcoholId", function(req, res) {
    db.UserRating.findOne({
      where: {
        AlcoholId: req.params.AlcoholId
      }, include: [db.Alcohol]
    }).then(function(alcohol) {
      res.json(alcohol);
    })
  });

  app.post("/api/flavors/:flavor", function(req, res) {
    console.log("flavor route hit");
    console.log(req.params);
   db.Alcohol.findAll({
        where: {
            flavor: req.params.flavor
        },
      include: [db.Distillery]
    }).then(function(dbAlcohol) {
      console.log("we found alcohol", dbAlcohol);
 
      res.json(dbAlcohol);
 
      // res.json(dbAlcohol);
  
    });
  });
};