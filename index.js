const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
});

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
});

function skillAnim(skillNUm,animTime,skillPercent){
    let circularProgress = document.querySelector(".circular-progress"+skillNUm),
    progressValue = document.querySelector(".progress-value"+skillNUm);
    
    let progressStartValue = 0,    
    progressEndValue = skillPercent,    
    speed = animTime;
    
    let progress = setInterval(() => {
    progressStartValue++;
    
    progressValue.textContent = `${progressStartValue}%`
    circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`
    
    if(progressStartValue == progressEndValue){
        clearInterval(progress);
    }    
    }, speed);    
}

function startAnim(skill){
    if(skill==="test1"){
      skillAnim(1,20,90);
    }else if (skill==="test2") {
      skillAnim(2,15,75);
    } else if(skill==="test3"){
      skillAnim(3,5,50) 
    }else{
      skillAnim(4,10,60)
    }
}

  // Function to handle the animation when it becomes visible
  function animateOnScroll(entries, observer, skill) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Call your JavaScript animation function
        startAnim(skill);
        // Stop observing once the animation is triggered
        observer.unobserve(entry.target);
      }
    });
  }


  const mySkills = ["test1","test2","test3","test4"]

  mySkills.map(skill => {
        // Create the observer
        const animationElement = document.querySelector("#"+skill);
        const options = {
          root: null, // Use the viewport as the root
          rootMargin: "0px",
          threshold: 0.5, // The percentage of the element that needs to be visible to trigger the animation
        };
       // const observer = new IntersectionObserver(animateOnScroll, options);
       const observer = new IntersectionObserver(entries => {
        animateOnScroll(entries, observer, skill); // Pass the skill as an argument
    }, options);
        // Start observing the animation element
        observer.observe(animationElement);
    
  })

    //scroll reveal
    window.sr = ScrollReveal();
    sr.reveal('.intro__img', {
        duration: 2000,
        origin: 'left',
        distance: '400px',

    });
    sr.reveal('.section__subtitle--intro', {
        duration: 2000,
        origin: 'right',
        distance: '300px',

    });

    