/**
 * @description - babel-plugin-annotate-ng
 * @author - bornkiller <hjj491229492@hotmail.com>
 */
'use strict';

const annotate = require('./annotate');
const NestVisitor = require('./nest-visitor');

module.exports = function ({ types }) {
  return {
    visitor: {
      'ExportNamedDeclaration|ExportDefaultDeclaration': {
        enter(path) {
          // skip when not annotation comment
          if (types.isFunctionDeclaration(path.node.declaration)) {
            if (annotate.inspectAnnotationComment(path, types)) {
              annotate.injectFunctionDeclare(path, types);
            } else {
              path.traverse(NestVisitor, { types: types });
            }

            return;
          }

          if (types.isClassDeclaration(path.node.declaration)) {
            if (annotate.inspectAnnotationComment(path, types)) {
              annotate.injectClassDeclare(path, types);
            } else {
              path.traverse(NestVisitor, { types: types });
            }
          }
        }
      }
    }
  };
};