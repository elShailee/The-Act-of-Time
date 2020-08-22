// IE not even getting here, couldnt make it get to this check

//TODO:
//make IE get to this message.

export function isValidBrowser() {
  // Internet Explorer 6-11
  const isIE = false || !!document.documentMode || navigator.userAgent.indexOf('MSIE') !== -1;

  // Edge 20+
  const isEdge = !isIE && !!window.StyleMedia;

  // Chrome 1 - 79
  const isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

  // Edge (based on chromium) detection
  const isEdgeChromium = isChrome && navigator.userAgent.indexOf('Edg') !== -1;

  if (isIE || isEdge || isEdgeChromium) {
    return false;
  } else return true;
}
