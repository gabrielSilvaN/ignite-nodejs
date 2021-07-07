import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

export class CreateSpecificationService {
  constructor(private specificationRepository: ISpecificationsRepository) {}
  execute({ description, name }: IRequest): void {
    const specificationAlreadyExists =
      this.specificationRepository.findByName(name);

    if (specificationAlreadyExists)
      throw new Error("Specification Already Exists");
    this.specificationRepository.create({ description, name });
  }
}
