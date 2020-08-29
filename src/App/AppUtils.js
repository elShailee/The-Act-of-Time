export function isBrowserValid() {
  // Internet Explorer 6-11
  const isIE = false || !!document.documentMode || navigator.userAgent.indexOf('MSIE') !== -1;

  // Edge 20-78 (not Chromium based)
  const isOldEdge = !isIE && !!window.StyleMedia;

  const isInvalidBrowser = isIE || isOldEdge;

  return !isInvalidBrowser;
}

export const invalidBrowserMessage =
  'This Application is not supported for this browser, please try to open it using an up-to-date version of Google Chrome, Mozilla Firefox, or Microsoft Edge.';
