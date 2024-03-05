import Barang from '../models/barang.model.js';

export const createBarang = async (req, res) => {
    try {
        const newBarang = await Barang.create(req.body);
        res.json(newBarang);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const readAllBarang = async (req, res) => {
    try {
        const allBarang = await Barang.find();
        res.json(allBarang);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const readByIdBarang = async (req, res) => {
    try {
        const barang = await Barang.findById(req.params.id);
        if (!barang) {
            return res.status(404).json({ error: 'Barang not found' });
        }
        res.json(barang);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateBarang = async (req, res) => {
    try {
        const updatedBarang = await Barang.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedBarang) {
            return res.status(404).json({ error: 'Barang not found' });
        }
        res.json(updatedBarang);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteBarang = async (req, res) => {
    try {
        const deletedBarang = await Barang.findByIdAndDelete(req.params.id);
        if (!deletedBarang) {
            return res.status(404).json({ error: 'Barang not found' });
        }
        res.json({ message: 'Barang deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};