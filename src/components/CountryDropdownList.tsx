import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CountryTaxList } from '../stores/CountryTaxList'

const CountryDropdownList: React.FC = () => {

    const [currCountry, setCurrCountry] = useState<string>();

    const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) =>{
        setCurrCountry(event.target.value);
        console.log(event.target.value);
    }

    return (
        <div>
            <label>Choose a country: </label>

            <select name="countries" id="countries" onChange={event => handleOnChange(event)}>

                {CountryTaxList.map(countryTaxInfo => (
                    <option key={countryTaxInfo.countryName}>
                        {countryTaxInfo.countryName} {countryTaxInfo.taxRate}%, Tax Treaty: {countryTaxInfo.hasTaxTreaty? "Yes" : "No"}
                    </option>
                ))}
            
            </select>
            <h3>Selected: {currCountry}</h3>
        </div>
    )

}

export default CountryDropdownList;