const nav = document.querySelector('nav'); //this selects the nav as the selector
const pointOfTransition = document.querySelector('.landing'); //the selector will listen to until it finds class value .landing

const pointOfTransitionOptions = {};

const pointOfTransitionObserver = new IntersectionObserver(function(
    entries,
    pointOfTransitionObserver
) {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            nav.classList.add('navbar1');//As soon as it intersects with class value 'sectionOne(.landing)', it will add this class
        } else {
            setTimeout(function(){
                nav.classList.remove('navbar1');//As soon as it observes and intersects retracting back it will remove the 'sectionOne('navbar1') and will apply the original class
            }, 1000);
             

        }
         
    })
},
pointOfTransitionOptions);

pointOfTransitionObserver.observe(pointOfTransition);