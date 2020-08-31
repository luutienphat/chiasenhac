import React from 'react';

import './ImageCover.css';

export default function (props) {
    return (
        <div className="ImageCover"
             style=
            {{paddingTop: `${props.aspectRatio === "1:1" ? "100%" : "56.25%"}`, 
              backgroundImage: `url("${process.env.PUBLIC_URL + props.src}")` }}>
                  {props.children}
        </div>
    )
}