const details={
  author: [
    "FRANK HERBERT",
    "J.K. ROWLING",
    "J.R.R. TOLKIEN",
    "Paulo Coelho",
    "Arthur Conan Doyle",
    "Agatha Christie",
    "Ernest Hemingway",
    "Jane Austen",
    "Fyodor Dostoevsky",
    "Leo Tolstoy",
    "Mark Twain",
    "George Orwell",
    "Harper Lee",
    "Charles Dickens",
    "William Shakespeare",
    "Emily Bronte",
    "Herman Melville",
    "Virginia Woolf",
    "J.D. Salinger",
    "Oscar Wilde"
  ],
  genre: [
    "Science Fiction, Adventure AND Fantasy",
    "Fantasy, Adventure AND Mystery",
    "Fantasy, Adventure AND High Fantasy",
    "Fiction, Adventure AND Quest",
    "Mystery, Detective AND Crime",
    "Mystery, Detective AND Crime",
    "Fiction, Drama AND Adventure",
    "Romance, Classic AND Social Commentary",
    "Fiction, Psychological AND Existential",
    "Fiction, Historical AND Epic",
    "Adventure, Satire AND Coming-of-age",
    "Dystopian, Science Fiction AND Political",
    "Fiction, Coming-of-age AND Social Commentary",
    "Classic, Historical AND Drama",
    "Classic, Tragedy AND Play",
    "Gothic, Romance AND Drama",
    "Adventure, Psychological AND Symbolism",
    "Modernist, Stream of Consciousness AND Feminist",
    "Coming-of-age, Drama AND Psychological",
    "Classic, Satire AND Social Commentary"
  ],
  bgCol: [
    "#AED6F1",  
    "#FADBD8", 
    "#F9E79F", 
    "#D5F5E3", 
    "#F5CBA7", 
    "#C39BD3", 
    "#82E0AA", 
    "#F5B7B1", 
    "#F4D03F", 
    "#D1F2EB", 
    "#FDEBD0", 
    "#D7BDE2", 
    "#ABEBC6", 
    "#FAD7A0", 
    "#A3E4D7", 
    "#F5EEF8", 
    "#E8DAEF", 
    "#A9DFBF", 
    "#F8C471", 
    "#D2B4DE"  
  ],
  colorArray: [
    "#4E8996", 
    "#E52227", 
    "#0A0A0A", 
    "#31421D", 
    "#0A2535", 
    "#3C2461", 
    "#7D1D0D", 
    "#2A4E43", 
    "#0B0B00", 
    "#2E5351", 
    "#020202", 
    "#3C0D40", 
    "#54683F", 
    "#F52F00", 
    "#5CBBBA", 
    "#0A0A0A", 
    "#26201C", 
    "#565F40", 
    "#0A0700", 
    "#2D256B"
  ],
  
  numPage: [
    "320",
    "432",
    "512",
    "278",
    "368",
    "624",
    "384",
    "576",
    "416",
    "352",
    "480",
    "544",
    "296",
    "608",
    "440",
    "512",
    "352",
    "496",
    "368",
    "544"
  ],
  image: [
    "https://i.thenile.io/r1000/9780593099322.jpg?r=5e75f0e9c3c7d",
    "https://m.media-amazon.com/images/I/81m1s4wIPML._AC_UF1000,1000_QL80_.jpg",
    "https://m.media-amazon.com/images/I/71V2v2GtAtL._AC_UF1000,1000_QL80_.jpg",
    "https://m.media-amazon.com/images/I/51Z0nLAfLmL.jpg",
    "https://m.media-amazon.com/images/I/71YKNrdr8HL.jpg",
    "https://m.media-amazon.com/images/I/41gb1NlQ5OL.jpg",
    "https://m.media-amazon.com/images/I/71Au8SjrwkL._AC_UF1000,1000_QL80_.jpg",
    "https://m.media-amazon.com/images/I/71Q1tPupKjL._AC_UF1000,1000_QL80_.jpg",
    "https://m.media-amazon.com/images/I/81EcXiV-9WL._AC_UF1000,1000_QL80_.jpg",
    "https://m.media-amazon.com/images/I/51s4UBf-y8L._AC_UF1000,1000_QL80_.jpg",
    "https://m.media-amazon.com/images/I/51d3QJXm-AL.jpg",
    "https://m.media-amazon.com/images/I/519zR2oIlmL._AC_UF1000,1000_QL80_.jpg",
    "https://m.media-amazon.com/images/I/41j-s9fHJcL.jpg",
    "https://m.media-amazon.com/images/I/51evTcoKMGL.jpg",
    "https://kbimages1-a.akamaihd.net/695eb39e-9405-4c4b-8267-302344f0f5f7/1200/1200/False/hamlet-15.jpg",
    "https://kbimages1-a.akamaihd.net/9e42d81a-329f-456a-b5a1-7c22808d7fe7/1200/1200/False/wuthering-heights-124.jpg",
    "https://m.media-amazon.com/images/I/41VnFKC9srL._AC_UF1000,1000_QL80_.jpg",
    "https://m.media-amazon.com/images/I/71QHsoTvstL._AC_UF1000,1000_QL80_.jpg",
    "https://m.media-amazon.com/images/I/61fgOuZfBGL._AC_UF1000,1000_QL80_.jpg",
    "https://m.media-amazon.com/images/I/419aqGww7yL._AC_UF1000,1000_QL80_.jpg"
  ]

}
var i=0;
document.getElementById("next").addEventListener("click", function(){
  if(i>=0&&i<details.author.length-1)
  i++;
  document.getElementById("auth1").innerHTML=details.author[i].split(" ")[0].toUpperCase();
  document.getElementById("auth2").innerHTML=details.author[i].replace(details.author[i].split(" ")[0],"").toUpperCase();
  document.getElementById("genre1").innerHTML=details.genre[i].split("AND")[0].toUpperCase();
  document.getElementById("genre2").innerHTML="AND"+details.genre[i].split("AND")[1].toUpperCase();
  document.querySelector("body").style.backgroundColor=details.bgCol[i]
  document.querySelector("body").style.color=details.colorArray[i]
  document.getElementById("numPage").innerHTML="<i class='fa fa-book' style='font-size: 50px;'></i>"+details.numPage[i]+" PAGES"
  document.getElementById("logo").src=details.image[i];
  window.scrollTo(0, 0);
});
document.getElementById("prev").addEventListener("click", function(){
  if(i>0&&i<details.author.length)
  i--;
  document.getElementById("auth1").innerHTML=details.author[i].split(" ")[0].toUpperCase();
  document.getElementById("auth2").innerHTML=details.author[i].replace(details.author[i].split(" ")[0],"").toUpperCase();
  document.getElementById("genre1").innerHTML=details.genre[i].split("AND")[0].toUpperCase();
  document.getElementById("genre2").innerHTML="AND"+details.genre[i].split("AND")[1].toUpperCase();
  document.querySelector("body").style.backgroundColor=details.bgCol[i]
  document.querySelector("body").style.color=details.colorArray[i]
  document.getElementById("numPage").innerHTML="<i class='fa fa-book' style='font-size: 50px;'></i>"+details.numPage[i]+" PAGES"
  document.getElementById("logo").src=details.image[i];
  window.scrollTo(0, 0);
});

window.onscroll = function() {scrollFunction(),scroll2Function(),scroll3Function()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("logo").style.height = "70vh";
    document.getElementById("logo").style.left = "200px";
    document.getElementById("logo").style.top = "100px";
    document.getElementById("down").style.top = "100vh";
  } else {
    document.getElementById("logo").style.height = "100vh";
    document.getElementById("logo").style.display = "block";
    document.getElementById("logo").style.top = "0px";
    document.getElementById("logo").style.left = "500px";
    document.getElementById("down").style.top = "96vh";

  }
}
function scroll2Function() {
  if (document.body.scrollTop > 1080 || document.documentElement.scrollTop > 1080) {
    document.getElementById("author").style.right = "50vb";
    document.getElementById("author").style.top = "30vh";
  } else {
    document.getElementById("author").style.right = "-500px";

  }
}
function scroll3Function() {
  if (document.body.scrollTop > 2080 || document.documentElement.scrollTop > 2080) {
    document.getElementById("page").style.right = "10vb";
    document.getElementById("page").style.top = "5vh";
  } else {
    document.getElementById("page").style.right = "-200px";

  }
}