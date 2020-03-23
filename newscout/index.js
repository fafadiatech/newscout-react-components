"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContentOverlay = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _reactShare = require("react-share");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ContentOverlay =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ContentOverlay, _React$Component);

  function ContentOverlay() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, ContentOverlay);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ContentOverlay)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.getArticleId = function () {
      _this.props.getArticleId(_this.props.id);
    }, _temp));
  }

  _createClass(ContentOverlay, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          title = _this$props.title,
          description = _this$props.description,
          uploaded_by = _this$props.uploaded_by,
          source_url = _this$props.source_url,
          category = _this$props.category,
          slug_url = _this$props.slug_url,
          is_loggedin = _this$props.is_loggedin,
          bookmark_ids = _this$props.bookmark_ids,
          base_url = _this$props.base_url;
      var final_url = base_url + slug_url;
      return _react.default.createElement("article", {
        className: "featurepost"
      }, _react.default.createElement("div", {
        className: "featurepost-content"
      }, _react.default.createElement("ul", {
        className: "list-inline featurepost-category"
      }, _react.default.createElement("li", {
        className: "list-inline-item"
      }, category)), _react.default.createElement("h3", null, _react.default.createElement("a", {
        href: "".concat(slug_url)
      }, title)), _react.default.createElement("ul", {
        className: "list-unstyled featurepost-source"
      }, _react.default.createElement("li", {
        className: "list-item"
      }, _react.default.createElement("a", {
        href: "".concat(source_url)
      }, uploaded_by))), _react.default.createElement("p", null, description), _react.default.createElement("div", {
        className: "clearfix"
      }, _react.default.createElement("div", {
        className: "float-left"
      }, _react.default.createElement("h6", null, _react.default.createElement("a", {
        href: "".concat(slug_url)
      }, "Read More..."))), _react.default.createElement("div", {
        className: "float-right"
      }, _react.default.createElement("ul", {
        className: "list-inline m-0 sharelink"
      }, _react.default.createElement("li", {
        className: "list-inline-item"
      }, _react.default.createElement("div", null, _react.default.createElement(_reactShare.FacebookShareButton, {
        url: final_url,
        quote: title
      }, _react.default.createElement(_reactShare.FacebookIcon, {
        size: 20,
        round: true
      })), "\xA0", _react.default.createElement(_reactShare.TwitterShareButton, {
        url: final_url,
        quote: title
      }, _react.default.createElement(_reactShare.TwitterIcon, {
        size: 20,
        round: true
      })), "\xA0", _react.default.createElement(_reactShare.WhatsappShareButton, {
        url: final_url,
        quote: title
      }, _react.default.createElement(_reactShare.WhatsappIcon, {
        size: 20,
        round: true
      }))), _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faShareAlt
      })), _react.default.createElement("li", {
        className: "list-inline-item"
      }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faBookmark,
        onClick: this.getArticleId,
        className: bookmark_ids.indexOf(id) > -1 ? 'bookmarked' : ''
      })))))));
    }
  }]);

  return ContentOverlay;
}(_react.default.Component);

exports.ContentOverlay = ContentOverlay;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Filter = void 0;

var _react = _interopRequireDefault(require("react"));

var _Fade = _interopRequireDefault(require("react-reveal/Fade"));

var _reactstrap = require("reactstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var query_array = [];

var Filter =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Filter, _React$Component);

  function Filter(props) {
    var _this;

    _classCallCheck(this, Filter);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Filter).call(this, props));

    _this.togglecol = function () {
      _this.setState({
        isOpen: !_this.state.isOpen
      });
    };

    _this.toggleFilter = function (data) {
      _this.props.toggleFilter(data);
    };

    _this.handleChange = function (e) {
      var cat_type = e.target.dataset.cat.toLowerCase();
      var cat_val = e.target.value;
      var cat_checked = e.target.checked;

      if (cat_type === "hash tags") {
        cat_type = "tag";
      }

      var query = cat_type + "=" + cat_val;

      if (cat_checked === true) {
        query_array.push(cat_val);
      } else {
        query_array.splice(query_array.indexOf(cat_val), 1);
      }

      _this.setState({
        selectedtem: query_array
      });

      _this.props.query(query, cat_checked);
    };

    _this.state = {
      isOpen: false,
      selectedtem: []
    };
    return _this;
  }

  _createClass(Filter, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var selectedtem = this.state.selectedtem;
      var collapse = this.props.filters.map(function (item, index) {
        return _react.default.createElement(_react.default.Fragment, {
          key: index
        }, _react.default.createElement("div", {
          className: "fltr-section"
        }, _react.default.createElement("div", {
          onClick: _this2.togglecol
        }, item.catitems), _react.default.createElement("ul", {
          className: "list-unstyled"
        }, item.subitem.map(function (subitem, subindex) {
          return _react.default.createElement("li", {
            key: subindex
          }, _react.default.createElement(_reactstrap.Label, {
            check: true
          }, _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("input", {
            type: "checkbox",
            value: subitem.label,
            onChange: _this2.handleChange,
            "data-cat": item.catitems,
            checked: selectedtem.indexOf(subitem.label) > -1 ? true : false
          }), " ", subitem.label)));
        }))));
      });
      return _react.default.createElement(_Fade.default, {
        right: true,
        when: this.props.isFilterOpen,
        duration: 500
      }, _react.default.createElement("div", {
        className: "filter-container ".concat(this.props.isFilterOpen === false ? 'd-none' : '')
      }, _react.default.createElement("div", {
        className: "filter-box"
      }, _react.default.createElement("div", {
        className: "clearfix"
      }, _react.default.createElement("div", {
        className: "float-left"
      }, _react.default.createElement("h6", null, "Filters")), _react.default.createElement("div", {
        className: "float-right"
      }, _react.default.createElement("div", {
        className: "closefilter",
        onClick: this.toggleFilter
      }, "X"))), _react.default.createElement("hr", null), _react.default.createElement("div", {
        className: "row"
      }, _react.default.createElement("div", {
        className: "col-lg-12"
      }, collapse)))));
    }
  }]);

  return Filter;
}(_react.default.Component);

