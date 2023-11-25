// animations.js
import { gsap } from 'gsap';

export const animateLoginForm = () => {
  gsap.to('.login-form',{
    y: -30,
    duration: 0.8,
    opacity: 1,
    scale: 1.1,
    ease: 'power2.inOut'
  });
};

export const animateSignupForm = () => {
  gsap.to('.signup-form',{
    y: -30,
    duration: 0.8,
    opacity: 1,
    ease: 'power2.inOut'
  });
};

export const animateNavbar = () => {
  gsap.to('.custom-header-container', {
    duration: 1,
    y: 0,
    ease: 'Power4.inOut'
  });
};


