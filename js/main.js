// NOW I CLICK album-poster TO GET CURRENT SONG ID
$(".album-poster").on("click", function (e) {
   var dataSwitchId = $(this).attr("data-switch");
   //console.log(dataSwitchId);

   // and now i use aplayer switch function see
   ap.list.switch(dataSwitchId); //this is static id but i use dynamic

   // aplayer play function
   // when i click any song to play
   ap.play();

   // click to slideUp player see
   $("#aplayer").addClass("showPlayer");
});

const ap = new APlayer({
   container: document.getElementById("aplayer"),
   listFolded: true,
   audio: [
      {
         name: "Invisible Beauty", // SONG NAME
         artist: "Artist Name", //ARTIST NAME
         url: "source/invisible_beauty.mp3", // PATH NAME AND SONG URL
         cover: "https://images.pexels.com/photos/2272854/pexels-photo-2272854.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", // COVER IMAGE
      },
      {
         name: "Just Stay",
         artist: "Artist Name",
         url: "source/just_stay.mp3",
         cover: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
      {
         name: "Liquid Time",
         artist: "Artist Name",
         url: "source/liquid_time.mp3",
         cover: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
      {
         name: "Silky Smooth",
         artist: "Artist Name",
         url: "source/silky_smooth.mp3",
         cover: "https://images.pexels.com/photos/2118046/pexels-photo-2118046.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
      {
         name: "LOREM IPSUM",
         artist: "Artist Name",
         url: "source/invisible_beauty.mp3",
         cover: "https://images.pexels.com/photos/1370545/pexels-photo-1370545.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
      {
         name: "VENIAM EXPEDITA",
         artist: "Artist Name",
         url: "source/silky_smooth.mp3",
         cover: "https://images.pexels.com/photos/894156/pexels-photo-894156.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
      {
         name: "Silky Smooth",
         artist: "Artist Name",
         url: "source/just_stay.mp3",
         cover: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
      {
         name: "Invisible Beauty",
         artist: "Artist Name",
         url: "source/invisible_beauty.mp3",
         cover: "https://images.pexels.com/photos/1735240/pexels-photo-1735240.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
   ],
});
