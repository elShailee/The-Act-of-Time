import { errorMessagesTexts } from 'Texts/gameplayTexts';
export function renderOnlyIfBrowserValid(contentToRender) {
  // Internet Explorer 6-11
  const isIE = false || !!document.documentMode || navigator.userAgent.indexOf('MSIE') !== -1;

  // Edge 20-78 (not Chromium based)
  const isOldEdge = !isIE && !!window.StyleMedia;

  const isBrowserValid = !(isIE || isOldEdge);

  if (isBrowserValid) {
    return contentToRender;
  } else {
    return errorMessagesTexts.invalidBrowser;
  }
}
