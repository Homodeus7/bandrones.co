import gsap from 'gsap'

export const animateHeaderInfo = (el: any, opacity: number, delay: number, y: number) => {
  gsap.from(el, {
    opacity: opacity,
    delay: delay,
    y: y,
    ease: 'power3.inOut',
    duration: 2
  })
}
