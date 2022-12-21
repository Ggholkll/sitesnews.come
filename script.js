jQuery(function ($) {
  function assignSlidesOrigin() {
    $(this)
      .find(".slick-slide")
      .each(function (_, slide) {
        let rect = slide.getBoundingClientRect();
        slide = $(slide);
        slide.removeClass("firster laster");
        if (rect.left < rect.width) {
          slide.addClass("firster");
        } else if (rect.right > window.innerWidth - rect.width) {
          slide.addClass("laster");
        }
      });
  }

  function mobilePauseVideo() {
    if (window.innerWidth <= 480) {
      $(".slick-current video")[0].pause();
    }
  }
  function yususus() {
    $("video").prop("muted", true);
  }

  $(".flickfeed").on("init", yususus);
  $(".flickfeed").on("init", assignSlidesOrigin);
  $(".flickfeed").on("afterChange", assignSlidesOrigin);
  $(".flickfeed").on("beforeChange", mobilePauseVideo);
  $(".flickfeed2").on("init", assignSlidesOrigin);
  $(".flickfeed2").on("afterChange", assignSlidesOrigin);
  $(".flickfeed2").on("beforeChange", mobilePauseVideo);
  $(".flickfeed4").on("init", assignSlidesOrigin);
  $(".flickfeed4").on("afterChange", assignSlidesOrigin); 
  $(".flickfeed4").on("beforeChange", mobilePauseVideo);
  $(".flickfeed3").on("init", assignSlidesOrigin);
  $(".flickfeed3").on("afterChange", assignSlidesOrigin);
  $(".flickfeed3").on("beforeChange", mobilePauseVideo);
  $(".slick-current video").addClass("mpp-hidden");
  $(".slick-current  .mpp-playlist-item-ready").removeClass(
    "mpp-playlist-item-active"
  );
  function getSliderSettings() {
    console.log("calling sliderSetting");
    return {
      dots: true,
      centerMode: true,
      centerPadding: "40px",
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 6,
      forceSlidesToScroll: true,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    };
  }

  $(".flickfeed").slick(getSliderSettings());

  /*$( ".slick-slide" ).on("mouseenter touchstart", function() {
              
       if ($(this).hasClass("firster")) {
         //  console.log('firster');
           var hoverslide = $(this);
            $(hoverslide).nextAll().addClass('furthernextslides');
          //  $(hoverslide).prevAll().addClass('prevslides'); 
        
       }else if ($(this).hasClass("laster")){
           var hoverslide = $(this);
            $(hoverslide).prevAll().addClass('furtherprevslides');
        }else{
             var hoverslide = $(this);
            $(hoverslide).nextAll().addClass('nextslides');
            $(hoverslide).prevAll().addClass('prevslides'); 
        }
        
      
    });
	
	
    
    $( ".slick-slide" ).on("mouseleave touchend", function() {
      $(this).parent().find( ".slick-slide" ).removeClass('nextslides');
    $(this).parent().find( ".slick-slide" ).removeClass('prevslides');
      $(this).parent().find( ".slick-slide" ).removeClass('furthernextslides');
      $(this).parent().find( ".slick-slide" ).removeClass('furtherprevslides');
    });*/
  var allVideoss = document.querySelectorAll("video");
  allVideoss.forEach((vidElement) => {
    vidElement.addEventListener(
      "ended",
      (event) => {
        vidElement.classList.add("mpp-hidden1");
        // vidElement.classList.add("mpp-hidden");
      },
      false
    );
  });
});

function getSliderSettings() {
  console.log("calling sliderSetting");
  return {
    dots: true,
    centerMode: true,
    centerPadding: "40px",
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    forceSlidesToScroll: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },

      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };
}

let seasonOne = [
  {
    percentage: 0,
    progress: 0,
    checked: false,
    id: "1",
    category: 'Horror' , 
    videoSrc: "./02.mp4",
    imgSrc: "./03.jpg",
    episodeTitle: "Season One E1",
    episodeTime: "1:00min",
    desc: 'April 5, 2022 - Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing Giants") is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities',
  },
  {
    percentage: 0,
    progress: 0,
    checked: false,
    id: "2",
    category: 'Documentary , advanture' ,  
    videoSrc: "src/S1-2.mp4", 
    imgSrc: "./03.jpg", 
    episodeTitle: "Title2Season One E2",
    episodeTime: "2:00min",
    desc: 'April 5, 2022 - Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing Giants") is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities',
  },
  {
    percentage: 0,
    progress: 0,
    checked: false,
    id: "3",
    category: 'Dramatic , comics' , 
    videoSrc: "src/S1-1.mp4",
    imgSrc: "./03.jpg",
    episodeTitle: "Season One E3",
    episodeTime: "3:00min",
    desc: 'April 5, 2022 - Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing Giants") is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities',
  },
  {
    percentage: 0,
    progress: 0,
    id: "4", 
    category: 'War' , 
    checked: false,
    videoSrc: "src/S1-3.mp4",
    imgSrc: "./03.jpg",
    episodeTitle: "Season One E4",
    episodeTime: "4:00min",
    desc: 'April 5, 2022 - Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing Giants") is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities',
  },
  {
    percentage: 0,
    progress: 0,
    id: "5",
    category: 'catastrophic , actions' , 
    checked: false,
    videoSrc: "src/S2-1.mp4",
    imgSrc: "./03.jpg",
    episodeTitle: "season 2 E 1",
    episodeTime: "1:00min",
    desc: 'April 5, 2022 - Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing Giants") is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities',
  },
  {
    percentage: 0,
    progress: 0,
    checked: false,
    id: "6",
    category: 'adventure , actions' , 
    videoSrc: "src/S2-2.mp4",
    imgSrc: "./03.jpg",
    episodeTitle: "season 2 E 2",
    episodeTime: "2:00min",
    desc: 'April 5, 2022 - Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing Giants") is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities',
  },
  {
    percentage: 0,
    progress: 0,
    checked: false,
    id: "7",
    category: 'comics , Documentary' , 
    videoSrc: "src/S2-3.mp4", 
    imgSrc: "./03.jpg",
    episodeTitle: "season 2 E3",
    episodeTime: "3:00min",
    desc: 'April 5, 2022 - Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing Giants") is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities',
  },
  {
    percentage: 0,
    progress: 0,
    checked: false,
    id: "8",
    category: 'actions , Horror' ,  
    videoSrc: "src/S2-4.mp4",
    imgSrc: "./03.jpg",
    episodeTitle: "season 2 E 4",
    episodeTime: "4:00min",
    desc: 'April 5, 2022 - Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing Giants") is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities',
  } , 
  {
    percentage: 0,
    progress: 0,
    checked: false,
    id: "9", 
    category: 'actions , Documentary' ,  
    videoSrc: "src/S1-4.mp4",
    imgSrc: "./03.jpg",
    episodeTitle: "season 2 E 4", 
    episodeTime: "1:00min",
    desc: 'April 5, 2022 - Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing Giants") is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities',
  }
];
let seasonOne1 = [
  {
    percentage: 0,
    progress: 0,
    checked: false,
    id: "1",
    category: 'Horror' , 
    videoSrc: "./02.mp4",
    imgSrc: "./03.jpg",
    episodeTitle: "Season One E1",
    episodeTime: "1:00min",
    desc: 'April 5, 2022 - Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing Giants") is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities',
  },
  {
    percentage: 0,
    progress: 0,
    checked: false,
    id: "2",
    category: 'Documentary' ,  
    videoSrc: "src/S1-2.mp4", 
    imgSrc: "./03.jpg", 
    episodeTitle: "Title2Season One E2",
    episodeTime: "2:00min",
    desc: 'April 5, 2022 - Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing Giants") is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities',
  },
  {
    percentage: 0,
    progress: 0,
    checked: false,
    id: "3",
    category: 'Dramatic' , 
    videoSrc: "src/S1-1.mp4",
    imgSrc: "./03.jpg",
    episodeTitle: "Season One E3",
    episodeTime: "3:00min",
    desc: 'April 5, 2022 - Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing Giants") is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities',
  },
  {
    percentage: 0,
    progress: 0,
    id: "4", 
    category: 'War' , 
    checked: false,
    videoSrc: "src/S1-3.mp4",
    imgSrc: "./03.jpg",
    episodeTitle: "Season One E4",
    episodeTime: "4:00min",
    desc: 'April 5, 2022 - Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing Giants") is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities',
  },
  {
    percentage: 0,
    progress: 0,
    id: "5",
    category: 'catastrophic' , 
    checked: false,
    videoSrc: "src/S2-1.mp4",
    imgSrc: "./03.jpg",
    episodeTitle: "season 2 E 1",
    episodeTime: "1:00min",
    desc: 'April 5, 2022 - Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing Giants") is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities',
  },
  {
    percentage: 0,
    progress: 0,
    checked: false,
    id: "6",
    category: 'adventure' , 
    videoSrc: "src/S2-2.mp4",
    imgSrc: "./03.jpg",
    episodeTitle: "season 2 E 2",
    episodeTime: "2:00min",
    desc: 'April 5, 2022 - Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing Giants") is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities',
  },
  {
    percentage: 0,
    progress: 0,
    checked: false,
    id: "7",
    category: 'comics' , 
    videoSrc: "src/S2-3.mp4", 
    imgSrc: "./03.jpg",
    episodeTitle: "season 2 E3",
    episodeTime: "3:00min",
    desc: 'April 5, 2022 - Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing Giants") is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities',
  },
  {
    percentage: 0,
    progress: 0,
    checked: false,
    id: "8",
    category: 'actions' ,  
    videoSrc: "src/S2-4.mp4",
    imgSrc: "./03.jpg",
    episodeTitle: "season 2 E 4",
    episodeTime: "4:00min",
    desc: 'April 5, 2022 - Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing Giants") is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities',
  },
  
];
let favVideos = [];
let historyLists = [];
let completeList = [];
let lastIndex = 0;

