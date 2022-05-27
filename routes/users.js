var express = require('express');
var router = express.Router();
const controller = require('../controllers/users');

/* GET users listing. */
router.get('/', async (req, res, next) => {
    try{
        const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
        const page = req.query.page ? parseInt(req.query.page): 0;
        
        res.json(await controller.getAllUsers(pageSize, page));

    }catch(error){
        res.status(400).json(error.message)
    }
});


router.get('/comments/:id', async (req, res) =>{
    try{
        const id = req.params.id
        const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
        const page = req.query.page ? parseInt(req.query.page): 0

        res.json(await controller.getUserComments(id, pageSize, page))

    }catch(error){
        res.status(400).json(error.message)
    }
})

module.exports = router;
