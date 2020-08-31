import React from 'react';

import ImageCover from '../ImageCover.js';
import Title from '../Title.js';
import Artist from "../Artist.js";
import withPlayButtonHover from '../Hover/withPlayButtonHover.js';

import "./AlbumCard.css";

const ImageCoverWithPlayButtonHover = withPlayButtonHover(ImageCover);

export default function AlbumCard() {
    return (
        <div className="AlbumCard">
            <ImageCoverWithPlayButtonHover src="/images/1.jpg" aspectRatio="1:1"/>
            <Title title="Bang Kai Tua (บังขายถั่ว) (Single)"/>
            <Artist artist="TaitosmitH"/>
        </div>
    )
}
