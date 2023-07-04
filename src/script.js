$(document).ready(function () {
    let thumbnailVideos = document.querySelectorAll('.js-thumbnail-video');
    let videoPlayer = null;
    let videoPlayerSource = document.querySelector('.js-video-player-source');
    let videoPlayerBackground = document.querySelector('.js-video-player-background');

    thumbnailVideos.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            let videoSrc = thumbnail.getAttribute('src');
            videoPlayerSource.setAttribute('src', videoSrc);
            videoPlayerBackground.classList.remove('hidden');
            videoPlayerBackground.classList.add('flex');
            videoPlayer = videojs('video-player');
            videoPlayer.src({type: "video/mp4", src: videoSrc});
            videoPlayer.play();
            thumbnail.pause();
            thumbnail.currentTime = 0;
        });

        thumbnail.addEventListener('mouseenter', () => {
            thumbnail.play();
        });

        thumbnail.addEventListener('mouseleave', () => {
            thumbnail.pause();
            thumbnail.currentTime = 0;
        });
    });

    videoPlayerBackground.addEventListener('click', event => {
        if (event.target === videoPlayerBackground) {
            videoPlayerBackground.classList.remove('flex');
            videoPlayerBackground.classList.add('hidden');
            videoPlayer.pause();
            videoPlayer = null;
            videoPlayerSource.setAttribute('src', '');
        }
    });
});
