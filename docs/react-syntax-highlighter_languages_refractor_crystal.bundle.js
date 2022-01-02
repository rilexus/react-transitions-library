"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkreact_transitions_library"] = self["webpackChunkreact_transitions_library"] || []).push([["react-syntax-highlighter_languages_refractor_crystal"],{

/***/ "./node_modules/refractor/lang/crystal.js":
/*!************************************************!*\
  !*** ./node_modules/refractor/lang/crystal.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar refractorRuby = __webpack_require__(/*! ./ruby.js */ \"./node_modules/refractor/lang/ruby.js\")\nmodule.exports = crystal\ncrystal.displayName = 'crystal'\ncrystal.aliases = []\nfunction crystal(Prism) {\n  Prism.register(refractorRuby)\n  ;(function(Prism) {\n    Prism.languages.crystal = Prism.languages.extend('ruby', {\n      keyword: [\n        /\\b(?:abstract|alias|as|asm|begin|break|case|class|def|do|else|elsif|end|ensure|enum|extend|for|fun|if|include|instance_sizeof|lib|macro|module|next|of|out|pointerof|private|protected|rescue|return|require|select|self|sizeof|struct|super|then|type|typeof|uninitialized|union|unless|until|when|while|with|yield|__DIR__|__END_LINE__|__FILE__|__LINE__)\\b/,\n        {\n          pattern: /(\\.\\s*)(?:is_a|responds_to)\\?/,\n          lookbehind: true\n        }\n      ],\n      number: /\\b(?:0b[01_]*[01]|0o[0-7_]*[0-7]|0x[\\da-fA-F_]*[\\da-fA-F]|(?:\\d(?:[\\d_]*\\d)?)(?:\\.[\\d_]*\\d)?(?:[eE][+-]?[\\d_]*\\d)?)(?:_(?:[uif](?:8|16|32|64))?)?\\b/\n    })\n    Prism.languages.insertBefore('crystal', 'string', {\n      attribute: {\n        pattern: /@\\[.+?\\]/,\n        alias: 'attr-name',\n        inside: {\n          delimiter: {\n            pattern: /^@\\[|\\]$/,\n            alias: 'tag'\n          },\n          rest: Prism.languages.crystal\n        }\n      },\n      expansion: [\n        {\n          pattern: /\\{\\{.+?\\}\\}/,\n          inside: {\n            delimiter: {\n              pattern: /^\\{\\{|\\}\\}$/,\n              alias: 'tag'\n            },\n            rest: Prism.languages.crystal\n          }\n        },\n        {\n          pattern: /\\{%.+?%\\}/,\n          inside: {\n            delimiter: {\n              pattern: /^\\{%|%\\}$/,\n              alias: 'tag'\n            },\n            rest: Prism.languages.crystal\n          }\n        }\n      ]\n    })\n  })(Prism)\n}\n\n\n//# sourceURL=webpack://react-transitions-library/./node_modules/refractor/lang/crystal.js?");

/***/ }),

