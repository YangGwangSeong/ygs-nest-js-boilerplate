import { Currencies } from './currencies.entity';

export class CurrenciesRepository {
	async getCurrency(currency: string): Promise<Currencies> {
		return new Currencies();
	}

	async createCurrency({
		currency,
		value,
	}: {
		currency: string;
		value: number;
	}): Promise<Currencies> {
		return new Currencies();
	}

	async updateCurrency({
		currency,
		value,
	}: {
		currency: string;
		value: number;
	}): Promise<Currencies> {
		return new Currencies();
	}

	async deleteCurrency(currency: string): Promise<void> {
		return;
	}
}
