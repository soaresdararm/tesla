import { CarListResult } from "../../domain/entities/carListEntity";

export class CarModel {
  static fromJson(json: any) {
    return json.map((item: any) => {
      return new CarListResult(
        item.carName,
        item.creationUserEmail,
        item.carId,
        item.year,
        item.valuePerDay,
        item.valueTotal,
        item.urlImage,
        item.carStatus
      );
    });
  }
}
