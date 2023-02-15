import projects from "../models/Projects.js";

class ProjectsController{
    static listProjects = (req, res) => {
        projects.find().
        populate('name')
        .exec((err, projectInfo) => {
            res.status(200).send(projectInfo)
          })
    }

    static createProject = (req, res) => {
        let createProject = new projects(req.body)

        createProject.save((err, createProject) => {
            if(err){
                return res.status(500).send({message: `${err.message} - fail to create your projects` })
            }else{
                res.status(201).send(createProject.toJSON())
            }
        })
    }
}
export default ProjectsController;