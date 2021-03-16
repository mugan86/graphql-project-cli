import { IResolvers } from "graphql-tools";

// Los resolvers de las operaciones de consulta para devolver información
const resolvers: IResolvers = {
    Query: {
        async seasonsList(_: void, __: any, { dataSources } ) {
            return await dataSources.seasons.getSeasons().then(
                (data: any) => data.MRData.SeasonTable.Seasons
            );
        },
        async racesByYear(_: void, { year }, { dataSources } ) {
            return await dataSources.races.getYear(year).then(
                (data: any) => data.MRData.RaceTable.Races
            );
        },
        async raceSelect(_: void, { year , round }, { dataSources}) {
            return await dataSources.races.getYearRound(year, round).then(
                (data: any) => data.MRData.RaceTable.Races[0]
            );
        },
        async historyDrivers(_: void, { pageElements, page}, { dataSources }) {
            return await dataSources.drivers.getDrivers(pageElements, page).then(
                (data: any) => data.MRData.DriverTable.Drivers
            );
        },
        async driversYear(_: void, { year }, { dataSources} ) {
            return await dataSources.drivers.getDriversByYear(year).then(
                (data: any) => data.MRData.DriverTable.Drivers
            );
        },
        async driversYearAndRound(_: void, { year, round }, { dataSources} ) {
            return await dataSources.drivers.getDriversByYearAndRound(year, round).then(
                (data: any) => data.MRData.DriverTable.Drivers
            );
        },
        async driverSelect(_: void, { id}, { dataSources}) {
            return await dataSources.drivers.getDriver(id).then(
                (data: any) => data.MRData.DriverTable.Drivers[0]
            )
        },
        async seasonPilotsRanking(_: void, { year }, { dataSources}){
            return await dataSources.drivers.getSeasonsPilotsRanking(year).then(
                (data: any) => data.MRData.StandingsTable.StandingsLists[0].DriverStandings
            )
        },
        async historyCircuits(_: void, { pageElements, page }, { dataSources}){
            return await dataSources.circuits.getCircuits(pageElements, page).then(
                (data: any) => data.MRData.CircuitTable.Circuits
            )
        },
        async circuitSelect(_: void, { id }, { dataSources }) {
            return await dataSources.circuits.getCircuit(id).then(
                (data: any) => data.MRData.CircuitTable.Circuits[0]
            )
        }
    }
};

export default resolvers;