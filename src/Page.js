import React, { useState, useEffect } from "react";
import "./App.css";
import * as ReactBootStrap from "react-bootstrap";


const Page = () => {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
        const items = await data.json();
        console.log(items.drinks);
        setItems(items.drinks);
    }
    return (
        <div className="table">
            <ReactBootStrap.Table striped bordered hover size="xl">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Drink Name</th>
                        <th>Glass Type</th>
                        <th>Ingredients</th>
                        <th>Instructions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((item) => (
                            <tr key={item.idDrink}>
                                <td>{item.idDrink}</td>
                                <td>{item.strDrink}</td>
                                <td>{item.strGlass}</td>
                                <td>{item.strIngredient1}, {item.strIngredient2}, {item.strIngredient3} and {item.strIngredient4}</td>
                                <td>{item.strInstructions}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </ReactBootStrap.Table>
        </div>
    );
};

export default Page;