exports.Filter = Filter;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeBrandsSvgIcons = require("@fortawesome/free-brands-svg-icons");

var _newscout = require("newscout");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var current_date = new Date();
var current_year = current_date.getFullYear();

var Footer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer(props) {
    var _this;

    _classCallCheck(this, Footer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Footer).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("footer", {
        className: "footer-area py-4"
      }, _react.default.createElement("div", {
        className: "container"
      }, _react.default.createElement("div", {
        className: "clearfix"
      }, _react.default.createElement("div", {
        className: "float-left"
      }, _react.default.createElement("p", {
        className: "m-0"
      }, "\xA9 Copyright ", current_year, ", All Rights Reserved by ", _react.default.createElement("a", {
        href: "/"
      }, "Newscout"))), _react.default.createElement("div", {
        className: "float-right"
      }, _react.default.createElement("ul", {
        className: "list-inline m-0"
      }, _react.default.createElement("li", {
        className: "list-inline-item"
      }, _react.default.createElement("a", {
        href: this.props.privacyurl
      }, "Privacy Policy")), _react.default.createElement("li", {
        className: "list-inline-item"
      }, "|"), _react.default.createElement("li", {
        className: "list-inline-item"
      }, _react.default.createElement("a", {
        href: this.props.facebookurl,
        target: "_blank"
      }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeBrandsSvgIcons.faFacebookSquare
      }))), _react.default.createElement("li", {
        className: "list-inline-item"
      }, _react.default.createElement("a", {
        href: this.props.twitterurl,
        target: "_blank"
      }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeBrandsSvgIcons.faTwitter
      }))))))));
    }
  }]);

  return Footer;
}(_react.default.Component);

exports.Footer = Footer;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HorizontalCardItem = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _reactstrap = require("reactstrap");

var _reactShare = require("react-share");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var HorizontalCardItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HorizontalCardItem, _React$Component);

  function HorizontalCardItem() {
    _classCallCheck(this, HorizontalCardItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(HorizontalCardItem).apply(this, arguments));
  }

  _createClass(HorizontalCardItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          image = _this$props.image,
          title = _this$props.title,
          description = _this$props.description,
          uploaded_on = _this$props.uploaded_on,
          uploaded_by = _this$props.uploaded_by,
          slug_url = _this$props.slug_url,
          source_url = _this$props.source_url,
          category = _this$props.category,
          hash_tags = _this$props.hash_tags,
          bookmark_ids = _this$props.bookmark_ids,
          base_url = _this$props.base_url;
      var final_url = base_url + slug_url;
      return _react.default.createElement("article", {
        className: "article-post"
      }, _react.default.createElement("div", {
        className: "row"
      }, _react.default.createElement("div", {
        className: "col-lg-6 p-0"
      }, _react.default.createElement("a", {
        href: "".concat(slug_url)
      }, _react.default.createElement("img", {
        src: image,
        alt: title,
        className: "img-fluid"
      })), _react.default.createElement("div", {
        className: "section-category"
      }, uploaded_on)), _react.default.createElement("div", {
        className: "col-lg-6 p-0"
      }, _react.default.createElement(_reactstrap.Card, {
        className: "card-post"
      }, _react.default.createElement(_reactstrap.CardBody, null, _react.default.createElement(_reactstrap.CardTitle, {
        className: "mb-2"
      }, _react.default.createElement("a", {
        href: "".concat(slug_url)
      }, title)), _react.default.createElement(_reactstrap.CardText, null, _react.default.createElement("a", {
        href: "".concat(source_url)
      }, uploaded_by)), _react.default.createElement(_reactstrap.CardText, {
        className: "card-desc"
      }, _react.default.createElement("a", {
        href: "".concat(slug_url),
        target: "_blank"
      }, description)), _react.default.createElement("div", {
        className: "clearfix"
      }, _react.default.createElement("div", {
        className: "float-left"
      }, _react.default.createElement(_reactstrap.CardLink, {
        href: "".concat(slug_url)
      }, "Read More...")), _react.default.createElement("div", {
        className: "float-right"
      }, _react.default.createElement("ul", {
        className: "list-inline m-0 sharelink"
      }, _react.default.createElement("li", {
        className: "list-inline-item"
      }, _react.default.createElement("div", null, _react.default.createElement(_reactShare.FacebookShareButton, {
        url: final_url,
        quote: title
      }, _react.default.createElement(_reactShare.FacebookIcon, {
        size: 20,
        round: true
      })), "\xA0", _react.default.createElement(_reactShare.TwitterShareButton, {
        url: final_url,
        quote: title
      }, _react.default.createElement(_reactShare.TwitterIcon, {
        size: 20,
        round: true
      })), "\xA0", _react.default.createElement(_reactShare.WhatsappShareButton, {
        url: final_url,
        quote: title
      }, _react.default.createElement(_reactShare.WhatsappIcon, {
        size: 20,
        round: true
      }))), _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faShareAlt
      })), _react.default.createElement("li", {
        className: "list-inline-item"
      }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faBookmark,
        onClick: this.getArticleId,
        className: bookmark_ids.indexOf(id) > -1 ? 'bookmarked' : ''
      }))))))))));
    }
  }]);

  return HorizontalCardItem;
}(_react.default.Component);

