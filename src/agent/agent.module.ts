import { Module } from "@nestjs/common";
import { AgentController } from "./agent.controller";
import { AgentRepository } from "./agent.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Agent } from "./agent.entity";
import { ListAgentsInteractor } from "./interactor/list-agents.interactor";
import { FindAgentByIdInteractor } from "./interactor/find-agent-by-id.interactor";
import { CreateAgentInteractor } from "./interactor/create-agent.interactor";
import { UpdateAgentInteractor } from "./interactor/update-agent.interactor";
import { DeleteAgentInteractor } from "./interactor/delete-agent.interactor";
import { FindAgentByStatus } from "./interactor/find-agent-by-status";

@Module({
  imports: [TypeOrmModule.forFeature([Agent])],
  controllers: [AgentController],
  providers: [
    ListAgentsInteractor,
    FindAgentByIdInteractor,
    FindAgentByStatus,
    CreateAgentInteractor,
    UpdateAgentInteractor,
    DeleteAgentInteractor,
    AgentRepository,
  ],
})
export class AgentModule {}
