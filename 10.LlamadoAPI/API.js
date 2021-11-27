const https = require("https");

const options = {
  hostname: "jsonplaceholder.typicode.com",
  port: 443,
  path: "/todos",
  method: "GET",
};

const req = https.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);

  const showToDo = (pToDo) => {
    console.log(
      `Título: ${pToDo.title} (${
        pToDo.completed ? "completed" : "No completed"
      })
      - id: ${pToDo.id}
      - userId: ${pToDo.userId}
      `
    );
  };

  let data = [];
  res.on("data", (d) => {
    data.push(d);
  });
  res.on("end", () => {
    const toDos = JSON.parse(Buffer.concat(data).toString());
    toDos.forEach((el) => {
      showToDo(el);
    });
  });
});

req.on("error", (error) => {
  "error";
});

req.end();
