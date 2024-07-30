import { CarListResult } from "../entities/carListEntity";

export interface ICarList {
  findCarList: () => Promise<CarListResult>;
}
