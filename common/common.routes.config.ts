import express from 'express';
export abstract class CommonRoutesConfig {
  // NOTE: Constructor parameters can be defined outside
  // TODO: Initialize app & name which will be accessed by classes that extends this
  app: express.Application;
  name: string; // For Debugging purposes
  constructor(app: express.Application, name: string) {
    this.app = app;
    this.name = name;
    this.configureRoutes();
  }
  getName() {
    return this.name;
  }
  // TODO: Force all routes to have this method, with their own different functionalities.
  // Contxt: Configure API Endpoints
  abstract configureRoutes(): Express.Application;
}
