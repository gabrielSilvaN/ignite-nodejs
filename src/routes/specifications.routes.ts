import { Router } from "express";

import { SpecificationsRepository } from "../modules/cars/repositories/implementations/SpecificationsRepository";
import createSpecificationController from "../modules/cars/useCases/createSpecification";

const specificationsRoutes = Router();
const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post("/", createSpecificationController().handle);

specificationsRoutes.get("/", (request, response) => {
  return response.json(specificationsRepository.list());
});

export { specificationsRoutes };
