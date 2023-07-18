import { Module } from "@nestjs/common";
import { AaaModule } from "./aaa.module";
import { BbbModule } from "./bbb.module";
import { AppController } from "./app.controller";

@Module({
  imports: [
    BbbModule,
    AaaModule, 
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}