exports.HorizontalCardItem = HorizontalCardItem;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageOverlay = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _reactShare = require("react-share");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ImageOverlay =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ImageOverlay, _React$Component);

  function ImageOverlay() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, ImageOverlay);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ImageOverlay)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.getArticleId = function () {
      _this.props.getArticleId(_this.props.id);
    }, _temp));
  }

  _createClass(ImageOverlay, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          image = _this$props.image,
          title = _this$props.title,
          description = _this$props.description,
          uploaded_by = _this$props.uploaded_by,
          source_url = _this$props.source_url,
          category = _this$props.category,
          slug_url = _this$props.slug_url,
          is_loggedin = _this$props.is_loggedin,
          bookmark_ids = _this$props.bookmark_ids,
          base_url = _this$props.base_url;
      var size = this.props.size !== undefined ? this.props.size : "lg";
      var final_url = base_url + slug_url;
      return _react.default.createElement("article", {
        className: "article ".concat(size !== "lg" ? "sm" : "")
      }, _react.default.createElement("section", null, _react.default.createElement("div", {
        className: "section-img ".concat(size !== "lg" ? "sm" : "")
      }, _react.default.createElement("a", {
        href: "".concat(slug_url)
      }, _react.default.createElement("img", {
        src: image,
        alt: title,
        className: "img-fluid"
      }))), size === "lg" ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
        className: "section-category"
      }, category)) : ""), _react.default.createElement("div", {
        className: "section-content ".concat(size !== "lg" ? "sm" : "")
      }, size === "lg" ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h3", {
        className: "section-title"
      }, _react.default.createElement("a", {
        href: "".concat(slug_url)
      }, title)), _react.default.createElement("div", {
        className: "clearfix"
      }, _react.default.createElement("div", {
        className: "float-left"
      }, _react.default.createElement("ul", {
        className: "list-unstyled m-0"
      }, _react.default.createElement("li", {
        className: "list-item"
      }, _react.default.createElement("a", {
        href: "".concat(source_url)
      }, uploaded_by)))), _react.default.createElement("div", {
        className: "float-right"
      }, _react.default.createElement("ul", {
        className: "list-inline m-0 sharelink"
      }, _react.default.createElement("li", {
        className: "list-inline-item"
      }, _react.default.createElement("div", null, _react.default.createElement(_reactShare.FacebookShareButton, {
        url: final_url,
        quote: title
      }, _react.default.createElement(_reactShare.FacebookIcon, {
        size: 20,
        round: true
      })), "\xA0", _react.default.createElement(_reactShare.TwitterShareButton, {
        url: final_url,
        quote: title
      }, _react.default.createElement(_reactShare.TwitterIcon, {
        size: 20,
        round: true
      })), "\xA0", _react.default.createElement(_reactShare.WhatsappShareButton, {
        url: final_url,
        quote: title
      }, _react.default.createElement(_reactShare.WhatsappIcon, {
        size: 20,
        round: true
      }))), _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faShareAlt
      })), _react.default.createElement("li", {
        className: "list-inline-item"
      }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faBookmark,
        onClick: this.getArticleId,
        className: bookmark_ids.indexOf(id) > -1 ? 'bookmarked' : ''
      })))))) : _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h5", {
        className: "section-title"
      }, _react.default.createElement("a", {
        href: "".concat(slug_url)
      }, title)))));
    }
  }]);

  return ImageOverlay;
}(_react.default.Component);

exports.ImageOverlay = ImageOverlay;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JumboBox = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactstrap = require("reactstrap");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _reactShare = require("react-share");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var JumboBox =
/*#__PURE__*/
function (_React$Component) {
  _inherits(JumboBox, _React$Component);

  function JumboBox() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, JumboBox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(JumboBox)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.getArticleId = function () {
      _this.props.getArticleId(_this.props.id);
    }, _temp));
  }

  _createClass(JumboBox, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          source_url = _this$props.source_url,
          image = _this$props.image,
          title = _this$props.title,
          uploaded_on = _this$props.uploaded_on,
          uploaded_by = _this$props.uploaded_by,
          description = _this$props.description,
          hash_tags = _this$props.hash_tags,
          slug_url = _this$props.slug_url,
          is_loggedin = _this$props.is_loggedin,
          bookmark_ids = _this$props.bookmark_ids,
          base_url = _this$props.base_url;
      var all_hash_tags = "";
      var final_url = base_url + slug_url;

      if (hash_tags !== undefined) {
        all_hash_tags = hash_tags.map(function (item, index) {
          return _react.default.createElement("li", {
            className: "list-inline-item"
          }, "#".concat(item));
        });
      }

      return _react.default.createElement(_reactstrap.Card, {
        className: "card-post"
      }, _react.default.createElement("a", {
        href: "".concat(source_url),
        target: "_blank"
      }, _react.default.createElement("img", {
        src: image,
        alt: title,
        className: "img-fluid"
      })), _react.default.createElement("div", {
        className: "section-category"
      }, uploaded_on), _react.default.createElement(_reactstrap.CardBody, null, _react.default.createElement(_reactstrap.CardTitle, {
        className: "mb-3"
      }, _react.default.createElement("ul", {
        className: "list-inline hash-tags mb-2"
      }, all_hash_tags), _react.default.createElement("h3", null, _react.default.createElement("a", {
        href: "".concat(source_url),
        target: "_blank"
      }, title))), _react.default.createElement(_reactstrap.CardText, {
        className: "mb-4"
      }, _react.default.createElement("a", {
        href: "".concat(source_url),
        target: "_blank"
      }, uploaded_by)), _react.default.createElement(_reactstrap.CardText, {
        className: "card-desc"
      }, description), _react.default.createElement("div", {
        className: "clearfix"
      }, _react.default.createElement("div", {
        className: "float-right"
      }, _react.default.createElement("ul", {
        className: "list-inline m-0 sharelink"
      }, _react.default.createElement("li", {
        className: "list-inline-item"
      }, _react.default.createElement("div", null, _react.default.createElement(_reactShare.FacebookShareButton, {
        url: final_url,
        quote: title
      }, _react.default.createElement(_reactShare.FacebookIcon, {
        size: 20,
        round: true
      })), "\xA0", _react.default.createElement(_reactShare.TwitterShareButton, {
        url: final_url,
        quote: title
      }, _react.default.createElement(_reactShare.TwitterIcon, {
        size: 20,
        round: true
      })), "\xA0", _react.default.createElement(_reactShare.WhatsappShareButton, {
        url: final_url,
        quote: title
      }, _react.default.createElement(_reactShare.WhatsappIcon, {
        size: 20,
        round: true
      }))), _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faShareAlt
      })), _react.default.createElement("li", {
        className: "list-inline-item"
      }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faBookmark,
        onClick: this.getArticleId,
        className: bookmark_ids.indexOf(id) > -1 ? 'bookmarked' : ''
      })))))));
    }
  }]);

  return JumboBox;
}(_react.default.Component);

