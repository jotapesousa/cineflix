import React from 'react';
import './ButtonLink.css';

function ButtonLink(props) {
    // props => { className:  , href= "/"}
    console.log(props);
    return ( 
        <a className={props.className} href={props.href}>
            {props.children}
        </a>
    );
}

export default ButtonLink; 