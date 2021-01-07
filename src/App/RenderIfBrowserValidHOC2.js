import { errorMessagesTexts } from 'Texts/gameplayTexts';
import { isBrowserValid } from 'App/utils';

const RenderIfBrowserValidHOC = ({ children }) => {
  if (isBrowserValid()) {
    return children;
  } else {
    return errorMessagesTexts.invalidBrowser;
  }
};

export default RenderIfBrowserValidHOC;
