export class Employee {
    constructor(
      public id: number,
      public username: string,
      public email: string,
      public firstName: string,
      public lastName: string,
      public address: string,
      public jobPosition: string,
      public password: string,
      public dateOfBirth: string, // ISO string
      public startDate: string,   // ISO string
      public active: boolean
    ) {}
  }
  