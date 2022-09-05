import express from 'express';
import { CommonRoutesConfig } from './../common/common.routes.config';
// TODO: Send the main express app and the custom UserRoutes to the commons
// Help avoid duplication between
export class UserRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'UserRoutes');
  }
  configureRoutes(): Express.Application {
    // This is the route for listing users in specific and creating them
    this.app
      .route('/users')
      .get((req: express.Request, res: express.Response) => {
        res.status(200).send('List of users');
      })
      .post((req: express.Request, res: express.Response) => {
        res.status(200).send('User created');
      });
    // TODO: Middleware for routes to get the userr ID
    this.app
      .route('/users/:id')
      .all(
        (
          req: express.Request,
          res: express.Response,
          next: express.NextFunction
        ) => {
          next();
        }
      );
    // TODO: After successful pass through the middleware handle specific user via id
    this.app
      .route('/users/:id')
      .get((req: express.Request, res: express.Response) => {
        res.status(200).send(`GET requested for id ${req.params.id}`);
      })
      .post((req: express.Request, res: express.Response) => {
        res.status(200).send(`POST requested for id ${req.params.id}`);
      })
      .patch((req: express.Request, res: express.Response) => {
        res.status(200).send(`PATCH requested for id ${req.params.id}`);
      })
      .delete((req: express.Request, res: express.Response) => {
        res.status(200).send(`DELETE requested for id ${req.params.id}`);
      });

    return this.app;
  }
}
