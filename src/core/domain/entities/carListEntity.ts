export class CarListResult {
  constructor(
    readonly carName: string,
    readonly creationUserEmail: string,
    readonly carId: string,
    readonly year: string,
    readonly valuePerDay: number,
    readonly valueTotal: number,
    readonly urlImage: string,
    readonly carStatus: CarStatus
  ) {}
}

export enum CarStatus {
  available = 0,
  rented = 1,
}
