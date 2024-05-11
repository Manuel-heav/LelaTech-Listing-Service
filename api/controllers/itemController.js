const Item = require('../models/itemModel');
const path = require('path');

// Set up routes for products

// add item 

const addItem = async (req, res, next) => {
    try {
        const item = new Item(req.body);
        await item.save();
        res.status(201).send(item);
    } catch (err) {
        next(err);
    }
}

// edit an item 

const editItem = async (req, res, next) => {
    try {
        const item = await Item.findByIdAndUpdate(req.params)
        res.send(item);
    } catch (err) {
        next(err);
    }
}

// get all items

const getItems = async (req, res, next) => {
    try {
        const items = await Item.find();
        res.send(items);
    } catch (err) {
        next(err);
    }
}

// delete an item

const deleteItem = async (req, res, next) => {
    try {
        const item = await Item.findByIdAndDelete(req.params.id);
        res.send(item);
    } catch (err) {
        next(err);
    }
}

// get item by id

const getItemById = async (req, res, next) => {
    try {
        const item = await Item.findById(req.params.id);
        res.send(item);
    } catch (err) {
        next(err);
    }
}

// sort an item by name

const sortItemByName = async (req, res, next) => {
    try {
        const item = await Item.find().sort({ name: 1 });
        res.send(item);
    } catch (err) {
        next(err);
    }
}


// sort an item by price

const sortItemByPrice = async (req, res, next) => {
    try {
        const item = await Item.find().sort({ price: 1 });
        res.send(item);
    } catch (err) {
        next(err);
    }
}

// search an item by name
 
const searchItemByName = async (req, res, next) => {
    try {
        const item = await Item.find({ name: req.params.name });
        res.send(item);
    } catch (err) {
        next(err);
    }
}

// search an item by category

const searchItemByCategory = async (req, res, next) => {
    try {
        const item = await Item.find({ category: req.params.category });
        res.send(item);
    } catch (err) {
        next(err);
    }
}


// search 

const searchAll = async (req, res) => {
    try {
        const { name, category, minPrice, maxPrice, sortOption, sortOrder } = req.query;

        const filter = {};

        if (name) {
            filter.name = { $regex: name, $options: 'i' };
        }
        if (category) {
            filter.category = { $regex: category, $options: 'i' };
        }
        if (minPrice && maxPrice) {
            filter.unitPrice = { $gte: minPrice, $lte: maxPrice };
        } else if (minPrice) {
            filter.unitPrice = { $gte: minPrice };
        } else if (maxPrice) {
            filter.unitPrice = { $lte: maxPrice };
        }

        const sort = {};

        if (sortOption) {
            sort[sortOption] = sortOrder === 'desc' ? -1 : 1;
        }

        const items = await Item.find(filter).sort(sort);

        res.status(200).send(items);
    } catch (err) {
        console.error('Error fetching products:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};


module.exports = {
    getItems,
    getItemById,
    addItem,
    editItem,
    deleteItem,
    searchItemByName,
    searchItemByCategory,
    searchAll,
    sortItemByName,
    sortItemByPrice,


}