let div = document.getElementById("videoDisplay");


async function display() {
    let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=popular%20videos}&type=video&key=AIzaSyA02CaRElDdrfoXwTHzxhFoLVJBuvCUuJc&maxResults=25`)

    let data = await res.json();

    for ({ id: { videoId } }
        of data.items) {
        let videoDiv = document.createElement("iframe")
        videoDiv.setAttribute("class", "mons")
        videoDiv.src = `https://www.youtube.com/embed/${videoId}`;
        videoDiv.allow = 'fullscreen'
        div.append(videoDiv)
    }
}
display()

async function videoSearch() {
    document.getElementById("videoDisplay").innerHTML = " ";

    let query = document.getElementById("video").value;

    let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${query}&type=video&key=AIzaSyA02CaRElDdrfoXwTHzxhFoLVJBuvCUuJc&maxResults=25`)
    let data = await res.json();

    for ({ id: { videoId } }
        of data.items) {
        let videoDiv = document.createElement("iframe")
        videoDiv.setAttribute("class", "mons")
        videoDiv.src = `https://www.youtube.com/embed/${videoId}`;
        videoDiv.allow = 'fullscreen'
        div.append(videoDiv)
    }
}