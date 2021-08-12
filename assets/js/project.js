'use strict';

var project=this.project ? () => {throw new Error ();}:{};

$(()=>{
  project.project=[];

  //作品區
  project.projectListTitles='作品區';
  project.projectListContent='這是作品這是作品';
  project.projectListImgsrc='01';
  project.projectListImgcount=20;

  //專題-雨傘
  project.titles='專題-雨傘';
  project.content='繪圖作品內文';
  project.imgsrc='02';
  project.imgcount=4;
  project.project.push({title:project.titles,content:project.content,imgsrc:project.imgsrc,imgcount:project.imgcount});
  
  //專題-紙膠帶
  project.titles='專題-紙膠帶';
  project.content='技術-學術頒獎';
  project.imgsrc='03';
  project.imgcount=1;
  project.project.push({title:project.titles,content:project.content,imgsrc:project.imgsrc,imgcount:project.imgcount});
  
  //專題-薑黃餅乾
  project.titles='專題-薑黃餅乾';
  project.content='技術-學術頒獎';
  project.imgsrc='04';
  project.imgcount=4;
  project.project.push({title:project.titles,content:project.content,imgsrc:project.imgsrc,imgcount:project.imgcount});
  
  //設計作品-日日新
  project.titles='設計作品-日日新';
  project.content='技術-學術頒獎';
  project.imgsrc='05';
  project.imgcount=6;
  project.project.push({title:project.titles,content:project.content,imgsrc:project.imgsrc,imgcount:project.imgcount});
  
  //設計作品-學術頒獎會
  project.titles='設計作品-學術頒獎會';
  project.content='技術-學術頒獎';
  project.imgsrc='06';
  project.imgcount=1;
  project.project.push({title:project.titles,content:project.content,imgsrc:project.imgsrc,imgcount:project.imgcount});


  //專題程式
  $('#projectBox')[0].innerHTML=``;
  for(let i =0;i<project.project.length;i++){
    $('#projectBox')[0].innerHTML+=`
    <div class="col-4 col-12-medium">
    <span class="image fit"><img src="images/${project.project[i].imgsrc}/1.jpg" alt=""></span>
    <h3>${project.project[i].title}</h3>
    <p>${project.project[i].content}</p>
    <ul class="actions special">
      <li>
        <button  onclick='project.slider(${i})'  type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          More
        </button>
      </li>
    </ul>
  </div>
    `;
  }
  //slider
  project.slider=(n)=>{
    $('#slider')[0].innerHTML=''
    for(let i=1;i<=project.project[n].imgcount;i++){
      $('#slider')[0].innerHTML+=`	
      <div class="carousel-item ${i==1?'active':''}">
      <a href='images/${project.project[n].imgsrc}/${i}.jpg'  class="image hit"><img class="d-block h-100" src="images/${project.project[n].imgsrc}/${i}.jpg" alt="First slide"></a>
    </div>`
    }
    $('#footerimg')[0].innerHTML=''
    for(let i=0;i<project.project[n].imgcount;i++){
      $('#footerimg')[0].innerHTML+=`	
      <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="${i}" aria-label="Slide ${i}">	
      <img class="d-block h-100" src="images/${project.project[n].imgsrc}/${(i+1)}.jpg" alt="First slide">
      </button>`
    }
    $('#slider').poptrox({
      onPopupOpen: function() { $('#slider').addClass('is-poptrox-visible'); },
      onPopupClose: function() { $('#slider').removeClass('is-poptrox-visible'); },
      overlayColor: '#1a1f2c',
      overlayOpacity: 0.75,
      usePopupCloser: false,
      usePopupNav: true,
      windowMargin: 50
    });
  };
  
 

 //作品區程式
  
  $('#projectList')[0].innerHTML='';
  $('#projectListTitles')[0].innerHTML=project.projectListTitles;
  $('#projectListContent')[0].innerHTML=project.projectListContent;
  for(let i=1;i<=project.projectListImgcount;i++){
    $('#projectList')[0].innerHTML+=`
    <div class="col-4 col-6-medium col-12-small">
      <a href="images/${project.projectListImgsrc}/${i}.jpg" class="image fit">
        <img src="images/${project.projectListImgsrc}/${i}.jpg" alt="">
      </a>
    </div>
    `;
  }

  var $body = $('body');
  $('#projectList').poptrox({
    onPopupOpen: function() { $body.addClass('is-poptrox-visible'); },
    onPopupClose: function() { $body.removeClass('is-poptrox-visible'); },
    overlayColor: '#1a1f2c',
    overlayOpacity: 0.75,
    usePopupCloser: false,
    usePopupNav: true,
    windowMargin: 50
  });

});