import React from 'react';
import '../styles/Breadcrumb.scss';

export default function Breadcrumb(props){
    return(
        <ul className={'breadcrumb-container'}>
            {
                props.categories.map((category, idx) =>
                    <li className={"breadcrumb"} key={idx}>{category}
                        {idx !== props.categories.length - 1 ? <i/> : null}
                    </li>
                )
            }
        </ul>
    )
}