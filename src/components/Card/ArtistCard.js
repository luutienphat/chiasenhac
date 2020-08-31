import React from 'react';

import ImageCover from '../ImageCover.js';
import withArtistNameHover from '../Hover/withArtistNameHover.js';

const ImageCoverWithArtistNameHover = withArtistNameHover(ImageCover);

export default function(){
    return (
        <ImageCoverWithArtistNameHover src="/images/1.jpg" aspectRatio="1:1"/>
    )
}