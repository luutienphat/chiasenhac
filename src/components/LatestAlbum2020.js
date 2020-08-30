import React from 'react';
import { FiPlayCircle } from "react-icons/fi";

import "./LatestAlbum2020.css";

export default function LatestAlbum2020(){
    return (
        <div className = "ImageWrapper">
            <div className = "ImageCover">
                <div className = "Overlay">
                    <FiPlayCircle />
                </div>
            </div>
            <a href = "#" className = "Title">Bang Kai Tua (บังขายถั่ว) (Single)</a>
            <a href = "#" className = "Artist">TaitosmitH</a>
        </div>
    )
}
