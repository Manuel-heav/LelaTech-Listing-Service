const express = require("express");
const cors = require("cors");
const router = express.Router();
const app = express();

const { addItem, 
    getItems,
    getItemById,
    editItem,
    deleteItem,
    searchItemByName,
    searchItemByCategory,
    searchAll,
    sortItemByName,
    sortItemByPrice, 
   } = require("../controllers/itemController");

app.use(cors());

// using the APIs
router.post("/add", addItem);
router.put("/edit/:id", editItem);
router.get("/get/:id", getItemById);
router.delete("/delete/:id", deleteItem);
router.get("/", getItems);
router.get("/search", searchAll);
router.get("/search/name", searchItemByName);
router.get("/search/category", searchItemByCategory);
router.get("/sort/name", sortItemByName);
router.get("/sort/price", sortItemByPrice);


module.exports = router;
