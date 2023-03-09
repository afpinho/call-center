import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
} from "@nestjs/common";
import { ListAgentsInteractor } from "./interactor/list-agents.interactor";
import { Agent, Status } from "./agent.entity";
import { FindAgentByIdInteractor } from "./interactor/find-agent-by-id.interactor";
import { CreateAgentInteractor } from "./interactor/create-agent.interactor";
import { AgentCreateDto } from "./dto/agent.create.dto";
import { UpdateAgentInteractor } from "./interactor/update-agent.interactor";
import { DeleteAgentInteractor } from "./interactor/delete-agent.interactor";
import { FindAgentByStatus } from "./interactor/find-agent-by-status";
import { Operation, validate } from "fast-json-patch/commonjs/core";
import { AgentUpdateDto } from "./dto/agent.update.dto";

@Controller("agents")
export class AgentController {
  constructor(
    private readonly listAgentsInteractor: ListAgentsInteractor,
    private readonly findAgentByIdInteractor: FindAgentByIdInteractor,
    private readonly createAgentInteractor: CreateAgentInteractor,
    private readonly updateAgentInteractor: UpdateAgentInteractor,
    private readonly deleteAgentInteractor: DeleteAgentInteractor,
    private readonly findAgentByStatusInteractor: FindAgentByStatus
  ) {}

  @Get()
  @HttpCode(200)
  listAgents(): Promise<Agent[]> {
    return this.listAgentsInteractor.execute();
  }

  @Get(":id")
  findAgentById(@Param("id", ParseUUIDPipe) id: string): Promise<Agent> {
    return this.findAgentByIdInteractor.execute(id);
  }

  @Get()
  findAgentByStatus(@Query() status: string): Promise<Agent> {
    return this.findAgentByStatusInteractor.execute(
      Status[status.toUpperCase()]
    );
  }

  @Post()
  createAgent(@Body() agentCreateDto: AgentCreateDto): Promise<Agent> {
    return this.createAgentInteractor.execute(agentCreateDto);
  }

  @Patch(":id")
  updateAgent(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() operation: Operation[]
  ): Promise<Agent> {
    return this.updateAgentInteractor.execute(id, operation);
  }

  @Delete(":id")
  @HttpCode(204)
  deleteAgent(@Param("id", ParseUUIDPipe) id: string): Promise<Agent> {
    return this.deleteAgentInteractor.execute(id);
  }
}
