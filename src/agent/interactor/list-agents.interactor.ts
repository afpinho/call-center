import { AgentRepository } from "../agent.repository";
import { Injectable, NotFoundException } from "@nestjs/common";
import { Agent } from "../agent.entity";

@Injectable()
export class ListAgentsInteractor {
  constructor(private readonly agentRepository: AgentRepository) {}

  async execute(): Promise<Agent[]> {
    const agents = await this.agentRepository.listAgents();

    if (agents.length < 1) {
      throw new NotFoundException("No agents found");
    }

    return agents;
  }
}
