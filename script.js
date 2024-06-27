let crsr=document.querySelector("#cursor");
let crsrBlur=document.querySelector("#cursor-blur");
document.addEventListener("mousemove",(dets)=>{
 crsr.style.left=dets.x+"px";
 crsr.style.top=dets.y+"px";
 crsrBlur.style.left=dets.x-250+"px";
 crsrBlur.style.top=dets.y-250+"px";
})


gsap.to("#nav",{
     backgroundColor:"#000",
     duration:0.5,
     height:"100px",
     scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        
        start:"top -10%",
        end:"top -11%",
        scrub:1
     }
})
gsap.to("#main",{
   backgroundColor:"#000",
   scrollTrigger:{
      trigger:"#main",
      scroller:"body",
      // markers:true,
      start:"top -25%",
      end:"top -75%",
      scrub:2
   }
})