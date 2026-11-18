import { httpServerHandler } from "cloudflare:node";
import server from "./server.js";

export default httpServerHandler(server);
