window["setjsApp"] = /******/ (function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Flag the module as loaded
    /******/ module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/ __webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/ __webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/ __webpack_require__.d = function (exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter,
      });
      /******/
    }
    /******/
  };
  /******/
  /******/ // define __esModule on exports
  /******/ __webpack_require__.r = function (exports) {
    /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module",
      });
      /******/
    }
    /******/ Object.defineProperty(exports, "__esModule", { value: true });
    /******/
  };
  /******/
  /******/ // create a fake namespace object
  /******/ // mode & 1: value is a module id, require it
  /******/ // mode & 2: merge all properties of value into the ns
  /******/ // mode & 4: return value when already ns object
  /******/ // mode & 8|1: behave like require
  /******/ __webpack_require__.t = function (value, mode) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === "object" &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, "default", {
      enumerable: true,
      value: value,
    });
    /******/ if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function (key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/ __webpack_require__.n = function (module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module["default"];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, "a", getter);
    /******/ return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/ __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/ __webpack_require__.p = "";
  /******/
  /******/
  /******/ // Load entry module and return exports
  /******/ return __webpack_require__(
    (__webpack_require__.s = "./src/scripts/main.js")
  );
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ "./src/scripts/app/init.js":
      /*!*********************************!*\
  !*** ./src/scripts/app/init.js ***!
  \*********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _seo_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./seo.js */ "./src/scripts/app/seo.js");
        /* harmony import */ var _site_init_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./site/init.js */ "./src/scripts/app/site/init.js"
          );

        /* harmony default export */ __webpack_exports__["default"] = function (
          _ref
        ) {
          var success = _ref.success;
          Object(_site_init_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
          success();
        };

        /***/
      },

    /***/ "./src/scripts/app/seo.js":
      /*!********************************!*\
  !*** ./src/scripts/app/seo.js ***!
  \********************************/
      /*! no exports provided */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var setbp_kernel_event_manager_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! setbp/kernel/event-manager.js */ "./src/scripts/setbp/kernel/event-manager.js"
          );
        /* harmony import */ var setbp_kernel_lang_helper_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! setbp/kernel/lang-helper.js */ "./src/scripts/setbp/kernel/lang-helper.js"
          );
        /* harmony import */ var Router__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! Router */ "./src/scripts/setbp/router/history-router.js"
          );
        /* harmony import */ var config_setup_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! config/setup.js */ "./src/scripts/config/setup.js"
          );

        var $head = $("head");
        setbp_kernel_event_manager_js__WEBPACK_IMPORTED_MODULE_0__[
          "default"
        ].addListener(
          setbp_kernel_event_manager_js__WEBPACK_IMPORTED_MODULE_0__[
            "eventTypes"
          ].loadStart,
          "seo",
          function (_ref) {
            var route = _ref.route;
            var prop =
              setbp_kernel_lang_helper_js__WEBPACK_IMPORTED_MODULE_1__[
                "default"
              ].data();
            var parts = route.path.split("/");
            var _prop$home$meta = prop.home.meta,
              title = _prop$home$meta.title,
              subTitle = _prop$home$meta.subTitle,
              description = _prop$home$meta.description,
              image = _prop$home$meta.image;

            while (prop && parts.length) {
              prop = prop[parts.shift()];

              if (prop && prop.meta) {
                title = prop.meta.title || title;
                subTitle = prop.meta.subTitle || subTitle;
                description = prop.meta.description || description;
              }
            }

            if (subTitle) {
              title += " — " + subTitle;
            }

            document.title = title;
            $head.find('link[rel="image_src"]').attr("content", image);
            $head.find('[name="description"]').attr("content", description);
            $head.find('[property="og:title"]').attr("content", title);
            $head
              .find('[property="og:description"]')
              .attr("content", description);
            $head.find('[property="og:image"]').attr("content", image);
            $head.find('[property="twitter:title"]').attr("content", title);
            $head
              .find('[property="twitter:description"]')
              .attr("content", description);
            $head.find('[property="twitter:image"]').attr("content", image);
            $head.find('link[rel="alternate"]').remove();

            if (route.lang) {
              var pathPrefix =
                window.location.origin +
                Router__WEBPACK_IMPORTED_MODULE_2__["default"].prefix;
              config_setup_js__WEBPACK_IMPORTED_MODULE_3__["default"]
                .languages()
                .forEach(function (lang) {
                  if (lang !== route.lang) {
                    var $el = $('<link rel="alternate">')
                      .attr(
                        "hreflang",
                        {
                          cn: "zh-TW",
                        }[lang] || lang
                      )
                      .attr(
                        "href",
                        pathPrefix + lang + (route.path ? "/" + route.path : "")
                      );
                    $head.append($el);
                  }
                });
            }
          }
        );

        /***/
      },

    /***/ "./src/scripts/app/site/api.js":
      /*!*************************************!*\
  !*** ./src/scripts/app/site/api.js ***!
  \*************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        /***/
      },

    /***/ "./src/scripts/app/site/helper/push.js":
      /*!*********************************************!*\
  !*** ./src/scripts/app/site/helper/push.js ***!
  \*********************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        function fN(n) {
          if (n == undefined) {
            return "nn";
          }

          return ("0" + n).slice(-2);
        }

        function print2D(valuedBoxComp) {
          console.log("********************************");

          for (var i = 0; i < 4; i++) {
            var str = "** ";

            for (var j = 0; j < 4; j++) {
              var ind = i.toString() + j;
              str += "".concat(fN(valuedBoxComp[ind]));

              if (j < 3) {
                str += ", ";
              } else {
                str += " **";
              }
            }

            console.log(str);
          }

          console.log("********************************");
        }

        function redraw(valuedBoxCompArr, valuedBoxComp) {
          for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
              var objKey = i.toString() + j.toString();

              if (valuedBoxComp[objKey] != undefined) {
                var tempComp = valuedBoxCompArr[valuedBoxComp[objKey]];
                tempComp.data.position.top = i * 25 + "%";
                tempComp.data.position.left = j * 25 + "%";
                tempComp.data.position.topi = i;
                tempComp.data.position.lefti = j;
                tempComp.update();
              }
            }
          }
        }

        function push(valuedBoxCompArr, valuedBoxComp, rC) {
          for (var i = 0; i < rC; i++) {
            valuedBoxComp = rotate(valuedBoxComp);
          }

          for (var _i = 0; _i < 4; _i++) {
            for (var j = 1; j < 4; j++) {
              var objKey = j.toString() + _i.toString();

              if (valuedBoxComp[objKey] != undefined) {
                var prevInd = j;
                var canMove =
                  prevInd - 1 > -1 &&
                  valuedBoxComp[prevInd - 1 + _i.toString()] == undefined;
                var tempCompInd = valuedBoxComp[objKey];

                while (canMove) {
                  valuedBoxComp[prevInd + _i.toString()] = undefined;
                  valuedBoxComp[prevInd - 1 + _i.toString()] = tempCompInd;
                  prevInd--;
                  canMove =
                    prevInd - 1 > -1 &&
                    valuedBoxComp[prevInd - 1 + _i.toString()] == undefined;
                }

                if (prevInd > 0) {
                  var thisComp =
                    valuedBoxCompArr[valuedBoxComp[prevInd + _i.toString()]];

                  var preComp =
                    valuedBoxCompArr[
                      valuedBoxComp[prevInd - 1 + _i.toString()]
                    ];

                  var canMerge =
                    prevInd - 1 > -1 &&
                    preComp.data.value == thisComp.data.value;

                  while (canMerge) {
                    valuedBoxComp[prevInd + _i.toString()] = undefined;
                    preComp.data.value += thisComp.data.value;
                    thisComp.$root[0].parentElement.removeChild(
                      thisComp.$root[0]
                    );
                    prevInd--;

                    if (prevInd - 1 > -1) {
                      thisComp = preComp;
                      preComp =
                        valuedBoxCompArr[
                          valuedBoxComp[prevInd - 1 + _i.toString()]
                        ];
                    }

                    canMerge =
                      prevInd - 1 > -1 &&
                      preComp.data.value == thisComp.data.value;
                  }
                }
              }
            }
          }

          for (var _i2 = 0; _i2 < 4 - rC; _i2++) {
            valuedBoxComp = rotate(valuedBoxComp);
          }

          redraw(valuedBoxCompArr, valuedBoxComp);
          return valuedBoxComp;
        }

        function rotate(arr) {
          var newArr = {};
          var maxL = 4;

          for (var i = 0; i < maxL; i++) {
            for (var j = 0; j < maxL; j++) {
              var ind = i.toString() + j.toString();

              if (arr[ind] != undefined) {
                newArr[j + (maxL - 1 - i).toString()] = arr[ind];
              }
            }
          }

          return newArr;
        }

        function pushUp(valuedBoxCompArr, valuedBoxComp, cb) {
          var valuedBoxCompNew = push(valuedBoxCompArr, valuedBoxComp, 0);
          cb && cb(valuedBoxCompNew, 3, undefined);
        }

        function pushDown(valuedBoxCompArr, valuedBoxComp, cb) {
          var valuedBoxCompNew = push(valuedBoxCompArr, valuedBoxComp, 2);
          cb && cb(valuedBoxCompNew, 0, undefined);
        }

        function pushLeft(valuedBoxCompArr, valuedBoxComp, cb) {
          var valuedBoxCompNew = push(valuedBoxCompArr, valuedBoxComp, 1);
          cb && cb(valuedBoxCompNew, undefined, 3);
        }

        function pushRight(valuedBoxCompArr, valuedBoxComp, cb) {
          var valuedBoxCompNew = push(valuedBoxCompArr, valuedBoxComp, 3);
          cb && cb(valuedBoxCompNew, undefined, 0);
        }

        /* harmony default export */ __webpack_exports__["default"] = {
          pushUp: pushUp,
          pushDown: pushDown,
          pushLeft: pushLeft,
          pushRight: pushRight,
          print2D: print2D,
        };

        /***/
      },

    /***/ "./src/scripts/app/site/init.js":
      /*!**************************************!*\
  !*** ./src/scripts/app/site/init.js ***!
  \**************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var setbp_kernel_page_manager_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! setbp/kernel/page-manager.js */ "./src/scripts/setbp/kernel/page-manager.js"
          );
        /* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./api.js */ "./src/scripts/app/site/api.js");
        /* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _api_js__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _template_functions_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./template-functions.js */ "./src/scripts/app/site/template-functions.js"
          );
        /* harmony import */ var _template_functions_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _template_functions_js__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var _pages_home_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./pages/home.js */ "./src/scripts/app/site/pages/home.js"
          );
        /* harmony import */ var _pages_homeinner_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ./pages/homeinner.js */ "./src/scripts/app/site/pages/homeinner.js"
          );

        /* harmony default export */ __webpack_exports__["default"] =
          function () {
            Object(
              setbp_kernel_page_manager_js__WEBPACK_IMPORTED_MODULE_0__[
                "addPage"
              ]
            )("", _pages_home_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
            Object(
              setbp_kernel_page_manager_js__WEBPACK_IMPORTED_MODULE_0__[
                "addPage"
              ]
            )(
              "homeinner",
              _pages_homeinner_js__WEBPACK_IMPORTED_MODULE_4__["default"]
            );
            Object(
              setbp_kernel_page_manager_js__WEBPACK_IMPORTED_MODULE_0__[
                "addPaths"
              ]
            )("site", ["about"]);
          };

        /***/
      },

    /***/ "./src/scripts/app/site/pages/home.js":
      /*!********************************************!*\
  !*** ./src/scripts/app/site/pages/home.js ***!
  \********************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var setbp_template_component_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! setbp/template/component.js */ "./src/scripts/setbp/template/component.js"
          );
        /* harmony import */ var app_site_helper_push_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! app/site/helper/push.js */ "./src/scripts/app/site/helper/push.js"
          );

        var emptyboxesrow = [];
        var initValues = [2, 4];
        var boxComp;
        var valuedBoxCompArr = [];
        var valuedBoxComp = {};

        for (var i = 0; i < 4; i++) {
          var emptyboxescol = [];

          for (var j = 0; j < 4; j++) {
            emptyboxescol.push({
              left: j * 25 + "%",
              top: i * 25 + "%",
            });
          }

          emptyboxesrow.push({
            emptyboxescol: emptyboxescol,
          });
        }

        function canGenerate(ci, cj) {
          app_site_helper_push_js__WEBPACK_IMPORTED_MODULE_1__[
            "default"
          ].print2D(valuedBoxComp);

          if (ci == undefined) {
            for (var _i = 0; _i < 4; _i++) {
              if (valuedBoxComp[_i + cj.toString()] == undefined) {
                return true;
              }
            }
          } else {
            for (var _j = 0; _j < 4; _j++) {
              if (valuedBoxComp[ci.toString() + _j] == undefined) {
                return true;
              }
            }
          }

          return false;
        }

        function addValuedBox(ci, cj) {
          var value = initValues[Math.floor(Math.random() * 100) % 2];
          var valueGood = false;

          if (!canGenerate(ci, cj)) {
            console.log("row full.");
            return;
          }

          while (!valueGood) {
            var ind = Math.floor(Math.random() * 100) % 4;
            var isValid = false;

            if (ci == undefined) {
              isValid = valuedBoxComp[ind + cj.toString()] == undefined;
            }

            if (cj == undefined) {
              isValid = valuedBoxComp[ci.toString() + ind] == undefined;
            }

            if (isValid) {
              if (ci == undefined) {
                ci = ind;
              }

              if (cj == undefined) {
                cj = ind;
              }

              var position = {
                top: 25 * ci + "%",
                left: 25 * cj + "%",
                topi: ci,
                lefti: cj,
              };
              var valuedBox = Object(
                setbp_template_component_js__WEBPACK_IMPORTED_MODULE_0__[
                  "default"
                ]
              )(
                "component/home/valuedbox",
                {
                  value: value,
                  position: position,
                },
                {}
              );
              valuedBoxCompArr.push(valuedBox);
              valuedBoxComp[ci.toString() + cj.toString()] =
                valuedBoxCompArr.length - 1;
              boxComp.$boxCont.append(valuedBox.$root);
              valueGood = true;
            }
          }
        }

        document.onkeydown = checkKey;

        function checkKey(e) {
          e = e || window.event;

          var cb = function cb(updatedValueBoxComp, ci, cj) {
            valuedBoxComp = updatedValueBoxComp;
            addValuedBox(ci, cj);
          };

          if (e.keyCode == "38") {
            app_site_helper_push_js__WEBPACK_IMPORTED_MODULE_1__[
              "default"
            ].pushUp(valuedBoxCompArr, valuedBoxComp, cb);
          } else if (e.keyCode == "40") {
            // down arrow
            app_site_helper_push_js__WEBPACK_IMPORTED_MODULE_1__[
              "default"
            ].pushDown(valuedBoxCompArr, valuedBoxComp, cb);
          } else if (e.keyCode == "37") {
            // left arrow
            app_site_helper_push_js__WEBPACK_IMPORTED_MODULE_1__[
              "default"
            ].pushLeft(valuedBoxCompArr, valuedBoxComp, cb);
          } else if (e.keyCode == "39") {
            // right arrow
            app_site_helper_push_js__WEBPACK_IMPORTED_MODULE_1__[
              "default"
            ].pushRight(valuedBoxCompArr, valuedBoxComp, cb);
          }

          e.preventDefault();
        }

        /* harmony default export */ __webpack_exports__["default"] = {
          templates: ["site/home"],
          comp: function comp() {
            boxComp = Object(
              setbp_template_component_js__WEBPACK_IMPORTED_MODULE_0__[
                "default"
              ]
            )(
              "site/home",
              {
                emptyboxesrow: emptyboxesrow,
              },
              {}
            );
            addValuedBox(3);
            return boxComp;
          },
        };

        /***/
      },

    /***/ "./src/scripts/app/site/pages/homeinner.js":
      /*!*************************************************!*\
  !*** ./src/scripts/app/site/pages/homeinner.js ***!
  \*************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var setbp_template_component_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! setbp/template/component.js */ "./src/scripts/setbp/template/component.js"
          );

        /* harmony default export */ __webpack_exports__["default"] = {
          templates: ["site/homeinner"],
          comp: function comp() {
            return Object(
              setbp_template_component_js__WEBPACK_IMPORTED_MODULE_0__[
                "default"
              ]
            )("site/homeinner");
          },
        };

        /***/
      },

    /***/ "./src/scripts/app/site/template-functions.js":
      /*!****************************************************!*\
  !*** ./src/scripts/app/site/template-functions.js ***!
  \****************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        /***/
      },

    /***/ "./src/scripts/bootstrap/component-init.js":
      /*!*************************************************!*\
  !*** ./src/scripts/bootstrap/component-init.js ***!
  \*************************************************/
      /*! no exports provided */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var setbp_kernel_event_manager_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! setbp/kernel/event-manager.js */ "./src/scripts/setbp/kernel/event-manager.js"
          );
        /* harmony import */ var components_footer_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! components/footer.js */ "./src/scripts/components/footer.js"
          );
        /* harmony import */ var components_navigation_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! components/navigation.js */ "./src/scripts/components/navigation.js"
          );

        setbp_kernel_event_manager_js__WEBPACK_IMPORTED_MODULE_0__[
          "default"
        ].addListener(
          setbp_kernel_event_manager_js__WEBPACK_IMPORTED_MODULE_0__[
            "eventTypes"
          ].init,
          "comp-init",
          function () {
            Object(
              components_footer_js__WEBPACK_IMPORTED_MODULE_1__["default"]
            )();
            Object(
              components_navigation_js__WEBPACK_IMPORTED_MODULE_2__["default"]
            )();
          }
        );

        /***/
      },

    /***/ "./src/scripts/bootstrap/plugin-init.js":
      /*!**********************************************!*\
  !*** ./src/scripts/bootstrap/plugin-init.js ***!
  \**********************************************/
      /*! no exports provided */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var core_acts_funcs_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! core/acts-funcs.js */ "./src/scripts/core/acts-funcs.js"
          );
        /* harmony import */ var setbp_plugins_jquery_accordion_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! setbp/plugins/jquery/accordion.js */ "./src/scripts/setbp/plugins/jquery/accordion.js"
          );
        /* harmony import */ var setbp_plugins_jquery_accordion_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            setbp_plugins_jquery_accordion_js__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var setbp_plugins_jquery_carousel_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! setbp/plugins/jquery/carousel.js */ "./src/scripts/setbp/plugins/jquery/carousel.js"
          );
        /* harmony import */ var setbp_plugins_jquery_form_json_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! setbp/plugins/jquery/form-json.js */ "./src/scripts/setbp/plugins/jquery/form-json.js"
          );
        /* harmony import */ var setbp_plugins_jquery_lightbox_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! setbp/plugins/jquery/lightbox.js */ "./src/scripts/setbp/plugins/jquery/lightbox.js"
          );
        /* harmony import */ var setbp_plugins_misc_animate_visible_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! setbp/plugins/misc/animate-visible.js */ "./src/scripts/setbp/plugins/misc/animate-visible.js"
          );
        /* harmony import */ var setbp_plugins_misc_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! setbp/plugins/misc/dropdown-menu.js */ "./src/scripts/setbp/plugins/misc/dropdown-menu.js"
          );
        /* harmony import */ var setbp_plugins_template_funcs_basic_filters_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! setbp/plugins/template-funcs/basic-filters.js */ "./src/scripts/setbp/plugins/template-funcs/basic-filters.js"
          );
        /* harmony import */ var setbp_plugins_template_funcs_misc_js__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! setbp/plugins/template-funcs/misc.js */ "./src/scripts/setbp/plugins/template-funcs/misc.js"
          );
        /* harmony import */ var plugins_template_funcs_lazy_load_js__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! plugins/template-funcs/lazy-load.js */ "./src/scripts/plugins/template-funcs/lazy-load.js"
          );

        Object(core_acts_funcs_js__WEBPACK_IMPORTED_MODULE_0__["jqFuncs"])([
          "accordion",
          "forceNumber",
          "instagram",
          "marquee",
          "selectize",
        ]);
        /*------------setbp plugins-----------*/

        /*------------Application plugins-----------*/

        /***/
      },

    /***/ "./src/scripts/components/footer.js":
      /*!******************************************!*\
  !*** ./src/scripts/components/footer.js ***!
  \******************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var setbp_template_component_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! setbp/template/component.js */ "./src/scripts/setbp/template/component.js"
          );
        /* harmony import */ var setbp_kernel_event_manager_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! setbp/kernel/event-manager.js */ "./src/scripts/setbp/kernel/event-manager.js"
          );

        /* harmony default export */ __webpack_exports__["default"] =
          function () {
            var comp = Object(
              setbp_template_component_js__WEBPACK_IMPORTED_MODULE_0__[
                "default"
              ]
            )("common/footer");
            $("#footer-placeholder").replaceWith(comp.$root);
            setbp_kernel_event_manager_js__WEBPACK_IMPORTED_MODULE_1__[
              "default"
            ].addListener(
              setbp_kernel_event_manager_js__WEBPACK_IMPORTED_MODULE_1__[
                "eventTypes"
              ].route,
              "footer",
              comp.update,
              null
            );
          };

        /***/
      },

    /***/ "./src/scripts/components/navigation.js":
      /*!**********************************************!*\
  !*** ./src/scripts/components/navigation.js ***!
  \**********************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var setbp_template_component_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! setbp/template/component.js */ "./src/scripts/setbp/template/component.js"
          );
        /* harmony import */ var setbp_kernel_event_manager_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! setbp/kernel/event-manager.js */ "./src/scripts/setbp/kernel/event-manager.js"
          );

        /* harmony default export */ __webpack_exports__["default"] =
          function () {
            var comp = Object(
              setbp_template_component_js__WEBPACK_IMPORTED_MODULE_0__[
                "default"
              ]
            )("common/navigation");
            $("#nav-placeholder").replaceWith(comp.$root);
            setbp_kernel_event_manager_js__WEBPACK_IMPORTED_MODULE_1__[
              "default"
            ].addListener(
              setbp_kernel_event_manager_js__WEBPACK_IMPORTED_MODULE_1__[
                "eventTypes"
              ].route,
              "nav",
              comp.update,
              null
            );
          };

        /***/
      },

    /***/ "./src/scripts/config/app-config.js":
      /*!******************************************!*\
  !*** ./src/scripts/config/app-config.js ***!
  \******************************************/
      /*! exports provided: loader, viewUpdate, closeCls, wheelDelay */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "closeCls",
          function () {
            return closeCls;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "wheelDelay",
          function () {
            return wheelDelay;
          }
        );
        /* harmony import */ var setbp_loaders_progress_bar_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! setbp/loaders/progress-bar.js */ "./src/scripts/setbp/loaders/progress-bar.js"
          );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "loader",
          function () {
            return setbp_loaders_progress_bar_js__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ];
          }
        );

        /* harmony import */ var core_events_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! core/events.js */ "./src/scripts/core/events.js"
          );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "viewUpdate",
          function () {
            return core_events_js__WEBPACK_IMPORTED_MODULE_1__["viewUpdate"];
          }
        );

        var closeCls = "set-close";
        var wheelDelay = 1500;

        /***/
      },

    /***/ "./src/scripts/config/event-types.js":
      /*!*******************************************!*\
  !*** ./src/scripts/config/event-types.js ***!
  \*******************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] = {
          init: 1,
          route: 2,
          loadStart: 3,
          preload: 4,
          loading: 5,
          loaded: 6,
          unload: 7,
          resize: 8,
          scroll: 9,
          view: 10,
          wheel: 11,
          lang: 12,
          gdpr: 13,
          user: 14,
        };

        /***/
      },

    /***/ "./src/scripts/config/setup.js":
      /*!*************************************!*\
  !*** ./src/scripts/config/setup.js ***!
  \*************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var setup = {
          templateUrls: function templateUrls(urls) {
            return urls.map(function (x) {
              return "./templates/" + x + ".html";
            });
          },
          init: function init(obj) {
            $.each(obj, function (key, value) {
              if (setup[key]) {
                throw "Duplicate key: " + key;
              }

              setup[key] = function () {
                return value;
              };
            });
          },
        };
        /* harmony default export */ __webpack_exports__["default"] = setup;

        /***/
      },

    /***/ "./src/scripts/config/storage-types.js":
      /*!*********************************************!*\
  !*** ./src/scripts/config/storage-types.js ***!
  \*********************************************/
      /*! exports provided: storageTypes, default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "storageTypes",
          function () {
            return storageTypes;
          }
        );
        /* harmony import */ var config_event_types_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! config/event-types.js */ "./src/scripts/config/event-types.js"
          );

        var storageTypes = {
          // An example of a storage type object, used by the local/memory storage module from setbp
          gdpr: {
            name: "gdpr",
            type: "boolean",
            eventAfter:
              config_event_types_js__WEBPACK_IMPORTED_MODULE_0__["default"]
                .gdpr,
          },
        };
        /* harmony default export */ __webpack_exports__["default"] =
          function () {
            // add storage types that must be added dynamically here (e.g. using setup methods)
            // this will be called by scripts/setbp/kernel/storage.js when main.js loads it
          };

        /***/
      },

    /***/ "./src/scripts/config/user-roles.js":
      /*!******************************************!*\
  !*** ./src/scripts/config/user-roles.js ***!
  \******************************************/
      /*! exports provided: roleFlags, roles */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "roleFlags",
          function () {
            return roleFlags;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "roles",
          function () {
            return roles;
          }
        );
        var roleFlags = {
          unknown: 1,
          public: 2,
          author: 4,
          editor: 8,
          admin: 16,
          super: 32,
        };
        var roles = [
          {
            name: "Public",
            role: "public",
          },
          {
            name: "Author",
            role: "author",
          },
          {
            name: "Editor",
            role: "editor",
          },
          {
            name: "Admin",
            role: "admin",
          },
          {
            name: "Super",
            role: "super",
          },
        ];

        /***/
      },

    /***/ "./src/scripts/core/acts-funcs.js":
      /*!****************************************!*\
  !*** ./src/scripts/core/acts-funcs.js ***!
  \****************************************/
      /*! exports provided: act, func, jqFuncs, addAction, addFuncs */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "act",
          function () {
            return act;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "func",
          function () {
            return func;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "jqFuncs",
          function () {
            return jqFuncs;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "addAction",
          function () {
            return addAction;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "addFuncs",
          function () {
            return addFuncs;
          }
        );
        var functions = {};
        var actions = {};
        var jqList = [
          "attr",
          "css",
          "data",
          "html",
          "prop",
          "text",
          "toggleClass",
          "val",
        ];
        function act(funcName) {
          if (actions[funcName]) {
            return actions[funcName];
          }

          throw {
            msg: "No such function",
            name: funcName,
          };
        }
        function func(funcName) {
          if (functions[funcName]) {
            return functions[funcName];
          } else if (jqList.indexOf(funcName) >= 0) {
            functions[funcName] = function (val, _ref, val2) {
              var $el = _ref.$el;

              if (arguments.length > 2) {
                $el[funcName](val2, val);
              } else {
                $el[funcName](val);
              }
            };

            return functions[funcName];
          } else {
            throw {
              msg: "No such function",
              name: funcName,
            };
          }
        }
        function jqFuncs(list) {
          jqList = jqList.concat(list);
        }
        function addAction(name, onFunc) {
          if (actions[name]) {
            throw "action exists: " + name;
          }

          actions[name] = onFunc;
        }
        function addFuncs(funcs) {
          Object.keys(funcs).forEach(function (funcName) {
            if (functions[funcName] || typeof funcs[funcName] != "function") {
              throw {
                msg: "Duplicate or not a function",
                funcName: funcName,
                funcs: funcs,
              };
            }

            functions[funcName] = funcs[funcName];
          });
        }

        /***/
      },

    /***/ "./src/scripts/core/app-data.js":
      /*!**************************************!*\
  !*** ./src/scripts/core/app-data.js ***!
  \**************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var setbp_kernel_event_manager_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! setbp/kernel/event-manager.js */ "./src/scripts/setbp/kernel/event-manager.js"
          );
        /* harmony import */ var setbp_kernel_basics_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! setbp/kernel/basics.js */ "./src/scripts/setbp/kernel/basics.js"
          );
        /* harmony import */ var setbp_utility_calls_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! setbp/utility/calls.js */ "./src/scripts/setbp/utility/calls.js"
          );
        /* harmony import */ var entities_sample_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! entities/sample.js */ "./src/scripts/entities/sample.js"
          );

        ["init", "route", "user", "lang"].forEach(function (name) {
          setbp_kernel_event_manager_js__WEBPACK_IMPORTED_MODULE_0__[
            "default"
          ].addListener(
            setbp_kernel_event_manager_js__WEBPACK_IMPORTED_MODULE_0__[
              "eventTypes"
            ][name],
            {
              id: "data",
              priority: 1,
            },
            function (data) {
              name = name == "init" ? "route" : name;
              Object(
                setbp_kernel_basics_js__WEBPACK_IMPORTED_MODULE_1__[
                  "setDefData"
                ]
              )(name, data);
            }
          );
        });
        /* harmony default export */ __webpack_exports__["default"] = function (
          opts
        ) {
          Object(
            setbp_utility_calls_js__WEBPACK_IMPORTED_MODULE_2__["batchCall"]
          )(opts)
            .add(entities_sample_js__WEBPACK_IMPORTED_MODULE_3__["default"])
            .go();
        };

        /***/
      },

    /***/ "./src/scripts/core/asset-loader.js":
      /*!******************************************!*\
  !*** ./src/scripts/core/asset-loader.js ***!
  \******************************************/
      /*! exports provided: addAssetFunc, prePageAssets, postPageAssets */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "addAssetFunc",
          function () {
            return addAssetFunc;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "prePageAssets",
          function () {
            return prePageAssets;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "postPageAssets",
          function () {
            return postPageAssets;
          }
        );
        /* harmony import */ var setbp_template_templates_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! setbp/template/templates.js */ "./src/scripts/setbp/template/templates.js"
          );
        /* harmony import */ var config_setup_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! config/setup.js */ "./src/scripts/config/setup.js"
          );
        /* harmony import */ var setbp_utility_assets_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! setbp/utility/assets.js */ "./src/scripts/setbp/utility/assets.js"
          );
        /* harmony import */ var setbp_utility_calls_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! setbp/utility/calls.js */ "./src/scripts/setbp/utility/calls.js"
          );

        var errMsg =
          "Unable to load page assets. Please check your connection and try again.";
        var preFuncs = [];
        var postFuncs = [];

        function createBatch(list, page, route, progress, callbacks) {
          var data = {
            page: page,
            route: route,
          };
          var bc = Object(
            setbp_utility_calls_js__WEBPACK_IMPORTED_MODULE_3__["batchCall"]
          )(
            $.extend(
              {
                progress: progress,
              },
              callbacks
            )
          );
          list.forEach(function (func) {
            bc.add(func, data);
          });
          return bc;
        }

        function addAssetFunc(func, postFunc) {
          if (postFunc) {
            postFuncs.push(func);
          } else {
            preFuncs.push(func);
          }
        }
        function prePageAssets(page, route, progress) {
          return function (callbacks) {
            createBatch(preFuncs, page, route, progress, callbacks)
              .add(
                setbp_template_templates_js__WEBPACK_IMPORTED_MODULE_0__[
                  "ensureTemplates"
                ],
                {
                  urls: config_setup_js__WEBPACK_IMPORTED_MODULE_1__[
                    "default"
                  ].templateUrls(page.templates || []),
                  jqErr: 1,
                }
              )
              .add(
                setbp_utility_assets_js__WEBPACK_IMPORTED_MODULE_2__[
                  "loadAssets"
                ],
                {
                  urlSets:
                    ("getAssets" in page && page.getAssets(route, page)) ||
                    page.assets,
                  errMsg: errMsg,
                }
              )
              .go();
          };
        }
        function postPageAssets(page, route, progress) {
          return function (callbacks) {
            createBatch(postFuncs, page, route, progress, callbacks).go();
          };
        }

        /***/
      },

    /***/ "./src/scripts/core/events.js":
      /*!************************************!*\
  !*** ./src/scripts/core/events.js ***!
  \************************************/
      /*! exports provided: viewUpdate */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "viewUpdate",
          function () {
            return viewUpdate;
          }
        );
        /* harmony import */ var setbp_kernel_event_manager_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! setbp/kernel/event-manager.js */ "./src/scripts/setbp/kernel/event-manager.js"
          );
        /* harmony import */ var setbp_utility_calls_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! setbp/utility/calls.js */ "./src/scripts/setbp/utility/calls.js"
          );

        var documentTop = 0;
        function viewUpdate(eventType, $el) {
          var height = $(window).height();
          var top = ($el || $(document)).scrollTop();
          var bottom = top + height;
          var change = top - documentTop;
          eventType &&
            setbp_kernel_event_manager_js__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ].raiseEvent(eventType, top, bottom, height, change);
          setbp_kernel_event_manager_js__WEBPACK_IMPORTED_MODULE_0__[
            "default"
          ].raiseEvent(
            setbp_kernel_event_manager_js__WEBPACK_IMPORTED_MODULE_0__[
              "eventTypes"
            ].view,
            top,
            bottom,
            height,
            change
          );
          documentTop = top;
        }

        function createViewEvent(eventType, delay) {
          return Object(
            setbp_utility_calls_js__WEBPACK_IMPORTED_MODULE_1__["throttle"]
          )(function () {
            viewUpdate(eventType);
          }, delay || 20);
        }

        $(window).on(
          "scroll",
          createViewEvent(
            setbp_kernel_event_manager_js__WEBPACK_IMPORTED_MODULE_0__[
              "eventTypes"
            ].scroll
          )
        );
        $(window).on(
          "resize",
          createViewEvent(
            setbp_kernel_event_manager_js__WEBPACK_IMPORTED_MODULE_0__[
              "eventTypes"
            ].resize,
            100
          )
        );

        /***/
      },

    /***/ "./src/scripts/core/route-manager.js":
      /*!*******************************************!*\
  !*** ./src/scripts/core/route-manager.js ***!
  \*******************************************/
      /*! exports provided: setPending, default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "setPending",
          function () {
            return setPending;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function () {
            return handleRoute;
          }
        );
        /* harmony import */ var setbp_kernel_setjs_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! setbp/kernel/setjs.js */ "./src/scripts/setbp/kernel/setjs.js"
          );
        /* harmony import */ var setbp_kernel_storage_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! setbp/kernel/storage.js */ "./src/scripts/setbp/kernel/storage.js"
          );
        /* harmony import */ var setbp_kernel_event_manager_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! setbp/kernel/event-manager.js */ "./src/scripts/setbp/kernel/event-manager.js"
          );
        /* harmony import */ var setbp_kernel_page_loader_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! setbp/kernel/page-loader.js */ "./src/scripts/setbp/kernel/page-loader.js"
          );
        /* harmony import */ var setbp_ui_alert_box_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! setbp/ui/alert-box.js */ "./src/scripts/setbp/ui/alert-box.js"
          );

        var pendingMsg;
        window.addEventListener("beforeunload", function (event) {
          if (pendingMsg) {
            event.preventDefault();
            event.returnValue = "";
          }
        });

        function processRoute(route) {
          setbp_kernel_event_manager_js__WEBPACK_IMPORTED_MODULE_2__[
            "default"
          ].route(route);
          setbp_kernel_page_loader_js__WEBPACK_IMPORTED_MODULE_3__[
            "default"
          ].handleRoute(route);
        }

        function allowRoute(route) {
          var pageId = route.pageId;

          if (pendingMsg) {
            Object(
              setbp_ui_alert_box_js__WEBPACK_IMPORTED_MODULE_4__["default"]
            )({
              message: pendingMsg,
              noTxt: "Stay",
              okTxt: "Leave",
              no: function no(alertController) {
                alertController.close();
                Object(
                  setbp_kernel_setjs_js__WEBPACK_IMPORTED_MODULE_0__["setRoute"]
                )(
                  Object(
                    setbp_kernel_setjs_js__WEBPACK_IMPORTED_MODULE_0__[
                      "prevRoute"
                    ]
                  )().path,
                  1
                );
              },
              ok: function ok(alertController) {
                pendingMsg = 0;
                alertController.close();
                handleRoute(route);
              },
            });
          } else if (
            ["login", "forgot-password"].indexOf(pageId) >= 0 &&
            setbp_kernel_storage_js__WEBPACK_IMPORTED_MODULE_1__["default"].get(
              setbp_kernel_storage_js__WEBPACK_IMPORTED_MODULE_1__[
                "storageTypes"
              ].token
            )
          ) {
            Object(
              setbp_kernel_setjs_js__WEBPACK_IMPORTED_MODULE_0__["setRoute"]
            )();
          } else {
            return 1;
          }
        }

        function setPending(msg) {
          pendingMsg = msg;
        }
        function handleRoute(route) {
          if (allowRoute(route)) {
            processRoute(route);
          }
        }

        /***/
      },

    /***/ "./src/scripts/core/setjs-init.js":
      /*!****************************************!*\
  !*** ./src/scripts/core/setjs-init.js ***!
  \****************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var setbp_kernel_setjs_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! setbp/kernel/setjs.js */ "./src/scripts/setbp/kernel/setjs.js"
          );
        /* harmony import */ var setbp_utility_comp_helpers_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! setbp/utility/comp-helpers.js */ "./src/scripts/setbp/utility/comp-helpers.js"
          );
        /* harmony import */ var setbp_kernel_lang_helper_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! setbp/kernel/lang-helper.js */ "./src/scripts/setbp/kernel/lang-helper.js"
          );
        /* harmony import */ var core_route_manager_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! core/route-manager.js */ "./src/scripts/core/route-manager.js"
          );

        var lastLinkClick = 0;

        function fixPath(pathStr) {
          if (RegExp("account/(confirm|reset-password)/.+/").test(pathStr)) {
            return pathStr;
          }

          return pathStr.replace(/\/{2,}/g, "/").replace(/(.+)\/$/, "$1");
        }

        function getLink(subRoute) {
          var lang =
            setbp_kernel_lang_helper_js__WEBPACK_IMPORTED_MODULE_2__[
              "default"
            ].lang();
          return fixPath("/" + (lang ? lang + "/" : "") + (subRoute || ""));
        }

        function compUpdate($selection) {
          Object(
            setbp_utility_comp_helpers_js__WEBPACK_IMPORTED_MODULE_1__[
              "funcWithSelf"
            ]
          )($selection, "href", function ($link, dHref) {
            if (
              $link.data("dHref") != dHref &&
              !$link.closest("[data-no-links]").length
            ) {
              if ($link.attr("target") != "_blank") {
                $link.off(".hr").on("click.hr", function (e) {
                  if (!e.metaKey) {
                    e.preventDefault();

                    if (Date.now() - lastLinkClick > 900) {
                      Object(
                        setbp_kernel_setjs_js__WEBPACK_IMPORTED_MODULE_0__[
                          "setRoute"
                        ]
                      )(dHref);
                      lastLinkClick = Date.now();
                    }
                  }
                });
              }

              $link.data("dHref", dHref).attr("href", getLink(dHref));
            }
          });
        }

        function handleEvent(args, func) {
          var comp = args.comp,
            $el = args.$el,
            action = args.action,
            e = args.e;

          if (comp.busy || e.type == "submit" || $el.data("stop")) {
            // Do this early to avoid default browser action in case of errors
            e.preventDefault();
            e.stopPropagation();
          }

          if (!comp.busy) {
            if (
              e.originalEvent &&
              e.originalEvent.changedTouches &&
              e.originalEvent.changedTouches.length
            ) {
              args._e = e;
              args.e = e.originalEvent.changedTouches[0];
            }

            if (action == "form") {
              var $button = $el.find('[type="submit"]');
              comp.busy = true;
              $button.prop("disabled", true);
              $el.addClass("loading").removeClass("error success");

              args.error = function (message) {
                args.end("error", message);
              };

              args.success = function (messageObj) {
                args.end(
                  "success",
                  (messageObj && messageObj.message) || messageObj
                );
              };

              args.end = function (cls, message) {
                comp.busy = false;
                $el.removeClass("loading").addClass(cls);
                $button.prop("disabled", false);
                $("body").removeClass("loading");

                if (comp.$formMsg) {
                  comp.$formMsg.text(message || "");
                }
              };
            }

            func(args);
          }
        }

        /* harmony default export */ __webpack_exports__["default"] =
          function () {
            Object(
              setbp_kernel_setjs_js__WEBPACK_IMPORTED_MODULE_0__["initSetjs"]
            )({
              fixPath: fixPath,
              getLink: getLink,
              compUpdate: compUpdate,
              handleEvent: handleEvent,
              handleRoute:
                core_route_manager_js__WEBPACK_IMPORTED_MODULE_3__["default"],
              lang: setbp_kernel_lang_helper_js__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ].lang,
            });
          };

        /***/
      },

    /***/ "./src/scripts/entities/sample.js":
      /*!****************************************!*\
  !*** ./src/scripts/entities/sample.js ***!
  \****************************************/
      /*! exports provided: getUsers, getUser, getUserPosts, default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getUsers",
          function () {
            return getUsers;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getUser",
          function () {
            return getUser;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getUserPosts",
          function () {
            return getUserPosts;
          }
        );
        function getUsers(_ref) {
          var success = _ref.success,
            error = _ref.error;
          $.getJSON("//jsonplaceholder.typicode.com/users", success).fail(
            error
          );
        }
        function getUser(id, _ref2) {
          var success = _ref2.success,
            error = _ref2.error;
          $.getJSON("//jsonplaceholder.typicode.com/users/" + id, success).fail(
            error
          );
        }
        function getUserPosts(id, _ref3) {
          var success = _ref3.success,
            error = _ref3.error;
          $.getJSON(
            "//jsonplaceholder.typicode.com/posts?userId=" + id,
            success
          ).fail(error);
        }
        /* harmony default export */ __webpack_exports__["default"] = function (
          opts
        ) {
          // This method is called by core/app-data.js for initialisation
          // Here you can perform any initialisation including API use. Just call opts.success when done
          // if there's a fatal error, call opts.error. The application will stop loading with error
          opts.success();
        };

        /***/
      },

    /***/ "./src/scripts/main.js":
      /*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
      /*! exports provided: start */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "start",
          function () {
            return start;
          }
        );
        /* harmony import */ var setbp_kernel_setjs_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! setbp/kernel/setjs.js */ "./src/scripts/setbp/kernel/setjs.js"
          );
        /* harmony import */ var config_setup_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! config/setup.js */ "./src/scripts/config/setup.js"
          );
        /* harmony import */ var setbp_kernel_lang_helper_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! setbp/kernel/lang-helper.js */ "./src/scripts/setbp/kernel/lang-helper.js"
          );
        /* harmony import */ var core_app_data_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! core/app-data.js */ "./src/scripts/core/app-data.js"
          );
        /* harmony import */ var setbp_kernel_storage_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! setbp/kernel/storage.js */ "./src/scripts/setbp/kernel/storage.js"
          );
        /* harmony import */ var setbp_kernel_page_loader_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! setbp/kernel/page-loader.js */ "./src/scripts/setbp/kernel/page-loader.js"
          );
        /* harmony import */ var setbp_utility_calls_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! setbp/utility/calls.js */ "./src/scripts/setbp/utility/calls.js"
          );
        /* harmony import */ var app_init_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(/*! app/init.js */ "./src/scripts/app/init.js");
        /* harmony import */ var core_setjs_init_js__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! core/setjs-init.js */ "./src/scripts/core/setjs-init.js"
          );
        /* harmony import */ var setbp_template_templates_js__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! setbp/template/templates.js */ "./src/scripts/setbp/template/templates.js"
          );
        /* harmony import */ var bootstrap_plugin_init_js__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! bootstrap/plugin-init.js */ "./src/scripts/bootstrap/plugin-init.js"
          );
        /* harmony import */ var bootstrap_component_init_js__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(
            /*! bootstrap/component-init.js */ "./src/scripts/bootstrap/component-init.js"
          );

        function start(settings) {
          config_setup_js__WEBPACK_IMPORTED_MODULE_1__["default"].init(
            settings
          );
          setbp_kernel_storage_js__WEBPACK_IMPORTED_MODULE_4__[
            "default"
          ].init();
          setbp_kernel_lang_helper_js__WEBPACK_IMPORTED_MODULE_2__[
            "default"
          ].init();
          Object(
            setbp_template_templates_js__WEBPACK_IMPORTED_MODULE_9__[
              "loadTemplates"
            ]
          )($("#init-error").html());
          Object(core_setjs_init_js__WEBPACK_IMPORTED_MODULE_8__["default"])();
          Object(
            setbp_utility_calls_js__WEBPACK_IMPORTED_MODULE_6__["batchCall"]
          )({
            error:
              setbp_kernel_page_loader_js__WEBPACK_IMPORTED_MODULE_5__[
                "default"
              ].initError,
            success: function success() {
              Object(app_init_js__WEBPACK_IMPORTED_MODULE_7__["default"])({
                error:
                  setbp_kernel_page_loader_js__WEBPACK_IMPORTED_MODULE_5__[
                    "default"
                  ].initError,
                success:
                  setbp_kernel_setjs_js__WEBPACK_IMPORTED_MODULE_0__[
                    "startApp"
                  ],
              });
            },
          })
            .add(
              setbp_template_templates_js__WEBPACK_IMPORTED_MODULE_9__[
                "ensureTemplates"
              ],
              {
                urls: config_setup_js__WEBPACK_IMPORTED_MODULE_1__[
                  "default"
                ].templateUrls(["common"]),
              }
            )
            .add(core_app_data_js__WEBPACK_IMPORTED_MODULE_3__["default"])
            .add(
              setbp_kernel_lang_helper_js__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ].initData
            )
            .go();
        }

        /***/
      },

    /***/ "./src/scripts/plugins/template-funcs/lazy-load.js":
      /*!*********************************************************!*\
  !*** ./src/scripts/plugins/template-funcs/lazy-load.js ***!
  \*********************************************************/
      /*! no exports provided */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var core_acts_funcs_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! core/acts-funcs.js */ "./src/scripts/core/acts-funcs.js"
          );
        /* harmony import */ var setbp_utility_lazy_media_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! setbp/utility/lazy-media.js */ "./src/scripts/setbp/utility/lazy-media.js"
          );

        Object(core_acts_funcs_js__WEBPACK_IMPORTED_MODULE_0__["addFuncs"])({
          lazyImg: Object(
            setbp_utility_lazy_media_js__WEBPACK_IMPORTED_MODULE_1__["makeLazy"]
          )("src"),
          lazyBg: Object(
            setbp_utility_lazy_media_js__WEBPACK_IMPORTED_MODULE_1__["makeLazy"]
          )("bg"),
        });

        /***/
      },

    /***/ "./src/scripts/setbp/kernel/basics.js":
      /*!********************************************!*\
  !*** ./src/scripts/setbp/kernel/basics.js ***!
  \********************************************/
      /*! exports provided: fatal, getPropDef, setDefData, dataForName */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fatal",
          function () {
            return fatal;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getPropDef",
          function () {
            return getPropDef;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "setDefData",
          function () {
            return setDefData;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "dataForName",
          function () {
            return dataForName;
          }
        );
        /* harmony import */ var setbp_utility_objects_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! setbp/utility/objects.js */ "./src/scripts/setbp/utility/objects.js"
          );

        var defData = {};
        function fatal(msg, info) {
          for (
            var _len = arguments.length,
              extra = new Array(_len > 2 ? _len - 2 : 0),
              _key = 2;
            _key < _len;
            _key++
          ) {
            extra[_key - 2] = arguments[_key];
          }

          throw {
            msg: msg,
            info: info,
            extra: extra,
          };
        }
        function getPropDef(propPath, data) {
          return Object(
            setbp_utility_objects_js__WEBPACK_IMPORTED_MODULE_0__["getProp"]
          )(propPath, data, defData);
        }
        function setDefData(name, val) {
          defData["@" + name] = val;
        }
        function dataForName(name, data) {
          return name in data ? data : name in defData ? defData : null;
        }

        /***/
      },

    /***/ "./src/scripts/setbp/kernel/event-manager.js":
      /*!***************************************************!*\
  !*** ./src/scripts/setbp/kernel/event-manager.js ***!
  \***************************************************/
      /*! exports provided: eventTypes, default, addEventListeners */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "addEventListeners",
          function () {
            return addEventListeners;
          }
        );
        /* harmony import */ var setbp_utility_array_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! setbp/utility/array.js */ "./src/scripts/setbp/utility/array.js"
          );
        /* harmony import */ var config_event_types_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! config/event-types.js */ "./src/scripts/config/event-types.js"
          );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "eventTypes",
          function () {
            return config_event_types_js__WEBPACK_IMPORTED_MODULE_1__[
              "default"
            ];
          }
        );

        function _toConsumableArray(arr) {
          return (
            _arrayWithoutHoles(arr) ||
            _iterableToArray(arr) ||
            _unsupportedIterableToArray(arr) ||
            _nonIterableSpread()
          );
        }

        function _nonIterableSpread() {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }

        function _unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (
            n === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return _arrayLikeToArray(o, minLen);
        }

        function _iterableToArray(iter) {
          if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
            return Array.from(iter);
        }

        function _arrayWithoutHoles(arr) {
          if (Array.isArray(arr)) return _arrayLikeToArray(arr);
        }

        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }

        var events = {};
        $.each(
          config_event_types_js__WEBPACK_IMPORTED_MODULE_1__["default"],
          function (i, v) {
            events[v] = [];
          }
        );
        var eventManager = {
          route: function route(_route) {
            eventManager.raiseEvent(
              config_event_types_js__WEBPACK_IMPORTED_MODULE_1__["default"]
                .init ||
                config_event_types_js__WEBPACK_IMPORTED_MODULE_1__["default"]
                  .route,
              _route
            );
            delete events[
              config_event_types_js__WEBPACK_IMPORTED_MODULE_1__["default"].init
            ];
            config_event_types_js__WEBPACK_IMPORTED_MODULE_1__[
              "default"
            ].init = 0;
          },
          addListener: function addListener(type, config, method, data) {
            var listener = {
              priority: config.priority || 3,
              config: config,
              method: method,
              data: data,
              hasData: arguments.length > 3,
            };
            events[type].push(listener);
            Object(setbp_utility_array_js__WEBPACK_IMPORTED_MODULE_0__["sort"])(
              events[type],
              "priority"
            );

            if (typeof method != "function") {
              throw "Not a function";
            }

            return listener;
          },
          removeListener: function removeListener(type, listener) {
            listener &&
              Object(
                setbp_utility_array_js__WEBPACK_IMPORTED_MODULE_0__[
                  "removeFromListByValue"
                ]
              )(events[type], listener.method || listener, "method");
          },
          raiseEvent: function raiseEvent(type) {
            for (
              var _len = arguments.length,
                _args = new Array(_len > 1 ? _len - 1 : 0),
                _key = 1;
              _key < _len;
              _key++
            ) {
              _args[_key - 1] = arguments[_key];
            }

            events[type].forEach(function (item) {
              var args = _args.slice();

              try {
                if (item.hasData) {
                  args.unshift(item.data);
                }

                item.method.apply(item, _toConsumableArray(args));
              } catch (e) {
                throw {
                  type: type,
                  item: item,
                  args: args,
                  e: e,
                };
              }
            });
          },
        };
        eventManager.addListener(
          config_event_types_js__WEBPACK_IMPORTED_MODULE_1__["default"].unload,
          {
            p: "em",
            priority: 5,
          },
          function () {
            $.each(events, function (name, list) {
              for (var i = list.length - 1; i >= 0; i--) {
                if (list[i].config.pageOnly) {
                  list.splice(i, 1);
                }
              }
            });
          }
        );

        /* harmony default export */ __webpack_exports__["default"] =
          eventManager;
        function addEventListeners(types) {
          for (
            var _len2 = arguments.length,
              args = new Array(_len2 > 1 ? _len2 - 1 : 0),
              _key2 = 1;
            _key2 < _len2;
            _key2++
          ) {
            args[_key2 - 1] = arguments[_key2];
          }

          var listeners = [];
          types.forEach(function (type) {
            listeners.push(
              eventManager.addListener.apply(eventManager, [type].concat(args))
            );
          });
          return listeners;
        }

        /***/
      },

    /***/ "./src/scripts/setbp/kernel/lang-helper.js":
      /*!*************************************************!*\
  !*** ./src/scripts/setbp/kernel/lang-helper.js ***!
  \*************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var setbp_kernel_setjs_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! setbp/kernel/setjs.js */ "./src/scripts/setbp/kernel/setjs.js"
          );
        /* harmony import */ var Router__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! Router */ "./src/scripts/setbp/router/history-router.js"
          );
        /* harmony import */ var config_setup_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! config/setup.js */ "./src/scripts/config/setup.js"
          );
        /* harmony import */ var core_acts_funcs_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! core/acts-funcs.js */ "./src/scripts/core/acts-funcs.js"
          );
        /* harmony import */ var setbp_kernel_event_manager_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! setbp/kernel/event-manager.js */ "./src/scripts/setbp/kernel/event-manager.js"
          );
        /* harmony import */ var setbp_kernel_page_loader_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! setbp/kernel/page-loader.js */ "./src/scripts/setbp/kernel/page-loader.js"
          );

        var languages, _lang2, langData;

        function isSupported(lang) {
          return languages.indexOf(lang) >= 0;
        }

        function initData(_ref) {
          var success = _ref.success,
            error = _ref.error;

          if (!_lang2) {
            success();
          } else {
            // $.getJSON(
            //   "./muhammadali151.github.io/2048/data/lang/".concat(
            //     _lang2,
            //     ".json"
            //   )
            // )
            //   .done(function (_langData) {
            var _langData = {
              navigation: {
                header: {
                  language: "Language",
                },
              },
              home: {
                meta: {
                  title: "SetJS Boilerplate - By State Empire",
                  description:
                    "SetJS is a rapid design and development system, which provides a lightweight and more stable alternative to today's heavy SPA frameworks.",
                },
              },
              notFound: {
                meta: {
                  title: "Not Found",
                  description: "The requested page does not exist",
                },
              },
              error: {
                meta: {
                  title: "Error",
                  description: "An error occurred",
                },
                connectionError:
                  "An error occured. Make sure you are connected and try again.",
                authError: "You are not authorized to view this page.",
              },
            };
            _langData.lang = _lang2;
            langData = _langData;
            setbp_kernel_event_manager_js__WEBPACK_IMPORTED_MODULE_4__[
              "default"
            ].raiseEvent(
              setbp_kernel_event_manager_js__WEBPACK_IMPORTED_MODULE_4__[
                "eventTypes"
              ].lang,
              langData
            );
            success();
            // })
            // .fail(error);
          }
        }

        function setLang(_lang) {
          _lang = _lang || languages[0];

          if (isSupported(_lang)) {
            _lang2 = _lang;
            initData({
              error:
                setbp_kernel_page_loader_js__WEBPACK_IMPORTED_MODULE_5__[
                  "default"
                ].connectionError,
              success: function success() {
                Object(
                  setbp_kernel_setjs_js__WEBPACK_IMPORTED_MODULE_0__["setRoute"]
                )(
                  Object(
                    setbp_kernel_setjs_js__WEBPACK_IMPORTED_MODULE_0__[
                      "getRoute"
                    ]
                  )().path
                );
              },
            });
          }
        }

        Object(core_acts_funcs_js__WEBPACK_IMPORTED_MODULE_3__["addAction"])(
          "setLang",
          function (_ref2) {
            var arg = _ref2.arg;
            setLang(arg);
          }
        );
        /* harmony default export */ __webpack_exports__["default"] = {
          setLang: setLang,
          initData: initData,
          init: function init() {
            languages =
              config_setup_js__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ].languages() || [];

            if (languages.length) {
              _lang2 = Router__WEBPACK_IMPORTED_MODULE_1__["default"]
                .getPath()
                .split("/")[0];
              _lang2 = isSupported(_lang2) ? _lang2 : languages[0];
            }

            _lang2 =
              _lang2 ||
              config_setup_js__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ].dataFile();
          },
          lang: function lang() {
            return languages.length ? _lang2 : "";
          },
          isRtl: function isRtl(lang) {
            return lang == "ar";
          },
          data: function data() {
            return langData;
          },
        };

        /***/
      },

    /***/ "./src/scripts/setbp/kernel/page-loader.js":
      /*!*************************************************!*\
  !*** ./src/scripts/setbp/kernel/page-loader.js ***!
  \*************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var setbp_template_component_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! setbp/template/component.js */ "./src/scripts/setbp/template/component.js"
          );
        /* harmony import */ var config_app_config_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! config/app-config.js */ "./src/scripts/config/app-config.js"
          );
        /* harmony import */ var setbp_kernel_roles_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! setbp/kernel/roles.js */ "./src/scripts/setbp/kernel/roles.js"
          );
        /* harmony import */ var setbp_kernel_storage_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! setbp/kernel/storage.js */ "./src/scripts/setbp/kernel/storage.js"
          );
        /* harmony import */ var setbp_kernel_event_manager_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! setbp/kernel/event-manager.js */ "./src/scripts/setbp/kernel/event-manager.js"
          );
        /* harmony import */ var setbp_utility_calls_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! setbp/utility/calls.js */ "./src/scripts/setbp/utility/calls.js"
          );
        /* harmony import */ var setbp_kernel_page_manager_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! setbp/kernel/page-manager.js */ "./src/scripts/setbp/kernel/page-manager.js"
          );
        /* harmony import */ var core_asset_loader_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! core/asset-loader.js */ "./src/scripts/core/asset-loader.js"
          );

        var loginManager,
          pageData,
          count = 1;

        function setLoginManager(_loginManager) {
          loginManager = _loginManager;
        }

        function handleAuthError(type, cb) {
          return loginManager.handleAuthError(type, cb);
        }

        function showError(data) {
          var compName =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : "common/error";
          config_app_config_js__WEBPACK_IMPORTED_MODULE_1__[
            "loader"
          ].loadContent(
            Object(
              setbp_template_component_js__WEBPACK_IMPORTED_MODULE_0__[
                "default"
              ]
            )(
              compName,
              typeof data == "string"
                ? {
                    msg: data,
                  }
                : data
            ).$root,
            config_app_config_js__WEBPACK_IMPORTED_MODULE_1__["viewUpdate"]
          );
        }

        function authError() {
          showError({
            error_code: 403,
            errName: "authError",
          });
        }

        function connectionError() {
          showError({
            errName: "connectionError",
          });
        }

        function initError(result) {
          showError(result, "init-error");
        }

        function notFound() {
          showError(null, "common/404");
        }

        function unloadPage() {
          if (pageData && pageData.pageComp) {
            "unload" in pageData.page && pageData.page.unload(pageData);
            setbp_kernel_event_manager_js__WEBPACK_IMPORTED_MODULE_4__[
              "default"
            ].raiseEvent(
              setbp_kernel_event_manager_js__WEBPACK_IMPORTED_MODULE_4__[
                "eventTypes"
              ].unload,
              pageData
            );
          }

          pageData = null;
        }

        function handleRoute(route) {
          if (
            pageData &&
            pageData.page.handleRoute &&
            pageData.page.handleRoute(pageData, route)
          ) {
            Object(
              config_app_config_js__WEBPACK_IMPORTED_MODULE_1__["viewUpdate"]
            )();
          } else {
            loadPage(route);
          }
        }

        function loadPage(route) {
          var page = Object(
            setbp_kernel_page_manager_js__WEBPACK_IMPORTED_MODULE_6__["getPage"]
          )(route.path);
          var id = count++;
          var progressTimeout;
          unloadPage();

          if (!page) {
            return notFound();
          }

          config_app_config_js__WEBPACK_IMPORTED_MODULE_1__["loader"].showBlank(
            route,
            page
          );

          if (
            !Object(
              setbp_kernel_roles_js__WEBPACK_IMPORTED_MODULE_2__["testRole"]
            )((page.getRole && page.getRole(route)) || page.role)
          ) {
            if (
              setbp_kernel_storage_js__WEBPACK_IMPORTED_MODULE_3__[
                "default"
              ].get(
                setbp_kernel_storage_js__WEBPACK_IMPORTED_MODULE_3__[
                  "storageTypes"
                ].token
              )
            ) {
              return authError();
            } else {
              return loginManager.login();
            }
          }

          pageData = {
            id: id,
            page: page,
            route: route,
          };
          setbp_kernel_event_manager_js__WEBPACK_IMPORTED_MODULE_4__[
            "default"
          ].raiseEvent(
            setbp_kernel_event_manager_js__WEBPACK_IMPORTED_MODULE_4__[
              "eventTypes"
            ].loadStart,
            pageData
          );
          Object(
            setbp_utility_calls_js__WEBPACK_IMPORTED_MODULE_5__["serialCall"]
          )({
            condition: function condition() {
              return pageData.id == id;
            },
            error: function error(actionOpts) {
              for (
                var _len = arguments.length,
                  args = new Array(_len > 1 ? _len - 1 : 0),
                  _key = 1;
                _key < _len;
                _key++
              ) {
                args[_key - 1] = arguments[_key];
              }

              if (actionOpts && actionOpts.jqErr) {
                errorHandler(0, 0, args[0]);
              } else {
                errorHandler.apply(void 0, [actionOpts].concat(args));
              }
            },
          })
            .add(
              Object(
                core_asset_loader_js__WEBPACK_IMPORTED_MODULE_7__[
                  "prePageAssets"
                ]
              )(page, route, progress(10))
            )
            .add(page.once, pageData)
            .add(preload)
            .add(postAssets)
            .go();

          function progress(start) {
            return function (_ref) {
              var percent = _ref.percent;
              config_app_config_js__WEBPACK_IMPORTED_MODULE_1__[
                "loader"
              ].progress(start + percent / 10);
            };
          }

          function postAssets(opts) {
            for (
              var _len2 = arguments.length,
                args = new Array(_len2 > 1 ? _len2 - 1 : 0),
                _key2 = 1;
              _key2 < _len2;
              _key2++
            ) {
              args[_key2 - 1] = arguments[_key2];
            }

            clearTimeout(progressTimeout);
            Object(
              core_asset_loader_js__WEBPACK_IMPORTED_MODULE_7__[
                "postPageAssets"
              ]
            )(
              page,
              route,
              progress(90)
            )({
              error: opts.error,
              success: function success() {
                if (pageData.id == id) {
                  pageData.pageComp = page.comp.apply(
                    page,
                    [pageData].concat(args)
                  );
                  setbp_kernel_event_manager_js__WEBPACK_IMPORTED_MODULE_4__[
                    "default"
                  ].raiseEvent(
                    setbp_kernel_event_manager_js__WEBPACK_IMPORTED_MODULE_4__[
                      "eventTypes"
                    ].loading,
                    pageData
                  );
                  config_app_config_js__WEBPACK_IMPORTED_MODULE_1__[
                    "loader"
                  ].loadContent(pageData.pageComp.$root, function () {
                    "loaded" in page &&
                      page.loaded.apply(page, [pageData].concat(args));
                    setbp_kernel_event_manager_js__WEBPACK_IMPORTED_MODULE_4__[
                      "default"
                    ].raiseEvent(
                      setbp_kernel_event_manager_js__WEBPACK_IMPORTED_MODULE_4__[
                        "eventTypes"
                      ].loaded,
                      pageData
                    );
                    Object(
                      config_app_config_js__WEBPACK_IMPORTED_MODULE_1__[
                        "viewUpdate"
                      ]
                    )();
                  });
                }
              },
            });
          }

          function preload(opts) {
            page.once =
              setbp_kernel_page_manager_js__WEBPACK_IMPORTED_MODULE_6__[
                "dummyPageFunc"
              ]; // initialized

            config_app_config_js__WEBPACK_IMPORTED_MODULE_1__[
              "loader"
            ].progress(20 + Math.random() * 20);
            progressTimeout = setTimeout(
              config_app_config_js__WEBPACK_IMPORTED_MODULE_1__["loader"]
                .progress,
              500,
              40
            );
            setbp_kernel_event_manager_js__WEBPACK_IMPORTED_MODULE_4__[
              "default"
            ].raiseEvent(
              setbp_kernel_event_manager_js__WEBPACK_IMPORTED_MODULE_4__[
                "eventTypes"
              ].preload,
              pageData
            );
            page.preload({
              page: page,
              route: route,
              progress: function progress(percent) {
                clearTimeout(progressTimeout);
                config_app_config_js__WEBPACK_IMPORTED_MODULE_1__[
                  "loader"
                ].progress(40 + percent / 2);
              },
              error: opts.error,
              success: opts.success,
            });
          }

          function errorHandler(error, errors, jqXHR) {
            if (pageData.id == id) {
              if (error == 404 || (jqXHR && jqXHR.status == 404)) {
                notFound();
              } else if (error == 403 || (jqXHR && jqXHR.status == 403)) {
                authError();
              } else if (!error) {
                connectionError();
              } else {
                showError({
                  msg: error,
                  error_code: jqXHR && jqXHR.status,
                });
              }
            }
          }
        }

        /* harmony default export */ __webpack_exports__["default"] = {
          handleRoute: handleRoute,
          handleAuthError: handleAuthError,
          initError: initError,
          connectionError: connectionError,
          setLoginManager: setLoginManager,
        };

        /***/
      },

    /***/ "./src/scripts/setbp/kernel/page-manager.js":
      /*!**************************************************!*\
  !*** ./src/scripts/setbp/kernel/page-manager.js ***!
  \**************************************************/
      /*! exports provided: addPaths, addPath, addPage, getPage, dummyPageFunc, addPrefixedPaths, addFolderPages */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "addPaths",
          function () {
            return addPaths;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "addPath",
          function () {
            return addPath;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "addPage",
          function () {
            return addPage;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getPage",
          function () {
            return getPage;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "dummyPageFunc",
          function () {
            return dummyPageFunc;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "addPrefixedPaths",
          function () {
            return addPrefixedPaths;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "addFolderPages",
          function () {
            return addFolderPages;
          }
        );
        /* harmony import */ var setbp_template_component_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! setbp/template/component.js */ "./src/scripts/setbp/template/component.js"
          );

        var pages = {};

        function createComp(_ref) {
          var route = _ref.route;
          return Object(
            setbp_template_component_js__WEBPACK_IMPORTED_MODULE_0__["default"]
          )(route.path);
        }

        function createCompFunc(template) {
          return function () {
            return Object(
              setbp_template_component_js__WEBPACK_IMPORTED_MODULE_0__[
                "default"
              ]
            )(template);
          };
        }

        function createPage(template, folder) {
          template = folder ? folder + "/" + template : template;
          return {
            templates: [template],
            comp: folder ? createCompFunc(template) : createComp,
          };
        }

        function addPaths(folder, paths) {
          if (!paths) {
            paths = folder;
            folder = 0;
          }

          paths.forEach(function (path) {
            addPage(path, createPage(path, folder));
          });
        }
        function addPath(path, template, folder) {
          addPage(path, createPage(template, folder));
        }
        function addPage(path, page) {
          if (pages[path]) {
            throw "Path already exists: " + path;
          }

          page.preload = "preload" in page ? page.preload : dummyPageFunc;
          page.once = "once" in page ? page.once : dummyPageFunc;
          pages[path] = page;
        }
        function getPage(path) {
          var page;
          $.each(pages, function (pattern, value) {
            if (RegExp("^" + pattern + "$").test(path)) {
              page = value;
              return false;
            }
          });
          return page;
        }
        function dummyPageFunc(_ref2) {
          var success = _ref2.success;
          success();
        }
        function addPrefixedPaths(prefix, paths) {
          addPaths(
            paths.map(function (path) {
              return prefix + "/" + path;
            })
          );
        }
        function addFolderPages(folder, names) {
          names.forEach(function (name) {
            addPage(folder + "/" + name, {
              templates: [folder],
              comp: function comp() {
                return Object(
                  setbp_template_component_js__WEBPACK_IMPORTED_MODULE_0__[
                    "default"
                  ]
                )(folder + "/" + name);
              },
            });
          });
        }

        /***/
      },

    /***/ "./src/scripts/setbp/kernel/roles.js":
      /*!*******************************************!*\
  !*** ./src/scripts/setbp/kernel/roles.js ***!
  \*******************************************/
      /*! exports provided: setAccessFlag, testRole, roleFlag, cascadeRoleFlag */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "setAccessFlag",
          function () {
            return setAccessFlag;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "testRole",
          function () {
            return testRole;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "roleFlag",
          function () {
            return roleFlag;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "cascadeRoleFlag",
          function () {
            return cascadeRoleFlag;
          }
        );
        /* harmony import */ var config_user_roles_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! config/user-roles.js */ "./src/scripts/config/user-roles.js"
          );

        var accessFlag =
          config_user_roles_js__WEBPACK_IMPORTED_MODULE_0__["roleFlags"]
            .unknown;

        function setAccessFlag(flag) {
          if (flag) {
            accessFlag = flag;
          }

          return flag;
        }

        function testRole(role) {
          if (role) {
            return (role & accessFlag) > 0;
          }

          return true;
        }

        function roleFlag(roleList) {
          var flag = 0;
          roleList.forEach(function (roleName) {
            if (
              config_user_roles_js__WEBPACK_IMPORTED_MODULE_0__["roleFlags"][
                roleName
              ]
            ) {
              flag |=
                config_user_roles_js__WEBPACK_IMPORTED_MODULE_0__["roleFlags"][
                  roleName
                ];
            }
          });
          return flag;
        }

        function cascadeRoleFlag(roleName) {
          return -(
            config_user_roles_js__WEBPACK_IMPORTED_MODULE_0__["roleFlags"][
              roleName
            ] || 0
          );
        }

        /***/
      },

    /***/ "./src/scripts/setbp/kernel/setjs.js":
      /*!*******************************************!*\
  !*** ./src/scripts/setbp/kernel/setjs.js ***!
  \*******************************************/
      /*! exports provided: setRoute, prevRoute, getRoute, reloadPage, initSetjs, startApp, default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "setRoute",
          function () {
            return setRoute;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "prevRoute",
          function () {
            return prevRoute;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getRoute",
          function () {
            return getRoute;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "reloadPage",
          function () {
            return reloadPage;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "initSetjs",
          function () {
            return initSetjs;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "startApp",
          function () {
            return startApp;
          }
        );
        /* harmony import */ var Router__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! Router */ "./src/scripts/setbp/router/history-router.js"
          );

        var setjs = {};
        var currentRoute = {};
        var oldRoute, skipRout;

        function makeRoute(path) {
          var i, route;
          var parts = path.split("/");
          var lang = setjs.lang() && parts.splice(0, 1)[0];
          route = {
            lang: lang,
            path: parts.join("/"),
            pageId: parts[0] || "",
            slug: parts[1],
            id: parts[2],
          };

          for (i = 3; i < parts.length; i++) {
            route["id" + (i - 1)] = parts[i];
          }

          return route;
        }

        function baseRouteHandler(path) {
          var newRoute = makeRoute(path);
          var fixedPath = setjs.fixPath(path);
          var lang = setjs.lang();

          if (path != fixedPath) {
            setRoute(newRoute.path);
          } else if (!lang || lang == newRoute.lang) {
            oldRoute = currentRoute;
            currentRoute = newRoute;

            if (!skipRout) {
              setjs.handleRoute(currentRoute);
            }

            skipRout = 0;
          } else {
            setRoute(path);
          }
        }

        function setRoute(newRoute, _skipRout) {
          skipRout = _skipRout;
          Router__WEBPACK_IMPORTED_MODULE_0__["default"].fire(
            setjs.getLink(newRoute)
          );
        }
        function prevRoute() {
          return oldRoute;
        }
        function getRoute() {
          return currentRoute;
        }
        function reloadPage() {
          setjs.handleRoute(currentRoute);
        }
        function initSetjs(setjsExt) {
          $.extend(setjs, setjsExt);
        }
        function startApp() {
          Router__WEBPACK_IMPORTED_MODULE_0__["default"].init(baseRouteHandler);
        }
        /* harmony default export */ __webpack_exports__["default"] = setjs;

        /***/
      },

    /***/ "./src/scripts/setbp/kernel/storage.js":
      /*!*********************************************!*\
  !*** ./src/scripts/setbp/kernel/storage.js ***!
  \*********************************************/
      /*! exports provided: storageTypes, default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var setbp_kernel_event_manager_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! setbp/kernel/event-manager.js */ "./src/scripts/setbp/kernel/event-manager.js"
          );
        /* harmony import */ var config_storage_types_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! config/storage-types.js */ "./src/scripts/config/storage-types.js"
          );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "storageTypes",
          function () {
            return config_storage_types_js__WEBPACK_IMPORTED_MODULE_1__[
              "storageTypes"
            ];
          }
        );

        function _typeof(obj) {
          "@babel/helpers - typeof";
          if (
            typeof Symbol === "function" &&
            typeof Symbol.iterator === "symbol"
          ) {
            _typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj &&
                typeof Symbol === "function" &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
            };
          }
          return _typeof(obj);
        }

        var memory = {};
        var store = {
          init: function init() {
            Object(
              config_storage_types_js__WEBPACK_IMPORTED_MODULE_1__["default"]
            )();
            $.extend(store, {
              get: get,
              set: set,
              toggle: toggle,
              remove: remove,
            });
          },
        };

        function raise(storeType) {
          if (storeType.eventAfter) {
            setbp_kernel_event_manager_js__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ].raiseEvent(storeType.eventAfter, get(storeType));
          }
        }

        function get(storeType, remove) {
          var val =
            memory[storeType.name] || localStorage.getItem(storeType.name);
          var def = storeType.defaultValue;
          var type = storeType.type;

          if (remove) {
            setTimeout(remove, 0, storeType); // remove after returning value, as an event could be raised
          }

          if (type == "boolean") {
            val = +val == 1;
          } else if (type == "number") {
            val = isNaN(val) ? 0 : +val;
          } else if (type == "object") {
            try {
              val = JSON.parse(val);
              val = val && _typeof(val) == "object" ? val : def;
            } catch (e) {
              val = def;
            }
          } else {
            val = val || def || "";
          }

          return val;
        }

        function set(storeType, value) {
          if (storeType.type === "object") {
            value = JSON.stringify(value || {});
          } else if (storeType.type === "number") {
            value = isNaN(value) ? storeType.defaultValue || 0 : +value;
          } else if (storeType.type === "boolean") {
            value = value ? 1 : 0;
          }

          if (storeType.memory) {
            memory[storeType.name] = value;
          } else {
            localStorage.setItem(storeType.name, value);
          }

          raise(storeType);
        }

        function toggle(storeType) {
          if (storeType.type !== "boolean") {
            throw "The value you want to toggle is not boolean.";
          }

          var newVal = !get(storeType);
          set(storeType, newVal);
          return newVal;
        }

        function remove(storeType) {
          delete memory[storeType.name];
          localStorage.removeItem(storeType.name);
          raise(storeType);
        }

        /* harmony default export */ __webpack_exports__["default"] = store;

        /***/
      },

    /***/ "./src/scripts/setbp/loaders/progress-bar.js":
      /*!***************************************************!*\
  !*** ./src/scripts/setbp/loaders/progress-bar.js ***!
  \***************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        function _typeof(obj) {
          "@babel/helpers - typeof";
          if (
            typeof Symbol === "function" &&
            typeof Symbol.iterator === "symbol"
          ) {
            _typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj &&
                typeof Symbol === "function" &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
            };
          }
          return _typeof(obj);
        }

        var $container = $("#main-content");
        var $prev = $(".initial");
        var blankTime = 0;
        var animDuration = 300;
        var $body = $("body");
        var $bar = $('<div class="progress-bar">').appendTo($body).hide();
        var bodyStyle = {};
        var bodyCls;

        function progress(percent) {
          $bar.css({
            width: Math.min(100, percent) + "%",
          });
        }

        function loadContent($content, loaded) {
          setTimeout(function () {
            var bodyCss;

            if (typeof $content === "string") {
              $content = $($content);
            }

            bodyCss = $content.data("css");

            if (_typeof(bodyCss) != "object") {
              bodyCss = {};
            }

            $prev.remove();
            $prev = $content;
            $container.append($content);
            $bar
              .css({
                width: "100%",
              })
              .fadeOut(animDuration);
            $("html,body").scrollTop(0);
            $.each(bodyStyle, function (key) {
              $body.css(key, "");
            });
            $body
              .attr(
                "id",
                $content.data("id") ||
                  ($content.data("template") || "").replace(/\//g, "-")
              )
              .removeClass(bodyCls)
              .addClass($content.data("class"))
              .css(bodyCss);
            bodyCls = $content.data("class");
            bodyStyle = bodyCss;
            $content.find('[data-focus="true"]').focus();
            loaded && loaded();
          }, Math.max(0, animDuration - (Date.now() - blankTime)));
        }

        function showBlank() {
          blankTime = Date.now();
          $bar
            .css({
              width: 0,
            })
            .show();
        }

        /* harmony default export */ __webpack_exports__["default"] = {
          loadContent: loadContent,
          showBlank: showBlank,
          progress: progress,
        };

        /***/
      },

    /***/ "./src/scripts/setbp/plugins/jquery/accordion.js":
      /*!*******************************************************!*\
  !*** ./src/scripts/setbp/plugins/jquery/accordion.js ***!
  \*******************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        function _typeof(obj) {
          "@babel/helpers - typeof";
          if (
            typeof Symbol === "function" &&
            typeof Symbol.iterator === "symbol"
          ) {
            _typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj &&
                typeof Symbol === "function" &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
            };
          }
          return _typeof(obj);
        }

        $.fn.accordion = function (opts) {
          var $accordion = this;
          var aimationTime = opts.time || 500;
          opts = _typeof(opts) == "object" ? opts : {};
          $accordion.find(".accordion-item").each(function () {
            var $item = $(this);

            if (!$item.data("accord")) {
              $item.data("accord", 1).find(".details").css({
                height: 0,
              });
              $item.find(".title").on("click", function () {
                toggle($item);
              });
            }
          });

          if (opts.index) {
            var $open = $accordion.find(
              ".accordion-item:nth-child(" + opts.index + ")"
            );

            if ($open.length) {
              open($open);
            }
          }

          return $accordion.data("accordion", {
            toggle: toggle,
          });

          function toggle($item) {
            $item = $item || $accordion.find(".accordion-item.open");

            if ($item.length) {
              if ($item.hasClass("open")) {
                $item.removeClass("open").find(".details").animate(
                  {
                    height: 0,
                  },
                  aimationTime
                );
                opts.close && opts.close($item);
              } else {
                open($item);
              }
            }
          }

          function open($item) {
            var $inner = $item.find(".inner");
            var $prev = $item.siblings(".open").removeClass("open");
            var innerHeight = $inner.outerHeight();
            var $summary = $accordion.closest("summary");
            var $details = $item.find(".details");

            if (innerHeight) {
              if ($prev.length && $prev.index() < $item.index()) {
                var scrollTop = $summary.scrollTop();
                $summary.animate(
                  {
                    scrollTop: scrollTop - $prev.find(".details").height(),
                  },
                  aimationTime
                );
              }

              $prev.removeClass("open").find(".details").animate(
                {
                  height: 0,
                },
                aimationTime
              );
              $item.addClass("open");
              $details.animate(
                {
                  height: innerHeight,
                },
                aimationTime,
                function () {
                  $details.css("height", "auto");
                }
              );
              opts.open && opts.open($item, $item.index());
            } else {
              setTimeout(open, 250, $item);
            }
          }
        };

        /***/
      },

    /***/ "./src/scripts/setbp/plugins/jquery/carousel.js":
      /*!******************************************************!*\
  !*** ./src/scripts/setbp/plugins/jquery/carousel.js ***!
  \******************************************************/
      /*! no exports provided */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var setbp_kernel_event_manager_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! setbp/kernel/event-manager.js */ "./src/scripts/setbp/kernel/event-manager.js"
          );

        $.fn.carousel = function (opts) {
          var index = opts.index || 0;
          var count = opts.count || opts.$items.length;
          var isActive = "isActive" in opts ? opts.isActive : true;
          var carousel = {
            index: index,
            selectSlide: selectSlide,
            prev: function prev() {
              selectSlide(index - 1, true);
            },
            next: function next() {
              selectSlide(index + 1, true);
            },
            change: function change(_count) {
              count = _count;
            },
            setActive: function setActive(activeState) {
              isActive = activeState;
            },
            stop: function stop() {
              clearInterval(carousel.timerHandle);
            },
          };

          function setBtnState() {
            if (opts.isBounded) {
              opts.$left && opts.$left.toggleClass("disabled", index == 0);
              opts.$right &&
                opts.$right.toggleClass("disabled", index == count - 1);
            }
          }

          function selectSlide(_index, force) {
            if (
              (isActive || force) &&
              (!opts.isBounded || (_index >= 0 && _index < count))
            ) {
              carousel.direction = _index - index;
              index = _index;

              if (index < 0) {
                index = count - 1;
              } else if (index >= count) {
                index = 0;
              }

              opts.$buttons &&
                opts.$buttons
                  .closest("li")
                  .removeClass("active")
                  .filter(":eq(" + index + ")")
                  .addClass("active");
              carousel.$current =
                opts.$items &&
                opts.$items
                  .removeClass("active")
                  .filter(":eq(" + index + ")")
                  .addClass("active");
              carousel.lastTime = Date.now();
              carousel.index = index;
              carousel.prevIndex = index == 0 ? count - 1 : index - 1;
              carousel.nextIndex = index == count - 1 ? 0 : index + 1;
              setBtnState();
              opts.select && opts.select(carousel, opts);
            }
          }

          if (opts.$buttons) {
            opts.$buttons.click(function () {
              selectSlide($(this).closest("li").index());
              return false;
            });
          }

          if (opts.$left) {
            opts.$left.click(function () {
              !opts.$left.hasClass("disabled") && selectSlide(index - 1);
              return false;
            });
          }

          if (opts.$right) {
            opts.$right.click(function () {
              !opts.$right.hasClass("disabled") && selectSlide(index + 1);
              return false;
            });
          }

          this.swipe &&
            this.swipe({
              move: function move(x, y) {
                opts.move && opts.move(carousel, x, y);
              },
              swipe: function swipe(changeX) {
                if (changeX) {
                  selectSlide(index + changeX);
                }
              },
            });

          if (opts.time > 0) {
            carousel.timerHandle = setInterval(carousel.next, opts.time);
          }

          setTimeout(function () {
            opts.created && opts.created(carousel);
            selectSlide(index, true);
          });

          if (!opts.keep) {
            setbp_kernel_event_manager_js__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ].addListener(
              setbp_kernel_event_manager_js__WEBPACK_IMPORTED_MODULE_0__[
                "eventTypes"
              ].unload,
              "carousel",
              function () {
                clearInterval(carousel.timerHandle);
              }
            );
          }

          return this.data("carousel", carousel);
        };

        /***/
      },

    /***/ "./src/scripts/setbp/plugins/jquery/form-json.js":
      /*!*******************************************************!*\
  !*** ./src/scripts/setbp/plugins/jquery/form-json.js ***!
  \*******************************************************/
      /*! no exports provided */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var setbp_utility_objects_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! setbp/utility/objects.js */ "./src/scripts/setbp/utility/objects.js"
          );

        $.fn.formJson = function (data, resets) {
          data = data || {};
          Object(
            setbp_utility_objects_js__WEBPACK_IMPORTED_MODULE_0__["resetObject"]
          )(data, resets);
          this.serializeArray().forEach(function (item) {
            Object(
              setbp_utility_objects_js__WEBPACK_IMPORTED_MODULE_0__[
                "storeValue"
              ]
            )(data, item.name, item.value);
          });
          return data;
        };

        /***/
      },

    /***/ "./src/scripts/setbp/plugins/jquery/lightbox.js":
      /*!******************************************************!*\
  !*** ./src/scripts/setbp/plugins/jquery/lightbox.js ***!
  \******************************************************/
      /*! no exports provided */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var setbp_kernel_event_manager_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! setbp/kernel/event-manager.js */ "./src/scripts/setbp/kernel/event-manager.js"
          );
        /* harmony import */ var config_app_config_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! config/app-config.js */ "./src/scripts/config/app-config.js"
          );

        setbp_kernel_event_manager_js__WEBPACK_IMPORTED_MODULE_0__[
          "default"
        ].addListener(
          setbp_kernel_event_manager_js__WEBPACK_IMPORTED_MODULE_0__[
            "eventTypes"
          ].route,
          "lightbox",
          function () {
            $(".lightbox").remove();
            $(document).off("keydown.lightbox");
            $("body").removeClass("lightbox-open");
          }
        );

        $.fn.lightbox = function () {
          var opts =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : {};
          var mode = opts.mode || "lightbox";
          var delay = opts.delay || (mode == "sidebar" ? 320 : 20);
          var $lightbox = $('<div class="'.concat(mode, '"></div>')).appendTo(
            "body"
          );
          var $inner = $('<div class="inner">').appendTo($lightbox);
          var $btnParent = opts.inner ? $inner : $lightbox;
          var lightbox = {
            opts: opts,
            $lightbox: $lightbox,
            $inner: $inner,
            destroy: destroy,
            close: close,
            replaceContent: replaceContent,
          };
          var openCls = "".concat(mode, "-open");
          var openingCls = openCls + "ing";
          var closingCls = "".concat(mode, "-closing");

          function replaceContent($content) {
            $inner.empty().append($content.data("lightbox", lightbox));
          }

          function destroy(done) {
            if (!lightbox.closed) {
              lightbox.closed = true;
              $(document).off("keydown.lightbox");
              $("body").addClass(closingCls);
              setTimeout(function () {
                $("body").removeClass(openCls).removeClass(closingCls);
                $lightbox.remove();
                done && done();
              }, delay);
            }
          }

          function close(force) {
            if (!opts.noClose || force) {
              !lightbox.closed && opts.close && opts.close();
              destroy();
            }
          }

          function initCarousel() {
            if (opts.carousel) {
              if (!opts.carousel.noBtns) {
                opts.carousel.$left =
                  opts.carousel.$left ||
                  $('<div class="nav-btn left"></div>').appendTo($btnParent);
                opts.carousel.$right =
                  opts.carousel.$right ||
                  $('<div class="nav-btn right"></div>').appendTo($btnParent);
              }

              lightbox.carousel = (opts.carousel.$el || $inner)
                .carousel(opts.carousel)
                .data("carousel");
            }
          }

          $(document).on("keydown.lightbox", function (e) {
            if (e.keyCode === 27) {
              close();
            } else if (lightbox.carousel && $(e.target).hasClass(openCls)) {
              if (e.keyCode === 37) {
                lightbox.carousel.prev();
              } else if (e.keyCode === 39) {
                lightbox.carousel.next();
              }
            }
          });
          $inner.append(this);
          initCarousel();
          !opts.noClose && addCloseBtn();
          $("body").addClass(openingCls);
          setTimeout(function () {
            $("body").addClass(openCls).removeClass(openingCls);
            opts.created && opts.created(lightbox);
          }, delay);
          return this.data("lightbox", lightbox);

          function addCloseBtn() {
            var $btn = $(
              '<button class="'.concat(
                config_app_config_js__WEBPACK_IMPORTED_MODULE_1__["closeCls"],
                ' lightbox-close-btn"></button>'
              )
            )
              .appendTo($btnParent)
              .add($lightbox.find(".popup-close"));

            if (!opts.noBgClose) {
              $btn = $btn.add($lightbox);
            }

            $btn.click(function (e) {
              var $target = $(e.target);
              var ownClose =
                $target.hasClass(mode) ||
                $target.hasClass("lightbox-close-btn");

              if (ownClose || $target.closest(".popup-close").length) {
                close();

                if (ownClose) {
                  return false;
                }
              }
            });
          }
        };

        /***/
      },

    /***/ "./src/scripts/setbp/plugins/misc/animate-visible.js":
      /*!***********************************************************!*\
  !*** ./src/scripts/setbp/plugins/misc/animate-visible.js ***!
  \***********************************************************/
      /*! no exports provided */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var setbp_kernel_event_manager_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! setbp/kernel/event-manager.js */ "./src/scripts/setbp/kernel/event-manager.js"
          );

        setbp_kernel_event_manager_js__WEBPACK_IMPORTED_MODULE_0__[
          "default"
        ].addListener(
          setbp_kernel_event_manager_js__WEBPACK_IMPORTED_MODULE_0__[
            "eventTypes"
          ].view,
          "animate-visible",
          function (top, bottom) {
            $("[data-animation]")
              .not(".animated")
              .each(function () {
                var $el = $(this);
                var elTop = $el.offset().top;
                var elBottom = elTop + $el.height();

                if (elBottom >= top && elTop <= bottom) {
                  $el.addClass("animated").addClass($el.data("animation"));
                }
              });
          }
        );

        /***/
      },

    /***/ "./src/scripts/setbp/plugins/misc/dropdown-menu.js":
      /*!*********************************************************!*\
  !*** ./src/scripts/setbp/plugins/misc/dropdown-menu.js ***!
  \*********************************************************/
      /*! no exports provided */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var setbp_kernel_event_manager_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! setbp/kernel/event-manager.js */ "./src/scripts/setbp/kernel/event-manager.js"
          );

        setbp_kernel_event_manager_js__WEBPACK_IMPORTED_MODULE_0__[
          "default"
        ].addListener(
          setbp_kernel_event_manager_js__WEBPACK_IMPORTED_MODULE_0__[
            "eventTypes"
          ].init,
          "drop-menu",
          function () {
            $(document).click(function (e) {
              var $menuBtn = $(".menu-dropdown-btn");
              var $found = $menuBtn
                .find(e.target)
                .add($menuBtn.filter(e.target));

              if ($(e.target).closest(".prevent-close").length) {
                return;
              }

              if ($found.length) {
                var $menu = $found.closest(".menu-dropdown");
                $menu.toggleClass("open");
                $(".menu-dropdown.open").not($menu).removeClass("open");
                return false;
              } else {
                $(".menu-dropdown.open").removeClass("open");
              }
            });
          }
        );

        /***/
      },

    /***/ "./src/scripts/setbp/plugins/template-funcs/basic-filters.js":
      /*!*******************************************************************!*\
  !*** ./src/scripts/setbp/plugins/template-funcs/basic-filters.js ***!
  \*******************************************************************/
      /*! no exports provided */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var core_acts_funcs_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! core/acts-funcs.js */ "./src/scripts/core/acts-funcs.js"
          );
        /* harmony import */ var setbp_utility_strings_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! setbp/utility/strings.js */ "./src/scripts/setbp/utility/strings.js"
          );

        function _number(val) {
          return isNaN(val) ? 0 : +val;
        }

        Object(core_acts_funcs_js__WEBPACK_IMPORTED_MODULE_0__["addFuncs"])({
          slugify:
            setbp_utility_strings_js__WEBPACK_IMPORTED_MODULE_1__["slugify"],
          capitalize:
            setbp_utility_strings_js__WEBPACK_IMPORTED_MODULE_1__["capitalize"],
          number: function number(val, opts, def) {
            return _number(val == undefined ? def : val);
          },
          prefix: function prefix(val, opts, str) {
            return str + val;
          },
          suffix: function suffix(val, opts, str) {
            return val + str;
          },
          wrap: function wrap(val, opts, left, right) {
            return left + val + right;
          },
          str: function str(val, opts) {
            var def =
              arguments.length > 2 && arguments[2] !== undefined
                ? arguments[2]
                : "";
            return (val != undefined && val.toString && val.toString()) || def;
          },
          fixed: function fixed(val, opts, places) {
            return _number(val).toFixed(places);
          },
          equal: function equal(val, opts, other) {
            return other == val;
          },
          testFlag: function testFlag(val, opts, flag) {
            flag = +flag;
            return (val & flag) == flag;
          },
          bool: function bool(val) {
            return !!val;
          },
          percent: function percent(val) {
            return _number(val) + "%";
          },
          round: function round(val) {
            return Math.round(_number(val));
          },
          floor: function floor(val) {
            return Math.floor(_number(val));
          },
          ceil: function ceil(val) {
            return Math.ceil(_number(val));
          },
          not: function not(val) {
            return !val;
          },
          negate: function negate(val) {
            return -_number(val);
          },
          json: function json(val) {
            return JSON.parse(val);
          },
          either: function either(condition, opts, val1, val2) {
            return condition ? val1 : val2;
          },
          commaList: function commaList(list) {
            return list.join(", ");
          },
          lowerCase: function lowerCase(val) {
            return val.toLowerCase();
          },
          includes: function includes(list, opts, item) {
            return list.indexOf(item) >= 0;
          },
          setEmptyBox: function setEmptyBox(val, opts) {
            opts.$el[0].style.left = val.left;
            opts.$el[0].style.top = val.top;
          },
        });

        /***/
      },

    /***/ "./src/scripts/setbp/plugins/template-funcs/misc.js":
      /*!**********************************************************!*\
  !*** ./src/scripts/setbp/plugins/template-funcs/misc.js ***!
  \**********************************************************/
      /*! no exports provided */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var core_acts_funcs_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! core/acts-funcs.js */ "./src/scripts/core/acts-funcs.js"
          );

        Object(core_acts_funcs_js__WEBPACK_IMPORTED_MODULE_0__["addFuncs"])({
          t: function t(val, opts) {
            opts.$el.text(val);
          },
          h: function h(val, opts) {
            opts.$el.html(val);
          },
          gt: function gt(val, opts, other) {
            return val > other;
          },
          lt: function lt(val, opts, other) {
            return val < other;
          },
          plurify: function plurify(number, _ref, singular, plural) {
            var $el = _ref.$el;
            plural = plural || singular + "s";
            number = number || 0;
            $el.text(number + " " + (number == 1 ? singular : plural));
          },
        });

        /***/
      },

    /***/ "./src/scripts/setbp/router/history-router.js":
      /*!****************************************************!*\
  !*** ./src/scripts/setbp/router/history-router.js ***!
  \****************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var dloc = document.location;
        var baseRouteHandler;

        function processRoute() {
          baseRouteHandler(getPath());
        }

        function getPath() {
          return dloc.pathname.replace(/^(\/)/, "");
        }

        /* harmony default export */ __webpack_exports__["default"] = {
          getPath: getPath,
          prefix: "/",
          fire: function fire(route) {
            window.history.pushState({}, document.title, route);
            processRoute();
          },
          init: function init(routeHandler) {
            baseRouteHandler = routeHandler;
            window.onpopstate = processRoute;
            processRoute();
          },
        };

        /***/
      },

    /***/ "./src/scripts/setbp/template/binding.js":
      /*!***********************************************!*\
  !*** ./src/scripts/setbp/template/binding.js ***!
  \***********************************************/
      /*! exports provided: processIf, applyBindings, cleanupWatch, updateWatches, applyWatch */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "processIf",
          function () {
            return processIf;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "applyBindings",
          function () {
            return applyBindings;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "cleanupWatch",
          function () {
            return cleanupWatch;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "updateWatches",
          function () {
            return updateWatches;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "applyWatch",
          function () {
            return applyWatch;
          }
        );
        /* harmony import */ var setbp_kernel_basics_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! setbp/kernel/basics.js */ "./src/scripts/setbp/kernel/basics.js"
          );
        /* harmony import */ var setbp_kernel_event_manager_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! setbp/kernel/event-manager.js */ "./src/scripts/setbp/kernel/event-manager.js"
          );
        /* harmony import */ var core_acts_funcs_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! core/acts-funcs.js */ "./src/scripts/core/acts-funcs.js"
          );
        function _createForOfIteratorHelper(o, allowArrayLike) {
          var it;
          if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
            if (
              Array.isArray(o) ||
              (it = _unsupportedIterableToArray(o)) ||
              (allowArrayLike && o && typeof o.length === "number")
            ) {
              if (it) o = it;
              var i = 0;
              var F = function F() {};
              return {
                s: F,
                n: function n() {
                  if (i >= o.length) return { done: true };
                  return { done: false, value: o[i++] };
                },
                e: function e(_e) {
                  throw _e;
                },
                f: F,
              };
            }
            throw new TypeError(
              "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          }
          var normalCompletion = true,
            didErr = false,
            err;
          return {
            s: function s() {
              it = o[Symbol.iterator]();
            },
            n: function n() {
              var step = it.next();
              normalCompletion = step.done;
              return step;
            },
            e: function e(_e2) {
              didErr = true;
              err = _e2;
            },
            f: function f() {
              try {
                if (!normalCompletion && it["return"] != null) it["return"]();
              } finally {
                if (didErr) throw err;
              }
            },
          };
        }

        function _unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (
            n === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return _arrayLikeToArray(o, minLen);
        }

        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }

        var watchSet = new Set();
        var watchMap = new WeakMap();
        setbp_kernel_event_manager_js__WEBPACK_IMPORTED_MODULE_1__[
          "default"
        ].addListener(
          setbp_kernel_event_manager_js__WEBPACK_IMPORTED_MODULE_1__[
            "eventTypes"
          ].loaded,
          "binding",
          updateWatches
        );

        function getStatements(bindingStr) {
          var statements = [];
          var opType = ";";
          var start = 0;
          var strip = 0;

          var i, _char, escape;

          for (i = 0; i < bindingStr.length; i++) {
            _char = bindingStr[i];

            if (_char == "`" && bindingStr[i - 1] != "\\") {
              escape = !escape;

              if (escape && start < i) {
                parseError(_char);
              }

              strip = 1;
            } else if (
              !escape &&
              (_char == ";" || _char == "," || _char == "|" || _char == ":")
            ) {
              pushOp();
              opType = _char;
            }
          }

          if (start < i + 1) {
            pushOp();
          }

          return statements;

          function pushOp() {
            if (escape) {
              parseError("`");
            }

            var item = {
              o: opType,
              v: bindingStr.slice(start + strip, i - strip),
              s: strip,
            };

            if (opType != "," && !item.v) {
              parseError("val needed");
            }

            statements.push(item);
            start = i + 1; // +1, as "i" has not yet incremented in the for loop

            strip = 0;
          }

          function parseError(msg) {
            Object(
              setbp_kernel_basics_js__WEBPACK_IMPORTED_MODULE_0__["fatal"]
            )("bind:" + msg, start, bindingStr);
          }
        }

        function createBindings(bindingStr, rdata, isIf) {
          var bindings = [];
          var statements = getStatements(bindingStr);
          var binding, funcBinding;
          statements.forEach(function (statement) {
            if (statement.o == ";" || (statement.o == ":" && isIf)) {
              bindings.push(statement);
              binding = statement;
            } else if (statement.o == "|" && !binding.g) {
              binding.f = binding.f || [];
              pushFunc(binding.f, statement);
            } else if (statement.o == ",") {
              var statementVal = statement.v;
              funcBinding.p = funcBinding.p || [];
              statement.s = 1; // literal by default

              if (statementVal[0] == "~") {
                statement.v = statementVal.slice(1);

                if (statement.v[0] != "~") {
                  statement.s = 0; // not a literal
                }
              }

              funcBinding.p.push(statement);
            } else {
              // either "|" or ":"
              var groups = (binding.g = binding.g || []);
              statement.o == ":" && groups.push([]);
              pushFunc(groups[groups.length - 1], statement);
            }
          });
          return bindings;

          function pushFunc(list, statement) {
            var funcName = statement.v;
            funcBinding = {
              f:
                rdata[funcName] ||
                Object(core_acts_funcs_js__WEBPACK_IMPORTED_MODULE_2__["func"])(
                  funcName
                ),
            };
            list.push(funcBinding);
          }
        }

        function getBindingVal(binding, opts) {
          var val = binding.v;

          if (!binding.s) {
            if (val == "_") {
              val = opts.data;
            } else if (val == "#") {
              val = "";
            } else {
              val = Object(
                setbp_kernel_basics_js__WEBPACK_IMPORTED_MODULE_0__[
                  "getPropDef"
                ]
              )(val, opts.data);

              if (typeof val == "function") {
                val = val(opts);
              }
            }
          }

          return val;
        }

        function runFuncs(funcs, opts, val, applyText) {
          if (funcs) {
            funcs.forEach(function (funcBinding) {
              var args = [val, opts];
              funcBinding.p &&
                funcBinding.p.forEach(function (param) {
                  args.push(param.s ? param.v : getBindingVal(param, opts));
                });
              val = funcBinding.f.apply(opts, args);
            });
          } else if (applyText) {
            opts.$el.text(val);
          }

          return val;
        }

        function getGroupVal(binding, opts, applyText) {
          return runFuncs(
            binding.f,
            opts,
            getBindingVal(binding, opts),
            applyText
          );
        }

        function processIf($el, comp, data, dataIf) {
          var remove = 1;
          var bindings = createBindings(dataIf, (comp.rComp || comp).data, 1);
          var opts = {
            $el: $el,
            comp: comp,
            data: data,
          };
          var groups = [];
          $.each(bindings, function (i, binding) {
            if (binding.o == ";") {
              groups.push([binding]);
            } else {
              groups[groups.length - 1].push(binding);
            }
          });
          $.each(groups, function (i, group) {
            $.each(group, function (i, binding) {
              remove = !getGroupVal(binding, opts);
              return remove;
            });
            return !remove;
          });

          if (remove) {
            var $next = $el.next("[data-elif]");
            $el.remove();

            if ($next.length) {
              processIf($next, comp, data, $next.data("elif"));
            }
          } else {
            $el.nextUntil(":not([data-elif])").remove();
            $el.next("[data-else]").remove();
          }
        }

        function runBinding(binding, opts) {
          var groupVal = getGroupVal(binding, opts, !binding.g);
          binding.g &&
            binding.g.forEach(function (group) {
              runFuncs(group, opts, groupVal, 1);
            });
        }

        function applyBindings($el, comp, data) {
          var bindings = createBindings(
            $el.data("bind"),
            (comp.rComp || comp).data
          );
          var opts = {
            $el: $el,
            comp: comp,
            data: data,
          };
          bindings.forEach(function (binding) {
            runBinding(binding, opts);
          });
        }

        function ensureWatch(obj) {
          var watch = watchMap.get(obj);

          if (!watch) {
            watch = {
              obj: obj,
              props: new Set(),
              acts: new Set(),
            };
            watchMap.set(obj, watch);
            watchSet.add(obj);
          }

          return watch;
        }

        function objChange(parentWatch, oldVal, newVal) {
          var watch = watchMap.get(oldVal);

          if (watch) {
            var newWatch = ensureWatch(newVal);
            var found = new Set();
            watch.props.forEach(function (key) {
              setupWatch(newWatch, newVal, key);
              objChange(watch, watch.obj[key], newWatch.obj[key]);
            });

            var _iterator = _createForOfIteratorHelper(parentWatch.acts),
              _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                var pAct = _step.value;

                var _iterator3 = _createForOfIteratorHelper(watch.acts),
                  _step3;

                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                    var wAct = _step3.value;

                    if (wAct == pAct) {
                      found.add(wAct);
                    }
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            var _iterator2 = _createForOfIteratorHelper(found),
              _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                var act = _step2.value;
                newWatch.acts.add(act);
                watch.acts["delete"](act);

                if (act.watch) {
                  act.watch = newWatch;
                  runBinding(act.binding, act.opts);
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            cleanupWatch(oldVal);
          }
        }

        function setupWatch(watch, obj, key) {
          if (!watch.props.has(key)) {
            watch.props.add(key);
            var val = obj[key];
            Object.defineProperty(obj, key, {
              get: function get() {
                return val;
              },
              set: function set(newVal) {
                if (val !== newVal) {
                  var oldVal = val;
                  val = newVal;
                  objChange(watch, oldVal, newVal);
                  watch.acts.forEach(function (act) {
                    if (act.watch == watch) {
                      runBinding(act.binding, act.opts);
                    }
                  });
                }
              },
            });
          }
        }

        function processWatch(parts, data, act) {
          var key = parts.shift();
          var obj = Object(
            setbp_kernel_basics_js__WEBPACK_IMPORTED_MODULE_0__["dataForName"]
          )(key, data);

          if (obj) {
            var watch = ensureWatch(obj);
            var val = obj[key];
            watch.acts.add(act);
            setupWatch(watch, obj, key);

            if (parts.length) {
              processWatch(parts, val, act);
            } else {
              act.watch = watch;
              runBinding(act.binding, act.opts);
            }
          }
        }

        function cleanupWatch(obj) {
          var watch = watchMap.get(obj);

          if (watch) {
            var remove = [];
            watch.props.forEach(function (key) {
              cleanupWatch(obj[key]);
            });
            watch.acts.forEach(function (act) {
              if (!act.opts.$el.data("watched")) {
                remove.push(act);
              }
            });
            remove.forEach(function (act) {
              watch.acts["delete"](act);
            });

            if (!watch.acts.size) {
              watchMap["delete"](obj);
              watchSet["delete"](obj);
            }
          }
        }
        function updateWatches() {
          watchSet.forEach(function (obj) {
            cleanupWatch(obj);
          });
        }
        function applyWatch($el, comp, data) {
          var opts = {
            $el: $el.data("watched", 1),
            comp: comp,
            data: data,
          };
          var bindings = createBindings(
            $el.data("watch"),
            (comp.rComp || comp).data
          );
          bindings.forEach(function (binding) {
            processWatch(binding.v.split("."), data, {
              binding: binding,
              opts: opts,
            });
          });
        }

        /***/
      },

    /***/ "./src/scripts/setbp/template/component.js":
      /*!*************************************************!*\
  !*** ./src/scripts/setbp/template/component.js ***!
  \*************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var setbp_kernel_basics_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! setbp/kernel/basics.js */ "./src/scripts/setbp/kernel/basics.js"
          );
        /* harmony import */ var setbp_kernel_setjs_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! setbp/kernel/setjs.js */ "./src/scripts/setbp/kernel/setjs.js"
          );
        /* harmony import */ var setbp_template_binding_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! setbp/template/binding.js */ "./src/scripts/setbp/template/binding.js"
          );
        /* harmony import */ var setbp_template_events_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! setbp/template/events.js */ "./src/scripts/setbp/template/events.js"
          );
        /* harmony import */ var setbp_utility_comp_helpers_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! setbp/utility/comp-helpers.js */ "./src/scripts/setbp/utility/comp-helpers.js"
          );
        /* harmony import */ var setbp_template_template_config_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! setbp/template/template-config.js */ "./src/scripts/setbp/template/template-config.js"
          );
        /* harmony import */ var setbp_template_templates_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! setbp/template/templates.js */ "./src/scripts/setbp/template/templates.js"
          );
        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true,
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }

        function processSlot($item, comp, data, slotConfig) {
          var slotComp = createComponent(
            Object(
              setbp_template_template_config_js__WEBPACK_IMPORTED_MODULE_5__[
                "getConfigTemplate"
              ]
            )("slot", slotConfig),
            Object(
              setbp_template_template_config_js__WEBPACK_IMPORTED_MODULE_5__[
                "configData"
              ]
            )(slotConfig, data),
            comp.actions,
            comp
          );
          var $items = slotConfig.contents
            ? slotComp.$root.contents()
            : slotComp.$root;
          slotConfig.name &&
            Object(
              setbp_utility_comp_helpers_js__WEBPACK_IMPORTED_MODULE_4__[
                "storeItemByName"
              ]
            )(comp, slotConfig.name, slotComp);

          if (slotConfig.replace) {
            $item.replaceWith($items);
          } else {
            $item.append($items);
          }
        }

        function _renderList(comp, data, listData) {
          var config = listData.c;
          var oldList = listData.list;
          var elements = [];
          var index = 0;
          var list = (listData.list = []);
          $.each(
            Object(
              setbp_template_template_config_js__WEBPACK_IMPORTED_MODULE_5__[
                "configData"
              ]
            )(config, data),
            function (key, val) {
              var _itemData;

              var itemData =
                ((_itemData = {}),
                _defineProperty(_itemData, listData.d, index),
                _defineProperty(_itemData, listData.i, ++index),
                _defineProperty(_itemData, listData.k, key),
                _defineProperty(_itemData, listData.v, val),
                _defineProperty(_itemData, "c", config),
                _defineProperty(_itemData, "pd", data),
                _defineProperty(
                  _itemData,
                  "rd",
                  (comp.rComp && comp.rComp.data) || data
                ),
                _itemData);
              var itemComp = createComponent(
                listData.t,
                itemData,
                comp.actions,
                comp
              );
              elements.push(itemComp.$root);
              list.push(itemComp);
            }
          );

          if (!elements.length && (config.alt || config.sub)) {
            elements.push(
              createComponent(
                Object(
                  setbp_template_templates_js__WEBPACK_IMPORTED_MODULE_6__[
                    "getTemplate"
                  ]
                )(config.alt, config.sub),
                listData,
                comp.actions,
                comp
              ).$root
            );
          }

          listData.$el.empty().append(elements);
          listData.$elements = $(elements);
          oldList &&
            oldList.forEach(function (comp) {
              Object(
                setbp_template_binding_js__WEBPACK_IMPORTED_MODULE_2__[
                  "cleanupWatch"
                ]
              )(comp.data);
            });
        }

        function createList($el, comp, data) {
          var config = $el.data("list");
          var template = Object(
            setbp_template_template_config_js__WEBPACK_IMPORTED_MODULE_5__[
              "getConfigTemplate"
            ]
          )("list", config, $el.data("tname"));
          var listData = $.extend(
            {
              $el: $el,
              c: config,
              t: template,
              i: "index",
              k: "key",
              v: "val",
              d: "dex",
            },
            config.vars
          );
          var name = $el.data("name");

          if (name) {
            Object(
              setbp_utility_comp_helpers_js__WEBPACK_IMPORTED_MODULE_4__[
                "storeItemByName"
              ]
            )(comp, name, listData);
          }

          _renderList(comp, data, listData);
        }
        /**
         * Builds a template
         * @param {Object} templateStr - The template html string
         * @param {Object} pComp - The parent component (if any)
         * @param {Object} data - component data
         * @param {Object} actions - event handlers
         * @return {Object} returns the compiled template
         */

        function createComponent(templateStr, data, actions, pComp) {
          var $root,
            $watchElements,
            $bindingElements,
            $actElements,
            $listElements,
            comp;
          data = data || {};
          actions = actions || {};
          $root = $(
            Object(
              setbp_template_template_config_js__WEBPACK_IMPORTED_MODULE_5__[
                "tmpStr"
              ]
            )(templateStr, data)
          );

          if ($root.data("if")) {
            Object(
              setbp_kernel_basics_js__WEBPACK_IMPORTED_MODULE_0__["fatal"]
            )("data-if at root", templateStr);
          }

          comp = {
            $root: $root,
            data: data,
            actions: actions,
            rComp: (pComp && pComp.rComp) || pComp,
            pComp: pComp,
            update: function update($selection) {
              if (!($selection && $selection.jquery)) {
                $selection = $bindingElements;
              }

              $selection.each(function (i, el) {
                Object(
                  setbp_template_binding_js__WEBPACK_IMPORTED_MODULE_2__[
                    "applyBindings"
                  ]
                )($(el), comp, data);
              });
              setbp_kernel_setjs_js__WEBPACK_IMPORTED_MODULE_1__[
                "default"
              ].compUpdate($selection);
            },
            renderList: function renderList() {
              $.each(arguments, function (i, name) {
                if (comp[name]) {
                  _renderList(comp, data, comp[name]);

                  setbp_kernel_setjs_js__WEBPACK_IMPORTED_MODULE_1__[
                    "default"
                  ].compUpdate(comp[name].$el);
                }
              });
            },
          };
          Object(
            setbp_utility_comp_helpers_js__WEBPACK_IMPORTED_MODULE_4__[
              "funcWithSelf"
            ]
          )($root, "if", function ($item, dataIf) {
            Object(
              setbp_template_binding_js__WEBPACK_IMPORTED_MODULE_2__[
                "processIf"
              ]
            )($item, comp, data, dataIf);
          });
          Object(
            setbp_utility_comp_helpers_js__WEBPACK_IMPORTED_MODULE_4__[
              "funcWithSelf"
            ]
          )($root, "src", function ($item, src) {
            $item.attr("src", src);
          });
          Object(
            setbp_utility_comp_helpers_js__WEBPACK_IMPORTED_MODULE_4__[
              "funcWithSelf"
            ]
          )($root, "val", function ($item, val) {
            $item.attr("value", val);
          });
          $watchElements = Object(
            setbp_utility_comp_helpers_js__WEBPACK_IMPORTED_MODULE_4__[
              "findWithSelf"
            ]
          )($root, "watch");
          $bindingElements = Object(
            setbp_utility_comp_helpers_js__WEBPACK_IMPORTED_MODULE_4__[
              "findWithSelf"
            ]
          )($root, "bind");
          $actElements = Object(
            setbp_utility_comp_helpers_js__WEBPACK_IMPORTED_MODULE_4__[
              "findWithSelf"
            ]
          )($root, "act");
          $listElements = Object(
            setbp_utility_comp_helpers_js__WEBPACK_IMPORTED_MODULE_4__[
              "findWithSelf"
            ]
          )($root, "list");
          Object(
            setbp_utility_comp_helpers_js__WEBPACK_IMPORTED_MODULE_4__[
              "funcWithSelf"
            ]
          )($root, "name", function ($item, name) {
            name = "$" + name;

            if (comp[name]) {
              Object(
                setbp_kernel_basics_js__WEBPACK_IMPORTED_MODULE_0__["fatal"]
              )("Repeat name", name);
            }

            comp[name] = $item;
          }); // You cannot call funcWithSelf() after this, as this might add items which can affect the selection

          Object(
            setbp_utility_comp_helpers_js__WEBPACK_IMPORTED_MODULE_4__[
              "funcWithSelf"
            ]
          )($root, "slot", function ($item, slotConfig) {
            processSlot($item, comp, data, slotConfig);
          });
          $listElements.each(function (i, item) {
            createList($(item), comp, data);
          });
          $watchElements.each(function (i, item) {
            Object(
              setbp_template_binding_js__WEBPACK_IMPORTED_MODULE_2__[
                "applyWatch"
              ]
            )($(item), comp, data);
          });
          $bindingElements.each(function (i, item) {
            Object(
              setbp_template_binding_js__WEBPACK_IMPORTED_MODULE_2__[
                "applyBindings"
              ]
            )($(item), comp, data);
          });
          $actElements.each(function (i, item) {
            Object(
              setbp_template_events_js__WEBPACK_IMPORTED_MODULE_3__[
                "bindEvents"
              ]
            )($(item), comp, data, actions);
          });
          $root.data("comp", comp);
          !pComp &&
            setbp_kernel_setjs_js__WEBPACK_IMPORTED_MODULE_1__[
              "default"
            ].compUpdate(comp.$root);
          return comp;
        }

        /* harmony default export */ __webpack_exports__["default"] = function (
          templateName,
          data,
          actions,
          pComp
        ) {
          return createComponent(
            Object(
              setbp_template_templates_js__WEBPACK_IMPORTED_MODULE_6__[
                "getTemplate"
              ]
            )(templateName),
            data,
            actions,
            pComp
          );
        };

        /***/
      },

    /***/ "./src/scripts/setbp/template/events.js":
      /*!**********************************************!*\
  !*** ./src/scripts/setbp/template/events.js ***!
  \**********************************************/
      /*! exports provided: bindEvents */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "bindEvents",
          function () {
            return bindEvents;
          }
        );
        /* harmony import */ var setbp_kernel_setjs_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! setbp/kernel/setjs.js */ "./src/scripts/setbp/kernel/setjs.js"
          );
        /* harmony import */ var core_acts_funcs_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! core/acts-funcs.js */ "./src/scripts/core/acts-funcs.js"
          );

        var events = {
          down: "mousedown touchstart",
          up: "mouseup touchend",
          out: "mouseleave touchleave touchcancel",
          move: "mousemove touchmove",
          form: "submit",
        };
        function bindEvents($el, comp, data, actions) {
          var name = $el.data("name");
          var acts = ($el.data("act") || "").split(" ");
          acts.forEach(function (action) {
            $el.on(events[action] || action, function (e) {
              var funcName = $el.data("func") || action;
              var args = {
                $el: $el,
                name: name,
                action: action,
                comp: comp,
                e: e,
                data: data,
                arg: $el.data("arg"),
              };
              setbp_kernel_setjs_js__WEBPACK_IMPORTED_MODULE_0__[
                "default"
              ].handleEvent(
                args,
                actions[funcName] ||
                  Object(
                    core_acts_funcs_js__WEBPACK_IMPORTED_MODULE_1__["act"]
                  )(funcName)
              );
            });
          });
        }

        /***/
      },

    /***/ "./src/scripts/setbp/template/template-config.js":
      /*!*******************************************************!*\
  !*** ./src/scripts/setbp/template/template-config.js ***!
  \*******************************************************/
      /*! exports provided: getConfigTemplate, configData, tmpStr */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getConfigTemplate",
          function () {
            return getConfigTemplate;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "configData",
          function () {
            return configData;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "tmpStr",
          function () {
            return tmpStr;
          }
        );
        /* harmony import */ var setbp_kernel_basics_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! setbp/kernel/basics.js */ "./src/scripts/setbp/kernel/basics.js"
          );
        /* harmony import */ var core_acts_funcs_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! core/acts-funcs.js */ "./src/scripts/core/acts-funcs.js"
          );
        /* harmony import */ var setbp_template_templates_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! setbp/template/templates.js */ "./src/scripts/setbp/template/templates.js"
          );

        function getConfigTemplate(callerName, config, tId) {
          var templateStr = Object(
            setbp_template_templates_js__WEBPACK_IMPORTED_MODULE_2__[
              "getTemplate"
            ]
          )(tId || config.t);

          if (!templateStr) {
            Object(
              setbp_kernel_basics_js__WEBPACK_IMPORTED_MODULE_0__["fatal"]
            )("Invalid " + callerName, config);
          }

          $.each(config.vars, function (name, val) {
            templateStr = templateStr.replace(
              RegExp("{" + name + "}", "g"),
              val
            );
          });
          $.each(config.subs, function (name, val) {
            templateStr = templateStr.replace(RegExp(name, "g"), val);
          });
          return templateStr;
        }
        function configData(config, data) {
          var funcName = config.func;
          var source = config.prop
            ? Object(
                setbp_kernel_basics_js__WEBPACK_IMPORTED_MODULE_0__[
                  "getPropDef"
                ]
              )(config.prop, data)
            : data;

          if (funcName) {
            var dataFunc =
              funcName &&
              ((data.rd || data)[funcName] ||
                Object(core_acts_funcs_js__WEBPACK_IMPORTED_MODULE_1__["func"])(
                  funcName
                ));
            typeof dataFunc != "function" &&
              Object(
                setbp_kernel_basics_js__WEBPACK_IMPORTED_MODULE_0__["fatal"]
              )("Not a function", funcName, config, data);
            source = dataFunc(source, config, data);
          }

          return source;
        }
        function tmpStr(templateStr, data) {
          return templateStr.replace(
            /{(?:(o):)?([^{}]+)}/g,
            function (match, group1, group2) {
              var result = Object(
                setbp_kernel_basics_js__WEBPACK_IMPORTED_MODULE_0__[
                  "getPropDef"
                ]
              )(group2, data);

              if (typeof result == "boolean") {
                result = result ? 1 : 0;
              }

              return typeof result == "string" || typeof result == "number"
                ? result
                : group1
                ? ""
                : match;
            }
          );
        }

        /***/
      },

    /***/ "./src/scripts/setbp/template/templates.js":
      /*!*************************************************!*\
  !*** ./src/scripts/setbp/template/templates.js ***!
  \*************************************************/
      /*! exports provided: ensureTemplates, loadTemplates, getTemplate */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ensureTemplates",
          function () {
            return ensureTemplates;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "loadTemplates",
          function () {
            return loadTemplates;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getTemplate",
          function () {
            return getTemplate;
          }
        );
        /* harmony import */ var setbp_kernel_basics_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! setbp/kernel/basics.js */ "./src/scripts/setbp/kernel/basics.js"
          );
        /* harmony import */ var setbp_utility_comp_helpers_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! setbp/utility/comp-helpers.js */ "./src/scripts/setbp/utility/comp-helpers.js"
          );

        var templates = {};
        var doneUrls = {};
        var tId = 1;
        function ensureTemplates(_ref) {
          var _ref$urls = _ref.urls,
            urls = _ref$urls === void 0 ? [] : _ref$urls,
            success = _ref.success,
            error = _ref.error;
          var done = 0;
          urls = urls.filter(function (url) {
            return !doneUrls[url];
          });

          if (!urls.length) {
            success();
          }

          urls.forEach(function (url) {
            $.get(url)
              .done(function (templateStr) {
                loadTemplates(templateStr);
                doneUrls[url] = true;

                if (++done == urls.length) {
                  success();
                }
              })
              .fail(error);
          });
        }

        function extractListHtml($list) {
          var listHtml = $list.html();
          var config = $list.data("list");
          var tName = config.t;

          if (!tName) {
            tName = "t_" + tId++;

            if ($list.children().length != 1) {
              Object(
                setbp_kernel_basics_js__WEBPACK_IMPORTED_MODULE_0__["fatal"]
              )("data-list must have one child", config);
            }

            templates[tName] = listHtml;
          }

          $list.attr("data-tname", tName).empty();
        }

        function processList($parent) {
          var selector = "[data-list]";
          var $childLists = $parent.find(selector);
          var tree = [];

          if ($childLists.length) {
            $childLists.each(function (index, el) {
              var $el = $(el);
              var depth = $el.parents(selector).length;
              tree[depth] = tree[depth] || [];
              tree[depth].push($el);
            });
            tree.reverse().forEach(function (branch) {
              branch.forEach(extractListHtml);
            });
          }

          $parent = $parent.filter(selector);
          $parent.length && extractListHtml($parent);
        }

        function loadTemplates(templateStr) {
          var $html = $(templateStr);
          Object(
            setbp_utility_comp_helpers_js__WEBPACK_IMPORTED_MODULE_1__[
              "funcWithSelf"
            ]
          )($html, "template", function ($item, name) {
            if (templates[name]) {
              Object(
                setbp_kernel_basics_js__WEBPACK_IMPORTED_MODULE_0__["fatal"]
              )("Template exists", name);
            }

            processList($item);
            templates[name] = $item[0].outerHTML;
          });
        }
        function getTemplate(templateName, alt) {
          if (templates[templateName] || alt) {
            return templates[templateName] || alt;
          } else {
            Object(
              setbp_kernel_basics_js__WEBPACK_IMPORTED_MODULE_0__["fatal"]
            )("No such template", templateName);
          }
        }

        /***/
      },

    /***/ "./src/scripts/setbp/ui/alert-box.js":
      /*!*******************************************!*\
  !*** ./src/scripts/setbp/ui/alert-box.js ***!
  \*******************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var setbp_template_component_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! setbp/template/component.js */ "./src/scripts/setbp/template/component.js"
          );

        /* harmony default export */ __webpack_exports__["default"] = function (
          opts
        ) {
          var isBusy = 0;
          var exOpts = $.extend(
            {
              noBtn: opts.noTxt,
              noClose: 1,
            },
            opts
          );
          var alertComp = Object(
            setbp_template_component_js__WEBPACK_IMPORTED_MODULE_0__["default"]
          )("common/alert-box", exOpts, {
            no: function no() {
              if (isBusy) return;
              lightbox.destroy();
              opts.no && opts.no(controller, alertComp);
            },
            ok: function ok() {
              if (isBusy) return;

              if (opts.ok) {
                isBusy = 1;
                alertComp.$root.addClass("loading");
                opts.ok(controller, alertComp);
              } else {
                lightbox.destroy();
              }
            },
          });
          var lightbox = alertComp.$root.lightbox(exOpts).data("lightbox");
          var controller = {
            error: function error(_error) {
              exOpts.errorMsg = _error.message || _error;
              alertComp.$root.removeClass("loading");
              alertComp.update();
              isBusy = 0;
            },
            close: function close() {
              lightbox.destroy();
            },
          };
          return controller;
        };

        /***/
      },

    /***/ "./src/scripts/setbp/utility/array.js":
      /*!********************************************!*\
  !*** ./src/scripts/setbp/utility/array.js ***!
  \********************************************/
      /*! exports provided: sort, removeFromList, removeFromListByValue, indexOf, shuffle, getUniqueList, obtain, getVal, randItem, randItems, spinIndex, listOverlap */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "sort",
          function () {
            return sort;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "removeFromList",
          function () {
            return removeFromList;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "removeFromListByValue",
          function () {
            return removeFromListByValue;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "indexOf",
          function () {
            return indexOf;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "shuffle",
          function () {
            return shuffle;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getUniqueList",
          function () {
            return getUniqueList;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "obtain",
          function () {
            return obtain;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getVal",
          function () {
            return getVal;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "randItem",
          function () {
            return randItem;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "randItems",
          function () {
            return randItems;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "spinIndex",
          function () {
            return spinIndex;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "listOverlap",
          function () {
            return listOverlap;
          }
        );
        function sort(items, prop, direction) {
          if (!items) {
            return;
          }

          direction = direction || 1;
          items.sort(function (a, b) {
            if (a[prop] > b[prop]) {
              return direction;
            }

            if (a[prop] < b[prop]) {
              return direction * -1;
            }

            return 0;
          });
          return items;
        }
        function removeFromList(list, value) {
          for (var i = 0; i < list.length; i++) {
            if (list[i] == value) {
              list.splice(i, 1);
              return i;
            }
          }
        }
        function removeFromListByValue(list, value, prop1, prop2) {
          for (var i = list.length - 1; i >= 0; i--) {
            if (
              list[i][prop1] == value ||
              (arguments.length > 3 && list[i][prop2] == value)
            ) {
              list.splice(i, 1);
              return i;
            }
          }
        }
        function indexOf(list, value, prop) {
          for (var i = 0; i < list.length; i++) {
            if ((prop ? list[i][prop] : list[i]) === value) {
              return i;
            }
          }

          return -1;
        } //Knuth-Fisher-Yates

        function shuffle(array) {
          var counter = array.length,
            temp,
            index;

          while (counter > 0) {
            index = Math.floor(Math.random() * counter);
            counter--;
            temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
          }

          return array;
        }
        function getUniqueList(list, prop) {
          var unique = [];
          var done = {};
          list.forEach(function (obj) {
            var thing = obj[prop];

            if (!done[thing]) {
              done[thing] = 1;
              unique.push(thing);
            }
          });
          return unique;
        }
        function obtain(list, value, prop1, prop2, prop3) {
          for (var i = 0; i < list.length; i++) {
            if (
              list[i][prop1] == value ||
              (arguments.length > 3 && list[i][prop2] == value) ||
              (arguments.length > 4 && list[i][prop3] == value)
            ) {
              return {
                index: i,
                val: list[i],
              };
            }
          }
        }
        function getVal(list, value, prop) {
          var result = obtain(list, value, prop);
          return result && result.val;
        }
        function randItem(list) {
          return list[Math.floor(Math.random() * list.length)];
        }
        function randItems(list, count) {
          return shuffle(list.slice()).slice(0, count);
        }
        function spinIndex(limit, change) {
          var current =
            arguments.length > 2 && arguments[2] !== undefined
              ? arguments[2]
              : 0;
          var index = current + change;
          limit = limit.length || limit;

          if (index < 0) {
            index += limit;
          }

          return index % limit;
        }
        function listOverlap(list1, list2, prop) {
          var overlap = [];
          list1.forEach(function (one) {
            if (prop) {
              var found = obtain(list2, one[prop], prop);

              if (found) {
                overlap.push(one);
              }
            } else {
              if (list2.indexOf(one) >= 0) {
                overlap.push(one);
              }
            }
          });
          return overlap;
        }

        /***/
      },

    /***/ "./src/scripts/setbp/utility/assets.js":
      /*!*********************************************!*\
  !*** ./src/scripts/setbp/utility/assets.js ***!
  \*********************************************/
      /*! exports provided: getFileMimeType, fileAsDataURL, unloadHead, loadJS, loadCSS, loadUrls, loadAssets, loadImage, loadImages, imageAJAX */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getFileMimeType",
          function () {
            return getFileMimeType;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fileAsDataURL",
          function () {
            return fileAsDataURL;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "unloadHead",
          function () {
            return unloadHead;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "loadJS",
          function () {
            return loadJS;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "loadCSS",
          function () {
            return loadCSS;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "loadUrls",
          function () {
            return loadUrls;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "loadAssets",
          function () {
            return loadAssets;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "loadImage",
          function () {
            return loadImage;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "loadImages",
          function () {
            return loadImages;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "imageAJAX",
          function () {
            return imageAJAX;
          }
        );
        var loaded = {};
        function getFileMimeType(file, callback) {
          if (
            window.File &&
            window.FileReader &&
            window.FileList &&
            window.Blob
          ) {
            var filereader = new FileReader();

            filereader.onload = function (evt) {
              var hex = Array.prototype.slice
                .call(new Uint8Array(evt.target.result))
                .map(function (x) {
                  return x.toString(16);
                })
                .join("")
                .toUpperCase();
              var reg = /^(FFD8FF(?:DB|E[01238]))|^(89504E47)|^(47494638)/;
              var result = hex.replace(reg, function (m, jpg, png, gif) {
                return jpg ? "jpeg" : png ? "png" : gif ? "gif" : "";
              });
              var type =
                (reg.test(hex) && "image/".concat(result)) || file.type || "";
              var ext = type.split("/")[1];
              callback(type, ext == "jpeg" ? "jpg" : ext);
            };

            filereader.onerror = function () {
              callback(file.type, file.type && file.type.split("/")[1]);
            };

            filereader.readAsArrayBuffer(file.slice(0, 4));
          }
        }
        function fileAsDataURL(file, onload) {
          var reader = new FileReader();
          reader.addEventListener(
            "load",
            function () {
              onload(reader.result);
            },
            false
          );
          reader.readAsDataURL(file);
        }

        function processUrlLoad(url, el, success, error) {
          if (loaded[url]) {
            processLoaded();
          } else {
            el.id = ("id_" + Date.now() + Math.random()).replace(".", "");

            el.onload = function () {
              loaded[url] = {
                status: 2,
                id: el.id,
              };
              processLoaded();
            };

            el.onerror = function () {
              loaded[url] = {
                status: 0,
              };
              $("head")
                .find("#" + el.id)
                .remove();
              processLoaded();
            };

            loaded[url] = {
              status: 1,
            };
            document.getElementsByTagName("head")[0].appendChild(el);
          }

          function processLoaded() {
            var status = loaded[url].status;

            if (status == 1) {
              // pending
              setTimeout(processLoaded, 500);
            } else if (status == 2) {
              success && success();
            } else {
              error && error();
            }
          }
        }

        function unloadHead(url) {
          if (loaded[url]) {
            $("head #" + loaded[url].id).remove();
            loaded[url] = 0;
          }
        }
        function loadJS(url, success, error) {
          var el = document.createElement("script");
          el.src = url;
          processUrlLoad(url, el, success, error);
        }
        function loadCSS(url, success, error) {
          var el = document.createElement("link");
          el.rel = "stylesheet";
          el.href = url;
          processUrlLoad(url, el, success, error);
        }
        function loadUrls(urls, kind, success, errorCb) {
          var done = 0;

          if (testArray(urls, success)) {
            urls.forEach(function (url) {
              (kind == "css" ? loadCSS : loadJS)(
                url,
                function () {
                  done++;

                  if (done == urls.length) {
                    success();
                  }
                },
                errorCb
              );
            });
          }
        }

        function testArray(obj, otherwise) {
          if (Array.isArray(obj) && obj.length) {
            return true;
          } else {
            otherwise();
          }
        }

        function loadJSCSS(urls, success, errorCb) {
          var done = 0;

          if (testArray(urls, success)) {
            urls.forEach(function (url) {
              (/\.css(?:\?.*)*$/.test(url) ? loadCSS : loadJS)(
                url,
                function () {
                  done++;

                  if (done == urls.length) {
                    success();
                  }
                },
                errorCb
              );
            });
          }
        }

        function loadAssets(_ref) {
          var urlSets = _ref.urlSets,
            success = _ref.success,
            error = _ref.error,
            errMsg = _ref.errMsg;
          var done = 0;

          if (testArray(urlSets, success)) {
            urlSets.forEach(function (urls) {
              loadJSCSS(
                urls,
                function () {
                  done++;

                  if (done == urlSets.length) {
                    success();
                  }
                },
                function () {
                  if (error) {
                    error(errMsg);
                    error = 0;
                  }
                }
              );
            });
          }
        }
        function loadImage(_ref2) {
          var url = _ref2.url,
            success = _ref2.success,
            error = _ref2.error,
            complete = _ref2.complete;
          var img = new Image();

          img.onload = function () {
            success && success(img);
            complete && complete(1, img);
          };

          img.onerror = function () {
            for (
              var _len = arguments.length, args = new Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }

            error && error(args);
            complete && complete(0, args);
          };

          img.src = url;
          return {
            cancel: function cancel() {
              success = null;
              error = null;
              complete = null;
            },
          };
        } // list is either an array of URL strings or a jQuery collection

        function loadImages(list, done) {
          var count = 0;
          var urls = list;
          var result = {};

          if (!(list && list.length)) {
            return done();
          }

          if (list.jquery) {
            urls = [];
            list.each(function () {
              urls.push($(this).attr("src"));
            });
          }

          urls.forEach(function (item) {
            var url = item.url || item;
            loadImage({
              url: url,
              complete: function complete(code, data) {
                count++;
                result[item.id || url] = code
                  ? {
                      item: item,
                      img: data,
                    }
                  : {
                      item: item,
                      errors: data,
                    };

                if (count == urls.length) {
                  done(result);
                }
              },
            });
          });
        }
        function imageAJAX(opts) {
          $.ajax({
            type: "GET",
            url: opts.url,
            error: opts.error,
            success: opts.success,
            complete: opts.complete,
            beforeSend: function beforeSend(jqXHR) {
              if (opts.prog) {
                jqXHR.onprogress = function (e) {
                  if (e.lengthComputable) {
                    opts.prog((e.loaded / e.total) * 100 || 0);
                  }
                };
              }
            },
          });
        }

        /***/
      },

    /***/ "./src/scripts/setbp/utility/calls.js":
      /*!********************************************!*\
  !*** ./src/scripts/setbp/utility/calls.js ***!
  \********************************************/
      /*! exports provided: throttle, debounce, batchCall, serialCall */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "throttle",
          function () {
            return throttle;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "debounce",
          function () {
            return debounce;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "batchCall",
          function () {
            return batchCall;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "serialCall",
          function () {
            return serialCall;
          }
        );
        /* harmony import */ var setbp_utility_objects_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! setbp/utility/objects.js */ "./src/scripts/setbp/utility/objects.js"
          );
        // https://davidwalsh.name/javascript-debounce-function#comment-509154
        // Returns a function, that, as long as it continues to be invoked, will only
        // trigger every N milliseconds. If <code>immediate</code> is passed, trigger the
        // function on the leading edge, instead of the trailing.

        function throttle(func) {
          var wait =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : 250;
          var immediate = arguments.length > 2 ? arguments[2] : undefined;
          var timeout;
          return function () {
            var context = this,
              args = arguments;

            var later = function later() {
              timeout = null;
              if (!immediate) func.apply(context, args);
            };

            var callNow = immediate && !timeout;
            if (!timeout) timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
          };
        } // https://davidwalsh.name/javascript-debounce-function
        // Returns a function, that, as long as it continues to be invoked, will not
        // be triggered. The function will be called after it stops being called for
        // N milliseconds. If `immediate` is passed, trigger the function on the
        // leading edge, instead of the trailing.

        function debounce(func) {
          var wait =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : 250;
          var immediate = arguments.length > 2 ? arguments[2] : undefined;
          var timeout;
          return function () {
            var context = this,
              args = arguments;

            var later = function later() {
              timeout = null;
              if (!immediate) func.apply(context, args);
            };

            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
          };
        }
        function batchCall(_ref) {
          var _success = _ref.success,
            _error = _ref.error,
            progress = _ref.progress;
          var done = 0;
          var result = {};
          var calls = [];
          var callManager = {
            go: go,
            add: function add(func, opts, key, prop) {
              calls.push({
                func: func,
                opts: opts,
                key: key,
                prop: prop,
              });
              return callManager;
            },
          };
          return callManager;

          function go() {
            if (!calls.length) {
              _success(result);
            }

            calls.forEach(function (item) {
              item.func(
                $.extend({}, item.opts, {
                  error: function error(errObj) {
                    typeof _error == "function" && _error(errObj);
                    _error = 1;
                  },
                  success: function success(res) {
                    done++;

                    if (item.key) {
                      result[item.key] = item.prop
                        ? Object(
                            setbp_utility_objects_js__WEBPACK_IMPORTED_MODULE_0__[
                              "getProp"
                            ]
                          )(item.prop, res)
                        : res;
                      item.opts && item.opts.success && item.opts.success(res);
                    }

                    if (_error != 1 && progress) {
                      progress({
                        done: done,
                        rem: calls.length - done,
                        percent: Math.round((100 * done) / calls.length),
                      });
                    }

                    if (done == calls.length) {
                      _success(result);
                    }
                  },
                })
              );
            });
          }
        }
        function serialCall(_ref2) {
          var condition = _ref2.condition,
            success = _ref2.success,
            error = _ref2.error;
          var calls = [];
          var callManager = {
            go: go,
            add: function add(func, opts) {
              calls.push({
                func: func,
                opts: opts,
              });
              return callManager;
            },
          };
          return callManager;

          function go() {
            if (calls.length) {
              if (!condition || condition()) {
                var item = calls.shift();
                var opts = $.extend(
                  {
                    success: go,
                    error: error,
                  },
                  item.opts
                );

                for (
                  var _len = arguments.length, args = new Array(_len), _key = 0;
                  _key < _len;
                  _key++
                ) {
                  args[_key] = arguments[_key];
                }

                item.func.apply(item, [opts].concat(args));
              }
            } else {
              success && success();
            }
          }
        }

        /***/
      },

    /***/ "./src/scripts/setbp/utility/comp-helpers.js":
      /*!***************************************************!*\
  !*** ./src/scripts/setbp/utility/comp-helpers.js ***!
  \***************************************************/
      /*! exports provided: storeItemByName, funcWithSelf, findWithSelf */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "storeItemByName",
          function () {
            return storeItemByName;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "funcWithSelf",
          function () {
            return funcWithSelf;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "findWithSelf",
          function () {
            return findWithSelf;
          }
        );
        /* harmony import */ var setbp_kernel_basics_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! setbp/kernel/basics.js */ "./src/scripts/setbp/kernel/basics.js"
          );

        function storeItemByName(comp, name, item) {
          if (comp[name]) {
            Object(
              setbp_kernel_basics_js__WEBPACK_IMPORTED_MODULE_0__["fatal"]
            )("Repeat name", name);
          }

          comp[name] = item;
        }
        function funcWithSelf($el, dataName, func) {
          findWithSelf($el, dataName).each(function (i, item) {
            var $item = $(item);
            func($item, $item.data(dataName));
          });
        }
        function findWithSelf($el, dataName) {
          dataName = "[data-" + dataName + "]";
          return $el.find(dataName).addBack(dataName);
        }

        /***/
      },

    /***/ "./src/scripts/setbp/utility/lazy-media.js":
      /*!*************************************************!*\
  !*** ./src/scripts/setbp/utility/lazy-media.js ***!
  \*************************************************/
      /*! exports provided: lazyMedia, lazyImg, makeLazy */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "lazyMedia",
          function () {
            return lazyMedia;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "lazyImg",
          function () {
            return lazyImg;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "makeLazy",
          function () {
            return makeLazy;
          }
        );
        /* harmony import */ var setbp_kernel_event_manager_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! setbp/kernel/event-manager.js */ "./src/scripts/setbp/kernel/event-manager.js"
          );

        var pending = [];
        setbp_kernel_event_manager_js__WEBPACK_IMPORTED_MODULE_0__[
          "default"
        ].addListener(
          setbp_kernel_event_manager_js__WEBPACK_IMPORTED_MODULE_0__[
            "eventTypes"
          ].view,
          "lazy-media",
          function (top, bottom, height) {
            for (var i = pending.length - 1; i >= 0; i--) {
              if ($.contains(document.body, pending[i].$el[0])) {
                if (loadFullMedia(pending[i], height)) {
                  pending.splice(i, 1);
                }
              } else {
                pending.splice(i, 1);
              }
            }

            manageVideos();
          }
        );
        setInterval(manageVideos, 1000);

        function manageVideos() {
          var width = $(window).width() + 200;
          var height = $(window).height();
          pending
            .filter(function (x) {
              return x.isReady;
            })
            .forEach(function (item) {
              var _item$$el$0$getBoundi = item.$el[0].getBoundingClientRect(),
                left = _item$$el$0$getBoundi.left,
                top = _item$$el$0$getBoundi.top,
                right = _item$$el$0$getBoundi.right,
                bottom = _item$$el$0$getBoundi.bottom;

              if (right < -200 || left > width || bottom < 0 || top > height) {
                item.pause();
              } else {
                item.play();
              }
            });
        }

        function loadFullMedia(item, height) {
          var $el = item.$el,
            type = item.type,
            url = item.url;

          var _$el$0$getBoundingCli = $el[0].getBoundingClientRect(),
            top = _$el$0$getBoundingCli.top,
            bottom = _$el$0$getBoundingCli.bottom;

          if (bottom >= 0 && top <= height) {
            if (item.loadFunc) {
              item.loadFunc(item);
            } else if (type == "vid") {
              if (!item.video) {
                item.play = play;
                item.pause = pause;
                item.video = item.getVideo();
                item.video.oncanplay = videoCallback;

                if (item.video.readyState > 3) {
                  videoCallback();
                }
              }

              return;
            } else {
              processImage();
            }

            return true;
          }

          function mediaLoaded() {
            $el.addClass("loaded");
          }

          function videoCallback() {
            item.video.muted = true;
            item.video.oncanplay = null;
            item.isReady = true;
            mediaLoaded();
          }

          function pause() {
            if (!item.video.paused) {
              item.video.pause();
            }
          }

          function play() {
            if (item.isReady && item.video.paused) {
              item.video.play();
            }
          }

          function processImage() {
            $("<img>")
              .on("load", function () {
                if (type == "bg") {
                  $el.css("background-image", "url(" + url + ")");
                  mediaLoaded();
                } else {
                  $el.on("load", mediaLoaded).attr("src", url);
                }
              })
              .attr("src", url);
          }
        }

        function lazyMedia(opts) {
          var $el = opts.$el;

          if (!$el.attr("data-lm")) {
            // use attribute as other plugins may want to select it using this attribute
            $el.attr("data-lm", 1);
            processLazy();
          }

          function processLazy() {
            if ($.contains(document.body, $el[0])) {
              if (!loadFullMedia(opts, $(window).height())) {
                pending.push(opts);
              }
            } else {
              setTimeout(processLazy, 250);
            }
          }
        }
        function lazyImg($el, url) {
          lazyMedia({
            $el: $el,
            url: url,
            type: "src",
          });
        }
        function makeLazy(type) {
          return function (url, _ref) {
            var $el = _ref.$el;

            if (url) {
              lazyMedia({
                $el: $el,
                type: type,
                url: url,
              });
            } else {
              $el.parent("figure").remove();
              $el.remove();
            }
          };
        }

        /***/
      },

    /***/ "./src/scripts/setbp/utility/objects.js":
      /*!**********************************************!*\
  !*** ./src/scripts/setbp/utility/objects.js ***!
  \**********************************************/
      /*! exports provided: resetObject, storeValue, copyObj, getProp */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "resetObject",
          function () {
            return resetObject;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "storeValue",
          function () {
            return storeValue;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "copyObj",
          function () {
            return copyObj;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getProp",
          function () {
            return getProp;
          }
        );
        function _typeof(obj) {
          "@babel/helpers - typeof";
          if (
            typeof Symbol === "function" &&
            typeof Symbol.iterator === "symbol"
          ) {
            _typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj &&
                typeof Symbol === "function" &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
            };
          }
          return _typeof(obj);
        }

        function processType(path, val) {
          var type = path.slice(-1);

          if (path[path.length - 2] == ":") {
            path = path.slice(0, -2);

            if (type == "n") {
              val = +val;
            } else if (type == "b") {
              val = !!val;
            }
          }

          return {
            path: path,
            val: val,
          };
        }

        function listIndex(str) {
          if (str.length) {
            if (isNaN(str)) {
              return str;
            } else {
              return +str;
            }
          }
        }

        function parsePath(path) {
          var parts = [];
          var mark = 0;
          var skip;

          for (var i = 0; i < path.length; i++) {
            if (skip) {
              if (path[i] == "]") {
                parts.push({
                  list: 1,
                  key: path.slice(mark, skip),
                  index: listIndex(path.slice(skip + 1, i)),
                });
                mark = i + 1;
                skip = 0;
              }
            } else if (path[i] == "[") {
              skip = i;

              if (!i) {
                throw "Bad object config " + path;
              }
            } else if (path[i] == ".") {
              addObj();
              mark = i + 1;
            }
          }

          addObj();
          return parts;

          function addObj() {
            if (mark < i) {
              parts.push({
                key: path.slice(mark, i),
              });
            }
          }
        }

        function resetItem(data, parts, key, config, index) {
          var part = parts[index++];

          if (index < parts.length) {
            data = data[part];

            if (Array.isArray(data)) {
              data.forEach(function (listItem) {
                resetItem(listItem, parts, key, config, index);
              });
            } else if (data) {
              resetItem(data, parts, key, config, index);
            }
          } else {
            if ("val" in config) {
              data[part] =
                typeof config.val == "function" ? config.val() : config.val;
            } else if (config.arr) {
              data[part] = [];
            } else if (config.obj) {
              data[part] = {};
            } else {
              delete data[part];
            }
          }
        }

        function resetObject(data, resets) {
          $.each(resets, function (key, config) {
            resetItem(data, key.split("."), key, config, 0);
          });
        }

        function partIndex(part, arr) {
          return part.list
            ? part.index != null
              ? part.index
              : arr.length
            : null;
        }

        function storeValue(target, _path, _val) {
          var _processType = processType(_path, _val),
            path = _processType.path,
            val = _processType.val;

          var parts = parsePath(path);
          var index;
          parts.forEach(function (part, i) {
            var end = i == parts.length - 1;

            if (Array.isArray(target)) {
              storeInArray(part, end);
            } else {
              storeInObject(part, end);
            }

            index = partIndex(part, target);
          });

          function storeInObject(part, end) {
            var tmp = target[part.key];

            if (part.list) {
              tmp = Array.isArray(tmp) ? tmp : [];

              if (end) {
                tmp[partIndex(part, tmp)] = val;
              }
            } else {
              if (end) {
                tmp = val;
              } else {
                tmp = _typeof(tmp) == "object" ? tmp : {};
              }
            }

            target = target[part.key] = tmp;
          }

          function storeInArray(part, end) {
            var tmp = target[index];

            if (part.list) {
              if (part.key) {
                if (_typeof(tmp) != "object") {
                  tmp = target[index] = {};
                }

                tmp = tmp[part.key] = Array.isArray(tmp[part.key])
                  ? tmp[part.key]
                  : [];
              } else {
                tmp = target[index] = Array.isArray(tmp) ? tmp : [];
              }

              if (end) {
                tmp[partIndex(part, tmp)] = val;
              }
            } else {
              target[index] = tmp = _typeof(tmp) == "object" ? tmp : {};

              if (end) {
                tmp[part.key] = val;
              } else {
                tmp = tmp[part.key] = {};
              }
            }

            target = tmp;
          }
        }
        function copyObj(target, source, props) {
          props.forEach(function (prop) {
            storeValue(target, prop, getProp(prop, source));
          });
          return target;
        }
        function getProp(propPath, data, data2) {
          var parts = propPath.split(".");

          for (var j = 0; data && j < parts.length; j++) {
            if (j == parts.length - 1 && parts[j] in data) {
              return data[parts[j]];
            }

            data = data[parts[j]];
          }

          if (data2) {
            return getProp(propPath, data2);
          }
        }

        /***/
      },

    /***/ "./src/scripts/setbp/utility/strings.js":
      /*!**********************************************!*\
  !*** ./src/scripts/setbp/utility/strings.js ***!
  \**********************************************/
      /*! exports provided: capitalize, getStrHash, supplant, getInitials, prettyTime, timeToText, slugify */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "capitalize",
          function () {
            return capitalize;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getStrHash",
          function () {
            return getStrHash;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "supplant",
          function () {
            return supplant;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getInitials",
          function () {
            return getInitials;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "prettyTime",
          function () {
            return prettyTime;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "timeToText",
          function () {
            return timeToText;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "slugify",
          function () {
            return slugify;
          }
        );
        function capitalize(string) {
          return string.charAt(0).toUpperCase() + string.slice(1);
        } //https://stackoverflow.com/a/8831937/2211098
        //https://github.com/darkskyapp/string-hash

        function getStrHash(str) {
          var hash = 5381,
            i = (str && str.length) || 0;

          while (i) {
            hash = (hash * 33) ^ str.charCodeAt(--i);
          }

          return hash >>> 0;
        }
        /**
         * A simple solution to replace variables in templates
         * http://javascript.crockford.com/remedial.html
         * @param {string} string
         * @param {string} o
         * @return {string}
         */

        function supplant(string, o) {
          return string.replace(/{([^{}]*)}/g, function (a, b) {
            var r = o,
              parts = b.split(".");

            for (var i = 0; r && i < parts.length; i++) {
              r = r[parts[i]];
            }

            return typeof r === "string" || typeof r === "number" ? r : a;
          });
        }
        /**
         * getInitials - Create initials from full name
         * @param {string} name - full name
         * @return {string} - The initials
         */

        function getInitials(name) {
          var initials;

          try {
            initials = name.toUpperCase().match(/\b\w/g);

            if (initials.length > 1) {
              initials = initials.shift() + initials.pop();
            } else {
              initials = initials.shift();
            }
          } catch (e) {
            initials = name.charAt(0);
          }

          return initials;
        }
        function prettyTime(num) {
          return (num < 10 ? "0" : "") + num;
        }
        function timeToText(ms) {
          var total_seconds = ms / 1000;
          var hours = Math.floor(total_seconds / 3600);
          total_seconds = total_seconds % 3600;
          var minutes = Math.floor(total_seconds / 60);
          total_seconds = total_seconds % 60;
          var seconds = Math.floor(total_seconds);
          hours = prettyTime(hours);
          minutes = prettyTime(minutes);
          seconds = prettyTime(seconds);
          return hours + ":" + minutes + ":" + seconds;
        } // https://medium.com/@mhagemann/the-ultimate-way-to-slugify-a-url-string-in-javascript-b8e4a0d849e1

        function slugify(string) {
          var a =
            "àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;";
          var b =
            "aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------";
          var p = new RegExp(a.split("").join("|"), "g");
          return string
            .toString()
            .toLowerCase()
            .replace(/\s+/g, "-") // Replace spaces with -
            .replace(p, function (c) {
              return b.charAt(a.indexOf(c));
            }) // Replace special characters
            .replace(/&/g, "-and-") // Replace & with 'and'
            .replace(/[^\w-]+/g, "") // Remove all non-word characters
            .replace(/--+/g, "-") // Replace multiple - with single -
            .replace(/^-+/, "") // Trim - from start of text
            .replace(/-+$/, ""); // Trim - from end of text
        }

        /***/
      },

    /******/
  }
);
//# sourceMappingURL=bundle.js.map
