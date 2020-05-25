import 'dotenv/config';
import express from 'express';
const server = express();
const PORT = 3333;
import consign from 'consign';


server.use(express.urlencoded({extended: true}));
server.use(express.json());

consign()
  .include('./src/config')
  .then('./src/app/jobs')
  .then('./src/app/lib')
  .then('./src/app/models')
  .then('./src/app/controllers')
  .then('./src/routes.js')
  .into(server)
;
console.log(server.src)

server.listen(3333, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})