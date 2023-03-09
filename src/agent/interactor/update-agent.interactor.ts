import { AgentRepository } from "../agent.repository";
import { Injectable } from "@nestjs/common";
import { Agent } from "../agent.entity";
import { applyPatch, Operation } from "fast-json-patch/commonjs/core";

@Injectable()
export class UpdateAgentInteractor {
  constructor(private readonly agentRepository: AgentRepository) {}

  async execute(id: string, agentUpdateOperation: Operation[]): Promise<Agent> {
    const agent = await this.agentRepository.findAgentById(id);
    const updatedAgent = applyPatch(agent, agentUpdateOperation).newDocument;
    updatedAgent.updatedAt = new Date().toUTCString();

    return await this.agentRepository.saveAgent(agent);
  }
}
