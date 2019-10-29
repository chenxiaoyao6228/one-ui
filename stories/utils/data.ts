const data = {
  name: 'tree-view',
  key: '1',
  type: 'folder',
  collapsed: false,
  children: [
    {
      name: 'example',
      key: '1-1',
      type: 'folder',
      collapsed: false,
      children: [
        {
          name: 'index.html',
          key: '1-1-1',
          type: 'folder',
          collapsed: false
        }
      ]
    },
    {
      name: 'src',
      key: '1-2',
      type: 'folder',
      collapsed: true,
      children: [
        {
          name: 'components',
          key: '1-2-1',
          type: 'folder',
          collapsed: false,
          children: [
            {
              name: 'componentA',
              key: '1-2-1-1',
              type: 'folder',
              collapsed: false,
              children: [
                {
                  name: 'index.js',
                  key: '1-2-1-1-1',
                  type: 'file',
                  collapsed: false
                },
                {
                  name: 'style.css',
                  key: '1-2-1-1-2',
                  type: 'file',
                  collapsed: false,
                }
              ]
            }
          ]
        },
        {
          name: 'index.js',
          key: '1-2-2',
          type: 'file',
          collapsed: false
        }
      ]
    },
    {
      name: 'packge.json',
      key: '1-3',
      type: 'file',
      collapsed: false,
      children: []
    }
  ]
};

export default data;
