"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/todos";
axios_1.default.get(url).then(function (res) {
    console.log(res.data);
});
