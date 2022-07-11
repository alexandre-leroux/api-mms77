const mongoose = require('mongoose');

const connectDb = async () =>{
    try {
        await mongoose.connect('mongodb+srv://root:wUI09LlAAV89Y7Sl@cluster0.qrx8h.mongodb.net/?retryWrites=true&w=majority', {dbName: 'test-auth-jwt'});
        console.log('Connexion à MongoDB réussie !')
    }
    catch (error) {
        console.log(error)
    }
  } 

module.exports = {connectDb}