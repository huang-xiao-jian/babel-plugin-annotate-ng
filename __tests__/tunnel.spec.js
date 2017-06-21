/**
 * @description - babel-plugin-annotate-ng tunnel none-comment unit test
 * @author - bornkiller <hjj491229492@hotmail.com>
 */

const path = require('path');
const babel = require('babel-core');
const annotate = require('../src');
// fixture
const babelOptions = {
  presets: [],
  plugins: [annotate],
  babelrc: false
};

describe('babel-plugin-annotate-ng Tunnel', function () {
  it('ExportNamedDeclare', function () {
    const fixture = path.resolve(__dirname, '../__fixture__/Tunnel/find-fruit.js');
    const { code } = babel.transformFileSync(fixture, babelOptions);

    expect(code).toMatchSnapshot();
  });
});
