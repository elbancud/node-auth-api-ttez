import express from 'express';
export class CommonRoutesConfig {
  // NOTE: Constructor parameters can be defined outside
  // TODO: Initialize app & name which will be accessed by classes that extends this
  app: express.Application;
  name: string; // For Debugging purposes
  constructor(app: express.Application, name: string) {
    this.app = app;
    this.name = name;
  }
  getName() {
    return this.name;
  }
}
