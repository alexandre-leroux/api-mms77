var express = require('express');
const app = express();
var router = express.Router();









// Verify route
router.get('/one', (req, res) => {

    res.status(200).json({

        "message": "bien arrivé"
  
});

})
module.exports = router;