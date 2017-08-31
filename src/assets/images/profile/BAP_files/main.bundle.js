webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pageHeader{\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tmin-height: 50vh;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\t-webkit-box-pack: center;\n\t    -ms-flex-pack: center;\n\t        justify-content: center;\n}\n\n.anotherDiv{\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tmin-height: 400px;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\t-webkit-box-pack:center;\n\t    -ms-flex-pack:center;\n\t        justify-content:center;\n\tbackground: url(" + __webpack_require__("../../../../../src/assets/images/stern2.jpg") + ");\n\tbackground-repeat: no-repeat;\n\tbackground-attachment: fixed;\n\tbackground-size:cover;\n\tbackground-position: 50% 50%;\n}\n\n.filter{\n\twidth: 100%;\n  height: 100%;\n  display: block;\n  content: \"\";\n  z-index: 3;\n  opacity: .6;\n  background: #333;\n}\n\n.pageHeader:before{\n\tposition: absolute;\n\ttop: 0px;\n\tleft: 0px;\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: block;\n\tbackground: url(" + __webpack_require__("../../../../../src/assets/images/wsp.jpg") + ");\n\tbackground-repeat: no-repeat;\n\tbackground-attachment: fixed;\n\tbackground-size:cover;\n\tbackground-position: 50% 50%;\n\t-webkit-filter: brightness(30%);\n\t        filter: brightness(30%);\n\tcontent: \"\";\n\tz-index: -1;\n}\n\n\n.title-modern {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-pack: center;\n\t    -ms-flex-pack: center;\n\t        justify-content: center;\n  font-family: Poppins,Helvetica Neue,Helvetica,Arial,sans-serif;\n  font-size: 70px;\n  font-weight: 400;\n  color: #EEE;\n  text-shadow: 2px 2px #333;\n  text-transform: uppercase;\n  letter-spacing: 0.015em;\n  line-height: 1em;\n  font-style: normal;\n  z-index: 100;\n  \n}\n\n.test{\n\tmin-height: 300px;\n\tbackground-color: white;\n\n}\n\n.objectives{\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-ms-flex-wrap: wrap;\n\t    flex-wrap: wrap;\n}\n\n.obj-col{\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: column;\n\t        flex-direction: column;\n\twidth: 40vw;\n}\n\n.obj-col-info{\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tpadding-top: 5px;\n\tpadding-bottom: 5px;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\t-webkit-box-pack: start;\n\t    -ms-flex-pack: start;\n\t        justify-content: flex-start;\n}\n\n.left{\n\tmargin-right: 6vw;\n}\n\n.icon img{\n\tpadding: 10px;\n\twidth: 100%;\n\theight: 100%;\n}\n\n#box {\n\twidth: 400px;\n\theight: 450px;\n\tmargin: 30px auto;\n\tbackground: #fff;\n\toverflow: scroll;\n\tfont-weight: 300;\n\tborder: 1px solid rgba(0,0,0,0.25);\n\tbox-shadow: 0 2px 6px rgba(0,0,0,.2);\n\tborder-radius: 3px;\n\tposition: relative;\n\tline-height: 130%;\n}\n\n#box img{\n\twidth: 100%;\n\tposition: absolute;\n\ttop: 0;\n\tbackground-position: 0px -20px;\n}\n\n#box div{\n\tmargin-top: 250px;\n\tpadding: 20px;\n\tbackground: #f0f0f0;\n\tposition: relative;\n}\n\n@media (max-width: 768px){\n\t.objectives{\n\t\t-webkit-box-orient: vertical;\n\t\t-webkit-box-direction: normal;\n\t\t    -ms-flex-direction: column;\n\t\t        flex-direction: column;\n\t}\n\t.obj-col{\n\t\twidth: 100%;\n\t}\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"parallax threequarters\">\n    <div #bgDiv1 class=\"bgDiv threequarters\" >\n        <img class=\"threequarters-img\" src=\"../../assets/images/stern.jpg\" [style.bottom]=\"bottom1\">\n    </div>\n    <div class=\"text\">\n            ABOUT\n    </div>\n</div>\n<div class=\"whiteWrapper\">\n    <div class=\"header\">\n        Welcome to Beta Alpha Psi\n    </div>\n    <div class=\"divider\"></div>\n    <div class=\"info2\">\n        We are a national honorary accounting, finance, and information systems society for students who have proven academic excellence in the study of business. Beta Alpha Psi's purpose is to prepare business students to participate in the professional business environment by providing exposure to current accounting and financial issues, technical applications, and professional and social activities. Our goal is to provide for our members the most up-to-date information in the various areas affecting their career. Obtaining such knowledge makes our members more marketable and valuable in the business world.\n    </div>\n    <br><br>\n    <div class=\"header\">\n        About the Mu Chapter\n    </div>\n    <div class=\"divider\"></div>\n    <div class=\"info2\">\n        Beta Alpha Psi is the premier National Honor Society for Financial Information Professionals open to men and women that have proven their academic excellence. The purpose of the organization is to prepare students to succeed in the professional business environment by providing exposure to key issues in accounting, finance, and information systems. Our members and candidates are provided with the opportunity to mingle with top executives of many firms in a variety of industries as well as to partake in fun and rewarding community service and social activities! <br><br>\n\n        The Mu Chapter's goal is to provide the most current information for our members and candidates with respect to the relevant forces shaping their careers. Obtaining such knowledge makes our members and pledges more marketable and ultimately, a greater value-add to the business world.<br><br>\n\n        The Mu Chapter of Beta Alpha Psi encourages a sense of ethical, moral, and public responsibility. In recognition of the value and rewards of giving back to the community, we are involved in a number of service initiatives.  Complementing these professional activities are our Social Events, which include billiards, laser tag, karaoke, and much more!  Beta Alpha Psi is a national organization, with 296 chapters on college and university campuses with over 300,000 members initiated.\n    </div>\n</div>\n<div class=\"parallax full\" >\n    <div #bgDiv2 class=\"bgDiv full\" >\n        <img class=\"full-img\" src=\"../../assets/images/wsp.jpg\" [style.bottom]=\"bottom2\">\n    </div>\n    <div class=\"text\">\n            OBJECTIVES\n    </div>\n</div>\n<div class=\"whiteWrapper\">\n    <div class=\"objectives\">\n        <div class=\"obj-col left\">\n            <div class=\"obj-col-info\">\n                <div class=\"icon\">\n                    <img src=\"../../assets/images/obj1.png\">\n                </div>\n                <div>\n                    Recognize scholastic and professional excellence in the fields of accounting, finance, and information system.\n                </div>\n            </div>\n            <div class=\"obj-col-info\">\n                <div class=\"icon\">\n                    <img class=\"photo-icon\" src=\"../../assets/images/obj1.png\">\n                </div>\n                <div>\n                    Recognize scholastic and professional excellence in the fields of accounting, finance, and information system.\n                </div>\n            </div>\n            <div class=\"obj-col-info\">\n                <div class=\"icon\">\n                    <img class=\"photo-icon\" src=\"../../assets/images/obj1.png\">\n                </div>\n                <div>\n                    Recognize scholastic and professional excellence in the fields of accounting, finance, and information system.\n                </div>\n            </div>\n        </div>\n        <div class=\"obj-col\">\n            <div class=\"obj-col-info\">\n                <div class=\"icon\">\n                    <img src=\"../../assets/images/obj1.png\">\n                </div>\n                <div>\n                    Recognize scholastic and professional excellence in the fields of accounting, finance, and information system.\n                </div>\n            </div>\n            <div class=\"obj-col-info\">\n                <div class=\"icon\">\n                    <img class=\"photo-icon\" src=\"../../assets/images/obj1.png\">\n                </div>\n                <div>\n                    Recognize scholastic and professional excellence in the fields of accounting, finance, and information system.\n                </div>\n            </div>\n            <div class=\"obj-col-info\">\n                <div class=\"icon\">\n                    <img class=\"photo-icon\" src=\"../../assets/images/obj1.png\">\n                </div>\n                <div>\n                    Recognize scholastic and professional excellence in the fields of accounting, finance, and information system.\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = (function () {
    function AboutComponent(sanitizer, el) {
        this.sanitizer = sanitizer;
        this.el = el;
        this.speed = 0.5;
    }
    AboutComponent.prototype.ngOnInit = function () {
        this.children = [this.ele, this.ele2];
        this.execute();
    };
    AboutComponent.prototype.execute = function () {
        console.log("onload");
        for (var i = 0; i < this.children.length; i++) {
            if ((window.innerHeight - this.children[i].nativeElement.getBoundingClientRect().top) >= 0) {
                this.scroll = (this.children[i].nativeElement.getBoundingClientRect().bottom < 0) ? 0 : (window.innerHeight - this.children[i].nativeElement.getBoundingClientRect().top);
                this.offset = -this.scroll * this.speed;
                this.offsetPx = this.offset + "px";
                switch (i) {
                    case 0:
                        this.bottom1 = this.offsetPx;
                        break;
                    case 1:
                        this.bottom2 = this.offsetPx;
                }
            }
        }
    };
    return AboutComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('bgDiv1'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], AboutComponent.prototype, "ele", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('bgDiv2'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
], AboutComponent.prototype, "ele2", void 0);
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.css")],
        host: {
            '(window:scroll)': 'execute()',
            '(window:load)': 'execute()',
        }
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _d || Object])
], AboutComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/alumni/alumni.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".parallax {\n\tdisplay: block;\n\tposition: relative;\n\tbackground: transparent;\n\tz-index: 11;\n\toverflow:hidden;\n\theight: 100vh;\n}\n\n.bgDiv{\n\theight: 100vh;\n\twidth: 100vw;\n\toverflow: hidden;\n\tposition: relative;\n\tdisplay: block; \n}\n\n\n.bgDiv img{\n\twidth: 100%;\n\t-o-object-fit: cover;\n\t   object-fit: cover;\n\theight: 200vh;\n\tposition: absolute;\n\tbottom: 0px;\n\tobject-fit: cover;\n\t-webkit-filter: brightness(50%);\n\t        filter: brightness(50%);\n\tborder-image-repeat: no-repeat;\n}\n\n.text{\n\tfont-size: 40px;\n\tcolor: white;\n\tz-index: 100;\n\twidth: 100%;\n\tposition: absolute;\n\ttext-align: center;\n\ttop: 50%;\n}\n\n\n\n\n.normal2 {\n\tdisplay: block;\n\tbackground: white;\n\tz-index: 11;\n\toverflow:hidden;\n\theight:50vh;\n}\n\n.full {\n\theight: 100vh !important;\n}\n/*image height must be greater than (div height) + (0.5 * scroll height) \nie: div height = 100vh, scroll height = 100vh => image height must be at least 150vh*/\n\n.full-img {\n\theight: 150vh !important;\n}\n.half{\n\theight: 50vh !important;\n}\n.half-img{\n\theight: 100vh !important;\n}\n.third{\n\theight: 33vh !important;\n}\n.third-img{\n\theight: 83vh !important;\n}\n\n.threequarters{\n\theight: 75vh !important;\n}\n\n.threequarters-img{\n\theight: 125vh !important;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/alumni/alumni.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"parallax half\">\n\t<div #bgDiv1 class=\"bgDiv half\" >\n\t\t<img class=\"half-img\" src=\"../../assets/images/stern.jpg\" [style.bottom]=\"bottom1\">\n\t</div>\n\t<div class=\"text\">\n\t\t\tAbout\n\t</div>\n</div>\n\n<div class = \"block\">\n\ttext\n</div>\n\n\n<div class=\"parallax full\" >\n\t<div #bgDiv2 class=\"bgDiv full\" >\n\t\t<img class=\"full-img\" src=\"../../assets/images/wsp.jpg\" [style.bottom]=\"bottom2\">\n\t</div>\n\t<div class=\"text\">\n\t\t\tMore\n\t</div>\n</div>\n\n<div class = \"block\">\n\ttext\n</div>"

/***/ }),

