import mongoose from "mongoose";

const ProjectsSchema = new mongoose.Schema(
    {
        id: { type: String },
        name: {type: String, required: true},
        URL: {type: String, required: true},
        repositoryURL: {type: String, required: true},
        description: { type: String, required: true }
    });


const projects = mongoose.model('projects', ProjectsSchema )

export default projects