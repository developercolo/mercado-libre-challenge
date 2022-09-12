import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Item.scss';
import NumberFormat from 'react-number-format';


export default function Item({info, categories}) {

    return(
        <div className={'item-container'}>
            <div className={'item-info'} id={info.id}>
                <Link className='link_image' to={{pathname: `/items/${info.id}`, itemInfo: info, categories: categories}}>
                    <img className='imageProd' src={info.picture} alt={info.title} />
                </Link>
                <div className={'item-general-info'}>
                    <Link className={'item-title'} to={{pathname: `/items/${info.id}`, itemInfo: info, categories: categories}}>
                        <p>{info.title}</p>
                    </Link>
                    <p className={'item-price'}>
                        <NumberFormat value={info.price.amount} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                        {info.price.decimals ? <span className={'item-price-decimals'}>{info.price.decimals}</span> : null}
                    </p>
                    {info.free_shipping ? <i className={'item-price-free-shipping'} /> : null}
                    <p>{info.condition === 'new' ? 'Nuevo' : 'Usado'}</p>
                </div>
            </div>
        </div>
    )
}