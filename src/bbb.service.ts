import { Injectable } from "@nestjs/common";

@Injectable()
export class BbbService {
 
  hello(): void {
    console.log('hello');
  }
}