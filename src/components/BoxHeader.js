import React from 'react';
import './BoxHeader.css';

export default function(props) {
    return (
        <div className="BoxHeader">
            <a className="ViewAll">{props.title}</a>
            <a className="LinkMore">Xem tất cả</a>
        </div>
    )
}