/***/ "../../../../../src/app/alumni/alumni.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlumniComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlumniComponent = (function () {
    function AlumniComponent(sanitizer, el) {
        this.sanitizer = sanitizer;
        this.el = el;
        this.speed = 0.5;
    }
    AlumniComponent.prototype.ngOnInit = function () {
        this.children = [this.ele, this.ele2];
        this.execute();
    };
    AlumniComponent.prototype.execute = function () {
        console.log("onload");
        for (var i = 0; i < this.children.length; i++) {
            if ((window.innerHeight - this.children[i].nativeElement.getBoundingClientRect().top) >= 0) {
                this.scroll = (this.children[i].nativeElement.getBoundingClientRect().bottom < 0) ? 0 : (window.innerHeight - this.children[i].nativeElement.getBoundingClientRect().top);
                this.offset = -this.scroll * this.speed;
                this.offsetPx = this.offset + "px";
                switch (i) {
                    case 0:
                        this.bottom1 = this.offsetPx;
                        break;
                    case 1:
                        this.bottom2 = this.offsetPx;
                }
            }
        }
    };
    return AlumniComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('bgDiv1'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], AlumniComponent.prototype, "ele", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('bgDiv2'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
], AlumniComponent.prototype, "ele2", void 0);
AlumniComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-alumni',
        template: __webpack_require__("../../../../../src/app/alumni/alumni.component.html"),
        styles: [__webpack_require__("../../../../../src/app/alumni/alumni.component.css")],
        host: {
            '(window:scroll)': 'execute()',
            '(window:load)': 'execute()',
        }
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _d || Object])
], AlumniComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=alumni.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n\n   "

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = "this works!";
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_router__ = __webpack_require__("../../../../../src/app/app.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__myfilter__ = __webpack_require__("../../../../../src/app/myfilter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_services_component__ = __webpack_require__("../../../../../src/app/services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__events_events_component__ = __webpack_require__("../../../../../src/app/events/events.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__candidates_candidates_component__ = __webpack_require__("../../../../../src/app/candidates/candidates.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__leaders_leaders_component__ = __webpack_require__("../../../../../src/app/leaders/leaders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__alumni_alumni_component__ = __webpack_require__("../../../../../src/app/alumni/alumni.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__vita_vita_component__ = __webpack_require__("../../../../../src/app/vita/vita.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__email_email_component__ = __webpack_require__("../../../../../src/app/email/email.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__members_members_component__ = __webpack_require__("../../../../../src/app/members/members.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var firebaseConfig = {
    apiKey: "AIzaSyAjHLHK6AE4bmufEk2oCV6578WVUAMdvUo",
    authDomain: "bapwebsite-cbd35.firebaseapp.com",
    databaseURL: "https://bapwebsite-cbd35.firebaseio.com",
    projectId: "bapwebsite-cbd35",
    storageBucket: "bapwebsite-cbd35.appspot.com",
    messagingSenderId: "144461603312"
};
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_13__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_14__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_15__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_16__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_17__services_services_component__["a" /* ServicesComponent */],
            __WEBPACK_IMPORTED_MODULE_18__events_events_component__["a" /* EventsComponent */],
            __WEBPACK_IMPORTED_MODULE_19__candidates_candidates_component__["a" /* CandidatesComponent */],
            __WEBPACK_IMPORTED_MODULE_20__leaders_leaders_component__["a" /* LeadersComponent */],
            __WEBPACK_IMPORTED_MODULE_21__alumni_alumni_component__["a" /* AlumniComponent */],
            __WEBPACK_IMPORTED_MODULE_22__vita_vita_component__["a" /* VitaComponent */],
            __WEBPACK_IMPORTED_MODULE_23__contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_24__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_25__email_email_component__["a" /* EmailComponent */],
            __WEBPACK_IMPORTED_MODULE_26__signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_27__members_members_component__["a" /* MembersComponent */],
            __WEBPACK_IMPORTED_MODULE_28__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_11__myfilter__["a" /* MyFilterPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_3__app_router__["a" /* routes */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["a" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_10_primeng_primeng__["CarouselModule"],
            __WEBPACK_IMPORTED_MODULE_10_primeng_primeng__["GrowlModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__auth_service__["a" /* AuthGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_events_component__ = __webpack_require__("../../../../../src/app/events/events.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__candidates_candidates_component__ = __webpack_require__("../../../../../src/app/candidates/candidates.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__leaders_leaders_component__ = __webpack_require__("../../../../../src/app/leaders/leaders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__alumni_alumni_component__ = __webpack_require__("../../../../../src/app/alumni/alumni.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__vita_vita_component__ = __webpack_require__("../../../../../src/app/vita/vita.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__members_members_component__ = __webpack_require__("../../../../../src/app/members/members.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__email_email_component__ = __webpack_require__("../../../../../src/app/email/email.component.ts");
/* unused harmony export router */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });








//import { ServicesComponent } from './services/services.component';






var router = [
    //{ path: '', redirectTo: 'about', pathMatch: 'full'},
    //add in null or random chars path
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_1__about_about_component__["a" /* AboutComponent */] },
    { path: 'events', component: __WEBPACK_IMPORTED_MODULE_2__events_events_component__["a" /* EventsComponent */] },
    { path: 'candidates', component: __WEBPACK_IMPORTED_MODULE_3__candidates_candidates_component__["a" /* CandidatesComponent */] },
    { path: 'leaders', component: __WEBPACK_IMPORTED_MODULE_4__leaders_leaders_component__["a" /* LeadersComponent */] },
    { path: 'alumni', component: __WEBPACK_IMPORTED_MODULE_5__alumni_alumni_component__["a" /* AlumniComponent */] },
    { path: 'vita', component: __WEBPACK_IMPORTED_MODULE_6__vita_vita_component__["a" /* VitaComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_7__contact_contact_component__["a" /* ContactComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_9__login_login_component__["a" /* LoginComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_12__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'login-email', component: __WEBPACK_IMPORTED_MODULE_13__email_email_component__["a" /* EmailComponent */] },
    { path: 'members', component: __WEBPACK_IMPORTED_MODULE_10__members_members_component__["a" /* MembersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_service__["a" /* AuthGuard */]] }
];
var routes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forRoot(router);
//# sourceMappingURL=app.router.js.map

/***/ }),

/***/ "../../../../../src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthGuard = (function () {
    function AuthGuard(afAuth, router) {
        this.afAuth = afAuth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].from(this.afAuth.authState)
            .take(1)
            .map(function (state) { return !!state; })
            .do(function (authenticated) {
            if (!authenticated)
                _this.router.navigate(['/login']);
        });
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/candidates/candidates.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".grayWrapper{\n\tpadding-left: 7vw;\n\tpadding-right: 7vw;\n\tpadding-top: 50px;\n\tpadding-bottom: 50px;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: column;\n\t        flex-direction: column;\n\tbackground: rgb(245,245,245);\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n}\n\n.whiteWrapper{\n\tpadding-left: 7vw;\n\tpadding-right: 7vw;\n\tpadding-top: 50px;\n\tpadding-bottom: 50px;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: column;\n\t        flex-direction: column;\n\tbackground: white;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n}\n\n.header{\n\tfont-family: 'Raleway', sans-serif;\n\tfont-size: 30px;\n\tfont-weight: 700;\n\ttext-transform: uppercase;\n\tletter-spacing: 1px;\n\tcolor: rgb(181,32,36);\n\t-ms-flex-item-align: center;\n\t    -ms-grid-row-align: center;\n\t    align-self: center;\n\tpadding-bottom: 15px;\n\ttext-align: center;\n}\n\n.info {\n\tfont-family: 'Lato', sans-serif;\n\tline-height: 1.5;\n\ttext-align: center;\n\tcolor: #333;\n\tfont-size: 14px;\n}\n\n.threeCols {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: horizontal;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: row;\n\t        flex-direction: row;\n\t-webkit-box-align: space-between;\n\t    -ms-flex-align: space-between;\n\t        align-items: space-between;\n\t-ms-flex-wrap: wrap;\n\t    flex-wrap: wrap;\n\twidth: 100%;\n}\n\n\n.leftCol {\n\twidth: 30%;\n\tmargin-right: 5%;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: column;\n\t        flex-direction: column;\n}\n\n.rightCol {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: column;\n\t        flex-direction: column;\n\twidth: 30%;\t\n}\n\n.header2 {\n\tfont-family: 'Raleway', sans-serif;\n\tfont-size: 17px;\n\ttext-transform: uppercase;\n\tfont-weight: 700;\n\tline-height: 1.5;\n\tletter-spacing: .5px;\n}\n\n.header3 {\n\tfont-family: 'Raleway', sans-serif;\n\tfont-size: 16px;\n\tline-height: 1.5;\n\tletter-spacing: .5px;\n\tcolor: #444;\n}\n\n.info2{\n\tpadding-top: 20px;\n\tpadding-bottom: 20px;\n\tfont-family: 'Lato', sans-serif;\n\tline-height: 1.8;\n\tcolor: #888;\n\tfont-size: 14px;\n}\n\n.photo {\n\tpadding-bottom: 10px;\n}\n\n.divider {\n\tborder-bottom: 2px rgb(181,32,36) solid;\n\twidth: 40px;\n\tmargin-bottom: 40px;\n}\n\n.redButton {\n\tborder-radius: 3px;\n\tcolor: white;\n\tborder-bottom: 5px solid rgba(0,0,0,.15);\n\tbackground-color: rgba(181,32,36,.75);\n\tpadding: 0 32px;\n\tfont-size: 18px;\n\tletter-spacing: 2px;\n\theight: 52px;\n\tline-height: 52px;\n\tcursor: pointer;\n\tfont-weight: 600;\n\ttext-transform: uppercase;\n\ttext-shadow: 1px 1px 1px rgba(0,0,0,.2);\n\tfont-family: 'Raleway',sans-serif;\n}\n\n.redButton:hover{\n\tbackground-color: rgba(181,32,36,.55);\n}\n\na{\n\ttext-decoration: none;\n\tcolor: white;\n}\n\n@media (max-width: 768px){\n\t.threeCols{\n\t\t-webkit-box-orient: vertical;\n\t\t-webkit-box-direction: normal;\n\t\t    -ms-flex-direction: column;\n\t\t        flex-direction: column;\n\t\tmargin-left: auto;\n\t\tmargin-right: auto;\n\t\twidth: inherit;\n\t}\n\t.leftCol{\n\t\twidth: 100%;\n\t}\n\t.rightCol{\n\t\twidth: 100%;\n\t}\n\t\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/candidates/candidates.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"grayWrapper\">\n\t<div class=\"header\">\n\t\tCANDIDATE REQUIREMENTS\n\t</div>\n\t<div class=\"divider\"></div>\n\t<div class=\"info\">\n\t\tIn order to apply for membership, candidates must have at least a 3.50 overall GPA, be of Sophomore standing (> 32 credits) and also plan to major in Accounting, Finance and/or Information Systems. Candidates must complete an application, which can be found under the Candidates Application Links section. A resume must be submitted with ALL applications. <br><br>\n\t\tTo be initiated as a member, candidates must complete all requirements as outlined on the Candidate Application and in the Beta Alpha Psi Bulletin. Below is a list of the Professional, Social and Community Service points that must be fulfilled by all candidates:\n\t</div>\n</div>\n<div class=\"whiteWrapper\">\n\t<div class=\"threeCols\">\n\t\t<div class=\"leftCol\">\n\t\t\t<div><img class=\"photo\" src=\"../../assets/images/professional2.jpg\"></div>\n\t\t\t<div class=\"header2\">Professional Events</div>\n\t\t\t<div class=\"header3\">Points Required: 16</div>\n\t\t\t<div class=\"info2\">\n\t\t\t\tEach Professional Speaker Event is worth 1 point, unless stated otherwise. Workshops are also worth 1 point. Each Corporate Mingle is worth 2 points.\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"leftCol\">\n\t\t\t<div><img class=\"photo\" src=\"../../assets/images/social.jpg\"></div>\n\t\t\t<div class=\"header2\">Social Events</div>\n\t\t\t<div class=\"header3\">Points Required: 9</div>\n\t\t\t<div class=\"info2\">\n\t\t\t\tEach Social Event is worth 1 point. Going to tutoring hours is 1/2 point - there is a cap of 1 point.\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"rightCol\">\n\t\t\t<div><img class=\"photo\" src=\"../../assets/images/community.jpg\"></div>\n\t\t\t<div class=\"header2\">Community Service</div>\n\t\t\t<div class=\"header3\">Hours Required: 8</div>\n\t\t\t<div class=\"info2\">\n\t\t\t\tCommunity Service hours will be awarded according to real hours at each Community Service Event.\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"grayWrapper\">\n\t<div class=\"header\">\n\t\tREQUIREMENTS BY MEMBER STATUS\n\t</div>\n\t<div class=\"divider\"></div>\n\t<div class=\"threeCols\">\n\t\t<div class=\"leftCol\">\n\t\t\t<div class=\"header2 center\">Candidate</div>\n\t\t\t<div class=\"info2 center\">\n\t\t\t\t8 &nbsp; &nbsp; &nbsp;Community Service Points<br>\n\t\t\t\t9 &nbsp; &nbsp; &nbsp;Social Points <br>\n\t\t\t\t16 &nbsp;&nbsp;Professional Points\n\t\t\t</div>\t\t\t\n\t\t</div>\n\t\t<div class=\"leftCol\">\t\t\t\n\t\t\t<div class=\"header2 center\">Gold</div>\n\t\t\t<div class=\"info2 center\">\n\t\t\t\t9 &nbsp; &nbsp; Community Service Points<br>\n\t\t\t\t10 &nbsp;&nbsp;Social Points <br>\n\t\t\t\t18 &nbsp;&nbsp;Professional Points\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"rightCol\">\n\t\t\t<div class=\"header2 center\">Platinum</div>\n\t\t\t<div class=\"info2 center\">\n\t\t\t\t11 &nbsp; &nbsp;Community Service Points<br>\n\t\t\t\t12 &nbsp; &nbsp;Social Points <br>\n\t\t\t\t21 &nbsp; &nbsp;Professional Points\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"whiteWrapper\">\n\t<div class=\"header\">\n\t\tCandidate Application Links\n\t</div>\n\t<div class=\"divider\"></div>\n\t<div class=\"threeCols\">\n\t\t<div class=\"leftCol\">\n\t\t\t<div class=\"header2 center\">Freshman Mentorship Program</div>\n\t\t\t<button class=\"redButton\" (click)=\"redirect()\">Apply</button>\n\t\t\t\n\t\t</div>\n\t\t<div class=\"leftCol\">\t\t\t\n\t\t\t<div class=\"header2 center\">Sophomore or Junior Candidates</div>\n\t\t\t<button class=\"redButton\" (click)=\"redirect()\">Apply</button>\t\t\t\n\t\t</div>\n\t\t<div class=\"rightCol\">\n\t\t\t<div class=\"header2 center\">Candidates and Members Login</div>\n\t\t\t<button class=\"redButton\" (click)=\"toLogin()\">Login</button>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/candidates/candidates.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CandidatesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CandidatesComponent = (function () {
    function CandidatesComponent(router) {
        this.router = router;
    }
    CandidatesComponent.prototype.ngOnInit = function () {
    };
    CandidatesComponent.prototype.redirect = function () {
        window.location.href = 'https://google.com';
    };
    CandidatesComponent.prototype.toLogin = function () {
        this.router.navigateByUrl('/login');
    };
    return CandidatesComponent;
}());
CandidatesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-candidates',
        template: __webpack_require__("../../../../../src/app/candidates/candidates.component.html"),
        styles: [__webpack_require__("../../../../../src/app/candidates/candidates.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object])
], CandidatesComponent);

var _a;
//# sourceMappingURL=candidates.component.js.map

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ndiv.box {\n    background-color: white;\n    width: 300px;\n    height:375px;\n    border: 25px grey;\n    padding: 25px;\n    position:relative;\n    top:150px;\n    border-radius:25px;\n    margin: auto;\n    font-family: \"Trebuchet MS\", Helvetica, sans-serif;\n}\n\nbody {\n\tbackground-color: #ad3238;\n}\n\nbutton {\n\tborder-radius:4px;\n\tbackground-color: #ad3238;\n\tcolor: white;\n\tborder:10px #ad3238;\n\twidth:80px;\n\theight:40px;\n\tfont-size:16px;\n}\n\ninput {\n\tborder-radius:5px;\n\tborder:1px solid lightgrey;\n\tpadding: 3px;\n\twidth:250px;\n\theight:35px;\n}\n\nlabel {\n\tfont-size:16px;\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "\n<body>\n<div class=\"box\">\n\t<h1>Login</h1>\n\n\t<label><p>Username:</p></label>\n\t<input type=\"text\" placeholder=\"Enter Username\" name=\"uname\" required>\n\t<label><p>Password:</p></label>\n\t<input type=\"password\" placeholder=\"Enter Password\" name=\"psw\" required>\n\t<br>\n\t<button type=\"submit\">LOGIN</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n\t<a href=\"link\">Forgot Password?</a>\n</div>\n\n\n<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>\n</body>\n"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact/contact.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".grayWrapper{\n\tpadding-left: 7vw;\n\tpadding-right: 7vw;\n\tpadding-top: 50px;\n\tpadding-bottom: 50px;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: column;\n\t        flex-direction: column;\n\tbackground: rgb(245,245,245);\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n}\n\n.whiteWrapper{\n\tpadding-left: 7vw;\n\tpadding-right: 7vw;\n\tpadding-top: 50px;\n\tpadding-bottom: 50px;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: column;\n\t        flex-direction: column;\n\tbackground: white;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n}\n\n.header{\n\tfont-family: 'Raleway', sans-serif;\n\tfont-size: 30px;\n\tfont-weight: 700;\n\ttext-transform: uppercase;\n\tletter-spacing: 1px;\n\tcolor: rgb(181,32,36);\n\t-ms-flex-item-align: left;\n\t    -ms-grid-row-align: left;\n\t    align-self: left;\n\tpadding-bottom: 15px;\n\ttext-align: left;\n}\n\n.info {\n\tfont-family: 'Lato', sans-serif;\n\tline-height: 1.5;\n\ttext-align: center;\n\tcolor: #333;\n\tfont-size: 14px;\n}\n\n.threeCols {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: horizontal;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: row;\n\t        flex-direction: row;\n\t-webkit-box-align: space-between;\n\t    -ms-flex-align: space-between;\n\t        align-items: space-between;\n\t-ms-flex-wrap: wrap;\n\t    flex-wrap: wrap;\n\twidth: 100%;\n}\n\n\n.leftCol {\n\t\n\twidth: 30%;\n\tmargin-right: 5%;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: column;\n\t        flex-direction: column;\n}\n\n.rightCol {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: column;\n\t        flex-direction: column;\n\twidth: 30%;\t\n}\n\n.header2 {\n\tfont-family: 'Raleway', sans-serif;\n\tfont-size: 17px;\n\ttext-transform: uppercase;\n\tfont-weight: 700;\n\tline-height: 1.5;\n\tletter-spacing: .5px;\n}\n\n.header3 {\n\tfont-family: 'Raleway', sans-serif;\n\tfont-size: 16px;\n\tline-height: 1.5;\n\tletter-spacing: .5px;\n\tcolor: #444;\n}\n\n.info2{\n\tpadding-top: 20px;\n\tpadding-bottom: 20px;\n\tfont-family: 'Lato', sans-serif;\n\tline-height: 1.8;\n\tcolor: #888;\n\tfont-size: 14px;\n}\n\n.photo {\n\tpadding-bottom: 10px;\n\theight:150px;\n\twidth:150px;\n}\n\n.divider {\n\tborder-bottom: 2px rgb(181,32,36) solid;\n\twidth: 40px;\n\tmargin-bottom: 40px;\n}\n\n.redButton {\n\tborder-radius: 3px;\n\tcolor: white;\n\tborder-bottom: 5px solid rgba(0,0,0,.15);\n\tbackground-color: rgba(181,32,36,.75);\n\tpadding: 0 32px;\n\tfont-size: 18px;\n\tletter-spacing: 2px;\n\theight: 52px;\n\tline-height: 52px;\n\tcursor: pointer;\n\tfont-weight: 600;\n\ttext-transform: uppercase;\n\ttext-shadow: 1px 1px 1px rgba(0,0,0,.2);\n\tfont-family: 'Raleway',sans-serif;\n}\n\n.redButton:hover{\n\tbackground-color: rgba(181,32,36,.55);\n}\n\na{\n\ttext-decoration: none;\n\tcolor: white;\n}\n\n@media (max-width: 768px){\n\t.threeCols{\n\t\t-webkit-box-orient: vertical;\n\t\t-webkit-box-direction: normal;\n\t\t    -ms-flex-direction: column;\n\t\t        flex-direction: column;\n\t\tmargin-left: auto;\n\t\tmargin-right: auto;\n\t\twidth: inherit;\n\t}\n\t.leftCol{\n\t\twidth: 100%;\n\t}\n\t.rightCol{\n\t\twidth: 100%;\n\t}\n\t\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"grayWrapper\">\n\t<div class=\"header\">\n\t\tWELCOME (NAME)\n\t</div>\n\t<div class=\"info\">\n\t\t\n\t</div>\n</div>\n<div class=\"whiteWrapper\">\n\t<div class=\"threeCols\">\n\t\t<div class=\"leftCol\">\n\t\t\t<div><img class=\"photo\" src=\"../../assets/images/Professionallogo.png\"></div>\n\t\t\t<div class=\"header2\">Professional Points</div>\n\t\t\t<div class=\"header3\">You currently have (#) Professional Points</div>\n\t\t\t<div class=\"info2\">\n\t\t\t\t Checkout the professional events and which ones you have attended\n\t\t\t</div>\n\n\t\t\t\t\t<button onclick=\"myFunction()\">Professional Events</button>\n\t\t\t\t\t<div id=\"myDIV\">\n\t\t\t\t\tEvent 1<br>\n\t\t\t\t\tEvent 2\n\t\t\t\t\t</div>\n\n\n\t\t</div>\n\t\t<div class=\"leftCol\">\n\t\t\t<div><img class=\"photo\" src=\"../../assets/images/Social.png\"></div>\n\t\t\t<div class=\"header2\">Social Points</div>\n\t\t\t<div class=\"header3\">You currently have (#) Social Points</div>\n\t\t\t<div class=\"info2\">\n\t\t\t\t Checkout the Social events and which ones you have attended\n\t\t\t</div>\n\t\t</div>\n\n\n\n\t\t<div class=\"rightCol\">\n\t\t\t<div><img class=\"photo\" src=\"../../assets/images/Volunteer.png\"></div>\n\t\t\t<div class=\"header2\">Community Service Points</div>\n\t\t\t<div class=\"header3\">You currently have (#) Social Points</div>\n\t\t\t<div class=\"info2\">\n\t\t\t\tCheckout the community service events and which ones you have attended\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/email/email.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/email/email.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\">\n    <a routerLink=\"/login\" id=\"goback\">Go back</a>\n    <h2>Custom Login</h2>\n\n    <span class=\"error\" *ngIf=\"error\" [@fallIn]='state'>{{ error }}</span>\n\n    <form #formData='ngForm' (ngSubmit)=\"onSubmit(formData)\">\n\n      <input type=\"text\" placeholder=\"Email address..\" (ngModel)=\"email\" name=\"email\" class=\"txt\" required>\n      <input type=\"password\" placeholder=\"Password\" (ngModel)=\"password\" name=\"password\" class=\"txt\" required>\n\n      <button type=\"submit\" [disabled]=\"!formData.valid\" class=\"login-button basic-btn\">Log in</button>\n      <a routerLink=\"/signup\" class=\"alc\">Don't have an account?</a>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/email/email.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmailComponent = (function () {
    function EmailComponent(afAuth, router) {
        var _this = this;
        this.afAuth = afAuth;
        this.router = router;
        this.state = '';
        this.afAuth.authState.subscribe(function (auth) {
            if (auth) {
                _this.router.navigateByUrl('/members');
            }
        });
    }
    EmailComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        if (formData.valid) {
            console.log(formData.value);
            this.afAuth.auth.signInWithEmailAndPassword(formData.value.email, formData.value.password)
                .then(function (success) {
                console.log(success);
                _this.router.navigate(['/members']);
            }).catch(function (err) {
                console.log(err);
                _this.error = err;
            });
        }
    };
    EmailComponent.prototype.ngOnInit = function () {
    };
    return EmailComponent;
}());
EmailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-email',
        template: __webpack_require__("../../../../../src/app/email/email.component.html"),
        styles: [__webpack_require__("../../../../../src/app/email/email.component.css")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__router_animations__["b" /* fallIn */])()],
        host: { '[@moveIn]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object])
], EmailComponent);

