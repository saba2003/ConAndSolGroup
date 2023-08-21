gsap.fromTo(
  '.box',
  {},
  {
    ease: 'none',
    duration: 0.5,
    y: '0px',
    stagger: 0.5,
    opacity: 1,
  }
);

gsap.fromTo(
  '#serv-title',
  { opacity: 0 },
  {
    ease: 'power4.in',
    duration: 1,
    x: '0px',
    opacity: 1,
  }
);
