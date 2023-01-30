import users from "../models/User.js"

class UserSchema{
    static listUser = (req, res) => {
        users.find().
        populate('name')
        .exec((err, usersInfo) => {
            res.status(200).send(usersInfo)
          })
    }

    
    static listUserById = (req, res) => {
        const {id} = req.params
        users.findById(id)
        .populate("name")
        .exec((err, usersInfo) => {
            if(err){
                res.status(400).send({message: "Ops User not found"})
            }else{
                res.status(200).send(usersInfo)
            }
        })
    }

    static createUsers = (req, res) => {
        let createBio = new users(req.body)

        createBio.save((err, createBio) => {
            if(err){
                return res.status(500).send({message: `${err.message} - fail to create your users` })
            }else{
                res.status(201).send(createBio.toJSON())
            }
        })
    }

    static deleteListBioByUser = (req, res) => {
        const {id} = req.params
        users.findByIdAndDelete(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: "User deleted successfuly"})
            }else{
                res.status(500).send({message: err.message})
            }
        })
    }
    static updateListBioByUser = (req, res) => {
        const {id} = req.params
        users.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: "User updated successfuly"})
            }else{
                res.status(500).send({message: err.message})
            }
        })
    }
    
}

export default UserSchema;
