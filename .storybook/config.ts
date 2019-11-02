import { configure } from '@storybook/react';
// import '@storybook/addon-console';

// automatically import all files ending in *.stories.tsx
// require.context('../stories', true, /\.stories\.tsx$/);

function loadStories() {
  // intro
  // require('../stories/intro')

  // common
  require('../stories/common');

  // input
  // require('../stories/input')

  // layout
  // require('../stories/layout');

  // navigation
  // require('../stories/navigation');

  // dataDisplay
  // require('../stories/dataDisplay');
}
configure(loadStories, module);