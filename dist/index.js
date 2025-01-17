"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const logic_js_1 = require("./logic.js");
const app = (0, express_1.default)();
app.use(express_1.default.json());
(0, dotenv_1.configDotenv)();
app.get("/", (req, res) => {
    res.redirect("/todos");
});
app.get("/todos", (req, res) => {
    const export_object = (0, logic_js_1.get_todos)();
    res.json({
        todos: export_object
    });
});
const PORT = process.env.PORT || 5077;
app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); });
module.exports = app;
