"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const post_model_1 = __importDefault(require("../models/post_model"));
const base_controller_1 = __importDefault(require("./base_controller"));
const getPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("post get");
    base_controller_1.default.get(post_model_1.default, req, res);
});
const getPostById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("post get by id");
    base_controller_1.default.getById(post_model_1.default, req, res);
});
const postPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("post post ");
    base_controller_1.default.post(post_model_1.default, req, res);
});
//updatye a sudent with the given id
const putPost = (req, res) => {
    console.log("post put");
    res.status(400).send("Not implemented");
};
const deletePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("post delete");
    base_controller_1.default.remove(post_model_1.default, req, res);
});
exports.default = { getPost, getPostById, postPost, putPost, deletePost };
//# sourceMappingURL=post_controller.js.map