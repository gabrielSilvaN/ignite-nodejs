"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.specificationsRoutes = void 0;
var express_1 = require("express");
var SpecificationsRepository_1 = require("../modules/cars/repositories/SpecificationsRepository");
var CreateSpecificationService_1 = require("../modules/cars/services/CreateSpecificationService");
var specificationsRoutes = express_1.Router();
exports.specificationsRoutes = specificationsRoutes;
var specificationsRepository = new SpecificationsRepository_1.SpecificationsRepository();
specificationsRoutes.post("/", function (request, response) {
    var _a = request.body, name = _a.name, description = _a.description;
    var createSpecificationService = new CreateSpecificationService_1.CreateSpecificationService(specificationsRepository);
    createSpecificationService.execute({ description: description, name: name });
    return response.status(201).send();
});
specificationsRoutes.get("/", function (request, response) {
    return response.json(specificationsRepository.list());
});
