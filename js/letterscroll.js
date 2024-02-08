// Wrap every letter in a span
let LETTER_ANIM_DURATION = 80;

let carolynWrapper = document.querySelector('.intro .carolyn');
carolynWrapper.innerHTML = carolynWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

let designerWrapper = document.querySelector('.intro .designer');
designerWrapper.innerHTML = designerWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

let artistWrapper = document.querySelector('.intro .artist');
artistWrapper.innerHTML = artistWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

let creativeWrapper = document.querySelector('.intro .creative');
creativeWrapper.innerHTML = creativeWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");


let objPropLogEl = document.querySelector('.js-object-log');

let design = {
  display: 'none'
}

let timeline = anime.timeline({autoplay: false})
  
  //carolyn -> design

  // .add({
  //   targets: '#intro',
  //   backgroundColor: '#000',
  //   duration: 4 * LETTER_ANIM_DURATION,
  //   delay: (el, i) => LETTER_ANIM_DURATION * i
  // })

  .add({
    targets: '.scroll',
    opacity: [1, 0],
    duration: 12 * LETTER_ANIM_DURATION,
    delay: (el, i) => LETTER_ANIM_DURATION * i
  })

  .add({
    targets: '.carolyn .letter',
    translateY: [0, "-1.2em"],
    translateZ: 0,
    duration: 4 * LETTER_ANIM_DURATION,
    easing: 'easeInElastic(1, 1)',
    opacity: [1, 0],
    delay: (el, i) => LETTER_ANIM_DURATION * i
  }, 2 * LETTER_ANIM_DURATION)

  .add({
      targets: '.designer .letter',
      translateY: ['1.1em', 0],
      duration: 4 * LETTER_ANIM_DURATION,
      opacity: [0, 1],
      delay: (el, i) => LETTER_ANIM_DURATION * i
  }, 6 * LETTER_ANIM_DURATION)

  // design see more text
  // design in
  .add({
    targets: '.design',
    opacity: [0, 1],
    duration: 6 * LETTER_ANIM_DURATION 
  }, 14 * LETTER_ANIM_DURATION)

  //design -> artwork
  .add({
    targets: '.designer .letter',
    translateY: [0, "-1.2em"],
    translateZ: 0,
    duration: 4 * LETTER_ANIM_DURATION,
    easing: 'easeInElastic(1, 1)',
    opacity: [1, 0],
    delay: (el, i) => LETTER_ANIM_DURATION * i
  }, 19 * LETTER_ANIM_DURATION)

  .add({
      targets: '.artist .letter',
      translateY: ['1.1em', 0],
      duration: 4 * LETTER_ANIM_DURATION,
      opacity: [0, 1],
      delay: (el, i) => LETTER_ANIM_DURATION * i
  }, 23 * LETTER_ANIM_DURATION)

  // design -> art see more text
  // design out
  .add({
    targets: '.design',
    opacity: [1, 0],
    duration: 8 * LETTER_ANIM_DURATION 
  }, 27 * LETTER_ANIM_DURATION) 
  // move deisgn
  .add({
    targets: '.design',
    translateX: -5000,
    duration: 1 
  }, 31 * LETTER_ANIM_DURATION) 
  // artwork in
  .add({
    targets: '.artwork',
    opacity: [0, 1],
    duration: 6 * LETTER_ANIM_DURATION 
  }, 31 * LETTER_ANIM_DURATION)


  //artist -> creative
  .add({
      targets: '.artist .letter',
      translateY: [0, '-1.1em'],
      duration: 4 * LETTER_ANIM_DURATION,
      easing: 'easeInElastic(1, 1)',
      opacity: [1, 0],
      delay: (el, i) => LETTER_ANIM_DURATION * i
  }, 36 * LETTER_ANIM_DURATION)

  .add({
      targets: '.creative .letter',
      translateY: ['1.1em', 0],
      duration: 4 * LETTER_ANIM_DURATION,
      opacity: [0, 1],
      delay: (el, i) => LETTER_ANIM_DURATION * i
  }, 40 * LETTER_ANIM_DURATION)

  // art -> misc see more text
  // art out
  .add({
    targets: '.artwork',
    opacity: [1, 0],
    duration: 8 * LETTER_ANIM_DURATION 
  }, 44 * LETTER_ANIM_DURATION)
  // move art
  .add({
    targets: '.artwork',
    translateX: -5000,
    duration: 1 
  }, 48 * LETTER_ANIM_DURATION)  
  // misc in
  .add({
    targets: '.misc',
    opacity: [0, 1],
    duration: 6 * LETTER_ANIM_DURATION 
  }, 48 * LETTER_ANIM_DURATION)

  //all vanish
  .add({
    targets: '.vert-center',
    opacity: 0,
    duration: 8 * LETTER_ANIM_DURATION,
    easing: "easeOutExpo",
    delay: (el, i) => LETTER_ANIM_DURATION * i
  }, 54 * LETTER_ANIM_DURATION);

onScroll = () => {
  requestAnimationFrame(() => timeline.seek(window.scrollY));
};

window.addEventListener("scroll", onScroll, { passive: true });