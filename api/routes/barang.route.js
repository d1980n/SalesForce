import express from 'express';
const router = express.Router();
import { verifyToken } from '../utils/verifyUser.js';
import {createBarang,deleteBarang,readAllBarang,readByIdBarang,updateBarang} from '../controllers/barang.controller.js';


router.post('/barangCreate', verifyToken, createBarang);
router.get('/barang', verifyToken, readAllBarang);
router.get('/barang:id', verifyToken, readByIdBarang);
router.put('/barangUpdate:id', verifyToken, updateBarang);
router.delete('/barang:id', verifyToken, deleteBarang);

export default router;