/***/ "./node_modules/refractor/lang/ruby.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/ruby.js ***!
  \*********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = ruby\nruby.displayName = 'ruby'\nruby.aliases = ['rb']\nfunction ruby(Prism) {\n  /**\n   * Original by Samuel Flores\n   *\n   * Adds the following new token classes:\n   *      constant, builtin, variable, symbol, regex\n   */\n  ;(function(Prism) {\n    Prism.languages.ruby = Prism.languages.extend('clike', {\n      comment: [\n        /#.*/,\n        {\n          pattern: /^=begin\\s[\\s\\S]*?^=end/m,\n          greedy: true\n        }\n      ],\n      keyword: /\\b(?:alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|false|for|if|in|module|new|next|nil|not|or|protected|private|public|raise|redo|require|rescue|retry|return|self|super|then|throw|true|undef|unless|until|when|while|yield)\\b/\n    })\n    var interpolation = {\n      pattern: /#\\{[^}]+\\}/,\n      inside: {\n        delimiter: {\n          pattern: /^#\\{|\\}$/,\n          alias: 'tag'\n        },\n        rest: Prism.languages.ruby\n      }\n    }\n    delete Prism.languages.ruby.function\n    Prism.languages.insertBefore('ruby', 'keyword', {\n      regex: [\n        {\n          pattern: /%r([^a-zA-Z0-9\\s{(\\[<])(?:(?!\\1)[^\\\\]|\\\\[\\s\\S])*\\1[gim]{0,3}/,\n          greedy: true,\n          inside: {\n            interpolation: interpolation\n          }\n        },\n        {\n          pattern: /%r\\((?:[^()\\\\]|\\\\[\\s\\S])*\\)[gim]{0,3}/,\n          greedy: true,\n          inside: {\n            interpolation: interpolation\n          }\n        },\n        {\n          // Here we need to specifically allow interpolation\n          pattern: /%r\\{(?:[^#{}\\\\]|#(?:\\{[^}]+\\})?|\\\\[\\s\\S])*\\}[gim]{0,3}/,\n          greedy: true,\n          inside: {\n            interpolation: interpolation\n          }\n        },\n        {\n          pattern: /%r\\[(?:[^\\[\\]\\\\]|\\\\[\\s\\S])*\\][gim]{0,3}/,\n          greedy: true,\n          inside: {\n            interpolation: interpolation\n          }\n        },\n        {\n          pattern: /%r<(?:[^<>\\\\]|\\\\[\\s\\S])*>[gim]{0,3}/,\n          greedy: true,\n          inside: {\n            interpolation: interpolation\n          }\n        },\n        {\n          pattern: /(^|[^/])\\/(?!\\/)(\\[.+?]|\\\\.|[^/\\\\\\r\\n])+\\/[gim]{0,3}(?=\\s*($|[\\r\\n,.;})]))/,\n          lookbehind: true,\n          greedy: true\n        }\n      ],\n      variable: /[@$]+[a-zA-Z_]\\w*(?:[?!]|\\b)/,\n      symbol: {\n        pattern: /(^|[^:]):[a-zA-Z_]\\w*(?:[?!]|\\b)/,\n        lookbehind: true\n      },\n      'method-definition': {\n        pattern: /(\\bdef\\s+)[\\w.]+/,\n        lookbehind: true,\n        inside: {\n          function: /\\w+$/,\n          rest: Prism.languages.ruby\n        }\n      }\n    })\n    Prism.languages.insertBefore('ruby', 'number', {\n      builtin: /\\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|Fixnum|Float|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\\b/,\n      constant: /\\b[A-Z]\\w*(?:[?!]|\\b)/\n    })\n    Prism.languages.ruby.string = [\n      {\n        pattern: /%[qQiIwWxs]?([^a-zA-Z0-9\\s{(\\[<])(?:(?!\\1)[^\\\\]|\\\\[\\s\\S])*\\1/,\n        greedy: true,\n        inside: {\n          interpolation: interpolation\n        }\n      },\n      {\n        pattern: /%[qQiIwWxs]?\\((?:[^()\\\\]|\\\\[\\s\\S])*\\)/,\n        greedy: true,\n        inside: {\n          interpolation: interpolation\n        }\n      },\n      {\n        // Here we need to specifically allow interpolation\n        pattern: /%[qQiIwWxs]?\\{(?:[^#{}\\\\]|#(?:\\{[^}]+\\})?|\\\\[\\s\\S])*\\}/,\n        greedy: true,\n        inside: {\n          interpolation: interpolation\n        }\n      },\n      {\n        pattern: /%[qQiIwWxs]?\\[(?:[^\\[\\]\\\\]|\\\\[\\s\\S])*\\]/,\n        greedy: true,\n        inside: {\n          interpolation: interpolation\n        }\n      },\n      {\n        pattern: /%[qQiIwWxs]?<(?:[^<>\\\\]|\\\\[\\s\\S])*>/,\n        greedy: true,\n        inside: {\n          interpolation: interpolation\n        }\n      },\n      {\n        pattern: /(\"|')(?:#\\{[^}]+\\}|\\\\(?:\\r\\n|[\\s\\S])|(?!\\1)[^\\\\\\r\\n])*\\1/,\n        greedy: true,\n        inside: {\n          interpolation: interpolation\n        }\n      }\n    ]\n    Prism.languages.rb = Prism.languages.ruby\n  })(Prism)\n}\n\n\n//# sourceURL=webpack://react-transitions-library/./node_modules/refractor/lang/ruby.js?");

/***/ })

}]);