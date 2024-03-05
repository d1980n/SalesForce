import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import {createSales,deleteSales,readAllSales,readByIdSales,updateSales} from '../controllers/sales.controller.js';

const router = express.Router();

router.post('/salesCreate', verifyToken, createSales);
router.get('/sales', verifyToken, readAllSales);
router.get('/sales:id', verifyToken, readByIdSales);
router.put('/salesUpadate:id', verifyToken, updateSales);
router.delete('/sales:id', verifyToken, deleteSales);

export default router;