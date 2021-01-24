import * as express from 'express'
import path from 'path';
import CORS from 'cors';
import initDBServer from '../Data/connection';
//import router from '../Routes/accounconnectionts.route';

module.exports = (app)=>{

    initDBServer();
    app.use('/',express.static(path.join(__dirname, '../../static')));
    app.use(express.urlencoded({extended : true})); 
    app.use(express.json());
    app.use(CORS());
    //app.use(router);   

    return app;
};