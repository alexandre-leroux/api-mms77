var express = require('express');
const app = express();
const  {findAllUsers,findOneUser,updateUser,signUp, signIn}  = require('../controllers/index.js');
var router = express.Router();
const checkToken = require('../middleware/checkToken.js');





router.post('/add-user', signUp)

router.get('/users', findAllUsers )

router.get('/user/:id', findOneUser )

router.put('/update-user', updateUser)

router.get('/sign-in', signIn)



module.exports = router;
