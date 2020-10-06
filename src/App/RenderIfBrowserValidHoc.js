import { errorMessagesTexts } from 'Texts/gameplayTexts';
import { isBrowserValid } from 'App/utils';

export default ({ children }) => {
  if (isBrowserValid()) {
    return children;
  } else {
    return errorMessagesTexts.invalidBrowser;
  }
};