function endvid(eleee) {
  if (!$(eleee).parents(".slick-slide").hasClass("pupo")) {
    $(eleee).parents(".slick-slide")[0].classList.add("pupo");
    console.log("yessssssssss");
  }
  if (!eleee.classList.contains("mpp-hidden")) {
    eleee.classList.add("mpp-hidden");
  }

  $(eleee)
    .parents(".favi")
    .find(".mpp-playlist-item-ready")
    .removeClass("mpp-playlist-item-active");
}

function closebackele(ellee) {
  if ($(ellee).parents(".slick-slide").hasClass("pupo")) {
    $(ellee).parents(".slick-slide").removeClass("pupo");
  }
}

function insertToHTML(index, season, elem) {
  console.log(elem.id, "insert");
  document.querySelectorAll('.plyyer')[index].insertAdjacentHTML('beforeend' , 
  `<source src="${elem.videoSrc}">`) ;
   document.querySelectorAll('.plyyer')[index].classList.add('_active') ; 
  document.querySelectorAll('.buttons1')[index].setAttribute('key' , elem.videoSrc) ; 
  document.querySelectorAll('.plus1')[index].setAttribute('key' , elem.videoSrc) ;
  document.querySelectorAll('#top-progress-bar')[index].value = `${elem.progress}` ;
  document.querySelectorAll('.mpp-buttons span')[index].setAttribute('key' , elem.id ) ; 
   document.querySelectorAll('.mpp-buttons span')[index].setAttribute('data-src' , elem.videoSrc) ;   
  
  // initVideos()
}


 
function insertToVideo (category , index) {
  let category1 = '' ; 
  let n = 0 ; 
  document.querySelectorAll('.homeSlider1')[index].innerHTML = '' ;    
  for (let i = 0 ; i < seasonOne.length ; i++) {
    n = 0 ; 
    let categorys = seasonOne[i].category.split(',') ; 
    for (let e = 0 ; e < categorys.length ; e++ ) {
      category1 = categorys[e] ;   
    if (category.includes(category1) && n !== 1) { 
      n++ ;   
      document.querySelectorAll('.homeSlider1')[index].insertAdjacentHTML('beforeend' , `<article class="mpp-playlist-content plays card yuii favi">
                <div class="mpp-playlist-item mpp-playlist-item-ready mpp-visible mpp-videos" data-hover-type="video" data-thumb="03.jpg" data-hover-path="02.mp4#t=2" data-target="_blank" data-title="Neon Sign Kit">
                   <div class="mpp-inner"> 
                      <div class="mpp-content">
                         <img class="mpp-thumb" alt="Neon Sign Kit" data-thumb-src="${seasonOne[i].imgSrc}" src="${seasonOne[i].imgSrc}">
                         <div class="mpp-media"> 
                            <video class="mpp-video mpp-hidden iolla plyyer" preload="metadata" playsinline="" controlslist="nofullscreen nodownload noremoteplayback"  muted="">
                              <source src="${seasonOne[i].videoSrc}">
                            </video>
                         </div>
                         <div class="mpp-contr-btn mpp-sound-toggle" data-tooltip="Muted">
                            <div class="mute-video" onclick= "addmutes()"></div>
                         </div><div class="item progress-item">

                      </div>
                      </div>
                      
                      <div class="back d-flex flex-column cont backs">
                         <div class="back-content backs-content">
                            <div class="mpp-controls"> 
                               <div class="mpp-contr-btn mpp-link-icon mpp-buttons-bars mpp-top" data-tooltip="Play Now">
                                  <svg key="${seasonOne[i].videoSrc}" onclick="playPauseVideo(this); runVideo(this);">
                                     <use xlink:href="#svg-link"></use> 
                                  </svg> 
                                  <span key="${seasonOne[i].id}" style="display: none;" >${seasonOne[i].id}</span>
                               </div> 
                               <div key="main-${seasonOne[i].id}" id="mainVideo-${seasonOne[i].id}" class="mpp-contr-btn mpp-lightbox-icon" data-tooltip="Added It">
                                  <svg class="plus" key="${seasonOne[i].videoSrc}"  onclick="getVideoKey(this)">
                                     <use id="iconAdded" href="#svg-zoom"></use>
                                  </svg>
                               </div>
                               <div class="mpp-contr-btn mpp-share-toggle" data-tooltip="Landing">
                                  <svg>
                                     <use xlink:href="#svg-share"></use> 
                                  </svg>
                               </div>
                            </div>
                            <h1 class="h4">${seasonOne[i].episodeTitle}</h1>
                            <p class="Episode">E1 "Getting Started"</p>
                         </div>
                      </div>
                   </div>
                </div>

             </article>
    `) ; 

    }
  if (document.querySelectorAll('.homeSlider1 .slick-list')[i]) {
    document.querySelectorAll('.homeSlider1 .slick-list')[i].remove() ; 
  } 
  }
  }
}

for (let i = 0 ; i < seasonOne.length ; i++) { 
  insertToHTML(i, 1, seasonOne[i]);  
}
function run() { 
    

  $(".flickfeed4").slick(
    "slickAdd", 
    "",
    $(".flickfeed4").slick(getSliderSettings()) - 1 
  ); 
  $(".flickfeed2").slick(
    "slickAdd",
    "", 
    $(".flickfeed2").slick(getSliderSettings()) - 1
  );
  $(".flickfeed3").slick(
    "slickAdd",
    "",
    $(".flickfeed3").slick(getSliderSettings()) - 1
  );
  $(".flickfeed2").slick("refresh");
  if (window.localStorage.getItem("favVideos") ) {
    JSON.parse(window.localStorage.getItem("favVideos")).forEach(
    (element, index) => {
      // $(".flickfeed2").slick("slickRemove", slideIndex - 1);
      console.log(element, "element");
      if (element.checked) {
        
        $(".flickfeed2").slick("unslick");
        insertToFav(index + 1, 1, element);
        $(".flickfeed2").slick(
          "slickAdd",
          "",
          $(".flickfeed2").slick(getSliderSettings()) - 1
        );
        document.querySelector(`[key=main-${element.id}]`).children[0].remove();
        $(`[key=main-${element.id}]`).find(".plus").remove();
        $(`[key=main-${element.id}]`).append(
          '<img class="chckedd" style="height:20px;filter:invert(100);top: 3px;position: absolute;right: 3px;" src="src/checked.png"/>'
        );
      }
    }
  );

  
  favVideos = JSON.parse(window.localStorage.getItem("favVideos")); 
  console.log(favVideos, "favVideojs"); 
  }
}

// Run Video Button that show the main div for video
function runVideo(elem) {
  let player = document.getElementById("gossVideo");
  $("#btnTrigger").click();
  var id = $(elem).attr("key");
  var ido = $(elem).next().attr("key");
  console.log(id, "video id");
  $(player).get(0).load();
  $(player).get(0).play();
  $(player).attr("src", id);
  //   seasonOne.forEach((row)=>{
  //     if(row.videoSrc === id){

  //

  //

  let listys = completeList.map((ioi) => {
    return ioi.id;
  });

  console.log(ido, "kdfi");
  console.log(listys, "listys");
  console.log(completeList, "complate");
  console.log(historyLists, "historyLists");
  historyLists = [
    ...historyLists,
    // ...historyLists.filter((iop) => {
    //   return listys.includes(iop.id) ? null : iop;
    // }),
    ...seasonOne.filter((row) => {
      let exist = false;
      if (row.videoSrc === id) {
        historyLists.forEach((e) => {
          if (e.videoSrc === id) {
            exist = true;
          }
        });
        return !exist;
      }
    }),
  ];

  if (historyLists.length >= 1) {
    let slideIndex = historyLists.length;
    historyLists.forEach(() => {
      $(".flickfeed4").slick("slickRemove", slideIndex - 1);
      if (slideIndex !== 0) {
        slideIndex--;
      }
    });

    $(".flickfeed4").slick("refresh");
    historyLists.forEach((row) => {
      console.log(historyLists, "row"); 
      $(".flickfeed4").slick("unslick");
      insertToHistoryOrCompleted("#historySlider", 0, row);
      $(".flickfeed4").slick(
        "slickAdd",
        "",
        $(".flickfeed4").slick(getSliderSettings()) - 1 
      );
    });
  }
}

