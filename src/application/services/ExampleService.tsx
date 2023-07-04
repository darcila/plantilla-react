export class ExampleService {
    private repository: any;
    constructor(repository: any) {
        this.repository = repository;
    }
    async getItemsRisks() {
        return await this.repository.getItemsRisks();
    }
}
