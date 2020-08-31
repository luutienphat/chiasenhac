import React from 'react';
import {FiPlayCircle} from "react-icons/fi";
import './withPlayButtonHover.css';

export default function (WrappedComponent) {
    return function (props) {
        return (
            <WrappedComponent {...props}>
                <a href="#" className="Overlay">
                    <FiPlayCircle/>
                </a>
            </WrappedComponent>

        )
    }
}