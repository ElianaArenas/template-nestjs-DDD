import { Controller, Inject } from "@nestjs/common";
import { EventPattern, Payload } from "@nestjs/microservices";

@Controller()
export class KafkaController {

  constructor(){}

  @EventPattern("KAFKA_TOPIC")
  async handleMessage(@Payload() message: any) {
    // TODO: for test only
    console.log(message);
  }
}