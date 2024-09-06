import jwt from 'jsonwebtoken';

import { SECRET_KEY } from '../config/env.js';
import { connection } from '../db/database.js';

// Middleware para verificar el token JWT
export const validarJWT = async (req, res, next) => {
    console.log(req.session)
    console.log('-----------')
    console.log(req.cookies)
    const token = req.cookies.authToken || req.session.token;

    if (!token) {
        return res.status(403).json({ message: 'Token no proporcionado' });
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY);

        const newConnection = await connection();

        // Se busca al usuario en la base de datos
        const [user] = await newConnection.query('SELECT * FROM users WHERE id = ?',[decoded.userId])
    
        if (user.length === 0) {
            return res.status(401).json({ message: 'Token inválido' });
        }
    
        req.user = user; // Agrega la información del usuario decodificada al request
    
        next();
    } catch (error) {
        console.error("Ocurrio un error al validar el Token")
    }

     
};