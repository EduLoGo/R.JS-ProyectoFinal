import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore"
import Loading from "../Loading/Loading";

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]); 
    const [loading, setLoading] = useState([true]);
    const {category} = useParams();

    useEffect (() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const itemFilter = category ? query(itemsCollection, where("category", "==", category)) : itemsCollection;
        getDocs(itemFilter).then((filterList) => {
            setProductos(filterList.docs.map((doc) => ({id:doc.id, ...doc.data()})));
            setLoading(false);
        });
    }, [category]);

    return (
        <div className="container py-5">
                {loading ? <Loading /> : <ItemList productos={productos} />}
        </div>
    )
}

export default ItemListContainer;