function runv(eleo) {
  let player = document.getElementById("gossVideo");
  $("#btnTrigger").click();
  var id = $(eleo).attr("key");
  console.log(id, "video id");
  $(player).get(0).load();
  $(player).get(0).play();
  $(player).attr("src", id);
}

$("#closeButton").click(function () {
  $(".videoContainer").css("display", "none");
  console.log("closing", "closing");
  $("#videoPlayer").get(0).pause();
});

// Add Video To favorite
function getVideoKey(elem, videoSource) {
  console.log(favVideos, "favorite");
  let parent = elem.parentElement;
  let itemId = $(parent).attr("key").slice(5);
  $(elem).remove();
  if (videoSource) {
    var id = videoSource;
  } else {
    var id = $(elem).attr("key");
  }
  // favVideos = [
  //   ...favVideos,
  //   ...seasonOne.filter((row) => {
  //     let exist = false;
  //     if (row.videoSrc === id) {
  //       favVideos.forEach((e) => {
  //         if (e.videoSrc === id) {
  //           exist = true;
  //         }
  //       });
  //       return !exist;
  //     }
  //   }),
  // ];
  console.log("element", elem, itemId, "id", parent);
  seasonOne.forEach((element, index) => {
    console.log(element.id, "sss", itemId);
    if (element.id === itemId) {
      if (!favVideos.includes(element)) {
        favVideos.push(element);
        Object.assign(favVideos[favVideos.length - 1], { checked: true });
      }
    }
  });

  favVideos.forEach((element, index) => {
    $(".flickfeed2").slick("refresh");
    if (videoSource) {
      var id = videoSource;
    } else {
      var id = $(elem).attr("key");
    }
    if (itemId === element.id) {
      $(".flickfeed2").slick("unslick");
      insertToFav(index + 1, 1, element);
      $(".flickfeed2").slick(
        "slickAdd",
        "",
        $(".flickfeed2").slick(getSliderSettings()) - 1
      );
      $(`[key=main-${itemId}]`).append(
        '<img class="chckedd" style="height:20px;filter:invert(100);top: 3px;position: absolute;right: 3px;" src="src/checked.png"/>'
      );
      $(`[key=main-${itemId}]`).find(".plus").remove();
      $(parent).attr("data-tooltip", "Added");
      $(parent).attr("key", `main-${element.id}`);
    }
  });

  window.localStorage.setItem("favVideos", JSON.stringify(favVideos));
  $("#alertMsg")
    .css("display", "flex")
    .fadeIn("slow", function () {
      $(this).delay(3000).fadeOut("slow");
    });
}
const undoRemoval = (elem, removedVideoId) => {
  console.log(elem, removedVideoId, "removedVideoId");
  console.log(favVideos, "favorite");
  let parent = $(`#mainVideo-${removedVideoId}`);
  // $(elem).remove();
  // if(videoSourceId){
  // var id = videoSource
  // }
  // else{
  // var id = $(elem).attr("key");
  // }
  // favVideos = [
  //   ...favVideos,
  //   ...seasonOne.filter((row) => {
  //     let exist = false;
  //     if (row.videoSrc === id) {
  //       favVideos.forEach((e) => {
  //         if (e.videoSrc === id) {
  //           exist = true;
  //         }
  //       });
  //       return !exist;
  //     }
  //   }),
  // ];

  console.log("element", elem, "id", parent);
  seasonOne.forEach((element) => {
    if (element.id === removedVideoId) {
      if (!favVideos.includes(element)) {
        console.log(!favVideos.includes());
        favVideos.push(element);
        Object.assign(favVideos[favVideos.length - 1], { checked: true });
        favVideos.forEach((element, index) => {
          $(".flickfeed2").slick("refresh");
          // if(videoSource){
          // var id = videoSource
          // }
          // else{
          // var id = $(elem).attr("key");
          // }
          if (removedVideoId === element.id) {
            $(".flickfeed2").slick("unslick");
            insertToFav(index + 1, 1, element);
            $(".flickfeed2").slick(
              "slickAdd",
              "",
              $(".flickfeed2").slick(getSliderSettings()) - 1
            );
            $(parent).append(
              '<img class="chckedd" style="height:20px;filter:invert(100);top: 3px;position: absolute;right: 3px;" src="src/checked.png"/>'
            );
            $(parent).attr("data-tooltip", "Added");
            $(parent).attr("key", `main-${element.id}`);
          }
        });
        window.localStorage.setItem("favVideos", JSON.stringify(favVideos));
        $("#alertMsg")
          .css("display", "flex")
          .fadeIn("slow", function () {
            $(this).delay(3000).fadeOut("slow");
          });
      }
    }
  });
};
// change SVG Add Icon when the specific video exists in Favorite>> it should run on add and remove from list
// insertToFavortiteHTML Page with the SVG Icon Remove From List and give it a title remove from a list
function insertToFav(index, season, elem) {
  console.log(elem, "slsl");
  console.log(favVideos, "Salls");
  $("#favSlider").append(`<article class="mpp-playlist-content card favi">
                <div class="mpp-playlist-item mpp-playlist-item-ready mpp-visible" data-hover-type="video" data-thumb="03.jpg" data-hover-path="02.mp4#t=2" data-target="_blank" data-title="Neon Sign Kit">
                   <div class="mpp-inner">
                      <div class="mpp-content">
                         <img class="mpp-thumb" alt="Neon Sign Kit" data-thumb-src="${
                           elem.imgSrc
                         }" src="${elem.imgSrc}">
                         <div class="mpp-media">
                            <video onended="endvid(this)" onmouseenter="closebackele(this)" class="mpp-video mpp-hidden iolla" preload="metadata" playsinline="" controlslist="nofullscreen nodownload noremoteplayback" ${
                              $(".mute-video").hasClass("unmute-video")
                                ? null
                                : (muted = "false")
                            }>
                            
                                <sourse src="${elem.videoSrc}">
                            </video>
                            <i 
                            key="${elem.videoSrc}"
                            id="removeId-${elem.id}"
                            style="font-size: 3em;
                            position: absolute;
                            top: 39%;
                            z-index:1000;
                            cursor: pointer;
                            right: 43%;" class="fas fa-times-circle fa-2xl removeIcon"                              onclick="removeFromCart(this)">
                            </i>
                         </div>
                         <div class="mpp-contr-btn mpp-sound-toggle" data-tooltip="Muted">
                         <div class="mute-video ${
                           $(".mute-video").hasClass("unmute-video")
                             ? "unmute-video"
                             : " "
                         }" onclick="addmutes();">
                         </div>
                         </div>
                      </div>
                      <div class="back flex-column favback" style="display: none">
                         <div class="back-content">
                            <div class="mpp-controls">
                               <div class="mpp-contr-btn mpp-link-icon mpp-top mpp-tope mpp-buttons2 mpp-buttons3" data-tooltip="Play Now">
                                  <svg key="${elem.videoSrc}" onclick="playPauseVideo(this); runVideo(this);">
                                     <use xlink:href="#svg-link"></use>
                                  </svg>
                                  <span key="${
                                    elem.id
                                  }" style="display: none;" >${elem.id}</span>
                               </div>
                               <div class="mpp-contr-btn mpp-lightbox-icon" data-tooltip="Remove From List">
                                  <svg key="${elem.videoSrc}" id="removeId-${
    elem.id
  }" onclick="removeFromCart(this)">
                                     <use xlink:href="#svg-delete"></use>
                                  </svg>
                               </div>
                               <div class="mpp-contr-btn mpp-share-toggle" data-tooltip="Landing">
                                  <svg>
                                     <use xlink:href="#svg-share"></use>
                                  </svg>
                               </div>
                            </div>
                            <h1 class="h4">${elem.episodeTitle}</h1>
                            <p class="Episode">E1 "Getting Started"</p>
                         </div>
                      </div>
                   </div>
                </div>
             </article>
`);
  if ($(".mute-video").hasClass("unmute-video")) {
    $("video").prop("muted", false);
  } else {
    $("video").prop("muted", true);
  }
  // initVideos()
}
// Show and hide => home and favorite Screens
window.addEventListener('resize' , function () {
  let Width2 = Math.max(document.documentElement.offsetWidth , window.innerWidth) ; 
  
  if (Width2 > 1400 && Width2 < 1600) {
    location.reload() ; 
  } else if (Width2 > 1024) {
    location.reload() ; 
  } else if (Width2 > 768 ) {
    location.reload() ; 
  } else if (Width2 > 480 ) {  
    location.reload() ; 
  }
  
})
function onHomeClick() {
  $("#HomeScreen").css("display", "block");
  $(".wraphome").css("display", "block");
  $(".completehome").css("display", "block");
  $(".historyhome").css("display", "block");
  // $("#FavoriteScreen").css("display", "none");
  //remove the Slick for a temporary time if the user Gonna
  // $(".flickfeed2").slick("unslick");
}
function onFavoriteClick() {
  $(".wraphome").css("display", "none");
  $(".completehome").css("display", "none");
  $(".historyhome").css("display", "none");
  $("#FavoriteScreen").css("display", "block");
  $(".flickfeed2").slick("refresh");
  $(".flickfeed2").slick("unslick");
  $(".flickfeed2").slick(
    "slickAdd",
    "",
    $(".flickfeed2").slick(getSliderSettings()) - 1
  );
}

