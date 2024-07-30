import { CarListResult } from "../../domain/entities/carListEntity";
import { ICarList } from "../../domain/useCases/iFindCarList";
import { IFindCarListAxios } from "../dataSources/iFindCarList";

export class FindCarList implements ICarList {
  constructor(
    private readonly dataSource: IFindCarListAxios,
    private readonly endpoint: string
  ) {}

  async findCarList(): Promise<CarListResult> {
    const result = await this.dataSource.findCarList(this.endpoint);

    if (result?.success === false) throw result?.message;

    return result?.data;
  }
}
