import { Injectable } from "@nestjs/common";
import { BbbService } from "./bbb.service";

@Injectable()
export class AaaService {
  constructor(
    private readonly bbbService: BbbService,
  ) {
    this.bbbService.hello(); // 정상동작
    setTimeout(this.hello.bind(this), 1000)
  }
 
  hello(): void {
    this.bbbService.hello(); // TypeError: Cannot read properties of undefined (reading 'hello')
  }
}