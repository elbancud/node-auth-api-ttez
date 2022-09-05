// Builtin
import express from 'express';
import * as http from 'http';
// Middlewares
import cors from 'cors';
import debug from 'debug';
import * as expressWinston from 'express-winston';
import * as winston from 'winston';
// Utils
import dotenv from 'dotenv';
// Classes
import { CommonRoutesConfig } from './common/common.routes.config';
import { UserRoutes } from './users/user.routes.config';

dotenv.config();
// Entry points
const app: express.Application = express();
const server:http.Server = http.createServer(app);
// Middlewares
app.use(express.json());
app.use(cors());
const loggerOptions: expressWinston.LoggerOptions = { // Formatter like eslint
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
        winston.format.json(),
        winston.format.prettyPrint(),
        winston.format.colorize({all:true})
    )
}
if(!process.env.DEBUG) {
    loggerOptions.meta = false
}
app.use(expressWinston.logger(loggerOptions));
// Utils
const routes: Array<CommonRoutesConfig> = []; 
routes.push(new UserRoutes(app)); // Add the user routes to the array


const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {

})

const debugLog: debug.IDebugger = debug('app');