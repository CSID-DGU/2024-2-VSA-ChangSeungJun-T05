import ReactDOM from 'react-dom';

import refreshOnUpdate from 'virtual:reload-on-update-in-view';

import injectedStyle from '@src/styles/font.css?inline';
import HoverModalInjected from './HoverModalInjected';

refreshOnUpdate('pages/content/injected/mouseover');

const styleElement = document.createElement('style');
styleElement.innerHTML = injectedStyle;

const modalRoot = document.createElement('div');

document.head.appendChild(styleElement);
document.body.appendChild(modalRoot);

ReactDOM.render(<HoverModalInjected />, modalRoot);
