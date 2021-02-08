import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface ItemType {
    id: string,
    name: string
}

const ItemsPage: React.FC = () => {

    useEffect(() => {
        fetchItems();
    }, [])

    const[items, setItems] = useState<ItemType[]>();

    const fetchItems = async () => {
        const response = await fetch('https://fortnite-api.com/v2/cosmetics/br/new');
        const data = await response.json();
        setItems(data.data.items);

        console.log(data.data.items);
    }

    return (
        <div>
            <h1>Items Page for testing API call</h1>
            <h3>List of Items</h3>
            <ol>
                {items?.map(item => (
                <li key={item.id}>
                    {item.name}
                </li>
            ))}
            </ol>
            
        </div>
    )

}

export default ItemsPage;