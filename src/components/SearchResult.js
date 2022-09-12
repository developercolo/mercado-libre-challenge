import React from 'react';
import '../styles/SearchResult.scss';
import Item from "./Item";
import Breadcrumb from "./Breadcrumb";

export default function SearchResult({categories, items}){
    return(
        (categories && items) ? (<div className={"items-list-container"}>
            <Breadcrumb categories={categories}/>
            {items.slice(0,4).map((item, idx) => <Item key={idx} info={item} categories={categories}/>)}
        </div>) : null
    )
}