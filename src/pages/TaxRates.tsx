import React from 'react';
import CountryDropdownList from '../components/CountryDropdownList'

const TaxRates: React.FC = () => {

    return (
        <div>
            <h1>Corporate Tax Rates and Tax Treaties</h1>
            <CountryDropdownList />
        </div>
    )

}

export default TaxRates;