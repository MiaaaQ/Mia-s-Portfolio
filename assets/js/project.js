'use strict';

var project=this.project ? () => {throw new Error ();}:{};

$(()=>{
  project.project=[];

  //作品區
  project.projectListTitles='繪圖作品';
  project.projectListContent='前三張為接案的logo /浮水印設計<br>其餘為日常的繪圖作品';
  project.projectListImgsrc='01';
  project.projectListImgcount=9;

  //專題-雨傘
  project.titles='【專題-雨傘購物網站】';
  project.content='網站設計以及輪播圖，商品圖繪製';
  project.imgsrc='02';
  project.imgcount=4;
  project.project.push({title:project.titles,content:project.content,imgsrc:project.imgsrc,imgcount:project.imgcount});
  
  //專題-紙膠帶
  project.titles='【專題-紙膠帶購物網站】';
  project.content='輪播圖繪製';
  project.imgsrc='03';
  project.imgcount=1;
  project.project.push({title:project.titles,content:project.content,imgsrc:project.imgsrc,imgcount:project.imgcount});
  
  //專題-薑黃餅乾
  project.titles='【專題-行銷薑黃餅乾】';
  project.content='商品攝影，吉祥物與感謝卡繪製';
  project.imgsrc='04';
  project.imgcount=4;
  project.project.push({title:project.titles,content:project.content,imgsrc:project.imgsrc,imgcount:project.imgcount});
  
  //設計作品-日日新
  project.titles='【設計-日日新演講活動】';
  project.content='涵蓋2019.03-2021.06的設計版型<br>負責設計海報，網路宣傳及輪播圖';
  project.imgsrc='05';
  project.imgcount=6;
  project.project.push({title:project.titles,content:project.content,imgsrc:project.imgsrc,imgcount:project.imgcount});
  
  //設計作品-學術頒獎會
  project.titles='【設計-學術頒獎邀請函】';
  project.content='設計邀請函版面';
  project.imgsrc='06';
  project.imgcount=1;
  project.project.push({title:project.titles,content:project.content,imgsrc:project.imgsrc,imgcount:project.imgcount});

  //字法
  project.titles='【字法-設計字體】';
  project.content='此為團體發表(構思>討論>實踐)<br>由包浩斯元素去做字體發想設計';
  project.imgsrc='07';
  project.imgcount=3;
  project.project.push({title:project.titles,content:project.content,imgsrc:project.imgsrc,imgcount:project.imgcount});


  //專題程式
  $('#projectBox')[0].innerHTML=``;
  for(let i =0;i<project.project.length;i++){
    $('#projectBox')[0].innerHTML+=`
    <div class="col-4 col-12-medium">
    <span class="image fit">
    <div id='slider${i}'>
      <a href='images/${project.project[i].imgsrc}/1.jpg'  class="image hit">
       <img class="d-block h-100" src="images/${project.project[i].imgsrc}/1.jpg"" alt="First slide">
      </a>
    </div>
    </span>
    <h3>${project.project[i].title}</h3>
    <p>${project.project[i].content}</p>
    <ul class="actions special">
  </div>`;


    for(let j=2;j<=project.project[i].imgcount;j++){
      $(`#slider${i}`)[0].innerHTML+=`	
      <div style='display:none'>
      <a href='images/${project.project[i].imgsrc}/${j}.jpg'  class="image hit">
      <img class="d-block h-100" src="images/${project.project[i].imgsrc}/${j}.jpg" alt="First slide">
      </a>
    </div>`
    }

   
  }
    for(let i =0;i<project.project.length;i++){
    $(`#slider${i}`).poptrox({
      onPopupOpen: function() { $('#slider').addClass('is-poptrox-visible'); },
      onPopupClose: function() { $('#slider').removeClass('is-poptrox-visible'); },
      overlayColor: '#1a1f2c',
      overlayOpacity: 0.75,
      usePopupCloser: false,
      usePopupNav: true,
      windowMargin: 50
    });
  }
 

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

  $('#projectList').poptrox({
    onPopupOpen: function() {  $('#projectList').addClass('is-poptrox-visible'); },
    onPopupClose: function() { $('#projectList').removeClass('is-poptrox-visible'); },
    overlayColor: '#1a1f2c',
    overlayOpacity: 0.75,
    usePopupCloser: false,
    usePopupNav: true,
    windowMargin: 50
  });

});