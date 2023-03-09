import { Module } from "@nestjs/common";
import { AgentModule } from "./agent/agent.module";
import { ConfigModule } from "@nestjs/config";
import { DatabaseModule } from "./config/database.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AgentModule,
    DatabaseModule,
  ],
})
export class AppModule {}
