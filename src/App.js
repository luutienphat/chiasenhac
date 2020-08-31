import React from 'react';
import './App.css';
import LatestAlbum from './components/LatestAlbum';
import VideoCard from './components/Card/VideoCard.js';
import styles from './components/styles.module.css';
import BoxHeader from './components/BoxHeader.js';
import Footer from './components/Footer.js';
import SongCard from './components/Card/SongCard.js';
import ImageCover from './components/ImageCover.js';
import ArtistCard from './components/Card/ArtistCard.js'

function App() {

    return (
        <div className="App">
            {/* <ImageCover src="/images/1.jpg" aspectRatio = "1:1"/> */}
            {/* <LatestAlbum /> */}
            <div className="FavoriteArtist">
                <ArtistCard/>
                <ArtistCard />
                <ArtistCard />
                <ArtistCard />
                <ArtistCard />
                <ArtistCard />
                <ArtistCard />
                <ArtistCard />
                <ArtistCard />
                <ArtistCard />
                <ArtistCard />
                <ArtistCard />
                <ArtistCard />
                <ArtistCard />
                <ArtistCard />
            </div>

            {/* <div className="LatestVideo">
                <BoxHeader title="Video mới"/>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
            </div> */}
            {/* <div className="Footer">
                    <Footer />
                    <hr></hr>
            </div> */}

        </div>
    );
}

export default App;
