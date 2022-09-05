import express from 'express';
import { CommonRoutesConfig } from './../common/common.routes.config';
// TODO: Send the main express app and the custom UserRoutes to the commons
// Help avoid duplication
export class UserRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'UserRoutes');
  }
}
