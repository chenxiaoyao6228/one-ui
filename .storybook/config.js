import { configure, addParameters, addDecorator } from '@storybook/react';
import { setConsoleOptions, withConsole } from '@storybook/addon-console';
// import '@storybook/addon-console';

// automatically import all files ending in *.stories.tsx

function loadStories() {
  require('../stories/common');

  require('../stories/layout');

  require('../stories/input');

  require('../stories/dataDisplay');

  require('../stories/navigation');

  require('../stories/feedback');
}

// https://storybook.js.org/docs/configurations/options-parameter/
addParameters({
  options: {
    isFullscreen: false,
    showNav: true,
    showPanel: true,
    panelPosition: 'right',
    hierarchySeparator: /\/|\./,
    sidebarAnimations: true,
    enableShortcuts: true,
    isToolshown: true,
    theme: undefined,
    storySort: undefined
  }
});

// https://github.com/storybookjs/storybook-addon-console
setConsoleOptions({
  panelExclude: []
});
addDecorator((storyFn, context) => withConsole()(storyFn)(context));

configure(loadStories, module);
