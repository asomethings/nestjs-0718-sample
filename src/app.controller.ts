import { Controller, Get } from "@nestjs/common";
import { AaaService } from "./aaa.service";

@Controller()
export class AppController {
  constructor(
    private readonly aaaService: AaaService
  ) {}

  @Get('')
  hello() {
    return this.aaaService.hello()
  }
}