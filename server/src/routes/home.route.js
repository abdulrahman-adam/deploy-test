import { getHome } from './../controllers/home.controller.js';
import express, { Router } from 'express';

const router  = express.Router();
// POST /users/token
router.get('/', getHome);

export default router;
