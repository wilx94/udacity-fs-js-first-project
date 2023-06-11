"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("./routes/api/index"));
var app = (0, express_1.default)();
var port = 5000;
app.use(express_1.default.static('assets'));
app.use('/api', index_1.default);
app.get('/test', function (req, res) {
    res.send('This test was successfull');
});
app.listen(port, function () {
    console.log("Listening to port " + port);
});
exports.default = app;
