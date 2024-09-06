import { validarJWT } from "../middlewares/validar-jwt.js";

import { Router } from "express"

import { login, session, cerrarSesion, register } from "../controller/controllers.js";

export const userRoutes = Router();


userRoutes.get("/session", validarJWT, session);
userRoutes.post("/login",login);
userRoutes.post("/logout",cerrarSesion);
userRoutes.post("/register",register)