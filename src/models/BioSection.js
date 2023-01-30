import mongoose from "mongoose";

const BioSchema = new mongoose.Schema(
    {
        id: { type: String },
        role: {type: String, required: true},
        tasks: {type: String, required: true},
        description: {type: String, required: true},
        createdAt: { type: Date, default: Date.now }
    },
    {
        versionKey: false
    });


const bios = mongoose.model('bios', BioSchema)

export default bios