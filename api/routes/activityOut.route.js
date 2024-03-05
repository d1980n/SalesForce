import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import {createActivityOut,deleteActivityOut,readAllActivityOut,readByIdActivityOut,updateActivityOut} from '../controllers/activitiesOut.controller.js';

const router = express.Router();

router.post('/activityOutCreate', verifyToken, createActivityOut);
router.get('/activityOut', verifyToken, readAllActivityOut);
router.get('/activityOut:id', verifyToken, readByIdActivityOut);
router.put('/activityOutUpdate:id', verifyToken, updateActivityOut);
router.delete('/activityOutDelete:id', verifyToken, deleteActivityOut);

export default router;