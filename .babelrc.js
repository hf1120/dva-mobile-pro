const path = require('path');
module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          components: path.join(__dirname, './src/components'),
        },
      },
    ],
    [
      'import',
      {
        libraryName: 'antd-mobile',
        style: true, // or 'css'
      },
    ],
  ],
};
