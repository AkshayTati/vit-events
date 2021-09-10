"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const EventSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true, default: Date.now() },
});
(0, mongoose_1.model)("events", EventSchema);
