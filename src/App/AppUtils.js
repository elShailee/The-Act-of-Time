export function isValidBrowser() {
  // Internet Explorer 6-11
  const isIE = false || !!document.documentMode || navigator.userAgent.indexOf('MSIE') !== -1;

  // Edge 20-78 (not Chromium based)
  const isOldEdge = !isIE && !!window.StyleMedia;

  if (isIE || isOldEdge) {
    return false;
  } else return true;
}
