import texts from 'texts';
import { isBrowserValid } from 'App/utils';

const RenderIfBrowserValidHOC = ({ children }) => {
	if (isBrowserValid()) {
		return children;
	} else {
		return texts.errors.invalidBrowser;
	}
};

export default RenderIfBrowserValidHOC;
