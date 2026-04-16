// Callback store bridging the R3F canvas (where model loads) and the DOM layer.
// Set onReady before the canvas mounts, then RacketModel calls it when the GLTF resolves.
export const loadStore = {
  onReady: null,
}