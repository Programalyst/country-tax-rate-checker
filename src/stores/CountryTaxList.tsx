
interface CountryTaxInfo {
    countryName: string;
    taxRate: number;
    hasTaxTreaty: boolean;
}

export const CountryTaxList: CountryTaxInfo[] = [
    { "countryName": "Afghanistan", "taxRate": 20.0, "hasTaxTreaty" : false },
    { "countryName": "Albania", "taxRate": 10.0, "hasTaxTreaty" : true },
    { "countryName": "Andorra", "taxRate": 26.0, "hasTaxTreaty" : false },
    { "countryName": "Angola", "taxRate": 30.0, "hasTaxTreaty" : false },
    { "countryName": "Anguilla", "taxRate": 0.0, "hasTaxTreaty" : false },
];