const express = require("express");
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
app.use(express.static("public"));

app.get("/", (req, res, next) => {

  let numBig = false;
  let number = 12;

  if(number > 15){
    numBig = true;
  }

  let animals = [{name:"dog"}, {name:"cat"}, {name:"hippopotamus"}, {name:"opossum"}, {name:"monitor lizard"}, {name:"shark"}]

  let newAnimals = animals.map((eachAni)=>{
    if(eachAni.name.length > 3){
      return {name: eachAni.name, long: true}

    } else {
      return {name: eachAni.name, long: false}
    }
  });

  console.log(newAnimals);


  res.render("index", {name: 'ironhacker', bootcamp: 'ironhack web dev', numBig:numBig, aniArray: newAnimals});
});

app.listen(3000);
