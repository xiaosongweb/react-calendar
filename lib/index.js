"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

require("./index.scss");

var Calendar =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(Calendar, _Component);

  function Calendar() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, Calendar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(Calendar)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      value: _this.props.value
    };

    _this.changeMonth = function (flag) {
      return (
        /*#__PURE__*/
        (0, _asyncToGenerator2["default"])(
        /*#__PURE__*/
        _regenerator["default"].mark(function _callee() {
          return _regenerator["default"].wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (flag === 'next') {
                    if (_this.state.month >= 12) {
                      _this.setState({
                        month: 1,
                        year: _this.state.year + 1
                      });
                    } else {
                      _this.setState({
                        month: _this.state.month + 1
                      });
                    }
                  }

                  if (flag === 'pre') {
                    if (_this.state.month <= 1) {
                      _this.setState({
                        month: 12,
                        year: _this.state.year - 1
                      });
                    } else {
                      _this.setState({
                        month: _this.state.month - 1
                      });
                    }
                  }

                case 2:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }))
      );
    };

    _this.changeYear = function (flag) {
      return function () {
        if (flag === 'next') {
          _this.setState({
            year: _this.state.year + 1
          });
        }

        if (flag === 'pre') {
          _this.setState({
            year: _this.state.year - 1
          });
        }
      };
    };

    return _this;
  }

  (0, _createClass2["default"])(Calendar, [{
    key: "componentWillMount",
    value: function () {
      var _componentWillMount = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2() {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.setState({
                  time: this.state.value.getTime(),
                  year: this.state.value.getFullYear(),
                  month: this.state.value.getMonth() + 1,
                  day: this.state.value.getDate(),
                  weekDay: this.state.value.getDay()
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentWillMount() {
        return _componentWillMount.apply(this, arguments);
      }

      return componentWillMount;
    }()
  }, {
    key: "getMonthDayNum",
    value: function getMonthDayNum() {
      var curDate = new Date(this.state.year, this.state.month, 0);
      return curDate.getDate();
    }
  }, {
    key: "getMonthFirstDay",
    value: function getMonthFirstDay() {
      var curDate = this.state.value;
      curDate.setFullYear(this.state.year);
      curDate.setMonth(this.state.month - 1);
      curDate.setDate(1);
      var week = curDate.getDay();

      if (week === 0) {
        week = 7;
      }

      return week;
    }
  }, {
    key: "dateTemplate",
    value: function dateTemplate() {
      var curMonthDayNum = this.getMonthDayNum(this.state.year, this.state.month);
      var preMonthDayNum = this.getMonthDayNum(this.state.year, this.state.month - 1);
      var curMonthFirstDay = this.getMonthFirstDay(1);
      var arr = new Array(42).fill('');
      var n = 1;
      var m = preMonthDayNum;
      arr.forEach(function (item, index) {
        if (index >= curMonthFirstDay - 1) {
          arr[index] = index - curMonthFirstDay + 2;
        }

        if (curMonthFirstDay + curMonthDayNum <= index + 1) {
          arr[index] = n++;
        }

        if (index < curMonthFirstDay - 1) {
          arr[curMonthFirstDay - 2 - index] = m--;
        }
      });
      var arrList = arr.map(function (item, index) {
        return _react["default"].createElement("div", {
          key: Math.random()
        }, item);
      });
      return _react["default"].createElement(_react["default"].Fragment, null, arrList);
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        className: "container"
      }, _react["default"].createElement("div", {
        className: "btnArea"
      }, _react["default"].createElement("div", {
        className: "preYear",
        onClick: this.changeYear('pre')
      }, "<<"), _react["default"].createElement("div", {
        className: "preMonth",
        onClick: this.changeMonth('pre')
      }, "<"), _react["default"].createElement("div", {
        className: "show"
      }, this.state.month, " ", this.state.year), _react["default"].createElement("div", {
        className: "nextMonth",
        onClick: this.changeMonth('next')
      }, ">"), _react["default"].createElement("div", {
        className: "nextYear",
        onClick: this.changeYear('next')
      }, ">>")), _react["default"].createElement("div", {
        className: "weekArea"
      }, _react["default"].createElement("div", null, "SUM"), _react["default"].createElement("div", null, "MON"), _react["default"].createElement("div", null, "TUE"), _react["default"].createElement("div", null, "WED"), _react["default"].createElement("div", null, "THU"), _react["default"].createElement("div", null, "FRI"), _react["default"].createElement("div", null, "SAT")), _react["default"].createElement("div", {
        className: "dayArea"
      }, this.dateTemplate()));
    }
  }]);
  return Calendar;
}(_react.Component);

var _default = Calendar;
exports["default"] = _default;