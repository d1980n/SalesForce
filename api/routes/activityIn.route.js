import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import {createActivity,deleteActivity,readAllActivity,readByIdActivity,updateActivity} from '../controllers/activitiesIn.controller.js';

const router = express.Router();

router.post('/activityCreate', verifyToken, createActivity);
router.get('/activity', verifyToken, readAllActivity);
router.get('/activity:id', verifyToken, readByIdActivity);
router.put('/activityUpdate:id', verifyToken, updateActivity);
router.delete('/activityDelete:id', verifyToken, deleteActivity);

export default router;