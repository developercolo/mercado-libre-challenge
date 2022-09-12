import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import '../styles/Search.scss';
import logo_desktop from '../images/logo__large_plus.png';
import logo_mobile from '../images/logo__small.png';

export function Search(props) {

    const [searchValue, setSearchValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(searchValue);
    };

    return(
        <div className="background-banner">
            <form className="search-box-container" onSubmit={(event) => handleSubmit(event)}>
                <Link to={'/'}>
                    <picture>
                        <source srcSet={logo_mobile} media="(max-width: 480px)" />
                        <img src={logo_desktop} alt="Mercado Libre Colombia" />
                    </picture>
                </Link>
                <input className="search-box-input" type="text" placeholder="Buscar productos, marcas y más…" onKeyUp={(e) => setSearchValue(e.target.value)}/>
                <button type="submit" className="search-box-btn" data-testid="search-box-icon"/>
            </form>
        </div>
    )
}