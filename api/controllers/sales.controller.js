import Sales from '../models/sales.model.js';

export const createSales = async (req, res) => {
    try {
        const newSales = await Sales.create(req.body);
        res.json(newSales);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const readAllSales = async (req, res) => {
    try {
        const allSales = await Sales.find();
        res.json(allSales);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const readByIdSales = async (req, res) => {
    try {
        const sales = await Sales.findById(req.params.id);
        if (!sales) {
            return res.status(404).json({ error: 'Sales not found' });
        }
        res.json(sales);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateSales = async (req, res) => {
    try {
        const updatedSales = await Sales.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedSales) {
            return res.status(404).json({ error: 'Sales not found' });
        }
        res.json(updatedSales);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteSales = async (req, res) => {
    try {
        const deletedSales = await Sales.findByIdAndDelete(req.params.id);
        if (!deletedSales) {
            return res.status(404).json({ error: 'Sales not found' });
        }
        res.json({ message: 'Sales deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