exports.JumboBox = JumboBox;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Menu = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactstrap = require("reactstrap");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _newscout = require("newscout");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Menu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Menu, _React$Component);

  function Menu(props) {
    var _this;

    _classCallCheck(this, Menu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Menu).call(this, props));

    _this.toggle = function () {
      _this.setState({
        isOpen: !_this.state.isOpen
      });
    };

    _this.toggleLogin = function () {
      _this.props.toggle(_this.props.is_open);
    };

    _this.sidebartoggle = function () {
      _this.setState({
        isSideOpen: !_this.state.isSideOpen
      }, function () {
        this.props.isSideOpen(this.state.isSideOpen);
      });
    };

    _this.toggleSearch = function () {
      _this.setState({
        isSearchOpen: !_this.state.isSearchOpen
      });
    };

    _this.keyPress = function (e) {
      var url = _this.props.url + "?q=" + _this.state.value;

      if (e.keyCode == 13) {
        window.location.href = url;
      }
    };

    _this.handleChange = function (e) {
      _this.setState({
        value: e.target.value
      });
    };

    _this.handleLogout = function () {
      _this.props.handleLogout();
    };

    _this.state = {
      isOpen: false,
      isSearchOpen: false,
      isSlider: _this.props.isSlider,
      isSideOpen: true,
      value: ''
    };
    return _this;
  }

  _createClass(Menu, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          multiple = _this$props.multiple,
          placeholder = _this$props.placeholder,
          options = _this$props.options,
          url = _this$props.url,
          isSlider = _this$props.isSlider,
          domain = _this$props.domain,
          navitems = _this$props.navitems,
          logo = _this$props.logo,
          username = _this$props.username,
          is_loggedin = _this$props.is_loggedin;

      if (this.state.isSearchOpen === true) {
        document.getElementsByTagName("body")[0].style = "overflow:hidden";
      } else {
        document.getElementsByTagName("body")[0].style = "overflow:auto";
      }

      var menu = navitems.map(function (item, index) {
        var menuitem = item.itemtext.replace(/ /g, "-").toLowerCase();
        return _react.default.createElement(_reactstrap.NavItem, {
          key: index,
          className: "d-block d-md-none"
        }, _react.default.createElement(_reactstrap.NavLink, {
          href: "".concat(domain !== 'dashboard' ? '/news/' : '/').concat(menuitem, "/")
        }, _react.default.createElement("img", {
          src: "".concat(item.item_icon),
          alt: item.itemtext,
          className: "menu-icons"
        }), "\xA0", item.itemtext));
      });
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_reactstrap.Navbar, {
        className: "fixed-top",
        expand: "md"
      }, isSlider ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
        className: "sidebar-btn d-none d-sm-block pl-1",
        onClick: this.sidebartoggle
      }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faBars,
        size: "lg"
      }))) : "", _react.default.createElement(_reactstrap.NavbarBrand, {
        href: " ".concat(domain === "dashboard" ? "/dashboard/" : "/", " "),
        className: "ml-4"
      }, _react.default.createElement("img", {
        src: logo,
        alt: "newscout"
      })), _react.default.createElement(_reactstrap.NavbarToggler, {
        onClick: this.toggle,
        className: "custom-toggler"
      }), _react.default.createElement(_reactstrap.Collapse, {
        isOpen: this.state.isOpen,
        navbar: true
      }, _react.default.createElement("div", {
        className: "m-auto col-lg-6"
      }, _react.default.createElement(_reactstrap.Nav, {
        className: "ml-auto",
        navbar: true,
        id: "menu"
      }, _react.default.createElement(_reactstrap.InputGroup, {
        className: "search-box ".concat(domain === "dashboard" ? 'd-none' : '', " ")
      }, _react.default.createElement("input", {
        type: "text",
        className: "form-control",
        onChange: this.handleChange,
        onKeyDown: this.keyPress,
        placeholder: "Search",
        value: this.state.value
      }), _react.default.createElement(_reactstrap.InputGroupAddon, {
        addonType: "append"
      }, _react.default.createElement(_reactstrap.InputGroupText, null, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faSearch
      })))), domain === "domain=newscout" || domain === undefined ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_reactstrap.NavItem, {
        className: "d-block d-md-none"
      }, _react.default.createElement(_reactstrap.NavLink, {
        href: "/news/trending/"
      }, _react.default.createElement("img", {
        src: "/static/icons/trending_news.png",
        alt: "Trending",
        className: "menu-icons"
      }), "\xA0 Trending"))) : "", menu)), domain === "domain=newscout" || domain === undefined ? _react.default.createElement(_reactstrap.Nav, {
        className: "ml-auto",
        navbar: true
      }, is_loggedin ? _react.default.createElement(_reactstrap.UncontrolledDropdown, {
        nav: true,
        inNavbar: true
      }, _react.default.createElement(_reactstrap.DropdownToggle, {
        nav: true,
        caret: true,
        className: "login"
      }, username), _react.default.createElement(_reactstrap.DropdownMenu, {
        right: true
      }, _react.default.createElement(_reactstrap.DropdownItem, {
        className: "login",
        href: "/news/bookmark/"
      }, "My Bookmarks"), _react.default.createElement(_reactstrap.DropdownItem, {
        divider: true
      }), _react.default.createElement(_reactstrap.DropdownItem, {
        onClick: this.handleLogout,
        className: "login"
      }, "Logout"))) : _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_reactstrap.NavItem, null, _react.default.createElement("label", {
        className: "switch"
      }, _react.default.createElement("input", {
        type: "checkbox",
        checked: true
      }), _react.default.createElement("span", {
        className: "slider round"
      }))), _react.default.createElement(_reactstrap.NavItem, null, _react.default.createElement(_reactstrap.NavLink, {
        onClick: this.toggleLogin,
        className: "login"
      }, "Login")))) : "")), _react.default.createElement(_newscout.Search, {
        toggleSearch: this.toggleSearch,
        isSearchOpen: this.state.isSearchOpen,
        multiple: multiple,
        placeholder: placeholder,
        options: options,
        url: url
      }));
    }
  }]);

  return Menu;
}(_react.default.Component);

