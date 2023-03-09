import { AgentRepository } from "../agent.repository";
import { Injectable, NotFoundException } from "@nestjs/common";
import { Agent } from "../agent.entity";

@Injectable()
export class FindAgentByIdInteractor {
  constructor(private readonly agentRepository: AgentRepository) {}

  async execute(id: string): Promise<Agent> {
    const agent = await this.agentRepository.findAgentById(id);

    if (!agent) {
      throw new NotFoundException(`Agent ID ${id} not found`);
    }

    return agent;
  }
}
