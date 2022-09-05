"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const common_routes_config_1 = require("./../common/common.routes.config");
// TODO: Send the main express app and the custom UserRoutes to the commons
// Help avoid duplication between
class UserRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'UserRoutes');
    }
    configureRoutes() {
        // This is the route for listing users in specific and creating them
        this.app
            .route('/users')
            .get((req, res) => {
            res.status(200).send('List of users');
        })
            .post((req, res) => {
            res.status(200).send('User created');
        });
        // TODO: Middleware for routes to get the userr ID
        this.app
            .route('/users/:id')
            .all((req, res, next) => {
            next();
        });
        // TODO: After successful pass through the middleware handle specific user via id
        this.app
            .route('/users/:id')
            .get((req, res) => {
            res.status(200).send(`GET requested for id ${req.params.id}`);
        })
            .post((req, res) => {
            res.status(200).send(`POST requested for id ${req.params.id}`);
        })
            .patch((req, res) => {
            res.status(200).send(`PATCH requested for id ${req.params.id}`);
        })
            .delete((req, res) => {
            res.status(200).send(`DELETE requested for id ${req.params.id}`);
        });
        return this.app;
    }
}
exports.UserRoutes = UserRoutes;