exports.Menu = Menu;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Search = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactstrap = require("reactstrap");

var _Fade = _interopRequireDefault(require("react-reveal/Fade"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Search =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search(props) {
    var _this;

    _classCallCheck(this, Search);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Search).call(this, props));

    _this.toggleSearch = function (data) {
      _this.props.toggleSearch(data);
    };

    _this.keyPress = function (e) {
      var url = _this.props.url + "?q=" + _this.state.value;

      if (e.keyCode == 13) {
        window.location.href = url;
      }
    };

    _this.handleChange = function (e) {
      _this.setState({
        value: e.target.value
      });
    };

    _this.state = {
      results: [],
      value: ''
    };
    return _this;
  }

  _createClass(Search, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_Fade.default, {
        right: true,
        when: this.props.isSearchOpen,
        duration: 500
      }, _react.default.createElement("div", {
        className: "search-container ".concat(this.props.isSearchOpen === false ? 'd-none' : '')
      }, _react.default.createElement("div", {
        className: "closebox",
        onClick: this.toggleSearch
      }, "X"), _react.default.createElement("div", {
        className: "row"
      }, _react.default.createElement("div", {
        className: "col-lg-4 offset-lg-4"
      }, _react.default.createElement("div", {
        className: "search-box"
      }, _react.default.createElement("h1", {
        className: "text-center"
      }, "Search News"), _react.default.createElement("input", {
        type: "text",
        className: "form-control",
        onChange: this.handleChange,
        onKeyDown: this.keyPress
      }))))));
    }
  }]);

  return Search;
}(_react.default.Component);

exports.Search = Search;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SectionTitle = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var SectionTitle =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SectionTitle, _React$Component);

  function SectionTitle(props) {
    _classCallCheck(this, SectionTitle);

    return _possibleConstructorReturn(this, _getPrototypeOf(SectionTitle).call(this, props));
  }

  _createClass(SectionTitle, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "sidebox"
      }, _react.default.createElement("div", {
        className: "boxtitle mb-4"
      }, _react.default.createElement("h4", {
        className: "m-0"
      }, this.props.title)));
    }
  }]);

  return SectionTitle;
}(_react.default.Component);

exports.SectionTitle = SectionTitle;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SideBar = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactstrap = require("reactstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var SideBar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SideBar, _React$Component);

  function SideBar(props) {
    _classCallCheck(this, SideBar);

    return _possibleConstructorReturn(this, _getPrototypeOf(SideBar).call(this, props));
  }

  _createClass(SideBar, [{
    key: "render",
    value: function render() {
      var listitem = this.props.menuitems.map(function (item, index) {
        return _react.default.createElement(_reactstrap.ListGroupItem, {
          tag: "a",
          href: "/" + item.itemurl + "/",
          key: index
        }, _react.default.createElement("img", {
          src: "".concat(item.item_icon),
          alt: item.itemtext,
          className: "menu-icons"
        }), "\xA0", item.itemtext);
      });
      return _react.default.createElement("div", {
        className: "sidebar col-lg-2 d-none d-md-block d-xl-block ".concat(this.props.class ? '' : 'sidebar-none')
      }, _react.default.createElement(_reactstrap.ListGroup, null, this.props.domain === "domain=newscout" || this.props.domain === undefined ? _react.default.createElement(_reactstrap.ListGroupItem, {
        tag: "a",
        href: "/news/trending/"
      }, _react.default.createElement("img", {
        src: "/static/icons/trending_news.png",
        alt: "Trending",
        className: "menu-icons"
      }), "\xA0 Trending") : "", listitem, this.props.domain === "domain=newscout" || this.props.domain === undefined ? _react.default.createElement(_reactstrap.ListGroupItem, {
        tag: "a",
        href: "/news/rss/?domain=newscout"
      }, _react.default.createElement("img", {
        src: "/static/icons/rss.png",
        alt: "rss",
        className: "menu-icons"
      }), "\xA0 RSS") : ""));
    }
  }]);

  return SideBar;
}(_react.default.Component);

