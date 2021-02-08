import React, { useState } from 'react';
import NewAncForm from '../components/NewAncForm';

interface NetworkCompany {
    companyId: number,
    companyName: string,
}

const NetworkCompaniesPage: React.FC = () => {

    const [ancs, setAncs ] = useState<NetworkCompany[]>([
        { companyId: 1, companyName: 'ANC 1'},
        { companyId: 2, companyName: 'ANC 2'},
        { companyId: 3, companyName: 'ANC 3'}
    ]);

    const addAnc = (companyName: string) => {
        setAncs([...ancs, {companyId: ancs.length+1, companyName : companyName}]);
        console.log(ancs);
    }

    return (
        <div>
            <h1>Approved Network Companies</h1>
            <NewAncForm addAncFn={addAnc}/>

            <ol>
                {ancs.map(anc => (
                    <li key={anc.companyId}>{anc.companyName}</li>
                ))
                }
            </ol>

        </div>
    )

}

export default NetworkCompaniesPage;