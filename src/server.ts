import express from 'express'
import routes from './routes';



const app = express();

app.use(express.json());

app.use(routes)

// Executa o servidor na porta 3000
app.listen(3333)


// app.get('/', (request, response) => response.send('Hello World'))