exports.SideBar = SideBar;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SideBox = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactstrap = require("reactstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var SideBox =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SideBox, _React$Component);

  function SideBox(props) {
    _classCallCheck(this, SideBox);

    return _possibleConstructorReturn(this, _getPrototypeOf(SideBox).call(this, props));
  }

  _createClass(SideBox, [{
    key: "render",
    value: function render() {
      var post = this.props.posts.map(function (item, index) {
        return _react.default.createElement(_reactstrap.Media, {
          key: index
        }, _react.default.createElement(_reactstrap.Media, {
          left: true,
          href: "".concat(item.slug, "/"),
          className: "mr-3 img"
        }, _react.default.createElement(_reactstrap.Media, {
          object: true,
          src: item.src,
          alt: item.alttext
        })), _react.default.createElement(_reactstrap.Media, {
          body: true
        }, _react.default.createElement(_reactstrap.Media, {
          heading: true
        }, _react.default.createElement("a", {
          href: "".concat(item.slug, "/")
        }, item.title), _react.default.createElement("p", null, _react.default.createElement("small", null, item.published_on)))));
      });
      return _react.default.createElement(_react.default.Fragment, null, post !== undefined ? post : "");
    }
  }]);

  return SideBox;
}(_react.default.Component);

exports.SideBox = SideBox;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SliderItem = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactstrap = require("reactstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var SliderItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SliderItem, _React$Component);

  function SliderItem(props) {
    _classCallCheck(this, SliderItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(SliderItem).call(this, props));
  }

  _createClass(SliderItem, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_reactstrap.UncontrolledCarousel, {
        items: this.props.slides
      });
    }
  }]);

  return SliderItem;
}(_react.default.Component);

exports.SliderItem = SliderItem;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabItem = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactstrap = require("reactstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TabItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TabItem, _React$Component);

  function TabItem(props) {
    var _this;

    _classCallCheck(this, TabItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TabItem).call(this, props));

    _this.toggle = function (tab) {
      if (_this.state.activeTab !== tab) {
        _this.setState({
          activeTab: tab
        });
      }
    };

    _this.state = {
      activeTab: '0'
    };
    return _this;
  }

  _createClass(TabItem, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var navitem = this.props.tabnav.map(function (item, index) {
        return _react.default.createElement(_reactstrap.NavItem, {
          key: index
        }, _react.default.createElement(_reactstrap.NavLink, {
          className: _this2.state.activeTab === index.toString() ? 'active' : '',
          onClick: function onClick() {
            return _this2.toggle(index.toString());
          }
        }, item.tab_title));
      });
      var tabpane = this.props.tabnav.map(function (item, index) {
        return _react.default.createElement(_reactstrap.TabPane, {
          tabId: index.toString(),
          key: index,
          className: _this2.state.activeTab === index.toString() ? 'active' : ''
        }, item.tab_posts.map(function (subitem, index) {
          return _react.default.createElement(_reactstrap.Media, {
            key: index
          }, _react.default.createElement(_reactstrap.Media, {
            left: true,
            href: "/news/article/".concat(subitem.id, "/"),
            className: "mr-4"
          }, _react.default.createElement(_reactstrap.Media, {
            object: true,
            src: subitem.src,
            alt: subitem.alttext
          })), _react.default.createElement(_reactstrap.Media, {
            body: true
          }, _react.default.createElement(_reactstrap.Media, {
            heading: true
          }, _react.default.createElement("a", {
            href: "/news/article/".concat(subitem.id, "/")
          }, subitem.header)), subitem.caption));
        }));
      });
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_reactstrap.Nav, {
        tabs: true
      }, navitem), _react.default.createElement(_reactstrap.TabContent, null, tabpane));
    }
  }]);

  return TabItem;
}(_react.default.Component);