var _a, _b;
//# sourceMappingURL=email.component.js.map

/***/ }),

/***/ "../../../../../src/app/events/events.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p {\n\t-webkit-animation: fadein 2s;\n\t        animation: fadein 2s;\n}\n\n@-webkit-keyframes fadein {\n    from { opacity: 0; }\n    to   { opacity: 1; }\n}\n\n@keyframes fadein {\n    from { opacity: 0; }\n    to   { opacity: 1; }\n}\n\nbody {\n\tbackground-color: rgb(161,36,32);\n}\n\niframe {\n  padding-right: 100px;\n}\n.threeCols {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: space-between;\n      -ms-flex-align: space-between;\n          align-items: space-between;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  width: 100%;\n}\n\n\n.calendarWrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background: white;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding-left: 7vw;\n  padding-right: 3vw;\n\n}\n\n.mv-daynames-table {\n  color: yellow;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/events/events.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"grayWrapper\">\n\t<div class=\"header\">\n\t\tEvents of the Week\n\t</div>\n\t<div class=\"divider\"></div>\n</div>\n\n<div class=\"calendarWrapper\">\n\n\t\n\t\t<iframe src=\"https://calendar.google.com/calendar/embed?showTitle=0&amp;showPrint=0&amp;showTz=0&amp;mode=WEEK&amp;height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;src=bapnyucalendar%40gmail.com&amp;color=%23A32929&amp;ctz=America%2FNew_York\" style=\"padding-right:70px; border-width:0\" width=\"100%\" height=\"600\" \tframeborder=\"0\" scrolling=\"no\" align=\"center\"></iframe>\n\t\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/events/events.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventsComponent = (function () {
    function EventsComponent() {
    }
    EventsComponent.prototype.ngOnInit = function () {
    };
    return EventsComponent;
}());
EventsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-events',
        template: __webpack_require__("../../../../../src/app/events/events.component.html"),
        styles: [__webpack_require__("../../../../../src/app/events/events.component.css")]
    }),
    __metadata("design:paramtypes", [])
], EventsComponent);

