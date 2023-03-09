import { AgentRepository } from "../agent.repository";
import { Injectable } from "@nestjs/common";
import { Agent } from "../agent.entity";
import { AgentCreateDto } from "../dto/agent.create.dto";

@Injectable()
export class CreateAgentInteractor {
  constructor(private readonly agentRepository: AgentRepository) {}

  async execute(agentCreateDto: AgentCreateDto): Promise<Agent> {
    const agent = new Agent(
      agentCreateDto.firstName,
      agentCreateDto.lastName,
      agentCreateDto.number
    );

    return await this.agentRepository.saveAgent(agent);
  }
}
