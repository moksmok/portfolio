

//          PRELOADER

window.addEventListener('load', function() {
    
  
    setTimeout(() => {
        gsap.to('.preloader', {duration: 0.5, opacity: 0, onComplete: function() {
            gsap.set('.preloader', {visibility: 'hidden'})
            home_enter.play()
            afterPreload();
        }})
    }, 600)

})


//          TIMELINE ANIMATIONS

var home_enter = gsap.timeline({paused: true});


home_enter.to('.main-title', {
    duration: 1.2,y: 0, opacity:1, ease: Elastic.easeOut.config(1, 0.75), 
})
home_enter.staggerFrom('.anim-icon', 1.8, {
    y: -40,
    ease: Elastic.easeOut.config(1, 0.75),
    opacity: 0
  }, 0.1, '-=0.9');
home_enter.to('.name-1', {duration: 0.5, x: 0, opacity: 1,}, '-=1.4')
home_enter.to('.title-scroll-home', {duration: 0.45, x: 0, opacity: 1,}, '-=0.9')


var home_leave = gsap.timeline({paused: true});

home_leave.to('.main-title', {duration: 0.2, y: -50, opacity: 0})
home_leave.to('.title-scroll-home', {duration: 0.2, opacity: 0,}, '-=1.5')
home_leave.to('.name-1', {duration: 0.4, x: 100, opacity: 0})
home_leave.to('.anim-icon', 1.8, {ease: Elastic.easeOut.config(1, 0.75), opacity: 0}, 0.1, '-=0.9');



var about_enter = gsap.timeline({paused: true})

about_enter.to('.name-2', {duration: 0.5, x: 0, opacity: 1,}, '-=1.4')
about_enter.to('.title-scroll-about', {duration: 0.45, x: 0, opacity: 1,}, '-=0.9')

var about_leave = gsap.timeline({paused: true})

about_leave.to('.name-2', {duration: 0.5, x: 50, opacity: 0,}, '-=1.4')
about_leave.to('.title-scroll-about', {duration: 0.45, x: 0, opacity: 0,}, '-=0.9')


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
            gsap.to('.project-card', {ease: Power2.easeInOut,duration: 0.45, x: '-100%', delay: 0.75})
        });
}



      

//          OPEN & CLOSE PROJECT CARD


document.querySelector('.project-1').addEventListener('click', function() {
    gsap.to('.card-1', {ease: Power2.easeInOut,duration: 0.45,x: 0})
})

document.getElementById('btn-project-1').addEventListener('click', function() {
    gsap.to('.card-2', {ease: Power2.easeInOut,duration: 0.45,x: 0})
})

document.querySelector('.go-back').addEventListener('click', function() {
    gsap.to('.project-card', {ease: Power2.easeInOut,duration: 0.45, x: '-100%'})
})


//          PAGEPILING


function afterPreload() {

    $('#pagepiling').pagepiling({
        menu: null,
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: [],
        anchors: ['home', 'about', 'projects'],
        scrollingSpeed: 1000,
        easing: 'swing',
        loopBottom: true,
        loopTop: true,
        css3: false,
        navigation: false,
        navigation: {
            'textColor': '#000',
            'bulletsColor': '#15e7c0',
            'position': 'right',
        },
           normalScrollElements: null,
        normalScrollElementTouchThreshold: 3,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,

        //events
        onLeave: function(index){
            if(index == 1){
                console.log('lecimy')
                home_leave.restart()
                // gsap.to('.main-title', {duration: 0.3, y: -50, opacity: 0})
                // gsap.to('.section-name', {duration: 0.4, x: 100, opacity: 0})
                // gsap.to('.icon-1', {duration: 0.3, y: -50, opacity: 0, delay: 0.1})
                // gsap.to('.icon-2', {duration: 0.3, y: -50, opacity: 0, delay: 0.12})
                // gsap.to('.icon-3', {duration: 0.3, y: -50, opacity: 0, delay: 0.14})
                // gsap.to('.title-scroll', {duration: 0.3, opacity: 0, delay: 0.2})
                

            }
            
            if(index == 2){
                console.log('leaving about')
                about_leave.restart()
                // gsap.to('.name-2', {duration: 0.5, x: 100, opacity: 0})
                // gsap.set('.main-title', {y: -50, opacity: 0})
                // gsap.set('.name-1', { x: -50, opacity: 0})
                // gsap.set('.name-3', { x: -50, opacity: 0})
                // gsap.set('.anim-icon', {  opacity: 0})
                // gsap.set('.title-scroll', { opacity: 0})

                // gsap.set('.icon-1', {y: -50, opacity: 0})
                // gsap.set('.icon-2', {y: -50, opacity: 0})
                // gsap.set('.icon-3', {y: -50, opacity: 0})
            }

            if(index == 3){
                console.log('proj')
                projects_leave.restart()
                // gsap.to('.name-3', {duration: 0.5, x: 100, opacity: 0})
                // gsap.set('.main-title', {y: -50, opacity: 0})
                // gsap.set('.name-1', { x: -50, opacity: 0})
            }

        
        },
        afterLoad: function(anchorLink){
            if(anchorLink == 'home'){
                console.log('hooome')
                home_enter.restart()
                // gsap.to('.main-title', {duration: 0.3, y: 0, opacity: 1},  )
              
                // gsap.to('.icon-1', {duration: 0.4, y: 0, opacity: 1, delay: 0.4})
                // gsap.to('.icon-2', {duration: 0.4, y: 0, opacity: 1, delay: 0.5})
                // gsap.to('.icon-3', {duration: 0.4, y: 0, opacity: 1, delay: 0.6})
                // gsap.to('.section-name', {duration: 0.5, x: 0, opacity: 1, delay: 0.9})
                
                
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


