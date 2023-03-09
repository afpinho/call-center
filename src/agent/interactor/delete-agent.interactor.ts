import { AgentRepository } from "../agent.repository";
import { Injectable } from "@nestjs/common";
import { Agent } from "../agent.entity";
import { FindAgentByIdInteractor } from "./find-agent-by-id.interactor";

@Injectable()
export class DeleteAgentInteractor {
  constructor(
    private readonly agentRepository: AgentRepository,
    private readonly findAgentByIdInteractor: FindAgentByIdInteractor
  ) {}

  async execute(id: string): Promise<Agent> {
    const agent = await this.findAgentByIdInteractor.execute(id);
    return await this.agentRepository.deleteAgent(agent);
  }
}
