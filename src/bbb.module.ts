import { Module } from "@nestjs/common";
import { BbbService } from "./bbb.service";

@Module({
  providers: [BbbService],
  exports: [BbbService],
})
export class BbbModule {}