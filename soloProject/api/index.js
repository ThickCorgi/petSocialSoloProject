const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User");
const Post = require("./models/Post");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
// const multer  = require('multer')
// const upload = multer({ dest: 'uploads/' })

const app = express();

// randomly created
const salt = bcrypt.genSaltSync(10);
//secrete toke for jwt
const secret = 'aksdfjaskldj3lakj1123'

//when using creditional you need specify more information
app.use(cors({credentials: true, origin:'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser())

//connect to mongodb

mongoose.connect(
  `mongodb+srv://testingdb:testingdb@cluster0.gs1nz9c.mongodb.net/`
);

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (err) {
    res.status(400).json(err.message);
  }
});


app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.findOne({username});
    const verified = bcrypt.compareSync(password, userDoc.password)
    if(verified){
        //logges in with username, id, as `userInfo`***
        jwt.sign({username, id:userDoc._id}, secret, {} , (err, token)=>{
            if(err) throw err;
            res.cookie('token', token).json({
                //sending userInfo to login page
                id: userDoc._id,
                username,
                testSend: "we in here"
            })
        })
    }else {
        res.status(400).json('wrong password')
    }
    // res.json(verified)
  } catch (err) {
    res.status(400).json(err.message);
  }
});




app.get('/profile', (req,res)=>{
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, (err, info)=>{
        if(err) throw err;
        res.json(info)
    })
})

app.post('/logout', (req,res)=>{
    //setting cookie token to empty 
    res.cookie('token', '').json('ok')
})

app.post('/create', (req,res)=>{
    //the request we pulled has the info sent from response at /create
    // const {titlename, author,  date, content} = req.body

    
    res.json(`ok`)
    
    // try{
        
    //     // const newPost = await Post.create({
    //     //     titlename,
    //     //     author,
    //     //     date,
    //     //     content,
    //     //     image: req.files.path,
    //     // })

    //     // await newPost.save();

    //     // res.json(newPost)

    // } catch (err) {
    //     res.status(404).json(err.message)
    // }
})
app.listen(4000);

// mongodb+srv://testingdb:testingdb@cluster0.gs1nz9c.mongodb.net/