exports.TabItem = TabItem;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToogleCard = void 0;

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _reactstrap = require("reactstrap");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _reactShare = require("react-share");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ToogleCard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ToogleCard, _React$Component);

  function ToogleCard() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, ToogleCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ToogleCard)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.getArticleId = function () {
      _this.props.getArticleId(_this.props.id);
    }, _temp));
  }

  _createClass(ToogleCard, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          items = _this$props.items,
          is_loggedin = _this$props.is_loggedin,
          bookmark_ids = _this$props.bookmark_ids,
          base_url = _this$props.base_url,
          index = _this$props.index;
      var results = items.map(function (item, index) {
        if (index !== 0) {
          return _react.default.createElement("div", {
            className: "row"
          }, _react.default.createElement("div", {
            className: "col-lg-9 col-12"
          }, _react.default.createElement("ul", {
            className: "list-inline m-0 inside-post",
            key: index
          }, _react.default.createElement("li", {
            className: "list-inline-item mb-4"
          }, _react.default.createElement("h6", {
            className: "mb-1"
          }, (0, _moment.default)(item.published_on).format('D MMMM YYYY')), _react.default.createElement("h4", null, _react.default.createElement("a", {
            href: "/news/article/".concat(item.slug)
          }, item.title)), _react.default.createElement("div", {
            className: "clearfix"
          }, _react.default.createElement("div", {
            className: "float-left"
          }, _react.default.createElement("h6", {
            className: "m-0"
          }, _react.default.createElement("a", {
            href: item.source_url
          }, item.source))), _react.default.createElement("div", {
            className: "float-right"
          }, _react.default.createElement("ul", {
            className: "list-inline m-0 sharelink"
          }, _react.default.createElement("li", {
            className: "list-inline-item"
          }, _react.default.createElement("div", null, _react.default.createElement(_reactShare.FacebookShareButton, {
            url: "".concat(base_url, "/news/article/").concat(item.slug),
            quote: item.title
          }, _react.default.createElement(_reactShare.FacebookIcon, {
            size: 15,
            round: true
          })), "\xA0", _react.default.createElement(_reactShare.TwitterShareButton, {
            url: "".concat(base_url, "/news/article/").concat(item.slug),
            quote: item.title
          }, _react.default.createElement(_reactShare.TwitterIcon, {
            size: 15,
            round: true
          })), "\xA0", _react.default.createElement(_reactShare.WhatsappShareButton, {
            url: "".concat(base_url, "/news/article/").concat(item.slug),
            quote: item.title
          }, _react.default.createElement(_reactShare.WhatsappIcon, {
            size: 15,
            round: true
          }))), _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
            icon: _freeSolidSvgIcons.faShareAlt
          })), _react.default.createElement("li", {
            className: "list-inline-item"
          }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
            icon: _freeSolidSvgIcons.faBookmark,
            onClick: _this2.getArticleId,
            className: bookmark_ids.indexOf(item.id) > -1 ? 'bookmarked' : ''
          })))))))), _react.default.createElement("div", {
            className: "col-lg-3 text-right col-12 d-none d-sm-block"
          }, _react.default.createElement("a", {
            href: "/news/article/".concat(item.slug)
          }, _react.default.createElement("img", {
            src: "http://images.newscout.in/unsafe/70x70/left/top/" + decodeURIComponent(item.cover_image),
            className: "img-fluid"
          }))));
        }
      });
      return _react.default.createElement("div", {
        className: "accordion",
        id: "accordionExample".concat(index)
      }, _react.default.createElement("div", {
        className: "card toogle-card"
      }, _react.default.createElement("div", {
        className: "card-header",
        id: "heading".concat(index)
      }, _react.default.createElement("div", {
        className: "article-card"
      }, _react.default.createElement("div", {
        className: "row"
      }, _react.default.createElement("div", {
        className: "col-lg-3 text-right col-12 d-block d-sm-none mb-1"
      }, _react.default.createElement("a", {
        href: "/news/article/".concat(items[0].slug)
      }, _react.default.createElement("img", {
        src: "http://images.newscout.in/unsafe/368x276/left/top/" + decodeURIComponent(items[0].cover_image),
        className: "img-fluid"
      }))), _react.default.createElement("div", {
        className: "col-lg-9 col-12"
      }, _react.default.createElement("ul", {
        className: "list-inline featurepost-category mb-1"
      }, _react.default.createElement("li", {
        className: "list-inline-item"
      }, (0, _moment.default)(items[0].published_on).format('D MMMM YYYY'))), _react.default.createElement("h3", null, _react.default.createElement("a", {
        href: "/news/article/".concat(items[0].slug)
      }, items[0].title)), _react.default.createElement("div", {
        className: "clearfix"
      }, _react.default.createElement("div", {
        className: "float-left"
      }, _react.default.createElement("ul", {
        className: "list-inline m-0"
      }, _react.default.createElement("li", {
        className: "list-inline-item"
      }, _react.default.createElement("a", {
        href: items[0].source_url
      }, items[0].source)))), _react.default.createElement("div", {
        className: "float-right"
      }, _react.default.createElement("ul", {
        className: "list-inline m-0 sharelink"
      }, _react.default.createElement("li", {
        className: "list-inline-item"
      }, _react.default.createElement("div", null, _react.default.createElement(_reactShare.FacebookShareButton, {
        url: "".concat(base_url, "/news/article/").concat(items[0].slug),
        quote: items[0].title
      }, _react.default.createElement(_reactShare.FacebookIcon, {
        size: 15,
        round: true
      })), "\xA0", _react.default.createElement(_reactShare.TwitterShareButton, {
        url: "".concat(base_url, "/news/article/").concat(items[0].slug),
        quote: items[0].title
      }, _react.default.createElement(_reactShare.TwitterIcon, {
        size: 15,
        round: true
      })), "\xA0", _react.default.createElement(_reactShare.WhatsappShareButton, {
        url: "".concat(base_url, "/news/article/").concat(items[0].slug),
        quote: items[0].title
      }, _react.default.createElement(_reactShare.WhatsappIcon, {
        size: 15,
        round: true
      }))), _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faShareAlt
      })), _react.default.createElement("li", {
        className: "list-inline-item"
      }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faBookmark,
        onClick: this.getArticleId,
        className: bookmark_ids.indexOf(items[0].id) > -1 ? 'bookmarked' : ''
      })))))), _react.default.createElement("div", {
        className: "col-lg-3 text-right col-12 d-none d-sm-block"
      }, _react.default.createElement("a", {
        href: "/news/article/".concat(items[0].slug)
      }, _react.default.createElement("img", {
        src: "http://images.newscout.in/unsafe/100x100/left/top/" + decodeURIComponent(items[0].cover_image),
        className: "img-fluid"
      })))))), _react.default.createElement("div", {
        id: "collapse".concat(index),
        className: "collapse",
        "aria-labelledby": "heading".concat(index),
        "data-parent": "#accordionExample".concat(index)
      }, _react.default.createElement("div", {
        className: "card-body"
      }, results)), _react.default.createElement("h5", {
        className: "text-center mb-0"
      }, _react.default.createElement("div", {
        className: "collapsed",
        "data-toggle": "collapse",
        "data-target": "#collapse".concat(index),
        "aria-expanded": "false",
        "aria-controls": "collapse".concat(index)
      }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faAngleDown
      })))));
    }
  }]);

  return ToogleCard;
}(_react.default.Component);

