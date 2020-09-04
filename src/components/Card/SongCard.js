import React from 'react';
import './SongCard.css';
import {MdAccessAlarm, MdHeadset, MdPlaylistAdd, MdShare, MdPlayCircleOutline} from 'react-icons/md';

export default function () {
    return (
        <div className="SongCard">
            <div className="SongImage">
                <img src={`${process.env.PUBLIC_URL + "/images/4.jpg"}`}/>
                <a href="#" className="SongOverlay">
                    <MdPlayCircleOutline/>
                </a>
            </div>

            <div className="SongInformation">
                <div className="SongTitle">
                    <a href="#">Run Dawna</a>
                </div>
                <div className="SongArtist">
                    <a href="#">20 Years Of Age</a>;
                    <a href="#">Juniel</a>
                </div>
                <div className="AudioQuality">Lossless</div>
            </div>
            <div className="SongTracking">
                <div className="DisapearOnHover">
                    <div>
                        <MdAccessAlarm/>
                        1 giờ trước
                    </div>
                    <div>
                        <MdHeadset/>
                        376
                    </div>
                </div>
                <div className="ApearOnHover ">
                    <a href="#"><MdHeadset/></a>
                    <a href="#"><MdPlaylistAdd/></a>
                    <a href="#"><MdShare/></a>
                </div>
            </div>
        </div>
    )
}