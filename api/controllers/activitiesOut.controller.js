import ActivityOut from '../models/activitiesOut.model.js';

export const createActivityOut = async (req, res) => {
    try {
        const newActivityOut = await ActivityOut.create(req.body);
        res.json(newActivityOut);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const readAllActivityOut = async (req, res) => {
    try {
        const allActivityOuts = await ActivityOut.find();
        res.json(allActivityOuts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const readByIdActivityOut = async (req, res) => {
    try {
        const activityOut = await ActivityOut.findById(req.params.id);
        if (!activityOut) {
            return res.status(404).json({ error: 'Activity Out not found' });
        }
        res.json(activityOut);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateActivityOut = async (req, res) => {
    try {
        const updatedActivityOut = await ActivityOut.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedActivityOut) {
            return res.status(404).json({ error: 'Activity Out not found' });
        }
        res.json(updatedActivityOut);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteActivityOut = async (req, res) => {
    try {
        const deletedActivityOut = await ActivityOut.findByIdAndDelete(req.params.id);
        if (!deletedActivityOut) {
            return res.status(404).json({ error: 'Activity Out not found' });
        }
        res.json({ message: 'Activity Out deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};