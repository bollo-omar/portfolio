import dotenv from 'dotenv';

dotenv.config();

module.exports = {

    server : {
        
        port : process.env.PORT || process.env._PORT      
        
    },

    auth : {

        SECRET : process.env.SECRET,
        
    },

    env : process.env.NODE_ENV || "development"
}