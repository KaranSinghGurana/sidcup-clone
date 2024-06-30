let crsr=document.querySelector("#cursor");
let crsrBlur=document.querySelector("#cursor-blur");
document.addEventListener("mousemove",(dets)=>{
 crsr.style.left=dets.x+"px";
 crsr.style.top=dets.y+"px";
 crsrBlur.style.left=dets.x-250+"px";
 crsrBlur.style.top=dets.y-250+"px";
})

var h4all=document.querySelectorAll("#nav h4");
h4all.forEach(function(elem){
   elem.addEventListener("mouseenter",function(){
      crsr.style.scale=3;
      crsr.style.border="1px solid #fff"
      crsr.style.backgroundColor="transparent"
   })

elem.addEventListener("mouseleave",function(){
   crsr.style.scale=1;
   crsr.style.border="none";
   crsr.style.backgroundColor="intial";
})
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

gsap.from("#about-us,#about-us-in",{
   y:50,
   opacity:0,
   duration:1,
   scrollTrigger:{
trigger:"#about-us",
scroller:"body",
start:"top 60%",
end:"top 55%",
scrub:3
   }

})

gsap.from(".card",{
   y:30,
   opacity:0,
   duration:1,
   scrollTrigger:{
trigger:"#card-containers",
scroller:"body",
start:"top 60%",
end:"top 45%",
scrub:1
   }

})

gsap.from("#colan1",{
   y:-70,
   x:-70,
   duration:1,
   scrollTrigger:{
trigger:".page3",
scroller:"body",
start:"top 60%",
end:"top 55%",
scrub:3
   }
})
gsap.from("#colan2",{
   y:70,
   x:70,
   duration:1,
   scrollTrigger:{
trigger:".page3",
scroller:"body",
start:"top 55%",
end:"top 45%",
scrub:3
   }
})

gsap.from("#page4 h1", {
   y: 50,
   scrollTrigger: {
       trigger: "#page4 h1",
       scroller: "body",
       // markers:true,
       start: "top 70%",
       end: "top 65%",
       scrub: 3,
   },
});