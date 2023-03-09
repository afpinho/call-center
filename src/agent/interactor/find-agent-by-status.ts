import { AgentRepository } from "../agent.repository";
import { Injectable, NotFoundException } from "@nestjs/common";
import { Agent, Status } from "../agent.entity";

@Injectable()
export class FindAgentByStatus {
  constructor(private readonly agentRepository: AgentRepository) {}

  async execute(status: Status): Promise<Agent> {
    const agent = await this.agentRepository.findAgentByStatus(status);

    if (!agent) {
      throw new NotFoundException(
        `No agent with status ${status} has been found`
      );
    }

    return agent;
  }
}
