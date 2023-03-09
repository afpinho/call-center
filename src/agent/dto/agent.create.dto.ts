import { IsNotEmpty, IsString } from "class-validator";

export class AgentCreateDto {
  @IsNotEmpty()
  @IsString()
  readonly firstName: string;

  @IsNotEmpty()
  @IsString()
  readonly lastName: string;

  @IsNotEmpty()
  @IsString()
  readonly number: string;
}
