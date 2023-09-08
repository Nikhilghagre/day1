
 
 //********************** navbar section *************************//
// nav bar mobile responsive 
const menu_btn= document.querySelector(".menu-btn");
const mobile_nav= document.getElementById("nav-mobile");

var active=0;
const navbar = () => {
  if(active==0){
   mobile_nav.style.display='block';
   active=1;
  }else{
   mobile_nav.style.display="none";
   active=0;
  }
   
}
menu_btn.addEventListener("click",()=> navbar());



 //**********************first -section *************************//

 //heading chaning animation  effect

 var t2 =gsap.timeline({repeat: -1});

 t2.to("#first-special-heading",{
   y:"-100%",
   duration:2,
   ease:Expo,
   
})
t2.from("#secnd-special-heading",{
   y:"+100%",
   duration:1,
   ease:Expo,
   display:"block"
})
t2.to("#secnd-special-heading",{
   y:"-100%",
   duration:2,
   ease:Expo,
   display:"block",
})
t2.from("#thired-special-heading",{
   y:"+100%",
   duration:1,
   ease:Expo,
   display:"block"
})
t2.to("#thired-special-heading",{
   y:"-100%",
   duration:2,
   ease:Expo,
   display:"block"
})

 //animation of character head and body spring effect ;
 var t1 =gsap.timeline({repeat: -1});

 t1.from("#img-content",{
   y:"25",
   x:"-25",
   duration:0.6,
   ease:Bounce
})
t1.from("#body-anima",{
   y:"20",
   x:"-20",
   duration:0.6,
   ease:Bounce
})
t1.to("#img-content",{
   y:"25",
   x:"-25",
   duration:0.6,
   ease:Bounce
})
t1.to("#body-anima",{
   y:"20",
   x:"-20",
   duration:0.6,
   ease:Bounce
})


//animation of character body on basis of mouse movement.

var movement =()=>{
   const hero_section=document.getElementById('hero-section');
   var prex=0;
   var prey=0;
   var difx=0;
   var dify=0;
   hero_section.addEventListener("mousemove",function(dets){

      difx=dets.x-prex;
      dify=dets.y-prey;

      gsap.to('#motion',{
        x:gsap.utils.clamp(-10,10,difx)*5+"px",
        y:gsap.utils.clamp(-10,10,dify)*8+"px",
         duration:1
      })
      prex=dets.x;
      prey=dets.y;
      
   })
}
 
movement()



//scroll trigger on second section 
gsap.to(".split-word .split-char",{
   opacity:0.6,

   scrollTrigger:{
       trigger:"#second-section .split-word .split-char",
       scroll:"body",
       start:"top 30%",
       end:"top 30%",
      //  markers:true,
       stagger:0.2,
       duration:2
   }
})

gsap.to("#image-content",{
   scale:1.02,

   scrollTrigger:{
       trigger:"#image-content img",
       scroll:"body",
       start:"top 30%",
       end:"top 190%",
      //  markers:true,
       scrub:1,
       duration:2
   }
})

gsap.to("#nav-conatiner",{
   
   borderRadius:"30px",
   backgroundColor:'#fff8f2',
   y:5,
   


   scrollTrigger:{
       trigger:"#nav-conatiner ",
       scroll:"body",
       start:"bottom 30%",
      //  markers:true,
   
   }
})





 




