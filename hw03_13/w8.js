var songList = 
    {
        count: 3,
        group: "OwO",
        timeToPlay: 390,
        isOnload: true,
        songs: 
        [
            {
                name: "PHP",
                isLike: true
            }, 
            {
                name: "SQL",
                isLike: true
            }, 
            {
                name: "Sam",
                isLike: true
            }
        ]
    };

var songListJson = JSON.stringify(songList);
console.log(songList);
console.log(songListJson);