import React, {useState, useEffect} from 'react';
import '../styles/ProductDetail.scss';
import NumberFormat from 'react-number-format';

export default function ProductDetail(props) {

    const id = props.match.params.id;
    const [itemInfo, setItemInfo] = useState({});

    useEffect(() => {
        fetch(`http://localhost:8080/api/items/${id}`)
            .then(response => response.json())
            .then(response => {
                setItemInfo(response.item);
            })
            .catch(error => {
                console.error(error);
            });
    }, [id]);

    return itemInfo.id ? <div className={'item-detail-container'}>
        <div className={'item-detail-first-row'}>
            <div className={'item-detail-img-container'}>
                <img src={itemInfo.picture} alt={itemInfo.title}/>
            </div>
            <div className={'item-detail-info'}>
                <p className={'item-detail-condition-sold'}>
                    {`${itemInfo.condition === 'new' ? 'Nuevo' : 'Usado'} - ${itemInfo.sold_quantity} vendidos`}
                </p>
                <h5 className={'item-detail-title'}>{itemInfo.title}</h5>
                <h3 className={'item-detail-price'}>
                    <NumberFormat value={itemInfo.price.amount} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                    {itemInfo.price.decimals ?<span className={'item-price-decimals'}>{itemInfo.price.decimals}</span> : null}
                </h3>
                <button className={'item-detail-buy'}>Comprar</button>
            </div>
        </div>
        <div className={'item-detail-description'}>
            <p className={'item-detail-description-title'}>Descripción del producto</p>
            <p className={'item-detail-description-text'}>{itemInfo.description}</p>
        </div>
    </div> : ''
};