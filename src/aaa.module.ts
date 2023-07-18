import { Module } from "@nestjs/common";
import { AaaService } from "./aaa.service";
import { BbbModule } from "./bbb.module";

@Module({
  imports: [BbbModule],
  providers: [AaaService],
  exports: [AaaService],
})
export class AaaModule {}

