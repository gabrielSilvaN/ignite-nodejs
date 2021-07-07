"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRoutes = void 0;
var express_1 = require("express");
var createCategory_1 = require("../modules/cars/useCases/createCategory");
var listCategories_1 = require("../modules/cars/useCases/listCategories");
var categoriesRoutes = express_1.Router();
exports.categoriesRoutes = categoriesRoutes;
categoriesRoutes.post("/", createCategory_1.createCategoryController.handle);
categoriesRoutes.get("/", listCategories_1.listCategoriesController.handle);