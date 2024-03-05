import Activity from '../models/activitiesIn.model.js';

export const createActivity = async (req, res) => {
    try {
        const newActivity = await Activity.create(req.body);
        res.json(newActivity);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const readAllActivity = async (req, res) => {
    try {
        const allActivities = await Activity.find();
        res.json(allActivities);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const readByIdActivity = async (req, res) => {
    try {
        const activity = await Activity.findById(req.params.id);
        if (!activity) {
            return res.status(404).json({ error: 'Activity not found' });
        }
        res.json(activity);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateActivity = async (req, res) => {
    try {
        const updatedActivity = await Activity.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedActivity) {
            return res.status(404).json({ error: 'Activity not found' });
        }
        res.json(updatedActivity);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteActivity = async (req, res) => {
    try {
        const deletedActivity = await Activity.findByIdAndDelete(req.params.id);
        if (!deletedActivity) {
            return res.status(404).json({ error: 'Activity not found' });
        }
        res.json({ message: 'Activity deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};