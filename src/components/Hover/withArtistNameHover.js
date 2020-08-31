import React from 'react';
import './withArtistNameHover.css';

export default function (WrappedComponent) {
    return function (props) {
        return (
            <WrappedComponent {...props}>
                <a href = "#" className="Overlay">
                    <div className = "Artist">DaLAB</div>
                </a>
            </WrappedComponent>

        )
    }
}