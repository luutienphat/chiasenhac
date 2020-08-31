import React from 'react';
import BoxHeader from './BoxHeader.js';
import AlbumCard from './Card/AlbumCard.js'

import './LatestAlbum.css';

export default function LatestAlbum() {
    return (
        <div className="LatestAlbum">
            <BoxHeader title = "Album Mới Nhất 2020"/>
            <AlbumCard/>
            <AlbumCard/>
            <AlbumCard/>
            <AlbumCard/>
            <AlbumCard/>
            <AlbumCard/>
            <AlbumCard/>
            <AlbumCard/>
            <AlbumCard/>
            <AlbumCard/> 
            {/* <table>
                <tbody>
                    <tr>
                        <td colSpan="5"><BoxHeader/></td>
                    </tr>
                    <tr>
                        <td><AlbumCard/></td>
                        <td><AlbumCard/></td>
                        <td><AlbumCard/></td>
                        <td><AlbumCard/></td>
                        <td><AlbumCard/></td>
                    </tr>
                    <tr>
                        <td><AlbumCard/></td>
                        <td><AlbumCard/></td>
                        <td><AlbumCard/></td>
                        <td><AlbumCard/></td>
                        <td><AlbumCard/></td>
                    </tr>
                </tbody>
            </table> */}
        </div>
    )
}