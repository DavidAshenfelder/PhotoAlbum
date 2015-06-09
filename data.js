var album1 = [
  {
    name: "Image 1",
    location: "photos/IMG_2525.jpg",
    rel:"1"
  },
  {
    name: "Image 2",
    location: "photos/IMG_2576.jpg",
    rel:"2"
  },
  {
    name: "Image 3",
    location: "photos/IMG_2580.jpg",
    rel:"3"
  },
];

var album2 = [
  {
    name: "Image 4",
    location: "photos/IMG_2595.jpg",
    rel:"1"
  },
  {
    name: "Image 5",
    location: "photos/IMG_2637.jpg",
    rel:"2"
  },
  {
    name: "Image 6",
    location: "photos/IMG_2647.jpg",
    rel:"3"
  },
];

var album3 = [
  {
    name: "Image 7",
    location: "photos/IMG_2654.jpg",
    rel:"1"
  },
  {
    name: "Image 8",
    location: "photos/IMG_2659.jpg",
    rel:"2"
  },
  {
    name: "Image 9",
    location: "photos/IMG_2702.jpg",
    rel:"3"
  },
  {
    name: "Image 10",
    location: "photos/IMG_2709.jpg",
    rel:"4"
  },
];

var buttons = [
  { id:"button1",
    value:"Album 1",
    rel: "1",
  },
  { id:"button2",
    value:"Album 2",
    rel: "2",
  },
  { id:"button3",
    value:"Album 3",
    rel: "3"
  },
  { id:"button4",
    value:"Album 4",
    rel: "4"
  },
  { id:"button5",
    value:"Album 5",
    rel: "5"
  },
  { id:"button6",
    value:"Album 6",
    rel: "6"
  }
];

var albumWrapper = [
  {
   title: "Album 1",
   id: "Album1",
   rel:"1"
  },
  {
   title: "Album 2",
   id: "Album2",
   rel:"2"
  },
  {
   title: "Album 3",
   id: "Album3",
   rel:"3"
  },
];

var albumCover = [
  {
    rel:"1",
    location: "photos/IMG_2525.jpg",
    name:"Album 1",
  },
  {
    rel:"2",
    location: "photos/IMG_2595.jpg",
    name:"Album 2",
  },
  {
    rel:"3",
    location: "photos/IMG_2654.jpg",
    name:"Album 3",
  },
  {
    rel:"4",
    location: "photos/IMG_2576.jpg",
    name:"Album 4",
  },
  {
    rel:"5",
    location: "photos/IMG_2637.jpg",
    name:"Album 5",
  },
  {
    rel:"6",
    location: "photos/IMG_2702.jpg",
    name:"Album 6",
  },
];




var templates = {};

templates.photos = [
  "<div class='picture' name=<%=name%>>",
  "<img src='<%=location%>' rel='<%=rel%>'/>",
  "<h5 class='image-title'><%=name%></h5>",
  "</div>"
].join("")

templates.buttons = [
  "<div class='button-wrapper'>",
  "<div class='button' rel='<%=rel%>'>",
  "<input id='<%=id%>' type='button' value='<%=value %>' rel='<%=rel%>' </input>",
  "</div>",
  "</div>"
].join("")

templates.albumWrapper = [
  "<div class='album-wrapper' rel='<%=rel%>'>",
    "<div class='album-title-wrapper'>",
      "<h2 class='album-title'> <%=title%> </h2>",
    "</div>",
    "<div class='album' id= '<%=id%>'>",
    "</div>",
  "</div>"
].join("")

templates.albumCover = [
  "<div class='album-cover' rel='<%=rel%>'>",
    "<img src='<%=location%>'/>",
    "<h5 class='image-title'> <%=name%> </h5>",
  "</div>"
].join("")