function onLandingClick() {
  window.location.href = "./landing/index.html";
}

// remove from a list popUp a modal , that verify user action => Delete , cancel : on Cancel DO Nothing and hide the modal
let tagElement = "";
let tagId = "";
let removedImage = "";
let removedVideo = "";
let removedVideoId = "";
let removedVideoTitle = "";

function removeFromCart(elem) {
  var id = $(elem).attr("key");
  console.log(id.replace("mp4", "png"), "remove");
  removedImage = id.replace("mp4", "png");
  removedVideo = id;
  removedVideoId = $(elem).attr("id").slice(9);
  seasonOne.forEach((elem) => {
    console.log(removedVideoId, elem.id, elem, "sskiwo");
    if (removedVideoId === elem.id) {
      removedVideoTitle = elem.episodeTitle;
    }
  });
  console.log(removedImage, "removedImage");
  $("#modalImage").attr("src", removedImage);
  $("#modalDivTitle").text(removedVideoTitle);
  console.log(removedVideoTitle, "Ssa");
  tagElement = elem;
  tagId = id;
  $(".modal1").css("display", "flex");
}

function removeFromHistory(elem) {
  var id = $(elem).attr("key");
  console.log(elem, "Ssaw");

  tagElement = elem;
  tagId = id;
  $(elem).parents("article").remove();
  historyLists = historyLists.filter((row) => {
    return row.videoSrc !== tagId;
  });
  $(".flickfeed4").slick(
    "slickRemove",
    $(tagElement).parents(":eq(5)").attr("data-slick-index")
  );

  $(".modal").css("display", "none");
  window.localStorage.setItem("historyVideos", JSON.stringify(historyLists));
}


function onRemove(elem, id) {
  console.log(elem, "hhkfthkl");
  console.log(id, "hhkfthkl");
  $(".modal1").css("display", "none");
  console.log(elem);
  favVideos = favVideos.filter((row) => {
    console.log(row.videoSrc, id);
    if (id !== row.videoSrc) {
      console.log(row, "row");
      return row;
    } else {
      Object.assign(row, { checked: false });
      document.querySelector(`[key=main-${row.id}]`).children[0].remove();
      $(`[key=main-${row.id}]`).find(".plus").remove();
      $(`[key=main-${row.id}]`).find(".chckedd").remove();
      $(`[key=main-${row.id}]`)
        .append(`<svg class="plus" key="${row.videoSrc}"  onclick="getVideoKey(this)">
                    <use id="iconAdded" href="#svg-zoom"></use>
                </svg>`);
    }
  });

  if ($(elem).parents(":eq(8)").attr("data-slick-index") == undefined) {
    $(".flickfeed2").slick(
      "slickRemove",
      $(elem).parents(":eq(6)").attr("data-slick-index")
    );
  } else {
    $(".flickfeed2").slick(
      "slickRemove",
      $(elem).parents(":eq(8)").attr("data-slick-index") 
    );
  }

  console.log($(elem).parents(":eq(6)").attr("data-slick-index"), "sopppa");
  console.log(favVideos, "Favorite");
  $(".modal").css("display", "none");
  window.localStorage.setItem("favVideos", JSON.stringify(favVideos));
}

function cancel() {
  $(".modal1").css("display", "none");
}
// On delete , hide the modal and remove the video from favorite [] ,
// ===============================================================================================
// ==================================History And Complete Sliders=================================
// function insertToHistoryOrCompleted(slider, season, elem) {
//   $(slider).append(
//     `<article class="mpp-playlist-content card" key="article-${elem.id}">
//                 <div class="mpp-playlist-item mpp-playlist-item-ready mpp-visible" data-hover-type="video" data-thumb="03.jpg" data-hover-path="02.mp4#t=2" data-target="_blank" data-title="Neon Sign Kit">
//                    <div class="mpp-inner">
//                       <div class="mpp-content">
//                          <img class="mpp-thumb" alt="Neon Sign Kit" data-thumb-src="${elem.imgSrc}" src="${elem.imgSrc}">
//                          <i
//                          style="font-size: 3em;
//                          position: absolute;
//                          top: 39%;
//                          z-index:1000;
//                          right: 43%;" class="fas fa-times-circle fa-2xl" id="removeIcon" key="${elem.videoSrc}" onclick="removeFromHistory(this)"></i>
//                          <div class="mpp-media">
//                             <video class="mpp-video mpp-hidden" preload="metadata" playsinline="" controlslist="nofullscreen nodownload noremoteplayback"  muted="">
//                                <source src="${elem.videoSrc}">
//                             </video>
//                          </div>
//                          <div class="mpp-contr-btn mpp-sound-toggle" data-tooltip="Muted">
//                             <div class="mute-video"></div>
//                          </div>
// <div class="back d-flex flex-column">
//                        <div class="parent">
//                          <div class="bs-example" style="min-width:100%;">
//                            <div class="item">
//                              <div class="watched" id="watched">
//                               <span class="status"></span>
//                           <span style="padding:5px"></span>
//                               <span class="statusCount"></span>
//                              </div>
//                            </div>
//                            <div class="item">
//                              <button   id="PlayButton" style="min-width: 100%;" class="mybutton  border-gradient border-gradient-purple" data-toggle="modal"
//                                data-target="#homeVideo" data-backdrop="static" data-keyboard="false" onclick="playPauseVideo(this)" key='${elem.id}'>
//                                <i id="PlayButtonIcon" class="fas fa-play"> keep Watching</i></button>
//                            </div>

//                          </div>
//                       </div>
//                       </div>

//                    </div>
//                 </div>
//              </article>
// `
//   );
// }

// top-progress-bar
// <div class="item">
//  <progress id='Top-progress-bar${
//     elem.id
//   }' style="min-width:100%;" max='100' value='${
//    elem.progress
//   }'>50% played</progress>
// </div>

