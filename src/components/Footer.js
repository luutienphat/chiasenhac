import React, { useState } from 'react';
import './Footer.css';

export default function (props) {
    const genre = {
        "Bảng Xếp Hạng": [
            "BXH Hôm Nay", "BXH Tuần Này", "BXH Tháng 11", "BXH Năm 2017", "BXH Năm 2018"
        ],
        "Video Clip": [
            "Video Việt Nam",
            "Video US-UK",
            "Video Hoa",
            "Video Hàn",
            "Video Live",
            "Video Hài",
            "Video Nhật",
            "Video Pháp",
            "Video Nước Khác"
        ],
        "Beat, Playback": [
            "Playback Việt Nam",
            "Playback US-UK",
            "Playback Hoa",
            "Playback Hàn",
            "Playback Nhật",
            "Playback Pháp",
            "Playback Nước Khác"
        ],
        "Nhạc Việt Nam": [
            "Nhạc Pop, Rock", "Nhạc Rap, Hiphop", "Nhạc Dance, Remix", "Nhạc Truyền Thống"
        ],
        "Nhạc US-UK": [
            "Nhạc Pop, Rock", "Nhạc Rap, Hiphop", "Nhạc Dance, Remix"
        ],
        "Nhạc Hoa": [
            "Nhạc Pop, Rock", "Nhạc Rap, Hiphop", "Nhạc Dance, Remix"
        ],
        "Nhạc Hàn": [
            "Nhạc Pop, Rock", "Nhạc Rap, Hiphop", "Nhạc Dance, Remix"
        ],
        "Nhạc Nước Khác": ["Nhạc Pop, Rock", "Nhạc Rap, Hiphop", "Nhạc Dance, Remix"]
    };

    const [album, setAlbum] = useState(genre);

    console.log(typeof album);
    
    let content = '';
    for (let item in genre) {
        content += `<div class = "FooterList">
                        <div>${item}</div> 
                        <ul>
                            ${genre[item].map(item => `<li><a>${item}</a></li>`).join('')}
                        </ul>
                    </div>`;
    }

    return (
        <div className = "FooterContainer" dangerouslySetInnerHTML={{__html: content}}></div>
    )
}