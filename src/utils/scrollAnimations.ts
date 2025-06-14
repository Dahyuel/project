import { useEffect, useRef } from 'react';

interface AnimationOptions {
  threshold?: number;
  rootMargin?: string;
  staggerDelay?: number;
  staggerChildren?: boolean;
}

interface AnimationConfig {
  element: HTMLElement;
  animation: string;
  delay?: number;
}

const animations = new Map<string, AnimationConfig[]>();

export const registerAnimation = (
  element: HTMLElement,
  animation: string,
  delay?: number
) => {
  const key = element.dataset.animationGroup || 'default';
  if (!animations.has(key)) {
    animations.set(key, []);
  }
  animations.get(key)?.push({ element, animation, delay });
};

export const useScrollAnimation = (
  ref: React.RefObject<HTMLElement>,
  options: AnimationOptions = {}
) => {
  const {
    threshold = 0.1,
    rootMargin = '-50px',
    staggerDelay = 0.1,
    staggerChildren = false,
  } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation class to main element
            element.classList.add('animate-in');

            // Handle staggered children if needed
            if (staggerChildren) {
              const children = element.querySelectorAll('.stagger-item');
              children.forEach((child, index) => {
                const delay = index * staggerDelay;
                (child as HTMLElement).style.transitionDelay = `${delay}s`;
                child.classList.add('animate-in');
              });
            }

            // Unobserve after animation
            observer.unobserve(element);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [ref, threshold, rootMargin, staggerDelay, staggerChildren]);
};

// Helper function to split text into words for staggered text animation
export const splitTextIntoWords = (element: HTMLElement) => {
  const text = element.textContent || '';
  const words = text.split(' ');
  
  // Clear existing content
  element.textContent = '';
  
  // Create wrapper for each word
  words.forEach((word, index) => {
    const span = document.createElement('span');
    span.className = 'word stagger-item';
    span.style.transitionDelay = `${index * 0.05}s`;
    span.textContent = word + ' ';
    element.appendChild(span);
  });
};

// Helper function to create a staggered animation group
export const createStaggeredGroup = (
  elements: HTMLElement[],
  baseDelay: number = 0.1
) => {
  elements.forEach((element, index) => {
    element.dataset.animationGroup = 'staggered';
    registerAnimation(element, 'animate-in', baseDelay * index);
  });
}; 