function insertToHistoryOrCompleted(slider, season, elem) {
  window.localStorage.setItem("historyVideos", JSON.stringify(historyLists));
  let progressClass = slider === "#completedSlider" ? 'bottom-progress-bar1' : 'bottom-progress-bar' ; 
  let mppClass = slider === "#completedSlider" ? 'mpp-buttons11' : 'mpp-buttons2' ; 
  let videoClass = slider === "#completedSlider" ? '' : 'videos1' ; 
  
  $(slider).append(
    `<article class="mpp-playlist-content card favi complea" key="article-${
      elem.id
    }">

                  <div class="mpp-playlist-item  mpp-playlist-item-ready mpp-visible" data-hover-type="video" data-thumb="04.jpg" data-hover-path="04.mp4#t=2" data-target="_blank" data-title="Neon Sign Kit">
                   <div class="mpp-inner">
                      <div class="mpp-content">
                         <img class="mpp-thumb" alt="Neon Sign Kit" data-thumb-src="${
                           elem.imgSrc
                         }" src="${elem.imgSrc}">
                         <div class="mpp-media"> 
                            <video onended="endvid(this)" onmouseenter="closebackele(this)" class="${videoClass} mpp-video mpp-hidden iolla closehid" preload="metadata" playsinline="" controlslist="nofullscreen nodownload noremoteplayback" ${
                              $(".mute-video").hasClass("unmute-video") 
                                ? null
                                : (muted = "false")
                            }>
                               <source src="${elem.videoSrc}">
                            </video>
                         </div>
                         <i 
                          style="font-size: 3em;
                          position: absolute;
                          top: 39%;
                          z-index:1000;
                          cursor: pointer;
                          right: 43%;" class="fas fa-times-circle fa-2xl removeIcon" id="removeIcon" key="${
                            elem.videoSrc
                          }" onclick="removeFromHistory(this)">
                          </i>
                         <div class="mpp-contr-btn mpp-sound-toggle" data-tooltip="Muted">
                            <div class="mute-video ${
                              $(".mute-video").hasClass("unmute-video")
                                ? "unmute-video"
                                : " "
                            }" onclick= "addmutes()"></div>
                             
                         </div>
                      </div>
                      <div class="item closeprog">
                      <progress id='${progressClass + 
                          elem.id 
                      }' style="min-width:100%;" max='100' value='${
      elem.percentage
    }'>50% played</progress>
                    </div>
                      <div class="back flex-column contt">                         
                      <div class="back-content">
                            <div class="mpp-controls">
                               <div class="mpp-contr-btn mpp-link-icon mpp-top ${mppClass}" data-tooltip="Play Now">
                               <svg key="${elem.videoSrc}" onclick="playPauseVideo(this); runVideo(this);" class="mpp-buttons-top">
                               <use xlink:href="#svg-link"></use>
                            </svg>
                            <span key="${elem.id}" style="display: none;" >${
      elem.id
    }</span>
                               </div>
                               <div key="main-${
                                 elem.id
                               }" class="mpp-contr-btn mpp-lightbox-icon" data-tooltip="Added It">
                                  <svg class="plus"  key="${elem.videoSrc}"  onclick="getVideoKey(this)">
                                     <use id="iconAdded" href="#svg-zoom"></use>
                                  </svg>
                               </div>
                               <div class="mpp-contr-btn mpp-share-toggle" data-tooltip="Landing">
                                  <svg>
                                     <use xlink:href="#svg-share"></use>
                                  </svg>
                               </div>
                            </div>
                            <h1 class="h4">${elem.episodeTitle}</h1>
                            <p class="Episode">E1 "Getting Started"</p>
                         </div>
                      </div>
                   </div>
                </div>
             </article>
`
  );

  if ($(".mute-video").hasClass("unmute-video")) {
    $(".video").prop("muted", false);
  } else {
    $("video").prop("muted", true);
  }
}
const openHistoryModal = () => {
  console.log(1);
  let div = $("#gossHistory");
  console.log(div); 
  if (completeList !== []) { 
    appendToModal( historyLists.concat(completeList) ) ; 
  } else {
      appendToModal(historyLists) ; 
  }
};
const openCompletedModal = () => {
  console.log(1);
  let div = $("#gossHistory");
  console.log(div);
 appendToModal(completeList);
};
const openFavoriteModal = () => {
  console.log(1);
  let div = $("#gossHistory");
  console.log(div);
  appendToModal(favVideos);
};
const appendToModal = (videoList ) => {
  let element = document.getElementById("gossHistory");
  element.innerHTML = ""; 
    videoList.forEach((elem) => { 
    $("#gossHistory").append(`
    <div class="card1 card slick-slide slick-cloned slick-active" data-slick-index="-1" aria-hidden="false" style="width: 238px;"tabindex="-1">
                        <video  onmouseenter="playvid(this)" onmouseleave="pusevid(this)"  class="videoList mpp-video vids" preload="metadata" playsinline="" controlslist="nofullscreen nodownload noremoteplayback" >
                        <source src="${elem.videoSrc}">
                        </video>
                        <div class="back flex-column backtt" style="display: none">
                         <div class="back-content" style="background-color: #191A1C;">
                            <div class="mpp-controls">
                               <div class="mpp-contr-btn mpp-link-icon" data-tooltip="Play Now">
                               <svg key="${elem.videoSrc}" onclick="playPauseVideo(this); runv(this);">
                                 <use xlink:href="#svg-link"></use>
                              </svg>
                            <span key="${elem.id}" style="display: none;" >${elem.id}</span>
                               </div>
                               <div key="main-${elem.id}" class="mpp-contr-btn mpp-lightbox-icon" data-tooltip="Added It">
                                  <svg class="plus" key="${elem.videoSrc}"  onclick="getVideoKey(this)">
                                     <use id="iconAdded" href="#svg-zoom"></use>
                                  </svg>
                               </div>
                               <div class="mpp-contr-btn mpp-share-toggle" data-tooltip="Landing">
                                  <svg>
                                     <use xlink:href="#svg-share"></use>
                                  </svg>
                               </div>
                            </div>
                            <h1 class="h4">${elem.episodeTitle}</h1>
                            <p class="Episode">E1 "Getting Started"</p>
                         </div>
                      </div>
    </div>
    `);
  });
 
};
// // ====================Progress And Video Player=============================
var player = document.getElementById("gossVideo");
var btnPlayPause = document.getElementById("btnPlayPause");
var btnMute = document.getElementById("btnMute");
var topProgressBar = document.getElementById("top-progress-bar");
var edited = false;
localStorage.setItem(
  "endBtn",
  `<i id="PlayButtonIcon" class="fas fa-redo-alt" aria-hidden="true"></i> &nbsp; Watch Again`
);
localStorage.setItem(
  "pauseBtn",
  `<i id="PlayButtonIcon" class="fas fa-play" aria-hidden="true"></i> keep Watching `
);
localStorage.setItem(
  "playBtn",
  `<i id="PlayButtonIcon" class="fas fa-pause" aria-hidden="true"></i> &nbsp; You're Watching `
);
localStorage.setItem(
  "initialBtn",
  `<i id="PlayButtonIcon" class="fas fa-play"></i> &nbsp;Play Video`
);
var canvas = document.getElementById("canvasId");
let currentSelectedId = "";

function hasClass(el, className) {
  if (el.classList) return el.classList.contains(className);
  return !!el.className.match(new RegExp("(\\s|^)" + className + "(\\s|$)"));
}
function addClass(el, className) {
  if (el.classList) el.classList.add(className);
  else if (!hasClass(el, className)) el.className += " " + className;
}
function removeClass(el, className) {
  if (el.classList) el.classList.remove(className);
  else if (hasClass(el, className)) {
    var reg = new RegExp("(\\s|^)" + className + "(\\s|$)");
    el.className = el.className.replace(reg, " ");
  }
}

const onEditClick = () => {
  console.log("clicked");
  if (!edited) {
    $(".flickfeed4 .removeIcon.fas").css("display", "flex");
    edited = true;
  } else {
    $(".flickfeed4 .removeIcon.fas").css("display", "none");
    edited = false;
  }
};

const onEditClickcom = () => {
  console.log("clicked");
  if (!edited) {
    $(".flickfeed3 .removeIcon.fas").css("display", "flex");
    edited = true;
  } else {
    $(".flickfeed3 .removeIcon.fas").css("display", "none");
    edited = false;
  }
};

const onEditClickfav = () => {
  console.log("clicked");
  if (!edited) {
    console.log("clickedgghhfh");
    $(".flickfeed2 .removeIcon.fas").css("display", "flex");
    edited = true;
  } else {
    console.log("clickccccccccccccc");
    $(".flickfeed2 .removeIcon.fas").css("display", "none");
    edited = false;
  }
};

window.addEventListener("load", function () {});

// player.addEventListener(
//   "play",
//   function () {
//     // let PlayButton = document.getElementById("PlayButton");
//     player.onended = function () {
//       // console.log(player, "player");

//       if (document.querySelector("#watched .statusCount").innerText == "") {
//         document.querySelector("#watched .statusCount").innerHTML = 0;
//         document.querySelector("#watched .status").innerHTML = "watched";
//       }
//       document.querySelector("#watched .statusCount").innerHTML =
//         parseInt(document.querySelector("#watched .statusCount").innerHTML) + 1;
//       localStorage.setItem(
//         "watchCount",
//         document.querySelector("#watched .statusCount").innerText
//       );
//     };

//     // if (PlayButton) {
//     // PlayButton.innerHTML = localStorage.getItem("playBtn");
//     // }
//     if (player.ended) {
//       console.log("videoEnded");
//       historyLists.filter((element) => element.id !== currentSelectedId);
//     }
//   },
//   false
// );


function playvid(els) {
  els.play();
}

function pusevid(els) {
  els.pause();
}

const dismissModal = () => {
  $(".modal").modal("hide");
};
// player.addEventListener(
//   "pause",
//   // function () {
//   //   let PlayButton = document.getElementById("PlayButton");
//   //   PlayButton.innerHTML = localStorage.getItem("pauseBtn");
//   // },
//   false
// );

player.addEventListener( 
  "ended",
  function () {
    // seasonOne.forEach((ele)=>{
    //     if(currentSelectedId === ele.id){
    //       completeList.push(ele)
    //     }
    //   })
    historyLists.filter((row) => currentSelectedId === row.id);
    // Remove From Histroy List slider
    let selectedId = "";
    historyLists.forEach((row) => {
      if (currentSelectedId === row.id) {
        // document.querySelector(`[key=article-${row.id}]`).remove()
        let elem = $(`[key=article-${row.id}]`);
        selectedId = row.id;
        // console.log(elem.parent().parent().attr('data-slick-index'),'element')
        $(".flickfeed4").slick(
          "slickRemove",
          elem.parent().parent().attr("data-slick-index")
        );
        // $('.flickfeed3').slick('unslick');
        //  insertToHistoryOrCompleted('#completedSlider',0,row)
        //  $('.flickfeed3').slick('slickAdd','', $('.flickfeed3').slick(getSliderSettings())-1);
      }
    });
    historyLists = historyLists.filter((row) => {
      return row.id !== currentSelectedId;
    });

    // Add To Complete List  slider
    completeList = [
      ...completeList,
      ...seasonOne.filter((row) => {
        let exist = false;
        if (row.id === selectedId) {
          completeList.forEach((e) => {
            if (e.id === selectedId) {
              exist = true;
            }
          });
          return !exist;
        }
      }),
    ];

    if (completeList.length >= 1) {
      console.log(completeList, "completeList");
      let slideIndex = completeList.length;
      completeList.forEach(() => {
        $(".flickfeed3").slick("slickRemove", slideIndex - 1);
        if (slideIndex !== 0) {
          slideIndex--;
        }
      });

      completeList.forEach((row) => {
        $(".flickfeed3").slick("unslick");
        insertToHistoryOrCompleted("#completedSlider", 0, row);
        $(".flickfeed3").slick(
          "slickAdd",
          "",
          $(".flickfeed3").slick(getSliderSettings()) - 1
        );
      });
    }

    // intialize new Flickfeed

    // if (PlayButton) {
    //   // PlayButton.innerHTML = localStorage.getItem("endBtn");
    // }
    this.pause();
  },
  false
);

