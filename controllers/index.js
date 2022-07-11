
const User = require('../models/User.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

exports.findAllUsers = (req,res)=>{
    const findUsers = async () =>{
        try { let data = await User.find();
            res.json(data);}
        catch(error){
            res.json(error)
        }
    }
    findUsers();
}

exports.findOneUser = (req,res)=>{
    const id = req.params.id;
    const findOneUser = async () => {
        try {
            let data = await User.findById(id);
            res.status(200).json(data);
        }
        catch(error){
            res.status(400).json(error)
        }
    }
    findOneUser();
}

exports.updateUser = (req,res)=>{
    const updateUser = async () => {
        try {
            let data = await User.updateOne({"name": "duran"}, {"name":"jean"});
            res.status(200).json(data);
        }
        catch(error){
            res.status(400).json(error)
        }
  
    }
    updateUser();
  }


exports.signUp = async (req, res)=>{
    const name = req.body.name;
    const password = req.body.password;

    const passworHash = bcrypt.hashSync(password, saltRounds);

    const newUser = new User({
        name,
        password: passworHash
    })

    try{
        await newUser.save();
        res.status(201).json({ message: 'utilisateur enregistré!'})
    }
    catch(error){
        res.status(400).json({error})
    }
}


exports.signIn = async (req,res)=>{

    const { name, password } = req.body;

    try{
         let data = await User.findOne({name: name});

         if (data.name === name){
            let checkPassword = await bcrypt.compare(password, data.password)
           
            if (checkPassword){
                const token = jwt.sign(
                    {   name,
                        exp: Math.floor(Date.now() / 1000) + 600},
                        'secret'
                );

                res.status(200).json({message:"utilisateur connecté", token})
            }
            else{res.status(400).json({message:"utilisateur non connecté"})}
         }

    }
    catch(error){
        res.status(400).json({error,message:"aucun utilisateur trouvé"})
    }

}


