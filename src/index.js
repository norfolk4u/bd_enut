import app from './app';

// Inicia el servidor y guarda la instancia del servidor
const server = app.listen(app.get('port'), '127.0.0.1', () => {
    const { address, port } = server.address(); // Obtiene la dirección y el puerto
    console.log(`WEBSERVICE INCN at http://${address}:${port}`); // Muestra la dirección y el puerto
});

app.timeout = 60000; // Establece el tiempo de espera en milisegundos
