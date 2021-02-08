import React, { useState } from 'react';

interface Props {
    addAncFn: (arg: string) => void
}

const NewAncForm: React.FC<Props> = ({ addAncFn }) => {

    const [ancName, setAncName] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        addAncFn(ancName);
        console.log(ancName);
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Enter new ANC to add: </label>
            <input type='text' required onChange={event => {setAncName(event.target.value)}}></input>
            <input type='submit' value='add Anc'></input>
        </form>
    );

}

export default NewAncForm;