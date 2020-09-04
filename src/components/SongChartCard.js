import React from 'react';
import './SongChartCard.css';

export default function(){
    return (
        <div className="UploaderCard">
            <div className="UploaderRank">1</div>
            <img
                className="UploaderImage Square"
                alt="UploaderImage"
                src={`${process.env.PUBLIC_URL + "/images/4.jpg"}`}/>
            <div className="UploaderInformation">
                <div className="DownloadCount">
                    <a href = "#">danjustince</a>
                    <div>286 upload (13.6 GB)</div>
                </div>
                <div className="DownloadCount Single">
                    91,435
                </div>
            </div>
        </div>
    )
}