$(player).on(
  "ended",
  function () {
    console.log("jquery");
    player.load();
  },
  false
);

function pauseVid() {
  var percentage = Math.floor((100 / player.duration) * player.currentTime);
  if (percentage > 0 && percentage < 100) {
    // var element = document.getElementById("PlayButtonIcon");
    // var isClassExist = hasClass(element, "fa-pause");
    // console.log(isClassExist);
  }

  player.pause();
}

var playerss = document.getElementById("gossVideo");
playerss.addEventListener("ended", () => {
  document.querySelector(".closeexit").click();
  playerss.currentTime = 0;
});
let index11 = 0 ; 

document.addEventListener('click' , function (e) {
  if (e.target.closest('.mpp-buttons-top')) { 
   index11++ ;  
  } 
  
})
// Update the Icons for this specific video
function playPauseVideo(el) {
  // let PlayButton = document.getElementById("PlayButton");
  let id = $(el).next().attr("key");
  console.log(id, "hjhj");
  // element = PlayButton.children[0];
  console.log(player, "playButton", id, "id");
  let videoSrc = "";

  seasonOne.forEach((element) => {
    if (element.id === id) {
      videoSrc = element.videoSrc;
      currentSelectedId = element.id;
    }
  });

  $(player).get(0).load();
  $(player.children[0]).attr("src", videoSrc);
  console.log(videoSrc, "gg");
  if (player.paused || player.ended) {
    // var isClassExist = hasClass(element, "fa-play");
    if (isClassExist === true) {
      // removeClass(element, "fa-play");
      // addClass(element, "fa-pause");
      // console.log(element);
    }
    seasonOne.forEach((ele) => {
      if (ele.videoSrc === videoSrc) {
        player.currentTime = parseFloat(ele.progress);
      }
    });
    player.play();
  } else {
    var isClassExist = hasClass(element, "fa-pause");
    if (isClassExist === true) {
      removeClass(element, "fa-pause");
      addClass(element, "fa-play");
      // PlayButton.innerHTML = localStorage.getItem("pauseBtn");
    }
    seasonOne.forEach((ele) => {
      if (ele.videoSrc === videoSrc) {
        player.currentTime = parseFloat(ele.progress);
      }
    });
    // player.currentTime = parseFloat(localStorage.getItem("VideoEndedTime"))
    player.pause(); 
  }
}
let booleans1 = 'trues' ; 

let booleans11 = 'true11' ;
let booleans2 = 'trues'  ;
let index3 = 0 ;  
let keys1 = 0 ; 
let booleans4 = false ; 
document.addEventListener('click' , function (e) {
  if (e.target.closest('.mpp-buttons-bars')) { 
    booleans1 =  false ;   
    booleans4 = false ;  
   
  }
  if (e.target.closest('.mpp-top')) { 
    booleans1 =  true  ;    
    booleans4 = false ; 
  }

  if (e.target.closest('.mpp-buttons11')) {
    booleans11 = false ; 
    booleans1 = true ; 
    booleans = false ; 
  } 
  if (e.target.closest('.mpp-buttons2')) { 
    booleans11 = true ; 
    booleans1 = true ; 
    booleans4 = false ; 
  }

  if (e.target.closest('.mpp-buttons3')) {
    booleans1 = false ; 
    booleans4 = true ; 
    }
   



})

function updateProgressBar(keys) {
   if (booleans1)  {
      let bottomProgressBar = document.getElementById(`${"bottom-progress-bar" + keys}`) ; 
      let bottomProgressBar1 = document.getElementById(`${"bottom-progress-bar1" + keys}`) ; 
  
        
  console.log(bottomProgressBar, currentSelectedId, "updateProgressBar");

  let percentage = Math.floor((100 / player.duration) * player.currentTime); 
  console.log("percentage", percentage, player.duration, player.currentTime);  

  localStorage.setItem("VideoWatchPercentage", percentage);

  localStorage.setItem("VideoEndedTime", player.currentTime); 
  seasonOne.forEach((element) => { 
    if (element.id === `${keys}`) { 
       
          if (bottomProgressBar && booleans11) {
             bottomProgressBar.value = percentage ; 
             bottomProgressBar.innerHTML = percentage  + "% played";  
          
          } 
          if (!booleans11) {
              bottomProgressBar1.value = percentage ; 
             bottomProgressBar1.innerHTML = percentage  + "% played"; 
        
          }
          
         
      element.progress = player.currentTime  ;  
      element.percentage = percentage;
      }
    
  });

  }
    
    
}
player.addEventListener("timeupdate", function () {
  updateProgressBar(keys1) ;  
} , false);
 
function updateVideoTimeWithBar(nu) {
  var player = document.getElementById("gossVideo");
  // topProgressBar.value = localStorage.getItem("VideoWatchPercentage");
  // topProgressBar.innerHTML = localStorage.getItem("VideoWatchPercentage") + '% played';
  historyLists.forEach((element) => {
    let bottomProgressBar = document.getElementById(
      `bottom-progress-bar${element.id}`
    );
   

    if (bottomProgressBar) {
      seasonOne.forEach((element) => {
        if (currentSelectedId === element.id) { 
          bottomProgressBar.value = nu; 
          bottomProgressBar.innerHTML = element.percentage + "% played";
        }
      });
    }
    if (TopProgressBar) {
      seasonOne.forEach((element) => {
        if (currentSelectedId === element.id) {
          
        }
      });
    }
    seasonOne.forEach((element) => {
      if (currentSelectedId === element.id) { 
        player.currentTime = parseFloat(element.progress); 
      }
    });
  });
}

updateVideoTimeWithBar();

////////////Toast

const button = document.querySelector("#onRemove"),
  toast = document.querySelector(".toast1");
(closeIcon = document.querySelector(".close1")),
  (progress = document.querySelector(".progress"));
let timer1, timer2;
button.addEventListener("click", () => {
  toast.classList.add("active");
  progress.classList.add("active");
  console.log(toast, button, "fired");
  timer1 = setTimeout(() => {
    toast.classList.remove("active");
  }, 5000); //1s = 1000 milliseconds

  timer2 = setTimeout(() => {
    progress.classList.remove("active");
  }, 5300);
});

closeIcon.addEventListener("click", () => {
  toast.classList.remove("active");

  setTimeout(() => {
    progress.classList.remove("active");
  }, 300);

  clearTimeout(timer1);
  clearTimeout(timer2);
});

function addmutes() {
  console.log("hello ");
  if ($(".mute-video").hasClass("unmute-video")) {
    console.log("yes");
    $("video").prop("muted", true);
    $(".mute-video").removeClass("unmute-video"); 
  } else {
    console.log("no");
    $("video").prop("muted", false);
    $(".mute-video").addClass("unmute-video");
  }
}

$(document).ready(function () {
  var colsebackall = document.querySelectorAll(".flickfeed video");
  colsebackall.forEach((vidElement) => {
    vidElement.addEventListener(
      "ended",
      (event) => {
        if (!vidElement.classList.contains("mpp-hidden")) {
          vidElement.classList.add("mpp-hidden"); 
        }
        $(vidElement).parents(".slick-slide").addClass("pupo"); 
        $(vidElement)
          .parents(".favi") 
          .find(".mpp-playlist-item-ready") 
          .removeClass("mpp-playlist-item-active"); 
      },
      false
    );
  });

  document.querySelectorAll(".slick-slide").forEach((aaaaaoo) => { 
    aaaaaoo.addEventListener("mouseenter", () => {
      if ($(aaaaaoo).hasClass("pupo")) { 
        $(aaaaaoo).removeClass("pupo"); 
      }
    });
  });

  $(".chckedd").parent().find("plus").css("display", "none");
});
var playersssss = document.querySelectorAll("#gossVideo").length ? document.querySelectorAll("#gossVideo") : document.querySelector("#gossVideo") ;
var btnPlayPause = document.getElementById("btnPlayPause");
var btnMute = document.getElementById("btnMute");
var topProgressBar = document.querySelectorAll("#top-progress-bar") ? document.querySelectorAll("#top-progress-bar") : document.querySelector("#top-progress-bar");
//var bottomProgressBar = document.getElementById("bottom-progress-bar"); 
let bool = true ; 
var PlayButton = document.querySelectorAll("#PlayButton").length ? document.querySelectorAll("#PlayButton") : document.querySelector("#PlayButton");
let PlayIndex = 0 ; 
let index1 = 0 ; 
localStorage.setItem( 
  "endBtn",
  `<i id="PlayButtonIcon" class="fas fa-redo-alt" aria-hidden="true"></i> &nbsp; Watch Again`
);
localStorage.setItem(
  "pauseBtn",
  `<i id="PlayButtonIcon" class="fas fa-play" aria-hidden="true"></i> keep Watching `
);
localStorage.setItem(
  "playBtn",
  `<i id="PlayButtonIcon" class="fas fa-pause" aria-hidden="true"></i> &nbsp; You're Watching `
);
localStorage.setItem(
  "initialBtn",
  `<i id="PlayButtonIcon" class="fas fa-play"></i> &nbsp;Play Video` 
);
var canvas = document.querySelectorAll('#canvasId') ? document.querySelectorAll("#canvasId") : document.querySelector("#canvasId"); 
let context ; 
if (canvas.length ) { 
  context = [] ; 
  for (let i = 0 ; i < canvas.length ; i++ ) { 
  context[i] = canvas[i].getContext("2d"); 
  }
   
} else {
  context = canvas.getContext("2d");
}



