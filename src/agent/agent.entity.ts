import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

export enum Status {
  Available = "AVAILABLE",
  Busy = "BUSY",
}

@Entity()
export class Agent {
  constructor(firstName: string, lastName: string, number: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.number = number;
    this.createdAt = new Date().toUTCString();
    this.updatedAt = new Date().toUTCString();
  }

  @PrimaryGeneratedColumn("uuid")
  id: string = uuidv4();

  @Column()
  firstName: string;

  @Column()
  number: string;

  @Column()
  lastName: string;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;

  @Column({ default: Status.Available })
  status: Status;
}
