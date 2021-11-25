const request = require("request-promise"),
  URL = "https://jsonplaceholder.typicode.com/todos";

request({
  uri: URL,
  json: true,
}).then((todos) => {
  todos.forEach((props) => {
    console.log(`Title: ${props.title} (${(props.completed
      ? "Completed"
      : "Not Completed")})
    -id :(${props.id})   
    -userId: (${props.userId})                                  
                      `);
  });
});
