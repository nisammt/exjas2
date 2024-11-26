const express = require('express')
const app = express();

const port =  3000;

app.use(express.json());

const task = [];
let id = 1;

app.get("/", (request, response) => {
  response.status(200).send(task);
});

app.post("/", (request, response) => {
  const  title  = request.body;
  console.log(title)
  const newtsk = { _id: id++, title };

  task.push(newtsk);

  response.status(201).send(task);
});

app.put("/:id", (request, response) => {
  const id = request.params.id;
  console.log(id)
  const title  = request.body;
  let newtsk = task.find((task) => task.id === id);
  if(newtsk)
  {
    newtsk = title
    response.status(202).send(newtsk);
    }
  else{
     response.send("task no found")
  }
 
});

app.delete("/:id", (request, response) => {
  const id  = request.params.id;
  const deleteTask = task.findIndex((task) => task.id === id);
  task.splice(deleteTask, 1);
  response.status(204).send("Item deleted");
});

app.listen(port,()=>{
    console.log("Server running on port ", port)

})

