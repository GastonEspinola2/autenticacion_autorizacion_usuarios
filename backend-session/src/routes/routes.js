import { Router } from "express"

import { login, session, cerrarSesion } from "../controller/controller.js";

export const userRoutes = Router();


userRoutes.get("/session",session);
userRoutes.post("/login",login);
userRoutes.post("/logout",cerrarSesion);