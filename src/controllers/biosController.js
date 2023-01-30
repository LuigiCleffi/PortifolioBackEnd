import bios from "../models/BioSection.js";

class BiosController{
    static listBios = (req, res) => {
        bios.find().
        populate('role')
        .exec((err, biosInfo) => {
            res.status(200).send(biosInfo)
          })
    }

    
    static listBioByUser = (req, res) => {
        const {id} = req.params
        bios.findById(id)
        .populate("role")
        .exec((err, biosInfo) => {
            if(err){
                res.status(400).send({message: "Ops bio not found"})
            }else{
                res.status(200).send(biosInfo)
            }
        })
    }

    static createBios = (req, res) => {
        let createBio = new bios(req.body)

        createBio.save((err, createBio) => {
            if(err){
                return res.status(500).send({message: `${err.message} - fail to create your bios` })
            }else{
                res.status(201).send(createBio.toJSON())
            }
        })
    }

    static deleteListBioByUser = (req, res) => {
        const {id} = req.params
        bios.findByIdAndDelete(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: "Bio deleted successfuly"})
            }else{
                res.status(500).send({message: err.message})
            }
        })
    }
    static updateListBioByUser = (req, res) => {
        const {id} = req.params
        bios.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: "Bio updated successfuly"})
            }else{
                res.status(500).send({message: err.message})
            }
        })
    }
    
}

export default BiosController;