let historyList = JSON.parse(window.localStorage.getItem("historyVideos"));
let randomVideo = Math.floor(Math.random() * historyList.length);
// let video = $('#videoSourceModal').attr('src', historyList[randomVideo].videoSrc)
let categorysCount = [
    'actions , Horror' , 'comics  , Dramatic' , 'catastrophic , actions' , 'adventure , actions'  , 'Dramatic , Documentary' , 'Documentary , ' , 'War' , 'Horror , actions' , 'actions , adventure'
] ; 
function addvidss(index) {
 let playersssss1 = document.querySelectorAll("#gossVideo") ? document.querySelectorAll('#gossVideo') : document.querySelector('#gossVideo') ;
  if (playersssss1.length) {  
  let videos1 ; 
  PlayIndex = index ; 
  let playyers1 = document.querySelectorAll('.plyyer source') ;
  $(playersssss1).get(index).load(); 
  $(playersssss1).get(index).play();
  let span1 = document.querySelectorAll('.buttons1')[index] ; 
  runVideo(span1) ; 
  let Width = Math.max(document.documentElement.offsetWidth , window.innerWidth)  ; 
   if (Width > 1400 ) {
    videos1 = playyers1[index + 4].src ; 
 
  } 
  if (Width < 1400 ) {
    videos1 = playyers1[index + 3].src ; 
 
  }
  $(playersssss1).attr("data-theme", `${categorysCount[index]}`); 
   $(playersssss1).attr("src", `${videos1}`);   
  console.log("video", historyList[randomVideo].videoSrc); 
  } else {
  $(playersssss1).get(0).load(); 
  $(playersssss1).get(0).play(); 
  $(playersssss1).attr("src", `${"../slider/02.mp4"}`);  
  console.log("video", historyList[randomVideo].videoSrc);
  
  
  }
  
}
function PlayIndex1(index) {
  PlayIndex = index ;
}
if (playersssss.length ) {
  for (let i = 0 ; i < playersssss.length ; i++ ) {
    playersssss[i].addEventListener(
  "pause",
  function () {
    PlayButton[PlayIndex].innerHTML = localStorage.getItem("pauseBtn") ;
  },
  false
);
  }

} 
if (localStorage.getItem("image")) {
    let img = new Image();
    img.src = localStorage.getItem("image");
    img.onload = function () {
      for (let i = 0 ; i < context.length ; i++ ) {
         context[i].drawImage(img, 0, 0);
      }
     
    };
  }
  // for video watch count
  /*
  if (localStorage.getItem("watchCount") > 0) { 
    document.querySelector("#watched .status").innerHTML = " I Watched"; 
    document.querySelector("#watched .statusCount").innerHTML = 
      localStorage.getItem("watchCount"); 
  }
  */





function playPauseVideo1(index) {
  var element = document.getElementById("PlayButtonIcon");  
  if (playersssss.paused || playersssss.ended) {
    //debugger;
    var isClassExist = hasClass(element, "fa-play"); 
    if (isClassExist === true) {
      removeClass(element, "fa-play"); 
      addClass(element, "fa-pause"); 
      if (PlayButton.length) {
         PlayButton[index].innerHTML = localStorage.getItem("pauseBtn");
         playersssss.play(index);
        
             } else {
        PlayButton.innerHTML = localStorage.getItem("pauseBtn");
        playersssss.play();
       }
    }

    
  } else {
    var isClassExist = hasClass(element, "fa-pause");
    if (isClassExist === true) {
      removeClass(element, "fa-pause");
      addClass(element, "fa-play");
      if (PlayButton.length) {
         PlayButton[index].innerHTML = localStorage.getItem("pauseBtn"); 
         playersssss[index].pause(); 
       } else {
        PlayButton.innerHTML = localStorage.getItem("pauseBtn");
        playersssss.pause();
       }
     
    }
    
  }
}

