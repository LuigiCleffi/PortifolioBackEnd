import express  from "express";
import bio from './bioRoutes.js'
import users from './userRoutes.js'

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({message: "Protifolio Project, welcome !"})
    })

    app.use(
        express.json(),
        bio,
        users
    )
}

export default routes