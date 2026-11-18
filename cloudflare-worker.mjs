import { httpServerHandler } from "cloudflare:node";
import { env as workerEnv } from "cloudflare:workers";
import { env as processEnv } from "node:process";
import server from "./server.js";

// Bridge the Cloudflare runtime secret into the Node-compatible server module.
if (workerEnv.GEMINI_API_KEY) {
  processEnv.GEMINI_API_KEY = workerEnv.GEMINI_API_KEY;
}

export default httpServerHandler(server);
