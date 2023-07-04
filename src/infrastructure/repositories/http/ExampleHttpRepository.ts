import {ExampleRepository} from "../../../domain";

export class ExampleHttpRepository implements ExampleRepository {
    async exampleMethod(): Promise<boolean> {
        return true;
    }
}
