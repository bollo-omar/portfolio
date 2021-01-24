import { server} from './Config/index';

import express from 'express';

async function startServer(){
     const app = express();
     
     try{

          require('./Loader/index')(app);
          
          await app.listen(server.port, () => {
               console.log(`App running on port : ${server.port}. Press CTRL + C to stop`);         
          });
     }
     catch(err){
          console.log(err.message);
     }

}

startServer();