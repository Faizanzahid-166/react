function checkWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return !!(window.WebGLRenderingContext && canvas.getContext("webgl"));
  } catch(e) {
    return false;
  }
}
if(!checkWebGL()) {
  alert("Your GPU/browser does not support WebGL. Try Firefox or a newer PC.");
}
