let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}
function plusDiv(n) {
  showDivs(slideIndex = n);
}
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

let project=[];

//繪圖作品
let title='繪圖作品';
let content='繪圖作品內文';
let imgsrc='01';
let imgcount=20;
project.push({title:title,content:content,imgsrc:imgsrc,imgcount:imgcount});

//技術-學術頒獎
titles='技術-學術頒獎';
content='技術-學術頒獎';
imgsrc='02';
imgcount=7;
project.push({title:title,content:content,imgsrc:imgsrc,imgcount:imgcount});

//技術-日日新
titles='技術-';
content='技術-學術頒獎';
imgsrc='01';
imgcount=8;
project.push({title:title,content:content,imgsrc:imgsrc,imgcount:imgcount});

//技術-學術頒獎
titles='技術-學術頒獎';
content='技術-學術頒獎';
imgsrc='01';
imgcount=4;
project.push({title:title,content:content,imgsrc:imgsrc,imgcount:imgcount});

//技術-學術頒獎
titles='技術-學術頒獎';
content='技術-學術頒獎';
imgsrc='01';
imgcount=4;
project.push({title:title,content:content,imgsrc:imgsrc,imgcount:imgcount});

//技術-學術頒獎
titles='技術-學術頒獎';
content='技術-學術頒獎';
imgsrc='01';
imgcount=4;
project.push({title:title,content:content,imgsrc:imgsrc,imgcount:imgcount});



function setProject(n){
  $('#window')[0].innerHTML=`<div id='projectTitle' class="projectTitle">${project[n].title}</div>`;
  $('#window')[0].innerHTML+=`<div id='projectContent' class='projectContent'>${project[n].content}</div>`;

  let img=`<div id='projectImg' class='projectImg'>`;
  for(let i=1;i<=project[n].imgcount;i++){
    img+=`  <img class="mySlides" src="ass/img/${project[n].imgsrc}/${i}.jpg">`;
  }
  img+=`</div>`;
  $('#window')[0].innerHTML+=img;

  $('#window')[0].innerHTML+=`  <button class="projectSliderLeft" onclick="plusDivs(-1)">&#10094;</button>
  <button class="projectSliderRight" onclick="plusDivs(+1)">&#10095;</button>`;

  img=`<div id='projectImgBox' class='projectImgBox'>`;
  for(let i=1;i<=project[n].imgcount;i++){
    img+=`  <img class="mySlidesBox" onclick='plusDiv(${i})' src="ass/img/${project[n].imgsrc}/${i}.jpg">`;
  }
  img+=`</div>`;
  $('#window')[0].innerHTML+=img;
  $('#outsideWindow').toggle();
}

