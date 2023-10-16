import express from 'express';


const app = express();

// enregistrer un middleware global
// app.use(express.json());

// Route
// Associe la requete GET /
// au listener/callback async
app.get('/', (req, res) => {
  // req hérite de http.IncomingMessage
  // res hérite de http.ServerResponse
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain');
  res.write('Hello, world !');
  res.end(); // on ne peut pas appeler 2 fois .end() (le 2e appel fait une erreur)
});

// Route avec un paramètre (:name est à remplacer par un valeur dans l'URL)
// ex: /hello/Romain
app.get('/hello/:name', (req, res) => {
  // pour faire une réponse json on appelle directement res.json qui va :
  // - sérialiser et écrire dans la réponse le JSON (pas besoin d'appeler JSON.stringify)
  // - définir le content-type à application/json
  // - appeler end
  res.json({ data: `Hello, ${req.params.name} !` });
});

// express.json() est middleware (plugin)
// on peut l'enregistrer pour une route comme ceci :
app.post('/users', express.json(), (req, res) => {
  console.log('Todo insert', req.body);
  res.json({ msg: 'OK' }); // ne pas appeler 2 fois (.json appelle .end)
});

app.listen(8080, () => {
  console.log('server started on port 8080');
});
