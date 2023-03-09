import { Agent, Status } from "./agent.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AgentRepository {
  constructor(
    @InjectRepository(Agent) private readonly repository: Repository<Agent>
  ) {}

  async listAgents(): Promise<Agent[]> {
    return await this.repository.find();
  }

  async findAgentById(id: string): Promise<Agent> {
    return await this.repository.findOneBy({ id });
  }

  async findAgentByStatus(status: Status) {
    return await this.repository.findOneBy({ status: status });
  }

  async saveAgent(agent: Agent): Promise<Agent> {
    console.log(`Persisting agent: ${JSON.stringify(agent)}`);
    return await this.repository.save(agent);
  }

  async updateAgentStat(id: string, status: Status) {
    return await this.repository.update({ id }, { status: status });
  }

  async deleteAgent(agent: Agent): Promise<Agent> {
    console.log(`Deleting agent id: ${JSON.stringify(agent)}`);
    return await this.repository.remove(agent);
  }
}
