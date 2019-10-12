import { configure } from '@storybook/react';
// import '@storybook/addon-console';

// automatically import all files ending in *.stories.tsx
const req = require.context('../stories', true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(req);
  // require('../stories/backtop.stories.tsx');
}
configure(loadStories, module);