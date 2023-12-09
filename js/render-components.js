/** Singers Section */
const SingersList = document.getElementById('singers-list')

const singers = [
    {
        name: 'Amir Khalvat',
        img: 'img.jpg'
    }, {
        name: 'Reza Pishro',
        img: 'img2.jpg'
    }, {
        name: 'Eminem',
        img: 'img3.webp'
    }, {
        name: '2Pac',
        img: 'img4.webp'
    }
]

function showSingersList(singers) {
    singers.map(singer => {
        const listItem = document.createElement('li')
        listItem.innerHTML = `<img src='img/${singer.img}'>
            <div>
            <p class='main-text'>${singer.name}</p>
            <p class='sub-text' style='color:#9e9e9e'>Artist</p>
            </div>`
        SingersList.appendChild(listItem)
    })
}

showSingersList(singers)

/** Musics Section */

const musics = [
    {
        musicName: 'agan',
        musicPath: 'musics/1.mp3',
        musicFileName: '1.mp3',
        imgPath: 'img/img.jpg'
    },
];

// Function to download music
function downloadMusic(url, filename) {
    fetch(url)
        .then(response => response.blob())
        .then(blob => {
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(new Blob([blob]));
            link.download = filename;

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

const MusicsList = document.getElementById('musics-collection');

//Function to Show Musics
function ShowMusicList(musics) {
    console.log(musics);
    
    musics.map(music => {
        const listItems = document.createElement('div');

        listItems.className = 'music-card';
        listItems.innerHTML =
            `
        <img src="${music.imgPath}">
        <p style="margin-left:7px" class="main-text">${music.musicName}</p>
        <button onclick="downloadMusic('${music.musicPath}','${music.musicFileName}')">
            <p class='sub-text' style="margin:0">Download</p>
            <img src="img/icon/download.svg">
        </button>
        `;
        MusicsList.appendChild(listItems);
    });
}

//Function to Upload Music
function uploadMusic(fileInput) {
    const file = fileInput.files[0];

    const reader = new FileReader();
    reader.onload = function (event) {
        const musicData = {
            musicName: file.name,
            musicPath: `musics/1.mp3`,
            musicFileName: "1.mp3",
            imgPath: 'img/img2.jpg'
        };

        while(MusicsList.firstElementChild){
            MusicsList.removeChild(MusicsList.firstElementChild)
            console.log("a");
        }

        const UploadedMusics = [...musics, musicData]

        musics.length = 0

        musics.push(...UploadedMusics)

        console.log(musics);

        ShowMusicList(musics);
    };

    if (file) {
        reader.readAsDataURL(file);
    }
}

console.log(musics);
ShowMusicList(musics)