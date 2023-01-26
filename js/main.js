// 햄버거 탭
const mobileNav = document.querySelector("#mobile_nav");
const mBg = document.querySelector(".m_bg");
const mNavClose = document.querySelector(".x_active");

mobileNav.addEventListener("click",(e)=>{
  e.preventDefault()
  mBg.style.display = 'block'; 	
})
mNavClose.addEventListener("click",()=>{
  mBg.style.display = 'none'; 	
})

// 호버시 이미지 변경

let hoverImg = document.querySelectorAll(".hoverimg");
let imgHoverArray = ["img/main3-on1.jpg","img/main3-on2.jpg","img/main3-on3.jpg"]
let imgOutArray = ["img/main3-img1.jpg","img/main3-img2.jpg","img/main3-img3.jpg"]

for(let i = 0; i < hoverImg.length; i++){
  hoverImg[i].addEventListener("mouseover",()=>{
    hoverImg[i].src = imgHoverArray[i]
  })
  hoverImg[i].addEventListener("mouseout",()=>{
    hoverImg[i].src = imgOutArray[i]
  })
}