
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});



//          PRELOADER

window.addEventListener('load', function() {
    setTimeout(() => {
        
        gsap.to('.cls-1', 0.2, {fillOpacity: 1, ease: Power1.easeInOut})
        gsap.to('.preloader', {duration: 0.5, opacity: 0, onComplete: function() {
            gsap.set('.preloader', {visibility: 'hidden'})
            home_enter.play();
            activateObjects();
            afterPreload();
        }})
    }, 1000)

})


//                  MOVING OBJECTS LOGOS

function activateObjects() {
    let objectLoop = document.getElementsByClassName("object");

    for (let i = 0; i < objectLoop.length; i++) {
      animateDiv(objectLoop[i]);
    };
  
  function makeNewPosition(){
      
      // Get viewport dimensions (remove the dimension of the div)
      var h = $('.info-side').height() - 20;
      var w = $('.info-side').width() - 10;
      
      var nh = Math.floor(Math.random() * h);
      var nw = Math.floor(Math.random() * w);
      
      return [nh,nw];    
      
  }
  
  function animateDiv(myclass){
      var newq = makeNewPosition();
      $(myclass).animate({ top: newq[0], left: newq[1] }, 20000,   function(){
        animateDiv(myclass);        
      },);  
  };
}


 //                      TIMELINE ANIMATIONS



// tl.staggerFromTo('.object', 0.15, {           
//     opacity: 0}, {opacity: 1, ease: Power2.easeInOut}, 0.1, '-=0.3');


//      HOME ENTER & LEAVE

var home_enter = gsap.timeline({paused: true});


home_enter.to('.main-title', {
    duration: 1.2,x: 0, opacity:1, ease: Elastic.easeOut.config(1, 0.75), 
})
home_enter.to('.main-info', {
    duration: 1.2,y: 0, opacity:1, ease: Elastic.easeOut.config(1, 0.75), 
}, '-=0.9')
home_enter.staggerFromTo('.object', 0.15, {         
    opacity: 0}, {opacity: 1, ease: Power2.easeInOut}, 0.1, '-=0.8');
// home_enter.staggerFrom('.anim-icon', 1.8, {
//     y: -40,
//     ease: Elastic.easeOut.config(1, 0.75),
//     opacity: 0
//   }, 0.1, '-=0.9');
home_enter.to('.name-1', {duration: 0.5, x: 0, opacity: 1,}, '-=1')
home_enter.to('.title-scroll-home', {duration: 0.45, x: 0, opacity: 1,}, '-=0.5')


var home_leave = gsap.timeline({paused: true});

home_leave.to('.main-title', {duration: 0.2, x: 50, opacity: 0})
home_leave.to('.main-info', {
    duration: 0.2,y: 50, opacity:0, 
}, '-=0.1')
home_leave.staggerFromTo('.object', 0.15, {         
    opacity: 0}, {opacity: 0, ease: Power2.easeInOut}, 0.1, '-=0.25');
home_leave.to('.title-scroll-home', {duration: 0.2, opacity: 0,}, '-=0.3')
home_leave.to('.name-1', {duration: 0.3, x: 100, opacity: 0}, '-=0.35')
// home_leave.to('.anim-icon', 1.8, {ease: Elastic.easeOut.config(1, 0.75), opacity: 0}, 0.1, '-=0.9');



//      ABOUT ENTER & LEAVE


var about_enter = gsap.timeline({paused: true})

about_enter.to('.name-2', {duration: 0.5, x: 0, opacity: 1,}, '-=1.4')
about_enter.to('.title-scroll-about', {duration: 0.45, x: 0, opacity: 1,}, '-=0.9')

var about_leave = gsap.timeline({paused: true})

about_leave.to('.name-2', {duration: 0.5, x: 50, opacity: 0,}, '-=1.4')
about_leave.to('.title-scroll-about', {duration: 0.45, x: 0, opacity: 0,}, '-=0.9')


//      PROJECTS ENTER & LEAVE


var projects_enter = gsap.timeline({paused: true})

projects_enter.to('.name-3', {duration: 0.5, x: 0, opacity: 1,}, '-=1.4')
projects_enter.to('.title-scroll-projects', {duration: 0.45, x: 0, opacity: 1}, '-=0.9')


var projects_leave = gsap.timeline({paused: true})

projects_leave.to('.name-3', {duration: 0.5, x: 50, opacity: 0,}, '-=1.4')
projects_leave.to('.title-scroll-projects', {duration: 0.45, x: 0, opacity: 0,}, '-=0.9')




//          IF USER CLICK BACK, HIDE PROJECT CARD

if (window.history && window.history.pushState) { 
        $(window).on('popstate', function() {
            console.log('BAAAACK')
            // gsap.to('.project-card', {ease: Power2.easeInOut,duration: 0.45, x: '-100%', delay: 0.75})
        });
}



      

//          OPEN & CLOSE PROJECT CARD


document.querySelector('.project-1').addEventListener('click', function() {
    gsap.to('.card-1', {ease: Power2.easeInOut,duration: 0.45,x: 0})
    gsap.to('.card-1-layer', {ease: Power2.easeInOut,duration: 0.35,x: 0,delay: 0.2,onComplete: function() {
    gsap.to('.project-name', {opacity: 1, duration: 0.2, delay: 0.15})
    }})
})

document.getElementById('btn-project-1').addEventListener('click', function() {
    gsap.to('.card-2', {ease: Power2.easeInOut,duration: 0.45,x: 0})
})

document.querySelector('.go-back').addEventListener('click', function() {
    gsap.to('.project-name', {opacity: 0, duration: 0.15})
    gsap.to('.card-1-layer', {ease: Power2.easeInOut,duration: 0.35,x: '-100%'})
    gsap.to('.card-1', {ease: Power2.easeInOut,duration: 0.45, x: '-100%', delay: 0.2})
    
})


//          PAGEPILING


function afterPreload() {

    $('#pagepiling').pagepiling({
        menu: null,
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: [],
        anchors: ['home', 'about', 'projects'],
        scrollingSpeed: 800,
        easing: 'swing',
        loopBottom: true,
        loopTop: true,
        css3: true,
        navigation: false,
        // navigation: {
        //     'textColor': '#000',
        //     'bulletsColor': '#15e7c0',
        //     'position': 'right',
        // },
        normalScrollElements: '.project-1',
        normalScrollElementTouchThreshold: 3,
        touchSensitivity: 10,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,

        //events
        onLeave: function(index){
            if(index == 1){
                console.log('lecimy')
                home_leave.restart()
            }
            
            if(index == 2){
                console.log('leaving about')
                about_leave.restart()
            }

            if(index == 3){
                console.log('proj')
                projects_leave.restart()
            }

        
        },
        afterLoad: function(anchorLink){
            if(anchorLink == 'home'){
                console.log('hooome')
                home_enter.restart()
            }
            
            if(anchorLink == 'about'){
                console.log('enter about')
                about_enter.restart()
            }

            if(anchorLink == 'projects'){
                console.log('projecty')
                projects_enter.restart()
                
            }
         
        },
        afterRender: function(){
            console.log('wczytane')
            
        },
    });
          
        
}


