const fs = require("fs");
const faker = require("faker");

randomName = () => {
  names = "";
  for ( i = 0; i < 1000; i++) {
    names += `${faker.name.findName() + "\n"}`;
  }
  return names;
}


fs.writeFile("names.txt", randomName(), (err) => {
  if (err) {
  return console.error(err);
  }else{
    console.log("El proceso ha terminado satisfactoriamente");
  }
});