//# sourceMappingURL=events.component.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  footer works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@-webkit-keyframes fadein {\n    from { opacity: 0; }\n    to   { opacity: 1; }\n}\n\n@keyframes fadein {\n    from { opacity: 0; }\n    to   { opacity: 1; }\n}\n\n@-webkit-keyframes slideInFromBottom {\n  0% {\n    -webkit-transform: translateY(105%);\n            transform: translateY(105%);\n  }\n  100% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n\n@keyframes slideInFromBottom {\n  0% {\n    -webkit-transform: translateY(105%);\n            transform: translateY(105%);\n  }\n  100% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n\n.text-header{\n  top: 35% !important;\n}\n\n.subtitle {\n  font-family: Raleway,sans-serif;\n  font-size: 24px;\n}\n.title-area{\n\tcolor: #FFFFFF;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n\t/*text-align: center;*/\n\tmax-width: 760px;\n\tmargin: 0 auto 70px;\n\tpadding: 0 15px;\n\t\n}\n\n.title-modern {\n  font-family: Poppins,Helvetica Neue,Helvetica,Arial,sans-serif;\n  font-size: 70px;\n  font-weight: 400;\n  color: #EEE;\n  text-shadow: 2px 2px #333;\n  \n  -webkit-animation: fadein 1s;\n  \n          animation: fadein 1s;\n  -webkit-animation: slideInFromBottom 1s;\n          animation: slideInFromBottom 1s;\n /* text-transform: uppercase;*/\n  letter-spacing: 0.015em;\n  line-height: 1em;\n  font-style: normal;\n}\n\nh3{\n  font-size: 1.61em;\n  line-height: 1.05em;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: \"Cambo\", \"Times New Roman\", serif;\n  -webkit-animation: fadein 1s;\n          animation: fadein 1s;\n  -webkit-animation: slideInFromBottom 1s;\n          animation: slideInFromBottom 1s;\n}\n\n.button-area{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.white-button{\n  height: 24px;\n  text-transform: uppercase;\n  border: 2px solid #333;\n  border-color: white;\n  border-radius: 3px;\n  padding: 0 32px;\n  font-size: 17px;\n  letter-spacing: 2px;\n  height: 52px;\n  line-height: 52px;\n  margin-top: 15px;\n  background: transparent;\n}\n\n.white-button:hover{\n  background: white ;\n  color: #333;\n  -webkit-animation: fadein 1s;\n          animation: fadein 1s;\n}\n\n.left-button{\n  margin-right: 10px;\n}\n\n\n.separator{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.arrow{\n  margin-top: 1px;\n  font-size: 12px;\n}\n.arrow-right{\n  margin-right: -5px;\n  width: 0; \n  height: 0; \n  border-top: 7px solid transparent;\n  border-bottom: 7px solid transparent;\n  border-left: 7px solid white;\n  margin-bottom: 2px;\n}\n.arrow-left{\n  margin-left: -5px;\n  width: 0; \n  height: 0; \n  border-top: 7px solid transparent;\n  border-bottom: 7px solid transparent;\n  border-right: 7px solid white;\n  margin-bottom: 2px;\n}\n.separator-line {\n  width: 20vw;\n  border: 1px solid white;\n  height: 0px;\n}\n\n.star{\n  height: 20px;\n  line-height: 20px;\n  font-size: 20px;\n  margin-top: -1px;\n  margin-left: 2%;\n  margin-right: 2%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"parallax full\">\n    <div #bgDiv1 class=\"bgDiv full\" >\n        <img class=\"full-img\" src=\"../../assets/images/stern.jpg\" [style.bottom]=\"bottom1\">\n    </div>\n    <div class=\"text text-header\" [style.opacity]=\"opacity1\">\n\t\t<div class = \"content\">\n\t\t\t<div class = \"title-area\">\n\t\t\t\t\n\t\t\t\t<div class=\"title-modern\">Beta Alpha Psi</div>\n\t\t\t\t<div class=\"subtitle\">Finance and Accounting Honor Society</div>\n\t\t\t\t<div class=\"separator\">\n\t\t\t\t\t<div class=\"arrow arrow-right\"></div>\n\t\t\t\t\t<div class=\"separator-line\" [style.width]=\"lineWidth\"></div> \n\t\t\t\t\t<div class=\"star\">♦</div> \n\t\t\t\t\t<div class=\"separator-line\" [style.width]=\"lineWidth\"></div> \n\t\t\t\t\t<div class=\"arrow arrow-left\"></div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"button-area\">\n\t\t\t\t\t<button class=\"white-button left-button\">Learn more</button>\n\t\t\t\t\t<button class=\"white-button\" (click)=\"toLogin()\">Login</button>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t</div>\n\t\t</div>\n    </div>\n</div>\n\n\n\n<div class=\"whiteWrapper\">\n\t<div class=\"header\">\n\t\tAbout\n\t</div>\n\t<div class=\"divider\"></div>\n\t<div class=\"threeCols\" id=\"about\">\n\n\t\t<div class=\"leftCol\">\n\t\t\t<div><img class=\"photo\" src=\"../../assets/images/about1.jpg\"></div>\n\t\t\t<div class=\"header2\">FALL 2017 RUSH EVENTS</div>\n\t\t\t<div class=\"info2\">\n\t\t\t\tJoin Beta Alpha Psi Today! See our events page which highlights our rush week schedule and events!\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"leftCol\">\n\t\t\t<div><img class=\"photo\" src=\"../../assets/images/bapreview.jpg\"></div>\n\t\t\t<div class=\"header2\">Bap Review 2017</div>\n\t\t\t<div class=\"info2\">\n\t\t\t\tRead the latest edition of BAP Review, which contains articles about student life, navigating NYC, and current BAP initiatives.\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"rightCol\">\n\t\t\t<div><img class=\"photo\" src=\"../../assets/images/meetLeaders.png\"></div>\n\t\t\t<div class=\"header2\">Meet the Leaders</div>\n\t\t\t<div class=\"info2\">\n\t\t\t\tLearn more about our Executive Board, Committees, and Members by visiting our leaders page. \n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n\n<div class=\"parallax half\" >\n    <div #bgDiv2 class=\"bgDiv half\" >\n        <img class=\"half-img\" src=\"../../assets/images/wsp.jpg\" [style.bottom]=\"bottom2\">\n    </div>\n    <div class=\"text\" [style.opacity]=\"opacity2\">\n            OBJECTIVES\n    </div>\n</div>\n\n<div class=\"whiteWrapper\">\n\t<div class=\"header\">\n\t\tAbout\n\t</div>\n\t<div class=\"divider\"></div>\n\t<div class=\"threeCols\" id=\"about\">\n\n\t\t<div class=\"leftCol\">\n\t\t\t<div><img class=\"photo\" src=\"../../assets/images/about1.jpg\"></div>\n\t\t\t<div class=\"header2\">SPRING 2017 RUSH EVENTS</div>\n\t\t\t<div class=\"info2\">\n\t\t\t\tJoin Beta Alpha Psi Today! See our events page which highlights our rush week schedule and events!\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"leftCol\">\n\t\t\t<div><img class=\"photo\" src=\"../../assets/images/bapreview.jpg\"></div>\n\t\t\t<div class=\"header2\">Bap Review 2017</div>\n\t\t\t<div class=\"info2\">\n\t\t\t\tRead the latest edition of BAP Review, which contains articles about student life, navigating NYC, and current BAP initiatives.\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"rightCol\">\n\t\t\t<div><img class=\"photo\" src=\"../../assets/images/meetLeaders.png\"></div>\n\t\t\t<div class=\"header2\">Meet the Leaders</div>\n\t\t\t<div class=\"info2\">\n\t\t\t\tLearn more about our Executive Board, Committees, and Members by visiting our leaders page. \n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(sanitizer, el, router) {
        this.sanitizer = sanitizer;
        this.el = el;
        this.router = router;
        this.speed = 0.3;
        this.opacity1 = 1;
        this.opacity2 = 1;
        this.fadeHeight = .4;
        this.setWidth = .2;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.children = [this.ele, this.ele2];
        this.execute();
    };
    HomeComponent.prototype.toLogin = function () {
        this.router.navigateByUrl('/login');
    };
    HomeComponent.prototype.execute = function () {
        if (window.innerWidth > 768) {
            for (var i = 0; i < this.children.length; i++) {
                console.log("calc header");
                this.divTop = this.children[i].nativeElement.getBoundingClientRect().top;
                this.divBottom = this.children[i].nativeElement.getBoundingClientRect().bottom;
                this.div = this.divBottom - this.divTop;
                //check if top of element is scrolled in view height
                if ((window.innerHeight - this.divTop) >= 0 && ((window.innerHeight - this.divTop) < (window.innerHeight + this.div))) {
                    //check if bottom of element is still in view height
                    this.scroll = (this.divBottom < 0) ? 0 : (window.innerHeight - this.divTop);
                    this.offset = -this.scroll * this.speed;
                    this.offsetPx = this.offset + "px";
                    this.div = this.divBottom - this.divTop;
                    //length of separators in title
                    this.setWidth = (window.innerWidth < 768) ? .4 : .2;
                    switch (i) {
                        case 0:
                            this.bottom1 = this.offsetPx;
                            this.opacity1 = (this.divBottom - (this.div * (1 - this.fadeHeight))) / (this.div * this.fadeHeight);
                            this.width = (window.innerWidth * this.setWidth) * this.opacity1;
                            this.lineWidth = this.width + "px";
                            break;
                        case 1:
                            this.bottom2 = this.offsetPx;
                            this.opacity2 = (this.divBottom - (this.div * (1 - this.fadeHeight))) / (this.div * this.fadeHeight);
                    }
                    console.log("div 1 is: " + this.bottom1);
                    console.log("div 2 is: " + this.bottom2);
                }
            }
        }
    };
    return HomeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('bgDiv1'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], HomeComponent.prototype, "ele", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('bgDiv2'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
], HomeComponent.prototype, "ele2", void 0);
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")],
        host: {
            '(window:scroll)': 'execute($event)',
            '(window:resize)': 'execute($event)'
        }
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _e || Object])
], HomeComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/leaders/leaders.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "select {\n\theight: 4.4rem !important;\n\twidth: 200px;\n}\n\n.filterWrapper {\n\tpadding-left: 7vw;\n\tpadding-right: 7vw;\n\tpadding-top: 50px;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: horizontal;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: row;\n\t        flex-direction: row;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\t-webkit-box-pack: center;\n\t    -ms-flex-pack: center;\n\t        justify-content: center;\n\t-ms-flex-wrap: wrap;\n\t    flex-wrap: wrap;\n}\n\n.header4{\n\ttext-transform: uppercase;\n\tfont-size: 22px;\n\tfont-weight: 600;\n}\n\n.font22{\n\tfont-size: 22px;\n}\n\n.filterLabel {\n\tpadding-right: 20px;\n\tcolor: rgb(181,32,36);\n}\n\n.headingColor {\n\tcolor: rgb(181,32,36) !important;\n}\n.img__wrap {\n  position: relative;\n  height: 15vw;\n  width: 15vw;\n}\n\n.img__description_layer {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(161, 32, 36, 0.6);\n  color: #fff;\n  visibility: hidden;\n  opacity: 0;\n  padding-top: 5px;\n  padding-left: 5px;\n  padding-right: 5px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  font-size: 12px;\n  overflow: scroll;\n\n  /* transition effect. not necessary */\n  transition: opacity .2s, visibility .2s;\n}\n\n.img__wrap:hover .img__description_layer {\n  visibility: visible;\n  cursor: pointer;\n  opacity: 1;\n}\n\n.img__description {\n  transition: .2s;\n  -webkit-transform: translateY(1em);\n          transform: translateY(1em);\n}\n\n.img__wrap:hover .img__description {\n  -webkit-transform: translateY(0);\n          transform: translateY(0);\n}\n\n\n\n.picture {\n\twidth: 15vw;\n}\n\n.bio {\n  position: relative;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(29, 106, 154, 0.72);\n  color: #fff;\n  visibility: hidden;\n  opacity: 0;\n\n  /* transition effect. not necessary */\n  transition: opacity .2s, visibility .2s;\n}\n\n\n\n.pictureWrapper:hover .bio {\n  visibility: visible;\n  opacity: 1;\n}\n\n.cols {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: horizontal;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: row;\n\t        flex-direction: row;\n\t-webkit-box-align: space-between;\n\t    -ms-flex-align: space-between;\n\t        align-items: space-between;\n\t-ms-flex-wrap: wrap;\n\t    flex-wrap: wrap;\n\twidth: 100%;\n}\n\n.four {\n\twidth: 15vw;\n\t/*border: 1px solid black;*/\n\tmargin-bottom: 20px;\n}\n\n.five {\n\twidth: 18%;\n\tmargin-right: 2.5%;\n}\n\n.rightCol{\n\tmargin-right: 0;\n}\n.lineBreak {\n\tmargin-bottom: 25px;\n}\n\n.graySection{\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: horizontal;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: row;\n\t        flex-direction: row;\n    padding-left: 7vw;\n    padding-right: 7vw;\n    padding-top: 50px;\n    padding-bottom: 50px;\n    background: rgb(245,245,245);\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    vertical-align: middle;\n}\n\n.noPaddingBottom{\n\tpadding-bottom: 0px !important;\n}\n\n.inline {\n\tdisplay: inline !important;\n}\n\n.grayCarousel{\n    padding-left: 7vw;\n    padding-right: 7vw;\n    padding-bottom: 1vw;\n    background: rgb(245,245,245);\n}\n\n@media (max-width: 768px){\n\t.cols {\n\t\t-webkit-box-orient: vertical;\n\t\t-webkit-box-direction: normal;\n\t\t    -ms-flex-direction: column;\n\t\t        flex-direction: column;\n\t}\n\t.five {\n\t\twidth: 100%;\n\t}\n\t.four {\n\t\twidth: 100%;\n\t}\n\t.picture {\n\t\twidth: 100%;\n\t}\n\n\t.img__wrap {\n\t  height: 100%;\n\t  width: 100%;\n\t}\n\t.img__description_layer{\n\t\t-webkit-box-align: center;\n\t\t    -ms-flex-align: center;\n\t\t        align-items: center;\n\t}\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/leaders/leaders.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"grayWrapper\">\n  <div class=\"header center\">\n    Leaders\n  </div>\n  <div class=\"divider\"></div>\n</div>\n\n<div class=\"whiteWrapper\">\n  <div class=\"header4 center lineBreak\">Eboard</div>\n  <div class=\"cols\">\n    <div class=\"leftCol five\">\n      <div class=\"img__wrap\">\n        <img class=\"photo\" src=\"../../assets/images/profile/Sami.jpg\">\n        <div class=\"img__description_layer\">\n          <p class=\"img__description\">Sami is a Senior studying Finance and Economcis. Sami is originally from Long Island but grew up in Newburgh, NY. His interests include playing guitar, traveling, watching and playing most sports, and lifting. During his past summer he worked at Signal Hill, a Technology Investment bank, and is returning as a full-time analyst.</p>\n        </div>\n      </div>\n      <div class=\"header3 center\">Sami Siddiqui</div>\n      <div class=\"header3 center\"><b>President</b></div>\n    </div>\n    <div class=\"leftCol five\">\n      <div class=\"img__wrap\">\n        <img class=\"photo\" src=\"../../assets/images/profile/Nancy.jpg\">\n        <div class=\"img__description_layer\">\n          <p class=\"img__description\">Nancy is a senior studying Finance and Statistics. She was born in Inner Mongolia, China, but mostly grew up in San Antonio, Texas. In her free time, she enjoys painting, hiking, trying to catch up on 14 seasons of Grey's Anatomy, using Korean sheet masks, and online shopping. Her past work experience includes accounting, merchandise buying, and operational risk management. This past summer, she interned with the TMT Credit group at J.P. Morgan and will be returning full-time. </p>\n        </div>\n      </div>\n      <div class=\"header3 center\">Nancy Ding</div>\n      <div class=\"header3 center\"><b>Vice President</b></div>\n    </div>\n    <div class=\"leftCol five\">\n      <div class=\"img__wrap\">\n        <img class=\"photo\" src=\"../../assets/images/profile/David.jpg\">\n        <div class=\"img__description_layer\">\n          <p class=\"img__description\">David Labine is a Senior studying Actuarial Science and Finance with a minor in Mathematics. He is from the small town of Tiverton, Rhode Island. In his free time, David enjoys doing yoga, long walks by the rivers, and watching Tom Brady break NFL records. During previous summers, he has worked on international trade for the Belgian Embassy in Tel Aviv, and held actuarial positions at AmTrust Financial Services, MIB Group, and Deloitte Consulting.</p>\n        </div>\n      </div>\n      <div class=\"header3 center\">David Labine</div>\n      <div class=\"header3 center centerText\"><b>Director of Correspondence</b></div>\n    </div>\n    <div class=\"leftCol five\">\n      <div class=\"img__wrap\">\n        <img class=\"photo\" src=\"../../assets/images/profile/Michelle.jpg\">\n        <div class=\"img__description_layer\">\n          <p class=\"img__description\">Michelle Xie is a Senior studying Finance and Accounting. She is originally from Montville, New Jersey. In her free time, she enjoys long-distance running, hiking, cooking, and finding places to eat in the city. During her past summer, she worked interned at PwC in core assurance. </p>\n        </div>\n      </div>\n      <div class=\"header3 center\">Michelle Xie</div>\n      <div class=\"header3 center\"><b>Director of Reporting</b></div>\n    </div>\n    <div class=\"rightCol five rightCol\">\n      <div class=\"img__wrap\">\n        <img class=\"photo\" src=\"../../assets/images/profile/Yipu.jpg\">\n        <div class=\"img__description_layer\">\n          <p class=\"img__description\">Yi is a Senior studying Finance and Statistics. He was originally born in China but grew up in New Jersey. His interests include exploring restaurants, karaoke, comedy shows, and spending time with friends and family. This summer, he was a Credit Risk Summer Analyst at Morgan Stanley.</p>\n        </div>\n      </div>\n      <div class=\"header3 center\">YiPu Lin</div>\n      <div class=\"header3 center\"><b>Treasurer</b></div>\n    </div>\n  </div>\n</div>\n\n<div class = \"filterWrapper\"> \n  <div class=\"header2 filterLabel font22 centerText\">Display Committees By: </div>\n    <div class=\"\">\n    <select class=\"form-control\" \n      [value]=\"pipeFilter\" \n      (input)=\"pipeFilter = $event.target.value\">\n      Display Committees By2: \n        <option value=\"\">All Committees</option>\n        <option value=\"1\">Candidate Master</option>\n        <option value=\"2\">Community Service</option>\n        <option value=\"3\">Marketing</option>\n        <option value=\"4\">Mentoring</option>\n        <option value=\"5\">Newsletter</option>\n        <option value=\"6\">Social Events</option>\n        <option value=\"7\">Speaker Events</option>\n        <option value=\"8\">Special Events</option>\n        <option value=\"9\">Technology</option>\n        <option value=\"10\">Tutoring</option>\n        <option value=\"11\">VITA</option>\n        <option value=\"12\">Workshop</option>\n    </select>\n    </div>\n</div>\n<div class=\"graySection\">\n\n   <div class = \"four\" *ngFor=\"let data of pipeFilterData | myfilter: pipeFilter\">\n     <div class=\"header3 centerText\">\n        <div class=\"img__wrap\">\n          <img class=\"picture\" src=\"../../assets/images/profile/{{data.firstName}}.jpg\" />\n          <div class=\"img__description_layer\">\n            <p class=\"img__description\">{{data.bio}}</p>\n          </div>\n        </div>\n        {{data.firstName}} {{data.lastName}} <br><b>{{data.position}}</b><br>\n\n     </div>\n    <!--   <div><img class=\"photo round\" src=\"../../assets/images/blank_profile.png\"></div> -->\n    \n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/leaders/leaders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeadersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LeadersComponent = (function () {
    function LeadersComponent() {
        this.HiddenPE = true;
        this.HiddenSE = true;
        this.HiddenCS = true;
        this.pipeFilter = '';
        this.changeFilterData = [];
        this.pipeFilterData = [];
        this.jsonData = [
            { key: 0, position: 'Candidate Master Chair', firstName: ' Annie', lastName: 'Chayanupatkul', bio: 'Annie is a junior studying Finance and Management. She is originally from Bangkok, Thailand. Her interests include photography, playing sports, and exploring new places in the city. During her previous summers, she has worked in private wealth management, technology startup, and venture capital.' },
            { key: 1, position: 'Candidate Master Chair', firstName: 'Christopher', lastName: 'Lee', bio: 'Christopher is a Junior studying Finance and History. His hometown is New York City, NY. His interests include yachting, cooking Italian cuisine, and going to music festivals. This past summer and fall, he worked with NYLIFE Securities and Lockheed Martin in corporate finance. ' },
            { key: 2, position: 'Candidate Master', firstName: 'Alexander', lastName: 'Yu', bio: 'Alex is a Junior studying Finance and Statistics with a minor in Computer Science and Mathematics. He is originally from London, UK, but grew up in Shanghai, China. His interests include basketball, good food and drinks. In his previous summer, he interned in Wealth Management.' },
            { key: 3, position: 'Candidate Master', firstName: 'Joelle', lastName: 'Au', bio: 'Joelle is a junior studying Finance and Computing & Data Science. She\'s from Hong Kong and Singapore. Her interests include dancing, spinning, roller coasters and sushi restaurants. During her previous summers, she has worked in marketing and securities services tax. She hopes to work in investment banking next summer.' },
            { key: 4, position: 'Community Service Chair', firstName: 'Grace', lastName: 'Muchtar', bio: 'Grace Muchtar is a Junior studying Finance and Information Systems. She was born and bred in Jakarta, Indonesia. Her interests include Reddit, fantasy books and history. This past summer, she was part of the Girls Who Invest program and worked at Global Atlantic Financial Group in their Investments division. ' },
            { key: 5, position: 'Community Service Chair', firstName: 'Natasha', lastName: 'Rajiv', bio: 'Natasha is a Junior studying Data Science and Management, with a minor in Digital Art and Design. She is originally from Singapore, and her interests include baking, graphic design, and working out. She has experience working at a tech startup, a private equity firm, and in strategy consulting. She hopes to pursue consulting in the future.' },
            { key: 6, position: 'Community Service', firstName: 'Annie', lastName: 'Tan', bio: 'Annie Tan is a junior majoring in Finance and Management and minoring in Computer Science. She is originally from Bridgewater, New Jersey, but she went to middle and high school in Shanghai, China. Her interests include car shows, basketball, soccer, sketching, and traveling, whether it\'s to a new country or just upstate for hiking. This summer, she interned for a research start up as a management intern, and she is currently interning at a private equity firm. ' },
            { key: 7, position: 'Community Service', firstName: ' Jennifer', lastName: 'Chan', bio: 'Jennifer is a Junior studying Finance and Global Business. She is originally from Hong Kong, but grew up in Beijing, China. Her interests include traveling, fashion, and finding great places to eat at with her friends. This coming summer, she will be joining Barclays for investment banking.  ' },
            { key: 8, position: 'Community Service', firstName: 'Karen', lastName: 'Yang', bio: 'I am a Junior studying Finance and Computing and Data Science. My hometown is Seoul, Korea. My interests include traveling, rewatching old movies, and exploring cafes. I have previously worked in accounting, wealth management, and private equity and am looking to seek opportunities in investment banking for the upcoming summer.' },
            { key: 9, position: 'Community Service', firstName: 'Royce', lastName: 'Tjin', bio: '' },
            { key: 10, position: 'Marketing Chair', firstName: 'Oscar', lastName: 'Xia', bio: 'Growing up on the dark streets of Walnut, California, Oscar likes to spend his time laughing and enjoying the little things in life. This past summer, he worked at HSBC Private Bank. His dream is to open a lobster roll shack.' },
            { key: 11, position: 'Marketing', firstName: 'Josh', lastName: 'Chan', bio: 'Joshua (or just Josh) is a Junior studying Finance and Management. He is originally from New York City, and has stayed here his whole life. His interests include rock climbing, boxing, watches, portrait photography, watching basketball, and watching football. This past summer, he worked at Israel Discount Bank of NY in the Risk Management Division, specifically in market and liquidity risk. ' },
            { key: 12, position: 'Marketing', firstName: 'Thalia', lastName: 'Lee', bio: 'Thalia is a Junior concentrating in Finance and Sustainable Business, with a minor in English. She was born and raised on the sunny island of Singapore. In her free time, you can find her with her camera or Kindle, binging Netflix and substituting gym plans with food expeditions. She enjoys exploring new fields and has experience working for a non-profit, a coworking space and an equity crowdfunding platform. She hopes to venture into consulting. ' },
            { key: 13, position: 'Marketing', firstName: 'Zoë', lastName: 'Zane', bio: 'Zoë Zane is a Junior studying Finance and Statistics with a minor in Italian. Her hometown is Hong Kong. Her interests include photography, song writing, Netflix, and gym. She worked at BBC Worldwide this spring and at JPMorgan Asset Management during her past summer. ' },
            { key: 14, position: 'Mentoring Chair', firstName: 'Jackie', lastName: 'Liu', bio: 'Jackie is a Senior majoring in Finance and Marketing. She was born in China and grew up in Vancouver, Canada. Jackie enjoys watching Korean dramas in her free time, but she is trying to become more active and sign up for ClassPass this semester. During her previous summers, she interned at Chloé, Morgan Stanley and Macquarie. After graduation, she will be joining Macquarie as an investment banking analyst in the Real Estate Group. ' },
            { key: 15, position: 'Mentoring', firstName: 'Bryan', lastName: 'Wang', bio: 'Bryan Wang is a Junior studying Finance and Economics. He is originally from Plainview, New York. His interests include Volleyball, Basketball, and Hair cutting. During his previous summers, he has worked in Quant Trading and Investment Banking. He hopes to go into investment banking this summer.' },
            { key: 16, position: 'Mentoring', firstName: 'Cindy', lastName: 'Wei', bio: 'Cindy Wei is a Senior studying Finance and Accounting with a minor in Computer Science. She is originally from Montville, New Jersey. Her interests include Dad jokes, watching superhero movies, and maintaining her dental hygiene! She is graduating in December 2017. During this past summer, she worked at Evercore Advisors (NY M&A) and is returning as a full time analyst. ​' },
            { key: 17, position: 'Mentoring', firstName: 'Joy', lastName: 'Liu', bio: 'Joy Liu is a junior studying Finance and Economics with a minor in Math. She grew up in the suburbs of Chicago and enjoys running, brunching, and doing the NYT Crossword. Other interests include watching good movies with people that know way more about film than she does and reading Agatha Christie murder mysteries. Over the past summer she worked at Discover Financial Services in Chicago, and next summer, she will be joining Credit Suisse in their Global Markets Division.' },
            { key: 18, position: 'Mentoring', firstName: 'Megan', lastName: 'Lee', bio: 'Megan is a Junior studying Finance and Economics. Her hometown is hard to determine, but her current home is Dubai, United Arab Emirates. She is a certified open water diver and likes to go on spontaneous trips. She also likes to eat and make food, go to music festivals and listen to French electro music. She is seeking opportunities in investment banking for next summer.' },
            { key: 19, position: 'Publications Chair', firstName: 'Michael', lastName: 'Wang', bio: '' },
            { key: 20, position: 'Publications', firstName: 'Patty', lastName: 'Jeon', bio: 'Patty is a senior studying Finance with a double major in Mathematics. She is from Southern California. This summer she was at J.Crew as an allocation intern and will be continuing in the fall as an intern. Previously, she has worked for Barneys New York and Veronica Beard. In her free time, she likes to play cajon, go running, plan trips, and watch golf.' },
            { key: 21, position: 'Publications', firstName: 'Stella', lastName: 'Park', bio: 'Stella Park is a Junior studying Finance and Accounting. She was born in S. Korea but lived most of her life in sunny Orange County, CA. Her interests include watching comedy shows, cooking, and going to Broadway shows! This past summer, she worked at Brookfield Asset Management in their office property group. ' },
            { key: 22, position: 'Social Chair', firstName: 'Caroline', lastName: 'Wang', bio: 'Caroline is a junior studying Finance and Management with a minor in Japanese. She is originally from Shanghai, China. Her interests include fashion, Pilates, Japanese drama and traveling. This past summer, she interned at Standard Chartered Bank PE department and EY HK advisory department. ' },
            { key: 23, position: 'Social', firstName: 'Ryszard', lastName: 'Madej', bio: 'Ryszard Madej is a Senior studying Finance and Economics. He is originally from Long Island. His interests include playing and watching soccer, playing guitar, and traveling. He has prior experience working in equity research and start-ups. This past summer, he interned at Macquarie Capital in the Power, Utilities and Renewables group and he will be joining Evercore full-time. ' },
            { key: 24, position: 'Social', firstName: 'Yuni', lastName: 'Sohn', bio: 'Yuni Sohn is a Junior studying Finance and BS/MS Accounting. She is originally from Seoul, South Korea, but mostly grew up in Singapore. Her interests include Two Dots, dance, and watching Friends. During her previous summers, she has worked in management consulting and at a startup as a summer financial analyst. She hopes to go into accounting next summer.' },
            { key: 25, position: 'Speaker Chair', firstName: 'Angela', lastName: 'Sun', bio: 'Angela is a junior studying Finance and Management with a minor in Food Studies. She is originally from Brooklyn, New York and has grown up in the city her entire life. Her interests include anything related to food and cute dogs. Previously, she worked at a boutique investment bank. This summer, she plans to go into investment banking. ' },
            { key: 26, position: 'Speaker', firstName: 'Arkin', lastName: 'Khosla', bio: 'Arkin is a Junior studying Finance and Computing and Data Science. He is originally from New Delhi, India. His interests include golf, ping pong, Citi biking, exploring new restaurants and re-watching The Office. He studied abroad in Shanghai and this past summer, he interned at an early-stage venture capital firm. Arkin hopes to pursue an internship in investment banking next summer.' },
            { key: 27, position: 'Speaker', firstName: 'Kaylie', lastName: 'Song', bio: 'Kaylie Song is a Junior studying Finance/Computing and Data Science, with a second major in Language and Mind. She grew up on the island of Singapore, before falling in love with New York. Her interests include aviation, gaming, and convoluted TV shows (White Collar, House of Cards, Burn Notice etc). This past summer, she interned at JP Morgan in the Markets division, as an Equity Derivatives Trading/Electronic Client Solutions intern.' },
            { key: 28, position: 'Speaker', firstName: 'Kylene', lastName: 'Huang', bio: 'Kylene is a junior studying finance and marketing. She originally grew up in Shenzhen, China. Her interests include photography, food and art. This past summer she has worked at a PE firm.' },
            { key: 29, position: 'Special Events Chair', firstName: 'Sindhu', lastName: 'Immidisetty', bio: '' },
            { key: 30, position: 'Special Events', firstName: 'Cassie', lastName: 'Chan', bio: 'Born and raised in NY (though you\'d never expect it), Cassie is a Junior studying Finance and Data Science. Her interests include cheap eats, roller coasters, and travelling. This past summer, she worked at a Fortune 50 oil and gas company on the commercial trading floor. ' },
            { key: 31, position: 'Special Events', firstName: 'Kat', lastName: 'Kustas', bio: 'Katherine is a Senior studying Finance and Economics with a minor in Computer Science. She is originally from Long Island, New York. Her interests include playing soccer, hiking, and baking. She has prior experience in accounting and wealth management. This past summer, she interned at Wells Fargo as an Investment Banking Summer Analyst and will be returning full-time.' },
            { key: 32, position: 'Technology Chair', firstName: 'Jennifer', lastName: 'Wang', bio: 'Jennifer Wang is a Junior studying Finance and Computer Science. She is originally from Northern California. Her interests include photography, hiking, and playing the flute. In her previous summers, she has interned as a technology consultant at Accenture and an analyst at BBG Ventures.' },
            { key: 33, position: 'Technology', firstName: ' David', lastName: 'Zuo', bio: '' },
            { key: 34, position: 'Technology', firstName: 'Eric', lastName: 'He', bio: 'Born in San Jose, California, Eric He is a Junior studying Math and Statistics. He likes surfing the web and walking with friends. Eric has worked as a machine learning intern for a semiconductor startup and as an analyst for a venture capital firm, and hopes to work as a data scientist in the future.' },
            { key: 35, position: 'Tutoring Chair', firstName: 'SiHeng', lastName: 'Yeo', bio: 'SH Yeo is a senior majoring in Finance & Statistics. He was born and raised in Singapore before coming to Stern for college. His interests include sports (running, soccer, triathlon, hiking), drinking, video gaming, and driving tanks. During his previous summers, he worked at Macquarie IB in New York and a Venture Capital Fund in New York City. He hopes to have a lit senior year.' },
            { key: 36, position: 'Tutoring', firstName: 'Aakriti', lastName: 'Suri', bio: 'Aakriti is a junior studying Finance, Computing and Data Science with a minor in Urban Design. She was born and raised in North India. In her free time she likes to run along the Hudson, explore parks in the city, and hunt for smoothie bars. During her previous summers she has interned with a tech-focused investment bank, development financial institution, and a venture capital firm in New York. ' },
            { key: 37, position: 'Tutoring', firstName: 'Edward', lastName: 'Low', bio: 'Edward is a Junior studying Finance and Statistics with a minor in Studio Art. He was born and raised in Singapore. His interests include street photography, travelling, and Japanese food. During his previous internships, Edward has worked in private equity, wealth management, and investment banking. He is interested in pursuing investment banking next summer. ' },
            { key: 38, position: 'Tutoring', firstName: 'Haneesh', lastName: 'Anumolu', bio: 'Haneesh is a rising senior studying Finance. He is originally from Orange, CT. This past summer, Haneesh worked at Citi in their Industrials Group as an Investment Banking Analyst.' },
            { key: 39, position: 'VITA Chair', firstName: 'Emily', lastName: 'Shi', bio: 'Emily is a senior studying Finance and Accounting. She is originally from China. She spent the past summer as an audit intern at Deloitte China. ' },
            { key: 40, position: 'VITA Chair', firstName: 'Nicco', lastName: 'Liu', bio: '' },
            { key: 41, position: 'VITA', firstName: 'Bonnie', lastName: 'Liu', bio: 'Bonnie Liu is a junior studying BS/MS Accounting and Finance. She is originally from Guangzhou, China but has attended high school in West Chester, Pennsylvania. Her interests include food, food, and food. She also enjoys music(saxophone) and movies. She will be going to EY as an audit intern under Financial Services Organization(FSO) this upcoming summer.' },
            { key: 42, position: 'Workshop Chair', firstName: 'Lia', lastName: 'Wei', bio: 'Lia is a Senior studying Finance and Statistics. Coming from Singapore, she loves exploring different neighborhoods in the city. Her interests include road tripping, watching Broadway shows and doing hot yoga. This summer, she interned in the Investment Banking Division at Goldman Sachs with the Global Industrials Group and will be returning full-time.' },
            { key: 43, position: 'Workshop', firstName: 'Alec', lastName: 'Pan', bio: 'Alec Pan is a Senior studying Finance. He is originally from Basking Ridge, New Jersey. He is an aspiring chef and a BuzzFeed enthusiast. He spent this past summer at Guggenheim Partners doing IB and will be returning as a full-time analyst.' },
            { key: 44, position: 'Workshop', firstName: 'Henry', lastName: 'Wang', bio: 'Henry Wang is a Junior studying Finance and Economics with a minor in Philosophy. He grew up in Northern New Jersey. He is also involved in Greek Life at NYU, and his interests include country music, lifting, and the NY Giants. Last summer he worked as summer analyst at Citigroup in the Retail Investment Banking Group, and he will be returning there for full-time.' },
            { key: 45, position: 'Workshop', firstName: 'Neil', lastName: 'Swami', bio: 'Neil Swami is a senior studying finance and economics. He is originally from Minneapolis, Minnesota. His interests include tennis, hip hop music, and watching Game of Thrones. This summer, he worked in the Leveraged Finance group at J.P. Morgan. ' }
        ];
        this.pipeFilterData = this.jsonData;
    }
    LeadersComponent.prototype.ngOnInit = function () {
    };
    return LeadersComponent;
}());
LeadersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'myfilter'
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-leaders',
        template: __webpack_require__("../../../../../src/app/leaders/leaders.component.html"),
        styles: [__webpack_require__("../../../../../src/app/leaders/leaders.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LeadersComponent);

//# sourceMappingURL=leaders.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#lock {\n    width:40%;\n    margin: 1.5em auto 4em auto;\n    display:block;\n}\n\n#fb {\n    background:#3B5998 url(" + __webpack_require__("../../../../../src/assets/images/facebook.svg") + ") no-repeat 14px 6px;\n    background-size: 47px;\n    color:#fff;\n}\n\n#google {\n    border: 1px solid #95989A;\n    background: #fff  url(" + __webpack_require__("../../../../../src/assets/images/google.svg") + ") no-repeat 25px;\n    background-size: 25px;\n}\n\n#email {\n    background: #ECECEC  url(" + __webpack_require__("../../../../../src/assets/images/email.svg") + ") no-repeat 25px;\n    background-size: 25px;\n}\n\n@media (max-width: 768px) {\n    #page {\n        padding:1em;\n    }\n    #toolbar {\n        width:90%;\n        margin-left: -45%;\n    }\n    #fb {\n        background:#3B5998;\n    }\n\n    #google {\n        background: #fff;\n    }\n\n    #email {\n        background: #ECECEC;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\">\n  <img src=\"assets/images/lock.svg\" id=\"lock\">\n\n    <span class=\"error\" *ngIf=\"error\">{{ error }}</span>\n\n  <button class=\"login-button\" (click)=\"loginFb()\" id=\"fb\">Login With Facebook</button><br>\n  <button class=\"login-button\"(click)=\"loginGoogle()\" id=\"google\">Login With Google</button>\n  <button class=\"login-button\" routerLink=\"/login-email\" id=\"email\">Email</button>\n\n  <a routerLink=\"/signup\" routerLinkActive=\"active\" class=\"alc\">No account? <strong>Create one here</strong></a>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__("../../../../firebase/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(afAuth, router) {
        var _this = this;
        this.afAuth = afAuth;
        this.router = router;
        this.afAuth.authState.subscribe(function (auth) {
            if (auth) {
                _this.router.navigateByUrl('/members');
            }
        });
    }
    LoginComponent.prototype.loginFb = function () {
        var _this = this;
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].FacebookAuthProvider())
            .then(function (success) {
            _this.router.navigate(['/members']);
        }).catch(function (err) {
            _this.error = err;
        });
    };
    LoginComponent.prototype.loginGoogle = function () {
        var _this = this;
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider())
            .then(function (success) {
            _this.router.navigate(['/members']);
        }).catch(function (err) {
            _this.error = err;
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__router_animations__["a" /* moveIn */])()],
        host: { '[@moveIn]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/members/members.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#toolbar {\n    padding:0;\n    width:80%;\n    margin-left:-40%;\n}\n\nheader {\n    background: rgb(161,36,32);\n    width:100%;\n}\n\n.basic-btn {\n    width:100px;\n    margin:0;\n}\n\n#page {\n    padding:3em;\n    margin:0;\n}\n\n#page img {\n    margin-top:30px;\n}\n\nh2 {\n    margin:0;\n}\n\n\n@media (max-width: 600px) {\n    #page {\n        padding:1em;\n    }\n    #toolbar {\n        width:90%;\n        margin-left: -45%;\n    }\n}\n\n.pointsnumber {\n    font-size:100px;\n    color:rgb(181,32,36);\n}\n\n\n.red {\n    color: red; \n}\n\n.black {\n    color: black;\n}\n\n.hbutton {\n    border-radius:4px;\n    background-color: #ad3238;\n    color: white;\n    border:10px #ad3238;\n    width:250px;\n    height:50px;\n    font-size:16px;\n\n}\n\n.smallFont{\n    font-size: 13px !important;\n    padding-left: 5vw !important;\n    padding-right: 5vw !important;\n    letter-spacing: 0px !important;\n    text-transform: none !important;\n    text-overflow: hidden !important;\n}\n\n.grayWrapper{\n    padding-left: 7vw;\n    padding-right: 7vw;\n    padding-top: 50px;\n    padding-bottom: 50px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    background: rgb(245,245,245);\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\n.whiteWrapper{\n    padding-left: 7vw;\n    padding-right: 7vw;\n    padding-top: 50px;\n    padding-bottom: 50px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    background: white;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\n.noPadding {\n    padding-left: 0 !important;\n    padding-right: 0 !important;\n}\n\n.header{\n    font-family: 'Raleway', sans-serif;\n    font-size: 30px;\n    font-weight: 700;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    color: rgb(181,32,36);\n    -ms-flex-item-align: left;\n        -ms-grid-row-align: left;\n        align-self: left;\n    padding-bottom: 15px;\n    text-align: left;\n}\n\n.info {\n    font-family: 'Lato', sans-serif;\n    line-height: 1.5;\n    text-align: center;\n    color: #333;\n    font-size: 14px;\n}\n\n.threeCols {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: space-between;\n        -ms-flex-align: space-between;\n            align-items: space-between;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    width: 100%;\n}\n\n\n.leftCol {\n    \n    width: 30%;\n    margin-right: 5%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n\n.rightCol {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    width: 30%; \n}\n\n.header2 {\n    font-family: 'Raleway', sans-serif;\n    font-size: 17px;\n    text-transform: uppercase;\n    font-weight: 700;\n    line-height: 1.5;\n    letter-spacing: .5px;\n    margin-bottom: 20px;\n}\n\n.header3 {\n    font-family: 'Raleway', sans-serif;\n    font-size: 16px;\n    line-height: 1.5;\n    letter-spacing: .5px;\n    color: #444;\n}\n\n.info2{\n    padding-top: 20px;\n    padding-bottom: 20px;\n    font-family: 'Lato', sans-serif;\n    line-height: 1.8;\n    color: #888;\n    font-size: 14px;\n}\n\n.photo {\n    padding-bottom: 10px;\n    height:150px;\n    width:145px;\n    position: relative;\n}\n\n.divider {\n    border-bottom: 2px rgb(181,32,36) solid;\n    width: 40px;\n    margin-bottom: 40px;\n}\n\n.redButton {\n    border-radius: 3px;\n    color: white;\n    border-bottom: 5px solid rgba(0,0,0,.15);\n    background-color: rgba(181,32,36,.75);\n    padding: 0 32px;\n    font-size: 18px;\n    letter-spacing: 2px;\n    height: 52px;\n    line-height: 52px;\n    cursor: pointer;\n    font-weight: 600;\n    text-transform: uppercase;\n    text-shadow: 1px 1px 1px rgba(0,0,0,.2);\n    font-family: 'Raleway',sans-serif;\n}\n\n.redButton:hover{\n    background-color: rgba(181,32,36,.55);\n}\n\n.centerText {\n    text-align: center;\n}\n\n.paddingTop{\n    padding-top: 10px;\n}\n\na{\n    text-decoration: none;\n    color: white;\n}\n\n@media (max-width: 768px){\n    .threeCols{\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        margin-left: auto;\n        margin-right: auto;\n        width: inherit;\n    }\n    .leftCol{\n        width: 100%;\n    }\n    .rightCol{\n        width: 100%;\n    }\n    \n}\n\n@media (max-width: 1000px){\n    .smallFont {\n        padding-left: 2.5vw !important;\n        padding-right: 2.5vw !important;\n    }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/members/members.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\" id=\"toolbar\">\n    <header [@fallIn]=\"state\">\n    \t<!-- button is null if user is logged in via email -->\n      <button (click)=\"logout()\" class=\"login-button basic-btn\">Logout</button>\n    </header>\n    <div id=\"page\" [@moveInLeft]=\"state\">\n\t\n\t\t<div class=\"header\">WELCOME, {{ name.displayName }}!</div>\n\t\t\n\n\t\t<div class=\"whiteWrapper noPadding\">\n\t\t\t<div class=\"threeCols\">\n\t\t\t\t<div class=\"leftCol\">\n\t\t\t\t\t<div class=\"pointsnumber center\"> {{ (member | async)?.points_pe}} </div>\n\t\t\t\t\t<div class=\"header2 center\">Professional Points</div>\n\n\t\t            <button type=\"button\" class=\"redButton smallFont center\" (click)=\"hiddenPE = !hiddenPE\">Click to see events</button>\n\t\t            <div [hidden]=\"hiddenPE\" class=\"PE\">\n\t\t                 <div class=\"paddingTop centerText\">\n\t\t                  \t<b>*Attended Events</b><br>\n\t\t                  \t<div *ngFor = \"let item of professional_attended | async\">{{ item.$value }}</div> <br>\n\t\t\t\t            <b>*Unattended Events</b><br>\n\t\t\t\t            <div *ngFor = \"let item of professional_unattended | async\">{{item.$value}}</div>\n\t\t                 </div>\n\t\t           \t</div>\n\n\n\t\t\t\t</div>\n\t\t\t\t<div class=\"leftCol\">\n\t\t\t\t\t<div class=\"pointsnumber center\"> {{ (member | async)?.points_se}} </div>\n\t\t\t\t\t<div class=\"header2 center\">Social Points</div>\n\t\t            <button type=\"button\" class=\"redButton smallFont center\"\n\t\t                (click)=\"hiddenSE = !hiddenSE\">Click to see events\n\t\t            </button>\n\t\t            <div [hidden]=\"hiddenSE\" class=\"SE\">\n\t\t                 <div class=\"paddingTop centerText\">\n\t\t                 \t<b>*Attended Events</b><br>\n\t\t                  \t<div *ngFor = \"let item of social_attended | async\">{{ item.$value }}</div> <br>\n\t\t\t\t            <b>*Unattended Events</b><br>\n\t\t\t\t            <div *ngFor = \"let item of social_unattended | async\">{{item.$value}}</div>\n\t\t                 </div>\n\t\t           \t</div>\n\t\t\t\t</div>\n\n\n\n\t\t\t\t<div class=\"rightCol\">\n\t\t\t\t\t<div class=\"pointsnumber center\">{{ (member | async)?.points_ce}}</div>\n\t\t\t\t\t<div class=\"header2 center\">Community Service Points</div>\n\t\t            <button type=\"button\" class=\"redButton smallFont center\"\n\t\t                (click)=\"hiddenCS = !hiddenCS\">Click to see events\n\t\t            </button>\n\t\t            <div [hidden]=\"hiddenCS\" class=\"CS\">\n\t\t                 <div class=\"paddingTop centerText\">\n\t\t                \t<b>*Attended Events</b><br>\n\t\t                  \t<div *ngFor = \"let item of community_attended | async\">{{ item.$value }}</div> <br>\n\t\t\t\t            <b>*Unattended Events</b><br>\n\t\t\t\t            <div *ngFor = \"let item of community_unattended | async\">{{item.$value}}</div>\n\t\t                 </div>\n\t\t           \t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/members/members.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MembersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MembersComponent = (function () {
    function MembersComponent(db, afAuth, router) {
        var _this = this;
        this.db = db;
        this.afAuth = afAuth;
        this.router = router;
        this.state = '';
        this.msgVal = '';
        this.hiddenPE = true;
        this.hiddenSE = true;
        this.hiddenCS = true;
        this.afAuth.authState.subscribe(function (auth) {
            if (auth) {
                _this.name = auth;
                _this.items = db.list('/members', {
                    query: {
                        orderByChild: 'email',
                        equalTo: auth.email
                    }
                });
                _this.netID = auth.email.substr(0, auth.email.indexOf("@"));
                _this.member = db.object('/members/' + _this.netID);
                console.log("netID is: " + _this.netID);
                _this.professional_attended = db.list('attendance/' + _this.netID + '/professional/attended');
                _this.professional_unattended = db.list('attendance/' + _this.netID + '/professional/unattended');
                _this.social_attended = db.list('attendance/' + _this.netID + '/social/attended');
                _this.social_unattended = db.list('attendance/' + _this.netID + '/social/unattended');
                _this.community_attended = db.list('attendance/' + _this.netID + '/community/attended');
                _this.community_unattended = db.list('attendance/' + _this.netID + '/community/unattended');
            }
        });
    }
    MembersComponent.prototype.logout = function () {
        this.afAuth.auth.signOut();
        console.log('signed out');
        this.router.navigateByUrl('/login');
    };
    MembersComponent.prototype.ngOnInit = function () {
    };
    return MembersComponent;
}());
MembersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-members',
        template: __webpack_require__("../../../../../src/app/members/members.component.html"),
        styles: [__webpack_require__("../../../../../src/app/members/members.component.css")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__router_animations__["b" /* fallIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__router_animations__["c" /* moveInLeft */])()],
        host: { '[@moveIn]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _c || Object])
], MembersComponent);

