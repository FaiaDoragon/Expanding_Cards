const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.pagePath = {
            page: '/home'
        }
        //middleware
        this.middlewares();

        //rutas de mi aplicacion
        this.routes();
    }

    middlewares(){

        //CORS
        this.app.use(cors());

        //Lectura y parseo del body
        this.app.use( express.json( ));

        //Directorio publico
        this.app.use(express.static('public'));
        
    }

    routes() {

        this.app.use(this.pagePath.page, require('../routes/rutas'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto:`, this.port);
        });
    }

}

module.exports = Server;    