window.addEventListener("load", function () {
  let mppLinkIcon ; 
  
  function resizeAddProg () {
    const mppLinkIcon1 = document.querySelectorAll('.mpp-link-icon') ? document.querySelectorAll('.mpp-link-icon') : document.querySelector('.mpp-link-icon') ;
  const mppLinkIcon2 = document.querySelectorAll('.mpp-buttons') ? document.querySelectorAll('.mpp-buttons') : document.querySelector('.mpp-buttons') ;
  const mppBlock = document.querySelectorAll('.mpp-block') ? document.querySelectorAll('.mpp-block') : document.querySelector('.mpp-block') ; 
  let Width = Math.max(document.documentElement.offsetWidth , window.innerWidth) ; 
  
  
  if (Width > 1400 ) {
    for (let i = 0 ; i < 4 ; i++ ) {
    let mppLinkIcon3 = mppLinkIcon2[i] ; 
    mppLinkIcon3.remove() ; 
  }
  }
  if (Width < 1400) {
    for (let i = 0 ; i < 3 ; i++ ) {
    let mppLinkIcon3 = mppLinkIcon2[i] ; 
    mppLinkIcon3.remove() ; 
  }
  
  }
  if (Width < 680 ) {
  for (let i = 0 ; i < 2 ; i++ ) {
    let mppLinkIcon3 = mppLinkIcon2[i] ; 
    mppLinkIcon3.remove() ; 
  }
  }
  mppLinkIcon =  document.querySelectorAll('.mpp-buttons') ? document.querySelectorAll('.mpp-buttons') : document.querySelector('.mpp-buttons') ; 
 } 
setTimeout(function () {
 resizeAddProg () ;
} , 1) 


  const videoMppHidden = document.querySelectorAll('.mpp-hidden') ? document.querySelectorAll('.mpp-hidden') : document.querySelector('.mpp-hidden') ; 

  for (let i = 0 ; i < topProgressBar.length ; i++) {  
  if (topProgressBar[i] && topProgressBar[i].value === 0) { 
    if (PlayButton.length) {
                 PlayButton[i].innerHTML = localStorage.getItem("initialBtn")
        } else {
             PlayButton.innerHTML = localStorage.getItem("initialBtn")
        }
          
  
  } else if (topProgressBar[i].value > 0 && topProgressBar[i].value <= 99) {
     if (PlayButton.length) {
                  PlayButton[i].innerHTML = localStorage.getItem("pauseBtn")
            
        } else {
             PlayButton.innerHTML = localStorage.getItem("pauseBtn")
        }
    
 } else {
  if (PlayButton.length) {
             PlayButton[i].innerHTML = localStorage.getItem("endBtn")
        } else {
             PlayButton.innerHTML = localStorage.getItem("endBtn")
        }
              
  } 
}
  // for canvas draw

 

if (PlayButton.length) {
  for (let i = 0 ; i < PlayButton.length ; i++ ) {
    PlayButton[i].addEventListener('click' , function () {
        addvidss(i) ; 
        playPauseVideo(i) ; 
        bool = true ; 
        PlayIndex = i ; 
        index1 = 1 ; 
        seasonOne1.forEach(element => {
          if (parseInt(element.id) === (i + 1)) {
            player.currentTime = parseFloat(element.progress);

          } 

         })
           keys1 = parseInt(document.querySelectorAll('.mpp-buttons span')[i].getAttribute('key')) ; 

      
      })
  }
} else {
  PlayButton.addEventListener('click' , function () { 
        addvidss() ;  
        playPauseVideo() ; 
        bool = true ; 
        index1 = 1 ; 
    }) 
} 
function clickMppLinkIcon() {
  for (let i = 0 ; i < mppLinkIcon.length ; i ++ ) { 
   mppLinkIcon[i].addEventListener('click' , function () { 
    let index = i ;  
    PlayButton[index].click() ; 
    keys1 = parseInt(this.querySelector('span').getAttribute('key')) ; 
    
   })  
  }
} 

setTimeout(function () {
  clickMppLinkIcon() ; 
}, 2) ; 


  
  
if (playersssss.length) { 
  for (let i = 0 ; i < playersssss.length ; i++ ) {
     playersssssin = playersssss[i] ; 
  playersssssin.addEventListener("timeupdate", function() {
    updateProgressBar1(PlayIndex , true , keys1) ; 
  } , false);
 
playersssss[i].addEventListener( 
  "play",
  function () { 
    playersssss[i].onended = function () {
      if (document.querySelector("#watched .statusCount")[i].innerText == "") {
        document.querySelector("#watched .statusCount")[i].innerHTML = 0; 
        document.querySelector("#watched .status")[i].innerHTML = "watched"; 
      }

      document.querySelector("#watched .statusCount")[i].innerHTML =
        parseInt(document.querySelector("#watched .statusCount")[i].innerHTML) + 1;
      localStorage.setItem(
        "watchCount",
        document.querySelector("#watched .statusCount")[i].innerText
      );
    }; 
    PlayButton[PlayIndex].innerHTML = localStorage.getItem("playBtn");
  },
  false
);
}

} else {
  playersssss.addEventListener("timeupdate", updateProgressBar, false);
  playersssss.addEventListener( 
  "play",
  function () {
    playersssss.onended = function () {
      if (document.querySelector("#watched .statusCount").innerText == "") {
        document.querySelector("#watched .statusCount").innerHTML = 0;
        document.querySelector("#watched .status").innerHTML = "watched";
      }
      document.querySelector("#watched .statusCount").innerHTML =
        parseInt(document.querySelector("#watched .statusCount").innerHTML) + 1;
      localStorage.setItem(
        "watchCount",
        document.querySelector("#watched .statusCount").innerText
      );
    };
    PlayButton.innerHTML = localStorage.getItem("playBtn");
  },
  false
);
}
let booleans = 'trues' ; 
document.addEventListener('click' , function (e) {
  
  if (e.target.closest('.mpp-buttons-bars')) { 
    booleans =  false ;    
   
  }
  
  if (e.target.closest('#PlayButton')) { 
    booleans =  true  ;   
   
  }
  
  if (e.target.closest('.mpp-buttons3')) {
    booleans = false ; 
  }
  const mppButtons2 = document.querySelectorAll('.mpp-buttons2') ; 
for (let i = 0 ; i < mppButtons2.length ; i++ ) {
  mppButtons2[i].addEventListener('click' , function () {
    keys1 = parseInt(this.querySelector('span').getAttribute('key')) ; 
    
  })
}
})

function updateProgressBar1(ind , boolean , keys) { 
   
      
    if (booleans) {  
    let percantages1 ; 
  let Width = Math.max(document.documentElement.offsetWidth , window.innerWidth ) ;
  let index = parseInt(ind) ; 
  if (topProgressBar.length ) {  
     percantages1 = Math.floor((100 / playersssss[0].duration) * playersssss[0].currentTime);
       seasonOne.forEach((element) => { 
        if (parseInt(element.id) === keys) { 
          element.progress = playersssss[0].currentTime; 
          element.percentage = percantages1 ; 
          seasonOne.forEach((el) => { 
        if (parseInt(el.id) === keys) { 
          if (document.querySelectorAll('.mpp-buttons span')[index].getAttribute('data-src') === element.videoSrc) {
               seasonOne1.forEach((item) => { 
        if (parseInt(item.id) === (index + 1)) { 
          item.progress = playersssss[0].currentTime; 
          item.percentage = percantages1 ;
        }
      })
          } else {
            booleans = false ; 
          }
        }
      })
        }
      }); 
      
       if (percantages1 > 94) {
        insertToVideo(playersssss[1].dataset.theme , index ) ; 
       }
       let videoPlayer1 = document.querySelectorAll('.videos1 source') ?  document.querySelectorAll('.videos1 source') : document.querySelector('.videos1 source')  ; 
       
       
       for (let i = 0 ; i < topProgressBar.length ; i++) { 
      
      if (i === index) { 
     
        topProgressBar[i].value =  percantages1;  
      topProgressBar[i].innerHTML = percantages1 + "% played"; 
      
    }
     
      
    } 
    console.log(keys) ; 
    

   
    /*
    if (boolean) {
      for (let i = 0 ; i < topProgressBar.length ; i++) { 
      topProgressBar[i].value =  percantages1;  
      topProgressBar[i].innerHTML = percantages1 + "% played";  
       if (i !== (ind - 4)) {  
         topProgressBar[i].value =  0 ; 
         topProgressBar[i].innerHTML = 0 + "% played"; 
      } 
    }
    for (let i = 0 ; i < topProgressBar1.length ; i++ ) {
      topProgressBar1[i].value =  0 ; 
      topProgressBar1[i].innerHTML = 0 + "% played"; 
      if (i === ind) {
        topProgressBar1[i].value =  percantages1 ; 
        topProgressBar1[i].innerHTML = percantages1 + "% played"; 
      } 
    }
    }
    
    */

    
     
  } else {
    percantages1 = Math.floor((100 / playersssss.duration) * playersssss.currentTime);
    topProgressBar.value = percantages1; 
    topProgressBar.innerHTML = percantages1 + "% played";
  } 
      
  //bottomProgressBar.value = percantages1; 
  // bottomProgressBar.innerHTML = percantages1 + "% played"; 
  localStorage.setItem("VideoWatchPercentage", percantages1); 
  if (playersssss.length) {
      if (Width > 1400) {
      localStorage.setItem("VideoEndedTime", playersssss[ind].currentTime);
      canvas[ind].style.visibility = "visible" ;  
       canvas[ind].style.opacity = "1" ;    
    
     draw(playersssss[1] , canvas[ind] , ind); 
   
   } else {
    localStorage.setItem("VideoEndedTime", playersssss[ind].currentTime);
      canvas[ind].style.visibility = "visible" ;  
      canvas[ind].style.opacity = "1" ;  
     draw(playersssss[1] , canvas[ind] , ind); 
   
    }
      
    
    
     
  } else {
    localStorage.setItem("VideoEndedTime", playersssss.currentTime);
   canvas.style.display = "block";
   draw(playersssss , canvas);
  }
  
  }
  
}
});
function pauseVid() {
  //debugger;

  var percantages1 = Math.floor((100 / playersssss.duration) * playersssss.currentTime);
  if (percantages1 > 0 && percantages1 < 100) {
    var element = document.getElementById("PlayButtonIcon");
    var isClassExist = hasClass(element, "fa-pause");
    if (isClassExist === true) {
      removeClass(element, "fa-pause");
      addClass(element, "fa-play");

      PlayButton[0].innerHTML = localStorage.getItem("playBtn");
    }
  }

  playersssss[0].pause(); 
}

function exitFullScreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}

function hasClass(el, className) {
  if (el.classList) return el.classList.contains(className);
  return !!el.className.match(new RegExp("(\\s|^)" + className + "(\\s|$)"));
}

function addClass(el, className) {
  if (el.classList) el.classList.add(className);
  else if (!hasClass(el, className)) el.className += " " + className;
}

function removeClass(el, className) {
  if (el.classList) el.classList.remove(className);
  else if (hasClass(el, className)) {
    var reg = new RegExp("(\\s|^)" + className + "(\\s|$)");
    el.className = el.className.replace(reg, " ");
  }
}
if ('.php' in 'index.php') {
  console.log('js') ; 
}
function toggleFullScreen() {
  if (playersssss.requestFullscreen)
    if (document.fullScreenElement) {
      document.cancelFullScreen();
    } else {
      playersssss.requestFullscreen();
    }
  else if (playersssss.msRequestFullscreen)
    if (document.msFullscreenElement) {
      document.msExitFullscreen();
    } else {
      playersssss.msRequestFullscreen();
    }
  else if (playersssss.mozRequestFullScreen)
    if (document.mozFullScreenElement) {
      document.mozCancelFullScreen();
    } else {
      playersssss.mozRequestFullScreen();
    }
  else if (playersssss.webkitRequestFullscreen)
    if (document.webkitFullscreenElement) {
      document.webkitCancelFullScreen();
    } else {
      playersssss.webkitRequestFullscreen();
    }
  else {
    alert("Fullscreen API is not supported");
  }
}

function draw(video, canvas , index) {

  context[index].drawImage(video, 0, 0, canvas.width, canvas.height); 
  localStorage.setItem("image", canvas[index].toDataURL("image/jpg"));
}

updateVideo1TimeWithBar();

function updateVideo1TimeWithBar() { 
  var playersssss = document.getElementById("gossVideo");
  topProgressBar.value = historyList[randomVideo].progress; 
  topProgressBar.innerHTML = historyList[randomVideo].percantages1;
  //bottomProgressBar.value = historyList[randomVideo].progress;
  //bottomProgressBar.innerHTML =
   // historyList[randomVideo].percantages1 + "% played";

  playersssss.currentTime = parseFloat(localStorage.getItem("VideoEndedTime")); 
}