var _a, _b, _c;
//# sourceMappingURL=members.component.js.map

/***/ }),

/***/ "../../../../../src/app/myfilter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MyFilterPipe = (function () {
    function MyFilterPipe() {
    }
    MyFilterPipe.prototype.transform = function (items, filter) {
        if (filter == 1) {
            return items.slice(0, 4);
        }
        else if (filter == 2) {
            return items.slice(4, 10);
        }
        else if (filter == 3) {
            return items.slice(10, 14);
        }
        else if (filter == 4) {
            return items.slice(14, 19);
        }
        else if (filter == 5) {
            return items.slice(19, 22);
        }
        else if (filter == 6) {
            return items.slice(22, 25);
        }
        else if (filter == 7) {
            return items.slice(25, 29);
        }
        else if (filter == 8) {
            return items.slice(29, 32);
        }
        else if (filter == 9) {
            return items.slice(32, 35);
        }
        else if (filter == 10) {
            return items.slice(35, 39);
        }
        else if (filter == 11) {
            return items.slice(39, 42);
        }
        else if (filter == 12) {
            return items.slice(42, 46);
        }
        else {
            return items.slice(0, 46);
        }
    };
    return MyFilterPipe;
}());
MyFilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'myfilter'
    })
], MyFilterPipe);

//# sourceMappingURL=myfilter.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*navbar All*/\n.container {\n\tpadding-left: 0px;\n\tpadding-right: 0px;\n\tfont-family: \"Poppins\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n\t/*font-family: Raleway, sans-serif;\n*/}\n\n.navbar .navbar-brand {\n  font-size: 22px;\n  letter-spacing: 1px;\n  padding-top: 0px;\n  font-family: Raleway, sans-serif;\n\n}\n\n.navbar-default .navbar-brand:hover, .navbar-default .navbar-nav > li > a:hover {\n    color: rgb(181,32,36);\n}\n\n.navbar-brand > img {\n\tdisplay: inline;\n}\n\n.routerOutlet {\n\tpadding-top: 70px;\n\t-webkit-animation: fadein 2s;\n\t        animation: fadein 2s;\n}\n/*navbar default*/\n.navbar-default {\n\tbackground-color: transparent;\n\ttransition: background-color .5s ease-out;\n\tpadding: 10px;\n\tborder-color: transparent;\n}\n\n.navbar-default .navbar-brand, .navbar-default .navbar-nav > li > a {\n    color: white;\n    font-weight: bold;\n}\n\n/*navbar Scroll*/\n.navbarScroll {\n\tborder-color: rgba(204, 204, 204, 0.33) !important;\n\tbackground-color: white !important;\n\tborder-width: 0 0 1px !important;\n\tbox-shadow: 0px 1px 7px #777;\n}\n\n.navbarScroll .navbar-brand, .navbarScroll .navbar-nav > li > a {\n    color: #333;\n}\n\n\n/*navbar collapsed all*/\n.navbarExpanded .navbar-nav > li > a {\n\tcolor: black;\n}\n\n.navbarExpanded .navbar-brand {\n\tcolor: white;\n}\n.navbarExpanded .navbar-collapse {\n\tborder: none;\n\tbackground-color: white !important;\n\t\n\tpadding-top: 0px;\n\t-webkit-animation: fadein 1s;\n\t        animation: fadein 1s;\n}\n\n.navbar-collapse{\n\tbox-shadow: none;\n\ttext-align: center;\n}\n\n.navbarExpanded .navbar-header {\n\tpadding-bottom: 10px;\n}\n\n.navbarExpanded {\n\tbackground-color: rgb(181,32,36) !important;\n}\n\n\n/* toggle button*/\n.navbar-default .navbar-toggle:hover .icon-bar { \n\tbackground-color: black;\n}\n\n.navbar-default .navbar-toggle:focus {\n\tbackground-color: transparent;\n}\n.navbar-default .navbar-toggle {\n\tborder-color: white;\n}\n.navbarScroll .navbar-toggle {\n\tborder-color: black;\n}\n\n.navbar-default .navbar-toggle .icon-bar { \n\tbackground-color: white;\n}\n.navbarScroll .navbar-toggle .icon-bar {\n\tbackground-color: black;\n}\n\n/*toggle expanded*/\n.navbarExpanded .navbar-toggle {\n\tborder-color: white;\n}\n.navbar-default .navbar-toggle:hover{\n\tbackground-color: white;\n}\n.navbarExpanded .navbar-toggle .icon-bar { \n\tbackground: white;\n}\n\n.active{\n\tcolor: rgb(181,32,36) !important;\n}\n\n\n\n\n\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav  class=\"navbar navbar-fixed-top navbar-default\"[ngClass]=\"{navbarScroll: isScrolled || notHome, 'navbarExpanded': isExpanded}\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <a href=\"../\" class=\"navbar-brand\"><img [src]=\"src\" height = \"50\" width = \"50\"> BAP NYU</a>\n      <button id=\"menu-toggle\" class=\"navbar-toggle collapsed\" (click)=\"checkExpanded()\" type=\"button\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n    </div>\n    <div class=\"navbar-collapse collapse\" [ngClass]=\"{'in': isExpanded}\">\n      <ul class=\"nav navbar-nav navbar-right navbar-uppercase\"  (click)=\"checkExpanded()\">\n        <li>\n          <a routerLink = \"about\" routerLinkActive=\"active\">About</a>\n        </li>\n        <li>\n          <a routerLink = \"events\" routerLinkActive=\"active\">Events</a>\n        </li>\n        <li>\n          <a routerLink = \"candidates\" routerLinkActive=\"active\">Candidates</a>\n        </li>\n        <li>\n          <a routerLink = \"leaders\" routerLinkActive=\"active\">Leaders</a>\n        </li>\n        <li>\n          <a routerLink = \"alumni\" routerLinkActive=\"active\">Alumni</a>\n        </li>\n        <li>\n          <a routerLink = \"vita\" routerLinkActive=\"active\">VITA</a>\n        </li>\n        <li>\n          <a routerLink = \"contact\" routerLinkActive=\"active\">Contact</a>\n        </li>\n      </ul>\n\n    </div>\n  </div>\n</nav>\n\n\n\n \n\n<div [ngClass] =\"{routerOutlet: notHome}\">\n  <router-outlet></router-outlet>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent(router) {
        var _this = this;
        this.router = router;
        this.isExpanded = false;
        this.isScrolled = false;
        this.currPos = 0;
        this.startPos = 0;
        this.changePos = 50;
        this.notHome = false;
        this.src = "../../assets/images/bapWhite.png";
        router.events.subscribe(function (event) {
            if (router.url !== '/') {
                _this.notHome = true;
                _this.src = "../../assets/images/bap.png";
            }
        });
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.checkExpanded = function () {
        if (window.innerWidth < 768) {
            this.isExpanded = !this.isExpanded;
            if (this.isExpanded || (!this.notHome && (window.pageYOffset < this.changePos))) {
                this.src = "../../assets/images/bapWhite.png";
            }
            else {
                this.src = "../../assets/images/bap.png";
            }
        }
    };
    NavbarComponent.prototype.updateHeader = function (evt) {
        this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
        if (this.currPos >= this.changePos) {
            this.isScrolled = true;
            this.isExpanded = false;
            if (this.isExpanded) {
                this.src = "../../assets/images/bapWhite.png";
            }
            else {
                this.src = "../../assets/images/bap.png";
            }
        }
        else {
            this.isScrolled = false;
            this.isExpanded = false;
            if (!this.notHome) {
                this.src = "../../assets/images/bapWhite.png";
            }
            else {
                this.src = "../../assets/images/bap.png";
            }
        }
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")],
        host: {
            '(window:scroll)': 'updateHeader($event)',
            '(window:resize)': 'updateHeader($event)',
            '(window:onload)': 'updateHeader($event)'
        }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object])
], NavbarComponent);

