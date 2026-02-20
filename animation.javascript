function togglePlay(){
    if(video.paused){
        video.play();
        button.innerHTML = "❚❚";
    } else {
        video.pause();
        button.innerHTML = "▶";
    }
}