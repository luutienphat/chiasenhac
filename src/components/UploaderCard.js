import React from 'react';

import './UploaderCard.css';

export default function () {
    return (
        <div className="UploaderCard">
            <div className="UploaderRank">1</div>
            <img
                className="UploaderImage"
                alt="UploaderImage"
                src={`${process.env.PUBLIC_URL + "/images/4.jpg"}`}/>
            <div className="UploaderInformation">
                <div className="DownloadCount">
                    <a href = "#">danjustince</a>
                    <div>286 upload (13.6 GB)</div>
                </div>
                <div className="DownloadCount">
                    <a>50,234</a>
                    <div>download</div>
                </div>
            </div>
        </div>
    )
}