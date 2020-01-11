let model = require('../models');
let bcrypt = require('bcryptjs');
let crypto = require('crypto');
exports.registerUsers = async (req,res) =>{
    try{
        let data = await req.body;
        console.log(data)
        await model["users"].findOrCreate({
                where: {
                    userName : data.userName,
                    displayName : data.displayName
                },
                defaults : {
                    authId : data.authId,
                    password : data.password,
                    displayName : data.displayName,
                    email : data.email,
                    phoneNumber : data.phoneNumber,
                    location : data.location
                }
            }).spread((user,created) => {
                if(created === false){
                    res.status(200);
                    res.send({
                        message : "User already created",
                    });
                    console.log("User already created")
                } else {
                    let token = crypto.randomBytes(64)
                        .toString('base64')
                        .replace(/\+/g, '-')
                        .replace(/\//g, '_')
                        .replace(/=/g, '');
                    console.log(user)
                    console.log(user.id)
                    model['tokens'].findOrCreate({
                        where : {
                            userId : user.id
                        },defaults : {
                            authId : user.authId,
                            token : token
                        }
                    }).spread((token,login)=>{
                        res.status(201);
                        res.send({
                            message : "user created success",
                            data : user
                        })
                        console.log("user created success")
                    })
                }
            }).catch((error)=>{
                if (error.name === "Error"){
                    res.sendStatus(400);
                    console.log("[register]",error.message)
                } else if (error.name === "TypeError"){
                    res.sendStatus(400)
                    console.log("[register]",error.message)
                }  else if (error.name === "SequelizeHostNotReachableError") {
                    res.status(400)
                    res.send({
                        message: "connection refused"
                    })
                }  else{
                    res.sendStatus(400)
                    console.log("[register]",error.name,error.message)
                }
            });

    } catch(error)  {
        if (error.name === "Error"){
            res.status(400);
            res.send({
                message : "Signature is wrong"
            }) } else if (error.name === "TypeError"){
            console.log(error.name)
            res.status(403)
            res.send({
                message : "Bad request"
            })
        }  else if (error.name === "SequelizeHostNotReachableError") {
            res.status(400)
            res.send({
                message: "connection refused"
            })
        } else {
            res.status(400);
            console.log("[register]",error.name,error.message)
        }
    }
}