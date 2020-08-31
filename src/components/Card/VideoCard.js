import React from 'react';

import ImageCover from '../ImageCover.js';
import Title from '../Title.js';
import Artist from "../Artist.js";

import './VideoCard.css';

export default function VideoCard() {
    return (
        <div className="VideoCard">
            <ImageCover src="/images/2.jpg" aspectRatio="16:9"/>
            <Title title="Bang Kai Tua (บังขายถั่ว) (Single)"/>
            <Artist artist="TaitosmitH"/>
        </div>
    )
}