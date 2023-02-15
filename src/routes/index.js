import express  from "express";
import bio from './bioRoutes.js'
import users from './userRoutes.js'
import projects from './projectsRoute.js'

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({message: "Protifolio Project, welcome !"})
    })

    app.use(
        express.json(),
        bio,
        users,
        projects
    )
}

export default routes