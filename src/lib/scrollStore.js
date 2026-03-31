// Mutable store bridging DOM scroll events (GSAP) and R3F render loop (useFrame).
// progress is a continuous float: 0 = hero, 1 = features, 2 = collection, 3 = footer.
// Between integers, the racket interpolates between keyframes.
export const scrollStore = {
  progress: 0,
}