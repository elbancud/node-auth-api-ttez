"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Builtin
const express_1 = __importDefault(require("express"));
const http = __importStar(require("http"));
// Middlewares
const cors_1 = __importDefault(require("cors"));
const debug_1 = __importDefault(require("debug"));
const expressWinston = __importStar(require("express-winston"));
const winston = __importStar(require("winston"));
// Utils
const dotenv_1 = __importDefault(require("dotenv"));
const user_routes_config_1 = require("./users/user.routes.config");
dotenv_1.default.config();
// Entry points
const app = (0, express_1.default)();
const server = http.createServer(app);
// Middlewares
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const loggerOptions = {
    // Formatter like eslint
    transports: [new winston.transports.Console()],
    format: winston.format.combine(winston.format.json(), winston.format.prettyPrint(), winston.format.colorize({ all: true })),
};
if (!process.env.DEBUG) {
    loggerOptions.meta = false;
}
app.use(expressWinston.logger(loggerOptions));
// Utils
const routes = [];
routes.push(new user_routes_config_1.UserRoutes(app)); // Add the user routes to the array
const PORT = process.env.PORT;
server.listen(PORT, () => {
    routes.forEach((route) => {
        debugLog(`Routes configured for ${route.name}`);
    });
});
const debugLog = (0, debug_1.default)('app');