exports.ToogleCard = ToogleCard;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VerticleCardAd = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactstrap = require("reactstrap");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var VerticleCardAd =
/*#__PURE__*/
function (_React$Component) {
  _inherits(VerticleCardAd, _React$Component);

  function VerticleCardAd() {
    _classCallCheck(this, VerticleCardAd);

    return _possibleConstructorReturn(this, _getPrototypeOf(VerticleCardAd).apply(this, arguments));
  }

  _createClass(VerticleCardAd, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          image = _this$props.image,
          description = _this$props.description,
          source_url = _this$props.source_url;
      return _react.default.createElement(_reactstrap.Card, {
        className: "card-post"
      }, _react.default.createElement("a", {
        href: "".concat(source_url)
      }, _react.default.createElement("img", {
        src: image,
        alt: id,
        className: "img-fluid"
      })), _react.default.createElement(_reactstrap.CardBody, {
        className: "adlink"
      }, _react.default.createElement(_reactstrap.CardText, {
        className: "card-desc"
      }, _react.default.createElement("a", {
        href: "".concat(source_url),
        target: "_blank"
      }, description)), _react.default.createElement("div", {
        className: "clearfix"
      }, _react.default.createElement("div", {
        className: "float-left"
      }), _react.default.createElement("div", {
        className: "float-right"
      }, _react.default.createElement("ul", {
        className: "list-inline m-0"
      }, _react.default.createElement("li", {
        className: "list-inline-item"
      }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faExternalLinkSquareAlt
      }), " sponsored"))))));
    }
  }]);

  return VerticleCardAd;
}(_react.default.Component);

exports.VerticleCardAd = VerticleCardAd;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VerticleCardItem = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactstrap = require("reactstrap");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _reactShare = require("react-share");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var VerticleCardItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(VerticleCardItem, _React$Component);

  function VerticleCardItem() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, VerticleCardItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(VerticleCardItem)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.getArticleId = function () {
      _this.props.getArticleId(_this.props.id);
    }, _temp));
  }

  _createClass(VerticleCardItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          image = _this$props.image,
          title = _this$props.title,
          description = _this$props.description,
          uploaded_by = _this$props.uploaded_by,
          source_url = _this$props.source_url,
          category = _this$props.category,
          slug_url = _this$props.slug_url,
          hash_tags = _this$props.hash_tags,
          uploaded_on = _this$props.uploaded_on,
          is_loggedin = _this$props.is_loggedin,
          bookmark_ids = _this$props.bookmark_ids,
          base_url = _this$props.base_url;
      var final_url = base_url + slug_url;
      return _react.default.createElement(_reactstrap.Card, {
        className: "card-post"
      }, _react.default.createElement("a", {
        href: "".concat(slug_url)
      }, _react.default.createElement("img", {
        src: image,
        alt: title,
        className: "img-fluid"
      })), _react.default.createElement("div", {
        className: "section-category"
      }, uploaded_on), _react.default.createElement(_reactstrap.CardBody, null, _react.default.createElement(_reactstrap.CardTitle, {
        className: "mb-2"
      }, _react.default.createElement("a", {
        href: "".concat(slug_url),
        dangerouslySetInnerHTML: {
          __html: title
        }
      })), _react.default.createElement(_reactstrap.CardText, null, _react.default.createElement("a", {
        href: "".concat(source_url)
      }, uploaded_by)), _react.default.createElement(_reactstrap.CardText, {
        className: "card-desc"
      }, _react.default.createElement("a", {
        href: "".concat(slug_url),
        target: "_blank",
        dangerouslySetInnerHTML: {
          __html: description
        }
      })), _react.default.createElement("div", {
        className: "clearfix"
      }, _react.default.createElement("div", {
        className: "float-left"
      }, _react.default.createElement(_reactstrap.CardLink, {
        href: "".concat(source_url)
      }, "Read More...")), _react.default.createElement("div", {
        className: "float-right"
      }, _react.default.createElement("ul", {
        className: "list-inline m-0 sharelink"
      }, _react.default.createElement("li", {
        className: "list-inline-item"
      }, _react.default.createElement("div", null, _react.default.createElement(_reactShare.FacebookShareButton, {
        url: final_url,
        quote: title
      }, _react.default.createElement(_reactShare.FacebookIcon, {
        size: 20,
        round: true
      })), "\xA0", _react.default.createElement(_reactShare.TwitterShareButton, {
        url: final_url,
        quote: title
      }, _react.default.createElement(_reactShare.TwitterIcon, {
        size: 20,
        round: true
      })), "\xA0", _react.default.createElement(_reactShare.WhatsappShareButton, {
        url: final_url,
        quote: title
      }, _react.default.createElement(_reactShare.WhatsappIcon, {
        size: 20,
        round: true
      }))), _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faShareAlt
      })), _react.default.createElement("li", {
        className: "list-inline-item"
      }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faBookmark,
        onClick: this.getArticleId,
        className: bookmark_ids.indexOf(id) > -1 ? 'bookmarked' : ''
      })))))));
    }
  }]);

  return VerticleCardItem;
}(_react.default.Component);

exports.VerticleCardItem = VerticleCardItem;
