class FilterService {

    public dataFilter(data: any, number: number) {
        return number === null 
            ? data 
            : data.filter((item: any, index: number) => index < number && item);
    }
}

export const DashboardFilterService = new FilterService();
