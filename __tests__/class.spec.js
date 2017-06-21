/**
 * @description - babel-plugin-annotate-ng unit test
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

describe('babel-plugin-annotate-ng Class Declare', function () {
  it('ExportNamedDeclare', function () {
    const fixture = path.resolve(__dirname, '../__fixture__/Class/redux.controller.js');
    const { code } = babel.transformFileSync(fixture, babelOptions);

    expect(code).toMatchSnapshot();
  });

  it('ExportDefaultDeclaration', function () {
    const fixture = path.resolve(__dirname, '../__fixture__/Class/monitor.controller.js');
    const { code } = babel.transformFileSync(fixture, babelOptions);

    expect(code).toMatchSnapshot();
  });
});
