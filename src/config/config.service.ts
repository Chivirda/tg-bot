import { config, DotenvParseOutput } from "dotenv";
import { IConfigService } from "./config.interface";

export class ConfigService implements IConfigService {
    private config: DotenvParseOutput;

    constructor() {
        const {error, parsed} = config();
        if (error) {
            throw new Error('Не найден файл .env');
        }
        if (!parsed) {
            throw new Error('Пустой файл .env');
        }

        this.config = parsed;
    }
    get(key: string): string {
        if (!this.config[key]) {
            throw new Error(`Не найден параметр ${key}`);
        }
        return this.config[key];
    }
}
