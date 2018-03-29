(function(){
      
  var createPageHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(4)
	var $app_style$ = __webpack_require__(5)
	var $app_script$ = __webpack_require__(6)
	
	$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})
	
	$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.5'})


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "tutorial-page"
	  ],
	  "children": [
	    {
	      "type": "tabs",
	      "attr": {},
	      "children": [
	        {
	          "type": "tab-bar",
	          "attr": {},
	          "classList": [
	            "tab-bar"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": "首页"
	              },
	              "classList": [
	                "center"
	              ]
	            },
	            {
	              "type": "text",
	              "attr": {
	                "value": "购物"
	              },
	              "classList": [
	                "center"
	              ]
	            },
	            {
	              "type": "text",
	              "attr": {
	                "value": "我的"
	              },
	              "classList": [
	                "center"
	              ]
	            }
	          ]
	        },
	        {
	          "type": "tab-content",
	          "attr": {},
	          "classList": [
	            "tab-content"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "tab-content-section"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": function () {return '欢迎打开' + (this.title)}
	                  },
	                  "classList": [
	                    "title"
	                  ]
	                },
	                {
	                  "type": "a",
	                  "attr": {
	                    "href": "mailto:example@xx.com",
	                    "value": "调起邮件"
	                  },
	                  "classList": [
	                    "btn",
	                    "center"
	                  ]
	                },
	                {
	                  "type": "a",
	                  "attr": {
	                    "href": "https://www.baidu.com/",
	                    "value": "打开网页"
	                  },
	                  "classList": [
	                    "btn",
	                    "center"
	                  ]
	                },
	                {
	                  "type": "input",
	                  "attr": {
	                    "type": "button",
	                    "value": "跳转到详情页"
	                  },
	                  "classList": [
	                    "btn"
	                  ],
	                  "events": {
	                    "click": "routeDetail"
	                  }
	                },
	                {
	                  "type": "input",
	                  "attr": {
	                    "type": "button",
	                    "value": "微信支付"
	                  },
	                  "classList": [
	                    "btn"
	                  ],
	                  "events": {
	                    "click": "wxhandle"
	                  }
	                },
	                {
	                  "type": "input",
	                  "attr": {
	                    "type": "button",
	                    "value": "支付宝支付"
	                  },
	                  "classList": [
	                    "btn"
	                  ],
	                  "events": {
	                    "click": "zhbhandle"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "tab-content-section"
	              ],
	              "children": [
	                {
	                  "type": "video",
	                  "attr": {
	                    "src": "http://www.comeonone.com/wxaudio/planet.mp3",
	                    "poster": "http://www.comeonone.com/wxaudio/music4.png"
	                  },
	                  "classList": [
	                    "videstyle"
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "tab-content-section"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "content3"
	                  }
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = {
	  ".demo-page": {
	    "flexDirection": "column",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  ".title": {
	    "fontSize": "40px",
	    "textAlign": "center"
	  },
	  ".btn": {
	    "width": "550px",
	    "height": "86px",
	    "marginTop": "75px",
	    "borderRadius": "43px",
	    "backgroundColor": "#09ba07",
	    "fontSize": "30px",
	    "color": "#ffffff"
	  },
	  ".center": {
	    "textAlign": "center"
	  },
	  ".tab-content-section": {
	    "flexDirection": "column",
	    "alignItems": "center"
	  },
	  ".videstyle": {
	    "width": "80%",
	    "height": "50%",
	    "borderRadius": "50px"
	  }
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _system = $app_require$('@app-module/system.router');
	
	var _system2 = _interopRequireDefault(_system);
	
	var _service = $app_require$('@app-module/service.wxpay');
	
	var _service2 = _interopRequireDefault(_service);
	
	var _service3 = $app_require$('@app-module/service.alipay');
	
	var _service4 = _interopRequireDefault(_service3);
	
	var _system3 = $app_require$('@app-module/system.audio');
	
	var _system4 = _interopRequireDefault(_system3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: {
	    title: '小区管家'
	  },
	  routeDetail: function routeDetail() {
	    _system2.default.push({
	      uri: '/DemoDetail',
	      params: {
	        name: this.title
	      }
	    });
	  },
	  wxhandle: function wxhandle() {
	    console.log(_service2.default.getType());
	    _service2.default.pay({
	      prepayid: 'wx20170101abcdef1234567890',
	      extra: {
	        app_id: '',
	        partner_id: '',
	        package_value: '',
	        nonce_str: '',
	        time_stamp: '',
	        order_sign: ''
	      },
	      success: function success() {}
	    });
	  },
	  zhbhandle: function zhbhandle() {
	    _service4.default.pay({
	      orderInfo: '',
	      callback: function callback(res) {
	        console.log('callback');
	      }
	    });
	  }
	};
	
	
	var moduleOwn = exports.default || module.exports;
	var accessors = ['public', 'protected', 'private'];
	
	if (moduleOwn.data && accessors.some(function (acc) {
	  return moduleOwn[acc];
	})) {
	  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
	} else if (!moduleOwn.data) {
	  moduleOwn.data = {};
	  moduleOwn._descriptor = {};
	  accessors.forEach(function (acc) {
	    var accType = _typeof(moduleOwn[acc]);
	    if (accType === 'object') {
	      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
	      for (var name in moduleOwn[acc]) {
	        moduleOwn._descriptor[name] = { access: acc };
	      }
	    } else if (accType === 'function') {
	      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
	    }
	  });
	}}

/***/ }
/******/ ]);
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map