var _a;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/router.animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (immutable) */ __webpack_exports__["a"] = moveIn;
/* harmony export (immutable) */ __webpack_exports__["b"] = fallIn;
/* harmony export (immutable) */ __webpack_exports__["c"] = moveInLeft;

function moveIn() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('moveIn', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('void', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ position: 'fixed', width: '100%' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ position: 'fixed', width: '100%' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])(':enter', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '0', transform: 'translateX(100px)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('.6s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '1', transform: 'translateX(0)' }))
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])(':leave', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '1', transform: 'translateX(0)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('.3s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '0', transform: 'translateX(-200px)' }))
        ])
    ]);
}
function fallIn() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('fallIn', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])(':enter', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '0', transform: 'translateY(40px)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('.4s .2s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '1', transform: 'translateY(0)' }))
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])(':leave', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '1', transform: 'translateX(0)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('.3s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '0', transform: 'translateX(-200px)' }))
        ])
    ]);
}
function moveInLeft() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('moveInLeft', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])(':enter', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '0', transform: 'translateX(-100px)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('.6s .2s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '1', transform: 'translateX(0)' }))
        ])
    ]);
}
//# sourceMappingURL=router.animations.js.map

/***/ }),

/***/ "../../../../../src/app/services/services.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/services/services.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  services works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/services/services.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicesComponent = (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    return ServicesComponent;
}());
ServicesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-services',
        template: __webpack_require__("../../../../../src/app/services/services.component.html"),
        styles: [__webpack_require__("../../../../../src/app/services/services.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ServicesComponent);

//# sourceMappingURL=services.component.js.map

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\">\n  <a routerLink=\"/login\" id=\"goback\">Go back</a>\n\n  <h2>Join now</h2>\n\n  <span class=\"error\" *ngIf=\"error\" [@fallIn]='state'>{{ error }}</span>\n    \n  <form #formData='ngForm' (ngSubmit)=\"onSubmit(formData)\">\n\n    <input type=\"text\" placeholder=\"Email address..\" (ngModel)=\"email\" name=\"email\" class=\"txt\" required>\n    <input type=\"password\" placeholder=\"Password\" (ngModel)=\"password\" name=\"password\" class=\"txt\" required>\n\n\n    <button type=\"submit\" [disabled]=\"!formData.valid\" class=\"login-button basic-btn\">Create my account</button>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = (function () {
    function SignupComponent(afAuth, router) {
        this.afAuth = afAuth;
        this.router = router;
        this.state = '';
    }
    SignupComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        if (formData.valid) {
            console.log(formData.value);
            this.afAuth.auth.createUserWithEmailAndPassword(formData.value.email, formData.value.password)
                .then(function (success) {
                console.log(success);
                _this.router.navigate(['/login']);
            }).catch(function (err) {
                console.log(err);
                _this.error = err;
            });
        }
    };
    SignupComponent.prototype.ngOnInit = function () {
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/signup/signup.component.css")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__router_animations__["b" /* fallIn */])()],
        host: { '[@moveIn]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object])
], SignupComponent);

var _a, _b;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/vita/vita.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".info2 a{\n\tcolor: rgb(161,32,36);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vita/vita.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"grayWrapper\">\n\t<div class=\"header\">\n\t\tWho We Are\n\t</div>\n\t<div class=\"divider\"></div>\n\t<div class=\"info\">\n\t\tVITA (Volunteer Income Tax Assistance) is a program that allows IRS-certified volunteers provide free basic income tax return preparation for low-income individuals. Low-income individuals are those who make approximately $54,000 or less.\n\t</div>\n</div>\n\n<div class=\"whiteWrapper\">\n\t<div class=\"threeCols\">\n\t\t<div class=\"leftCol\">\n\t\t\t<div><img class=\"photo2\" src=\"../../assets/images/pin.svg\"></div>\n\t\t\t<div class=\"header2 center\">Location</div>\n\t\t\t<div class=\"info2\">\n\t\t\t\tNYU Stern School of Business<br>\n\t\t\t\t40 West 4th St, Lower Concourse\n\t\t\t\tNew York, NY 10012<br><br>\n\t\t\t\t(Please remember to bring a valid photo ID in order to sign in with NYU security!)\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"leftCol\">\n\t\t\t<div><img class=\"photo2\" src=\"../../assets/images/time.svg\"></div>\n\t\t\t<div class=\"header2 center\">Hours of Operation</div>\n\t\t\t<div class=\"info2\">\n\t\t\t\t<b>February 6th - April 14th<br>\n\t\t\t\tMon - Thurs: 11:00am - 4:30pm<br>\n\t\t\t\tFri: 11:00am - 1:45pm</b><br>\n\t\t\t\tWe are also open Thursdays 7:00-8:30pm at Founders Hall for all NYU Residence Hall students only.<br>\n\t\t\t\t<i>Closed February 20 for President’s Day and March 12 - 16 for Spring Break.</i><br>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"rightCol\">\n\t\t\t<div><img class=\"photo2\" src=\"../../assets/images/call.svg\"></div>\n\t\t\t<div class=\"header2 center\">Contact</div>\n\t\t\t<div class=\"info2\">\n\t\t\t\t<b>Phone Number:</b> (646) 598-4820<br>\n\t\t\t\t<b>Email:</b> bap.vita.committee@gmail.com<br><br>\n\t\t\t\t<b>To Schedule an Appointment:</b>\n\t\t\t\tPlease visit <a href=\"http://nyuvita.setmore.com/\">here</a> to set up an appointment.\n\t\t\t\t<br>Please schedule your appointments at least 2 business days in advance.\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"grayWrapper\">\n\t<div class=\"header\">\n\t\tReferences\n\t</div>\n\t<div class=\"divider\"></div>\n\t<div class=\"info2\">\n\t\t<a href=\"https://www.irs.gov/Individuals/Free-Tax-Return-Preparation-for-You-by-Volunteers\">IRS VITA</a><br>\n\t\t<a href=\"https://www.irs.gov/Individuals/Checklist-for-Free-Tax-Return-Preparation\">Required Items</a>\n\t\t<br><br>\n\t\tValid Proof of identification (photo ID)<br>\n\t\tSocial Security cards for you, your spouse and dependents\n\t\tAn Individual Taxpayer Identification Number (ITIN) assignment letter may be substituted for you, your spouse and your dependents if you do not have a Social Security number\n\t\tBirth dates for you, your spouse and dependents on the tax return<br><br>\n\t\tWage and earning statements (Form W-2, W-2G, 1099-R,1099-Misc) from all employers\n\t\tInterest and dividend statements from banks (Forms 1099)\n\t\tProof of bank account routing and account numbers for direct deposit such as a blank check<br>\n\t\tTo file taxes electronically on a married-filing-joint tax return, both spouses must be present to sign the required forms possible.\n\t</div>\n</div>\n\n<div class=\"whiteWrapper\">\n\t<div class=\"header\">\n\t\tDisclaimers\n\t</div>\n\t<div class=\"divider\"></div>\n\t<div class=\"info2\">\n\t\tWe strive to maintain the quality and integrity of our services and the content of this website. Because of the dynamic nature of the internet and of tax law, however, NYU VITA and affiliated persons give no warranty, expressed or implied, to the accuracy, reliability, relevance, or completeness of information or service provided.<br><br>\n\t\tNone of the volunteers, officers, college officials, sponsors, and anyone else connected to NYU VITA can be held liable for your use of any information in this website or from services provided. Use any kind of service, advice, or material from NYU VITA at your own risk. No actions of NYU VITA volunteers constitute tax or legal advice.<br><br>\n\t\t<i>(NYU VITA encourages the use of professional services by certified public accountants or paid tax preparers whenever possible.)</i>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/vita/vita.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VitaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VitaComponent = (function () {
    function VitaComponent() {
    }
    VitaComponent.prototype.ngOnInit = function () {
    };
    return VitaComponent;
}());
VitaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-vita',
        template: __webpack_require__("../../../../../src/app/vita/vita.component.html"),
        styles: [__webpack_require__("../../../../../src/app/vita/vita.component.css")]
    }),
    __metadata("design:paramtypes", [])
], VitaComponent);

//# sourceMappingURL=vita.component.js.map

/***/ }),

/***/ "../../../../../src/assets/images/email.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "email.e75a0390ebcf4b02d1bd.svg";

/***/ }),

/***/ "../../../../../src/assets/images/facebook.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "facebook.d526b8a8c08d30bc0c96.svg";

/***/ }),

/***/ "../../../../../src/assets/images/google.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "google.45dff0bab1cfddd02551.svg";

/***/ }),

/***/ "../../../../../src/assets/images/stern2.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "stern2.18226ee3843b2987da7e.jpg";

/***/ }),

/***/ "../../../../../src/assets/images/wsp.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "wsp.f655f9d7ccc253f6daa7.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../../../../webpack-dev-server/client/index.js?http:/localhost:4200");
module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[2]);
//# sourceMappingURL=main.bundle.js.map