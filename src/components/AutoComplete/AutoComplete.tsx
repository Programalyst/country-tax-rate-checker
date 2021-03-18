import React, { useState } from 'react';
import './AutoComplete.css';

interface AutoCompleteProps {
    itemsList: string[]; 
}

const AutoComplete: React.FC<AutoCompleteProps> = ( { itemsList } ) => {

    const [currSelection, setCurrSelection] = useState<string>("");

    const handleOnInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        closeDropdown();
        renderAutoCompleteList(event.target, itemsList);
    }

    const handleOnClick = (event: any) => {
        closeDropdown();
        renderAutoCompleteList(event.target, itemsList);
    }

    const closeDropdown = () => {
        document.getElementById("autocomplete-list")?.remove();
    }

    const renderAutoCompleteList = (inputElement: HTMLInputElement, arr: string[]) => {
        const userInput: string = inputElement.value;

        // Create the dropdown list
        let dropdownList: HTMLElement;
        dropdownList = document.createElement("div");
        dropdownList.setAttribute("id", "autocomplete-list");
        
        const maxItemsDisplayed = 20;
        let currItemsDisplayed = 0;

        // Populate the dropdown list
        for (let i = 0; i < arr.length; i++) {

            let dropdownItem: HTMLElement;

            if (arr[i].substr(0, userInput.length).toLowerCase() == userInput.toLowerCase()) {

                if (currItemsDisplayed <= maxItemsDisplayed) {

                    dropdownItem = document.createElement("div");
                    dropdownList.setAttribute("class", "autocomplete-item");
                    dropdownItem.innerHTML += arr[i];
                    
                    dropdownItem.addEventListener("click", e => {
                        // set the value in the input field
                        inputElement.value = arr[i];
                        setCurrSelection(arr[i]);
                        console.log(arr[i]);
                        closeDropdown();
                    });
                    
                    dropdownList.append(dropdownItem);
                    currItemsDisplayed++;
                }
            }
        }

        // Attach the dropdown list to the Form
        inputElement?.parentNode?.appendChild(dropdownList);
    }

    return (
        <div>
            <form className="autocomplete-form">
                <input 
                    className="autocomplete-input" 
                    id="inputField" 
                    type="text" 
                    placeholder="Country"
                    onClick={e => handleOnClick(e)} 
                    onChange={e => handleOnInput(e)} 
                />
            </form>
        </div>
    )
}

export default AutoComplete;