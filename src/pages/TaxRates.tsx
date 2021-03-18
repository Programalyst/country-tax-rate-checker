import React from 'react';
import AutoComplete from '../components/AutoComplete/AutoComplete';
import CountryDropdownList from '../components/CountryDropdownList'
import CountryList from '../stores/CountryList';

const TaxRates: React.FC = () => {

    return (
        <div>
            <h1>Corporate Tax Rates and Tax Treaties</h1>
            <CountryDropdownList />
            <AutoComplete itemsList={CountryList}/>
        </div>
    )

}

export default TaxRates;