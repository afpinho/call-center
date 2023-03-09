import { IsOptional, IsString } from "class-validator";

export class AgentUpdateDto {
  @IsString()
  @IsOptional()
  firstName?: string;

  @IsString()
  @IsOptional()
  lastName?: string;

  @IsString()
  @IsOptional()
  number?: string;
}
