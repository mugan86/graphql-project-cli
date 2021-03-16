import { F1 } from './data-source';
import { checkYear, roundCheck, paginationOptions } from '../lib/utils';

export class DriversData extends F1 {
    constructor() {
        super();
    }

    async getDrivers(pageElements: number = -1, page: number = 1) {
        if (pageElements === -1) {
            return await this.get('drivers.json?limit=1000', {
                cacheOptions: { ttl: 60 }
            });
        }
        return await this.get(`drivers.json?${ paginationOptions(pageElements, page) }`, {
            cacheOptions: { ttl: 60 }
        });
        
    }

    async getDriversByYear(year: string) {
        year = checkYear(year);
        return await this.get(String(year).concat('/drivers.json'),
            { cacheOptions: { ttl: 60} }
        );
    }

    async getDriversByYearAndRound(year: string, round: number) {
        year = checkYear(year);
        round = roundCheck(round)
        return await this.get(String(year).concat(`/${round}`).concat('/drivers.json'),
            { cacheOptions: { ttl: 60} }
        );
    }

    async getDriver(id: string) {
        return await this.get(`drivers/${ id }.json`,
            { cacheOptions: { ttl: 60} }
        );
    }

    async getSeasonsPilotsRanking(year: string) {
        year = checkYear(year);
        return await this.get(String(year).concat('/driverStandings.json'),
            { cacheOptions: { ttl: 60} }
        );
    }
}