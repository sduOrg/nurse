(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-layout *ngIf = \"isLogin\">\n    <nz-header>\n      <div class=\"logo\">  <i nz-icon nzType=\"file\"></i>健康知识图谱指标应用平台</div>\n      <ul nz-menu nzTheme=\"dark\" nzMode=\"horizontal\" class=\"header-menu\">\n      </ul>\n    </nz-header>\n    <nz-layout>\n      <nz-sider nzWidth=\"200px\" nzTheme=\"light\">\n        <ul nz-menu nzMode=\"inline\" class=\"sider-menu\">\n          <li nz-submenu nzOpen  [nzTitle]=\"titleTpl\">\n            <ng-template #titleTpl><i nz-icon nzType=\"file\"></i><span>知识图谱分类</span></ng-template>\n            <ul>\n              <li nz-menu-item nzMatchRouter><a routerLink=\"/type\">全方位健康评估</a></li>\n              <li nz-menu-item nzMatchRouter><a routerLink=\"/sentence\">健康监测</a></li>\n              <li nz-menu-item nzMatchRouter><a routerLink=\"/education\">安全管理健康</a></li>\n              <li nz-menu-item nzMatchRouter><a routerLink=\"/agecase\">老年综合征</a></li>\n              <li nz-menu-item nzMatchRouter><a routerLink=\"/province\">老年功能康复</a></li>\n              <li nz-menu-item nzMatchRouter><a routerLink=\"/period\">老年长期照护</a></li>\n              <li nz-menu-item nzMatchRouter><a routerLink=\"/story\">安宁疗养</a></li>\n            </ul>\n          </li>\n        </ul>\n\n      </nz-sider>\n      <nz-layout class=\"inner-layout\">\n        <!-- <nz-breadcrumb>\n          <nz-breadcrumb-item>Home</nz-breadcrumb-item>\n          <nz-breadcrumb-item>List</nz-breadcrumb-item>\n          <nz-breadcrumb-item>App</nz-breadcrumb-item>\n        </nz-breadcrumb> -->\n        <nz-content>\n            <router-outlet></router-outlet>\n        </nz-content>\n      </nz-layout>\n    </nz-layout>\n  </nz-layout>\n\n  <nz-layout *ngIf=\"!isLogin\">\n    <nz-content>\n      <app-login (nzChangeLogin)=\"nzChangeLogin($event)\"></app-login>\n    </nz-content>\n  </nz-layout>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/index/heroes/heroes.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/index/heroes/heroes.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container-wraper\">\n    <div style=\"display: flex;justify-content: space-around;\"> \n        <div>\n          <h2 class=\"cont-title\">\n              各类刑罚的数量分布\n          </h2>\n          <div id=\"echart1\" style=\"    width: 360px;height: 233px;\"></div>\n        </div>\n        \n  \n        <div style=\"margin-left: 48px;\">\n          <h2 class=\"cont-title\">\n              类罪及其判决数量分布 \n          </h2>\n          <div id=\"echart2\" style=\"  width: 480px;height: 263px;\"></div>\n        </div>\n      </div>\n      <div style=\"display: flex;justify-content: space-around;\"> \n        <div>\n          <h2 class=\"cont-title\">\n              各类刑罚的年龄分布\n          </h2>\n          <div id=\"echart3\" style=\"    width: 360px;height: 263px;\"></div>\n        </div>\n  \n        <div style=\"margin-left: 48px;\">\n          <h2 class=\"cont-title\">\n              各类刑罚的文化程度分布\n          </h2>\n          <div id=\"echart4\" style=\"    width: 480px;height: 273px;\"></div>\n        </div>\n        </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/law/age-class/age-class.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/law/age-class/age-class.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-wraper\">\n   \n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/law/detail/detail.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/law/detail/detail.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-wrap\">\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/law/education/education.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/law/education/education.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-wraper\">\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/law/law-story/law-story.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/law/law-story/law-story.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-wraper\">\n  \n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/law/login/login.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/law/login/login.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"login-body\" >\n\t<div class=\"loginheader\">\n\t\t<!-- <img src=\"assets/img/pc-logo.png\"> -->\n\t\t<p>健康知识图谱指标应用平台</p>\n\t\t<!--<span>Product Development</span>-->\n\t</div>\n\t<div class=\"login-bg\">\n\t\t<div class=\"login-box\">\n\t\t\t<div class=\"login-box-list\">\n\t\t\t\t<h3>登录</h3>\n\t\t\t\t<div class=\"login-input-box\">\n\t\t\t\t\t<input id=\"username\" type=\"text\" (keyup)=\"myKeyup($event)\" [(ngModel)]=\"login.username\" name=\"username\" #username=\"ngModel\"  placeholder=\"在此输入用户名\">\n\t\t\t\t\t<div class=\"imgbox\">\n\t\t\t\t\t\t<img src=\"assets/image/login_img_user.png\">\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<div class=\"login-input-box\">\n\t\t\t\t\t<input type=\"password\" (keyup)=\"myKeyup($event)\" [(ngModel)]=\"login.password\" name=\"password\" type=\"password\" #password=\"ngModel\" placeholder=\"请输入密码\" >\n\t\t\t\t\t<div class=\"imgbox\">\n\t\t\t\t\t\t<img src=\"assets/image/login_img_pwd.png\">\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<!--<button class=\"login-submit\" >登录</button>-->\n\t\t\t\t<button class=\"login-submit\" (click)=\"doLogin()\"  type=\"submit\" >登录</button>\n\t\t\t\t<!-- <span  class=\"prod\">(建议使用谷歌浏览器)</span> -->\n\t\t\t\t<!-- <a style=\"color: #51b2ff;margin-left: 40px;\" (click)='download()' >移动端下载地址</a> -->\n\t\t\t\t<!--<div class=\"login-forget\">\n\t\t\t\t\t<span>忘记密码？</span>\n\t\t\t\t</div>--> \n\t\t\t</div>\n\t\t</div>\n\t\t<!-- <div class=\"middle\">\n\t\t\t<div class=\"middle-one\" style=\"margin-bottom:20px;margin-left: 80px\">\n\t\t\t  <div class=\"imgbox1\" style=\"width: 120px;\">\n\t\t\t\t<img src=\"assets/img/ioscode.png\">\n\t\t\t  </div>\n\t\t\t  <div class=\"imgbox2\" style=\"margin-top: 20px;\">\n\t\t\t\t<a class=\"downloada\" (click)='gotodownload(1)'><img src=\"assets/img/iosdownload.png\"></a>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t  <div class=\"middle-two\" style=\"margin-left: 80px\">\n\t\t\t  <div class=\"imgbox1\" style=\"width:120px\">\n\t\t\t\t<img src=\"assets/img/androidcode.png\">\n\t\t\t  </div>\n\t\t\t  <div class=\"imgbox2\" style=\"margin-top: 20px\">\n\t\t\t\t<a class=\"downloada\"  (click)='gotodownload(2)'><img src=\"assets/img/androiddownload.png\"></a>\n\t\t\t  </div>\n\t\t  </div>\n\t\t</div> -->\n\t</div>\n\t<div class=\"login-copyright\">\n\t\t<!-- 泰华智慧产业集团股份有限公司 版权所有 -->\n\t</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/law/no-penalty/no-penalty.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/law/no-penalty/no-penalty.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-wraper\">\n    \n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/law/period/period.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/law/period/period.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-wraper\">\n    \n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/law/province/province.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/law/province/province.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-wraper\">\n  \n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/law/sentence/sentence.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/law/sentence/sentence.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n<div class=\"container-wraper\">\n  <div class=\"treeselect\">\n      <nz-input-group [nzSuffix]=\"suffixIcon\">\n        <input type=\"text\" nz-input placeholder=\"Search\" [(ngModel)]=\"searchValue\" />\n      </nz-input-group>\n      <ng-template #suffixIcon>\n        <i nz-icon nzType=\"search\"></i>\n      </ng-template>\n      <nz-tree\n        [nzData]=\"nodes\"\n        [nzSearchValue]=\"searchValue\"\n        (nzClick)=\"nzEvent($event)\"\n      >\n      </nz-tree>\n  </div>\n    <!-- <video id=\"mp4\" src=\"http://127.0.0.1:8080/play/哈哈哈.mp4\"></video>\n    <a href=\"http://127.0.0.1:8080/play/自我介绍.docx\"></a> -->\n\n  <div class=\"type-table\">\n      <h2 class=\"cont-title\">\n          指标文件列表\n      </h2>\n      <nz-table #basicTable\n      [nzFrontPagination]=\"false\"\n      [nzData]=\"listOfData\"\n      [nzTotal]=\"listOfData.length\"\n     >\n          <thead>\n            <tr>\n              <th>序号</th>\n              <th>指标名称</th>\n              <th>文件名称</th>\n              <th>文件类型</th>\n              <th nzWidth=\"60px\">操作</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let data of basicTable.data;let i = index\">\n              <td>{{ i+1 }}</td>\n              <td>{{ selectTitle }}</td>\n              <td>{{ data.name}}</td>\n              <td>{{  data.type == '1' ? '视频':'文件' }}</td>\n              <td>\n                <a (click)=\"gotoVideo(data)\">\n                  {{  data.type == '1' ? '播放':'下载' }}</a>\n              </td>\n            </tr>\n          </tbody>\n        </nz-table>\n  </div>\n</div>\n<nz-modal [(nzVisible)]=\"isVisible\" nzTitle=\"播放视频\" (nzOnCancel)=\"handleCancel()\" (nzOnOk)=\"handleOk()\" [nzFooter]=\"tplFooter\">\n  <div style=\"display:flex;width: 480px;height: 360px;\">\n    <video style=\"width: 100%;background: black;\"  controls autoplay  [src]=\"videosrc\"></video>\n  </div>\n  <ng-template #tplFooter>\n  </ng-template>\n</nz-modal>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/law/type-case/type-case.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/law/type-case/type-case.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n<div class=\"container-wraper\">\n  <div class=\"treeselect\">\n      <nz-input-group [nzSuffix]=\"suffixIcon\">\n        <input type=\"text\" nz-input placeholder=\"Search\" [(ngModel)]=\"searchValue\" />\n      </nz-input-group>\n      <ng-template #suffixIcon>\n        <i nz-icon nzType=\"search\"></i>\n      </ng-template>\n      <nz-tree\n        [nzData]=\"nodes\"\n        [nzSearchValue]=\"searchValue\"\n        (nzClick)=\"nzEvent($event)\"\n      >\n      </nz-tree>\n  </div>\n    <!-- <video id=\"mp4\" src=\"http://127.0.0.1:8080/play/哈哈哈.mp4\"></video>\n    <a href=\"http://127.0.0.1:8080/play/自我介绍.docx\"></a> -->\n\n  <div class=\"type-table\">\n      <h2 class=\"cont-title\">\n          指标文件列表\n      </h2>\n      <nz-table #basicTable\n      [nzFrontPagination]=\"false\"\n      [nzData]=\"listOfData\"\n      [nzTotal]=\"total\"\n      [nzPageSize] = \"10\"\n      (nzPageIndexChange)=\"currentPageDataChange($event)\"\n     >\n          <thead>\n            <tr>\n              <th>序号</th>\n              <th>指标名称</th>\n              <th>文件名称</th>\n              <th>文件类型</th>\n              <th nzWidth=\"60px\">操作</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let data of basicTable.data;let i = index\">\n              <td>{{ i+1 }}</td>\n              <td>{{ selectTitle }}</td>\n              <td>{{ data.name}}</td>\n              <td>{{  data.type == '视频' ? '视频':'文件' }}</td>\n              <td>\n                <a (click)=\"gotoVideo(data)\">\n                  {{  data.type == '视频' ? '播放':'下载' }}</a>\n              </td>\n            </tr>\n          </tbody>\n        </nz-table>\n  </div>\n</div>\n<nz-modal [(nzVisible)]=\"isVisible\" nzTitle=\"播放视频\" (nzOnCancel)=\"handleCancel()\" (nzOnOk)=\"handleOk()\" [nzFooter]=\"tplFooter\">\n  <div style=\"display:flex;width: 480px;height: 360px;\">\n    <video style=\"width: 100%;background: black;\"  controls autoplay  [src]=\"videosrc\"></video>\n  </div>\n  <ng-template #tplFooter>\n  </ng-template>\n</nz-modal>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _page_index_heroes_heroes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page/index/heroes/heroes.component */ "./src/app/page/index/heroes/heroes.component.ts");
/* harmony import */ var _page_law_age_class_age_class_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page/law/age-class/age-class.component */ "./src/app/page/law/age-class/age-class.component.ts");
/* harmony import */ var _page_law_detail_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page/law/detail/detail.component */ "./src/app/page/law/detail/detail.component.ts");
/* harmony import */ var _page_law_education_education_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page/law/education/education.component */ "./src/app/page/law/education/education.component.ts");
/* harmony import */ var _page_law_law_story_law_story_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page/law/law-story/law-story.component */ "./src/app/page/law/law-story/law-story.component.ts");
/* harmony import */ var _page_law_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page/law/login/login.component */ "./src/app/page/law/login/login.component.ts");
/* harmony import */ var _page_law_no_penalty_no_penalty_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./page/law/no-penalty/no-penalty.component */ "./src/app/page/law/no-penalty/no-penalty.component.ts");
/* harmony import */ var _page_law_period_period_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page/law/period/period.component */ "./src/app/page/law/period/period.component.ts");
/* harmony import */ var _page_law_province_province_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./page/law/province/province.component */ "./src/app/page/law/province/province.component.ts");
/* harmony import */ var _page_law_sentence_sentence_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./page/law/sentence/sentence.component */ "./src/app/page/law/sentence/sentence.component.ts");
/* harmony import */ var _page_law_type_case_type_case_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./page/law/type-case/type-case.component */ "./src/app/page/law/type-case/type-case.component.ts");

/*
 * @Description:
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2020-08-21 10:50:08
 * @LastEditors: Seven
 * @LastEditTime: 2020-08-21 11:24:40
 */













const routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: _page_law_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: 'index', component: _page_index_heroes_heroes_component__WEBPACK_IMPORTED_MODULE_3__["HeroesComponent"] },
    { path: 'type', component: _page_law_type_case_type_case_component__WEBPACK_IMPORTED_MODULE_13__["TypeCaseComponent"] },
    { path: 'sentence', component: _page_law_sentence_sentence_component__WEBPACK_IMPORTED_MODULE_12__["SentenceComponent"] },
    { path: 'education', component: _page_law_education_education_component__WEBPACK_IMPORTED_MODULE_6__["EducationComponent"] },
    { path: 'agecase', component: _page_law_age_class_age_class_component__WEBPACK_IMPORTED_MODULE_4__["AgeClassComponent"] },
    { path: 'province', component: _page_law_province_province_component__WEBPACK_IMPORTED_MODULE_11__["ProvinceComponent"] },
    { path: 'period', component: _page_law_period_period_component__WEBPACK_IMPORTED_MODULE_10__["PeriodComponent"] },
    { path: 'story', component: _page_law_law_story_law_story_component__WEBPACK_IMPORTED_MODULE_7__["LawStoryComponent"] },
    { path: 'nopenalty', component: _page_law_no_penalty_no_penalty_component__WEBPACK_IMPORTED_MODULE_9__["NoPenaltyComponent"] },
    { path: 'type/detail', component: _page_law_detail_detail_component__WEBPACK_IMPORTED_MODULE_5__["DetailComponent"] },
    { path: 'agecase/detail', component: _page_law_detail_detail_component__WEBPACK_IMPORTED_MODULE_5__["DetailComponent"] },
    { path: 'sentence/detail', component: _page_law_detail_detail_component__WEBPACK_IMPORTED_MODULE_5__["DetailComponent"] },
    { path: 'education/detail', component: _page_law_detail_detail_component__WEBPACK_IMPORTED_MODULE_5__["DetailComponent"] },
    { path: 'province/detail', component: _page_law_detail_detail_component__WEBPACK_IMPORTED_MODULE_5__["DetailComponent"] },
    { path: 'period/detail', component: _page_law_detail_detail_component__WEBPACK_IMPORTED_MODULE_5__["DetailComponent"] },
    { path: 'story/detail', component: _page_law_detail_detail_component__WEBPACK_IMPORTED_MODULE_5__["DetailComponent"] },
    { path: 'nopenalty/detail', component: _page_law_detail_detail_component__WEBPACK_IMPORTED_MODULE_5__["DetailComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo {\n  height: 31px;\n  line-height: 31px;\n  color: white;\n  margin: 16px 30px 16px 0;\n  float: left;\n  font-size: 18px;\n}\n\n.logo i {\n  margin-right: 12px;\n}\n\n.header-menu {\n  line-height: 64px;\n}\n\n.sider-menu {\n  height: 100%;\n  border-right: 0;\n}\n\n.inner-layout {\n  padding: 0 24px 24px;\n  margin-left: 200px;\n  margin-top: 64px;\n}\n\nnz-breadcrumb {\n  margin: 16px 0;\n}\n\nnz-content {\n  background: #fff;\n  min-height: 432px;\n}\n\n:host ::ng-deep .ant-layout-header {\n  padding-left: 24px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 10;\n}\n\n:host ::ng-deep .ant-layout-sider-light {\n  position: fixed;\n  top: 64px;\n  left: 0;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL3dvcmsvd29yazQvaGRpb2NOZXcvaGRjZ2lvYy9zcmMvbWFpbi9teS1hcHAvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFFQSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDREo7O0FER0E7RUFDSSxrQkFBQTtBQ0FKOztBREdFO0VBQ0UsaUJBQUE7QUNBSjs7QURHRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDQUo7O0FER0U7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHRTtFQUNFLGNBQUE7QUNBSjs7QURHRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURHRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNBSjs7QURFRTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvIHtcbiAgICAvLyB3aWR0aDogMTIwcHg7XG4gICAgaGVpZ2h0OiAzMXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAvLyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gICAgbWFyZ2luOiAxNnB4IDMwcHggMTZweCAwO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuLmxvZ28gaXtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG59XG5cbiAgLmhlYWRlci1tZW51IHtcbiAgICBsaW5lLWhlaWdodDogNjRweDtcbiAgfVxuXG4gIC5zaWRlci1tZW51IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyLXJpZ2h0OiAwO1xuICB9XG5cbiAgLmlubmVyLWxheW91dCB7XG4gICAgcGFkZGluZzogMCAyNHB4IDI0cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xuICAgIG1hcmdpbi10b3A6IDY0cHg7XG4gIH1cblxuICBuei1icmVhZGNydW1iIHtcbiAgICBtYXJnaW46IDE2cHggMDtcbiAgfVxuXG4gIG56LWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgbWluLWhlaWdodDogNDMycHg7XG4gIH1cbjpob3N0IDo6bmctZGVlcHtcbiAgLmFudC1sYXlvdXQtaGVhZGVye1xuICAgIHBhZGRpbmctbGVmdDogMjRweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogMTA7XG4gIH1cbiAgLmFudC1sYXlvdXQtc2lkZXItbGlnaHR7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogNjRweDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxufSIsIi5sb2dvIHtcbiAgaGVpZ2h0OiAzMXB4O1xuICBsaW5lLWhlaWdodDogMzFweDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDE2cHggMzBweCAxNnB4IDA7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5sb2dvIGkge1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG59XG5cbi5oZWFkZXItbWVudSB7XG4gIGxpbmUtaGVpZ2h0OiA2NHB4O1xufVxuXG4uc2lkZXItbWVudSB7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJpZ2h0OiAwO1xufVxuXG4uaW5uZXItbGF5b3V0IHtcbiAgcGFkZGluZzogMCAyNHB4IDI0cHg7XG4gIG1hcmdpbi1sZWZ0OiAyMDBweDtcbiAgbWFyZ2luLXRvcDogNjRweDtcbn1cblxubnotYnJlYWRjcnVtYiB7XG4gIG1hcmdpbjogMTZweCAwO1xufVxuXG5uei1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWluLWhlaWdodDogNDMycHg7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuYW50LWxheW91dC1oZWFkZXIge1xuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTA7XG59XG46aG9zdCA6Om5nLWRlZXAgLmFudC1sYXlvdXQtc2lkZXItbGlnaHQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNjRweDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.isLogin = false;
        this.title = 'my-app';
    }
    ngOnInit() {
        if (sessionStorage.getItem("user") && sessionStorage.getItem("password")) {
            this.isLogin = true;
        }
    }
    nzChangeLogin(sucess) {
        this.isLogin = true;
        this.router.navigate(["/type"]);
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _page_index_heroes_heroes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page/index/heroes/heroes.component */ "./src/app/page/index/heroes/heroes.component.ts");
/* harmony import */ var _drag_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./drag.directive */ "./src/app/drag.directive.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _page_law_law_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page/law/law.module */ "./src/app/page/law/law.module.ts");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _page_index_heroes_heroes_component__WEBPACK_IMPORTED_MODULE_5__["HeroesComponent"],
            _drag_directive__WEBPACK_IMPORTED_MODULE_6__["DragDirective"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _page_law_law_module__WEBPACK_IMPORTED_MODULE_10__["LawModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/drag.directive.ts":
/*!***********************************!*\
  !*** ./src/app/drag.directive.ts ***!
  \***********************************/
/*! exports provided: DragDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDirective", function() { return DragDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

/*
 * @Description:
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2020-08-21 11:31:10
 * @LastEditors: Seven
 * @LastEditTime: 2020-10-22 10:23:41
 */

let DragDirective = class DragDirective {
    constructor(el) {
        this.el = el;
        this.isDown = false;
        this.totalOffsetX = 0; // 记录总偏移量 X轴
        this.totalOffsetY = 0; // 记录总偏移量 Y轴
    }
    // 点击事件
    onMousedown(event) {
        this.isDown = true;
        this.disX = event.pageX;
        this.disY = event.pageY;
        console.log("event.pageX", event.pageX, "event.pageY", event.pageY);
        console.log("event.clientX", event.clientX, "event.clientY", event.clientY);
    }
    // 监听document移动事件事件
    onMousemove(event) {
        // 判断该元素是否被点击了。
        if (this.isDown) {
            console.log("event2.clientX", event.clientX, "event2.clientY", event.clientY);
            console.log("event2.pageX", event.pageX, "event2.clientY", event.pageY);
            this.el.nativeElement.style.left = this.totalOffsetX + event.pageX - this.disX + 'px';
            this.el.nativeElement.style.top = this.totalOffsetY + event.pageY - this.disY + 'px';
        }
    }
    // 监听document离开事件
    onMouseup(event) {
        // 只用当元素移动过了，离开函数体才会触发。
        if (this.isDown) {
            console.log('fail');
            this.totalOffsetX += event.pageX - this.disX;
            this.totalOffsetY += event.pageY - this.disY;
            this.isDown = false;
            console.log("totalOffsetX", this.totalOffsetX, "totalOffsetY", this.totalOffsetY);
        }
    }
    ngOnInit() {
        this.el.nativeElement.style.position = 'relative';
    }
};
DragDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mousedown', ['$event'])
], DragDirective.prototype, "onMousedown", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:mousemove', ['$event'])
], DragDirective.prototype, "onMousemove", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:mouseup', ['$event'])
], DragDirective.prototype, "onMouseup", null);
DragDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appDrag]'
    })
], DragDirective);



/***/ }),

/***/ "./src/app/page/index/heroes/heroes.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/page/index/heroes/heroes.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvaW5kZXgvaGVyb2VzL2hlcm9lcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/page/index/heroes/heroes.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/page/index/heroes/heroes.component.ts ***!
  \*******************************************************/
/*! exports provided: HeroesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroesComponent", function() { return HeroesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _law_law_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../law/law.service */ "./src/app/page/law/law.service.ts");

/*
 * @Description:
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2020-08-21 11:05:54
 * @LastEditors: Seven
 * @LastEditTime: 2020-09-29 17:15:15
 */


let HeroesComponent = class HeroesComponent {
    constructor(lawService) {
        this.lawService = lawService;
    }
    ngOnInit() {
        this.loadCateNumb();
        this.loadCategroyFault();
        this.loadAllage();
        this.loadAlledu();
    }
    loadCateNumb() {
        this.lawService.getPieloadCateNumb().subscribe(data => {
            var totals = 0;
            var names = [];
            var values = [];
            data.forEach(element => {
                totals += Number(element.number);
                values.push({
                    name: element.penalty_class,
                    value: Number(element.number)
                });
            });
            values.sort(function (a, b) { return b.value - a.value; });
            values.forEach(element => {
                names.push(element.name);
            });
            this.gettsbmOption(totals, names, values, 2);
        });
    }
    loadCategroyFault() {
        this.lawService.getPieCategroyFault().subscribe(data => {
            var totals = 0;
            var names = [];
            var values = [];
            data.forEach(element => {
                totals += Number(element.number);
                values.push({
                    name: element.name,
                    value: Number(element.number)
                });
            });
            values.sort(function (a, b) { return b.value - a.value; });
            values.forEach(element => {
                names.push(element.name);
            });
            this.gettsbmOption(totals, names, values, 1);
        });
    }
    loadAlledu() {
        this.lawService.getPieAllEduData().subscribe(data => {
            var totals = 0;
            var names = ["文盲", "半文盲", "小学", "初中", "高中", "高职", "中专", "大专", "本科", "硕士", "博士", "其他"];
            var values = [];
            var i = 0;
            data["records"].forEach(element => {
                names.forEach(ele => {
                    if (ele == element.person_edu_level) {
                        totals += Number(element.number);
                        values.push({
                            name: ele,
                            value: Number(element.number)
                        });
                    }
                });
            });
            values.sort(function (a, b) { return b.value - a.value; });
            names = [];
            values.forEach(element => {
                names.push(element.name);
            });
            this.gettsbmOption(totals, names, values, 4);
        });
    }
    loadAllage() {
        this.lawService.getPieAllAgeData().subscribe(data => {
            var totals = 0;
            var names = ["不满14周岁", "14-18周岁", "18-30周岁", "30-40周岁",
                "40-50周岁", "50-60周岁", "60-70周岁", "70-75周岁", "超过75周岁"];
            var values = [];
            var i = 0;
            data.records.forEach(element => {
                for (var key in element) {
                    if (key != "unkonwn") {
                        totals += Number(element[key]);
                        values.push({
                            name: names[i],
                            value: Number(element[key])
                        });
                        i++;
                    }
                }
            });
            values.sort(function (a, b) { return b.value - a.value; });
            names = [];
            values.forEach(element => {
                names.push(element.name);
            });
            this.gettsbmOption(totals, names, values, 3);
        });
    }
    gettsbmOption(totals, names, values, index) {
        // 总和
        var total = {
            value: totals,
            name: '案件数量'
        };
        var originalData = values;
        var myChartIndustryOption = echarts.init(document.getElementById('echart' + index));
        myChartIndustryOption.clear();
        var tsbmOption = {
            tooltip: {
                trigger: 'item',
                formatter: '{b}: {d}%'
            },
            title: [{
                    text: total.value,
                    left: '20%',
                    top: '40%',
                    textAlign: 'center',
                    textBaseline: 'middle',
                    textStyle: {
                        color: '#000',
                        fontWeight: 'normal',
                        fontSize: 20
                    }
                }, {
                    text: total.name,
                    left: '20%',
                    top: '50%',
                    textAlign: 'center',
                    textBaseline: 'middle',
                    textStyle: {
                        color: '#000',
                        fontWeight: 'normal',
                        fontSize: 14
                    }
                }],
            color: ['#FFCB00', '#4988e6', '#c4e0f5', '#4be599', '#05c3fa', '#6bcd09'],
            legend: {
                type: 'scroll',
                icon: 'circle',
                itemWidth: 10,
                itemHeight: 10,
                x: 'left',
                y: 'center',
                left: '50%',
                orient: 'vertical',
                data: names,
                textStyle: {
                    color: ' #333',
                    fontSize: 12
                },
                tooltip: {
                    show: true,
                },
                formatter: function (name) {
                    var oa = originalData;
                    var num = totals;
                    for (var i = 0; i < oa.length; i++) {
                        if (name == oa[i].name) {
                            //    if(name.length > 5)
                            //      name = name.substr(0, 9) + '..';
                            var number = 0;
                            if (Math.round((oa[i].value / num * 10000)) / 100 != 0) {
                                number = Math.round((oa[i].value / num * 10000)) / 100;
                            }
                            else if (Math.round((oa[i].value / num * 100000)) / 1000 != 0) {
                                number = Math.round((oa[i].value / num * 100000)) / 1000;
                            }
                            else if (Math.round((oa[i].value / num * 1000000)) / 10000 != 0) {
                                number = Math.round((oa[i].value / num * 1000000)) / 10000;
                            }
                            else if (Math.round((oa[i].value / num * 10000000)) / 100000 != 0) {
                                number = Math.round((oa[i].value / num * 10000000)) / 100000;
                            }
                            return name + ' ' + oa[i].value + ' ' + number + '%';
                        }
                    }
                }
            },
            series: [{
                    hoverAnimation: false,
                    center: ["20%", "45%"],
                    radius: [53, 65],
                    name: 'pie',
                    type: 'pie',
                    // roseType: 'area',
                    selectedMode: 'single',
                    selectedOffset: 16,
                    clockwise: true,
                    startAngle: 90,
                    label: {
                        normal: {
                            show: false
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            borderWidth: 3,
                            borderColor: '#000',
                        },
                        emphasis: {
                            borderWidth: 0,
                            shadowBlur: 5,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.2)'
                        }
                    },
                    data: originalData
                }]
        };
        myChartIndustryOption.setOption(tsbmOption);
        window.onresize = function () {
            myChartIndustryOption.resize();
        };
    }
};
HeroesComponent.ctorParameters = () => [
    { type: _law_law_service__WEBPACK_IMPORTED_MODULE_2__["LawService"] }
];
HeroesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-heroes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./heroes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/index/heroes/heroes.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./heroes.component.scss */ "./src/app/page/index/heroes/heroes.component.scss")).default]
    })
], HeroesComponent);



/***/ }),

/***/ "./src/app/page/law/age-class/age-class.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/page/law/age-class/age-class.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".screens {\n  border-bottom: 1px dashed #ccc;\n}\n\n.temp-kinds-main {\n  display: flex;\n}\n\n.temp-kinds-title {\n  min-width: 60px;\n}\n\n.temp-kinds-list {\n  display: flex;\n  list-style: none;\n  padding-left: 12px;\n  flex-flow: row wrap;\n  max-height: 150px;\n  overflow: auto;\n}\n\n.temp-kinds-list li {\n  padding-left: 8px;\n  padding-right: 8px;\n  cursor: pointer;\n  margin: 0 4px 6px;\n  border: 1px solid #ccc;\n}\n\n.temp-kinds-list li.active {\n  color: #3895FF;\n  border: 1px solid #3895FF;\n}\n\n.age-chart-width {\n  width: 100%;\n  margin-top: 24px;\n  border-bottom: 1px dashed #ccc;\n  margin-bottom: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL3dvcmsvd29yazQvaGRpb2NOZXcvaGRjZ2lvYy9zcmMvbWFpbi9teS1hcHAvc3JjL2FwcC9wYWdlL2xhdy9hZ2UtY2xhc3MvYWdlLWNsYXNzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlL2xhdy9hZ2UtY2xhc3MvYWdlLWNsYXNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7QUNDSjs7QURDQTtFQUNJLGFBQUE7QUNFSjs7QURBQTtFQUNJLGVBQUE7QUNHSjs7QUREQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNJSjs7QURGQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQ0tKOztBREZBO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0FDS0o7O0FESEE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDTUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlL2xhdy9hZ2UtY2xhc3MvYWdlLWNsYXNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjcmVlbnN7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjY2NjO1xufVxuLnRlbXAta2luZHMtbWFpbntcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuLnRlbXAta2luZHMtdGl0bGV7XG4gICAgbWluLXdpZHRoOiA2MHB4O1xufVxuLnRlbXAta2luZHMtbGlzdHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAgbWF4LWhlaWdodDogMTUwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG4udGVtcC1raW5kcy1saXN0IGxpe1xuICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luOiAwIDRweCA2cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbn1cblxuLnRlbXAta2luZHMtbGlzdCBsaS5hY3RpdmV7XG4gICAgY29sb3I6ICAjMzg5NUZGO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzODk1RkY7XG59XG4uYWdlLWNoYXJ0LXdpZHRoe1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjY2NjO1xuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG4iLCIuc2NyZWVucyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2NjYztcbn1cblxuLnRlbXAta2luZHMtbWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi50ZW1wLWtpbmRzLXRpdGxlIHtcbiAgbWluLXdpZHRoOiA2MHB4O1xufVxuXG4udGVtcC1raW5kcy1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi50ZW1wLWtpbmRzLWxpc3QgbGkge1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogMCA0cHggNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xufVxuXG4udGVtcC1raW5kcy1saXN0IGxpLmFjdGl2ZSB7XG4gIGNvbG9yOiAjMzg5NUZGO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzg5NUZGO1xufVxuXG4uYWdlLWNoYXJ0LXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2NjYztcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/page/law/age-class/age-class.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/page/law/age-class/age-class.component.ts ***!
  \***********************************************************/
/*! exports provided: AgeClassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgeClassComponent", function() { return AgeClassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _law_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../law.service */ "./src/app/page/law/law.service.ts");




let AgeClassComponent = class AgeClassComponent {
    constructor(lawSerivce, router) {
        this.lawSerivce = lawSerivce;
        this.router = router;
        this.classValueList = []; //类最
        this.penaltyValueList = []; //个罪
        this.selectTypeIndex = 0; //类最选择
        this.selectPenaltyIndex = null; //个罪选择
        this.selectTagList = [];
        this.pageIndex = 1;
        this.total = 100;
        this.listOfData = [];
        this.echartsXlist = [];
    }
    ngOnInit() {
        // this.getClassList();
    }
    getClassList() {
        this.lawSerivce.getPenaltyClass().subscribe(data => {
            data.penalty_class.forEach((element, index) => {
                if (element != "null" && element != null) {
                    this.classValueList.push({ code: String(index + 1), value: element });
                }
            });
            this.selectTitle = this.classValueList[this.selectTypeIndex].value;
            this.loadCateCharts();
            this.getPenaltyList(this.selectTitle);
            this.getWenshuByAge();
        });
    }
    getPenaltyList(classname) {
        this.penaltyValueList = [];
        this.lawSerivce.getPenaltyByClass(classname).subscribe(data => {
            data.penalty_definite.forEach((element, index) => {
                this.penaltyValueList.push({ code: String(index + 1), value: element });
            });
        });
    }
    getWenshuByAge() {
        this.lawSerivce.getWenshuByAge(this.selectTitle, this.selectPenaltyTitle, this.start_age, this.end_age, String(this.pageIndex)).subscribe(data => {
            this.total = data.count;
            var list = [];
            data.wenshu_list.forEach(element => {
                list.push(element);
            });
            this.listOfData = list;
            console.log("listOfData", this.listOfData);
        });
    }
    //点击的类最
    searchSelectType(index, item) {
        this.selectTypeIndex = index;
        this.selectTitle = item.value;
        //类最切换 条件情况
        this.selectPenaltyIndex = null;
        this.selectPenaltyTitle = null;
        this.start_age = null;
        this.end_age = null;
        this.age_rang = null;
        this.loadCateCharts();
        //点击类最加载个罪
        this.getPenaltyList(this.selectTitle);
        this.getWenshuByAge();
    }
    //点击个罪
    searchPenaltyType(index, item) {
        console.log("page", index);
        if (this.selectPenaltyIndex == index) {
            this.selectPenaltyIndex = null;
            this.selectPenaltyTitle = null;
        }
        else {
            this.selectPenaltyIndex = index;
            this.selectPenaltyTitle = item.value;
        }
        this.loadCateCharts();
        this.getWenshuByAge();
    }
    //删除选择条件
    deleteFlagType(index, item) {
        if (index == 1) {
            this.selectPenaltyIndex = null;
            this.selectPenaltyTitle = null;
        }
        else if (index == 2) {
            this.start_age = null;
            this.end_age = null;
            this.age_rang = null;
        }
        this.loadCateCharts();
        this.getWenshuByAge();
    }
    //加载柱状图
    loadCateCharts() {
        debugger;
        if (this.selectPenaltyIndex != null) { //判断是否点击了个罪
            this.lawSerivce.getPenaltyAgeList().subscribe(data => {
                data.forEach(element => {
                    if (element.penalty_class == this.selectTitle) {
                        // for (var key in element.age_num){
                        //     if (key != "unkown"){
                        //         yList.push(element.age_num[key]);
                        //     }
                        // }
                        element.penalty_definite_age.forEach(ele => {
                            if (ele.penalty_name_definite == this.selectPenaltyTitle) {
                                this.loadDataForChart(ele);
                            }
                        });
                    }
                });
            });
        }
        else {
            this.lawSerivce.getPenaltyAgeClass().subscribe(data => {
                data.forEach((element, index) => {
                    if (!!element.penalty_class && element.penalty_class == this.selectTitle) {
                        this.loadDataForChart(element.age_num);
                    }
                });
            });
        }
    }
    //控制翻页
    searchPageIndexData(index) {
        console.log("page", index);
        this.pageIndex = index;
        this.getWenshuByAge();
    }
    //详情页面
    gotoDetail(item) {
        this.router.navigate(["/agecase/detail"], {
            skipLocationChange: true,
            queryParams: {
                "item": JSON.stringify(item),
                "from": "/agecase"
            }
        });
    }
    echartsClick(index) {
        console.log("index", index);
        let nums = this.echartsXlist[index];
        this.age_rang = nums;
        var age_start = "0";
        var age_end = "120";
        if (nums.indexOf("-") != -1) {
            const arr = nums.split("-");
            age_start = arr[0];
            age_end = arr[1];
        }
        else {
            if (index == 0) {
                age_end = nums;
            }
            else {
                age_start = nums;
            }
        }
        this.start_age = age_start;
        this.end_age = age_end;
        this.getWenshuByAge();
        console.log("age_start", age_start, "age_end", age_end);
    }
    loadDataForChart(map) {
        var yList = [];
        var xList = ["<14", "14-18", "18-30", "30-40", "40-50", "50-60", "60-70", "70-75", ">75"];
        for (var key in map) {
            if (key != "unkown" && key != "unkonwn" && key != "penalty_name_definite") {
                yList.push(map[key]);
            }
        }
        this.echartsXlist = ["14", "14-18", "18-30", "30-40", "40-50", "50-60", "60-70", "70-75", "75"];
        console.log("xList", xList, "yList", yList);
        var option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
            },
            grid: {
                top: '10%',
                right: '3%',
                left: '15%',
                bottom: '15%'
            },
            xAxis: [{
                    type: 'category',
                    name: '',
                    nameTextStyle: {
                        color: "#333"
                    },
                    data: xList,
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(255,255,255,0.52)'
                        }
                    },
                    axisLabel: {
                        margin: 10,
                        interval: 0,
                        color: '#000',
                        textStyle: {
                            fontSize: 11
                        },
                    },
                }],
            yAxis: [
                {
                    type: 'value',
                    name: '（个）',
                    nameTextStyle: {
                        color: "#333"
                    },
                    axisLabel: {
                        formatter: '{value}',
                        color: '#333',
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(196,224,245,1)'
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            type: 'dashed',
                            color: 'rgba(196,224,245,1)'
                        }
                    }
                }
            ],
            series: [{
                    type: 'bar',
                    data: yList,
                    name: '数量',
                    barWidth: '16px',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#4DDEFE' // 0% 处的颜色
                                }, {
                                    offset: 0.5,
                                    color: '#57FBFA' // 50% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#3D8BFF' // 100% 处的颜色
                                }], false),
                            barBorderRadius: [2, 2, 0.1, 0.1],
                            shadowColor: 'rgba(0,0,0,0)',
                            shadowBlur: 4,
                            label: {
                                show: true,
                                position: 'top',
                                textStyle: {
                                    color: '#111',
                                    fontSize: 14
                                }
                            },
                        }
                    },
                }]
        };
        var mychart1 = echarts.init(document.getElementById("type-echart"));
        mychart1.clear();
        mychart1.setOption(option);
        mychart1.getZr().on('click', params => {
            let pointInPixel = [params.offsetX, params.offsetY];
            console.log("params", params);
            if (mychart1.containPixel('grid', pointInPixel)) {
                let xIndex = mychart1.convertFromPixel({ seriesIndex: 0 }, [params.offsetX, params.offsetY])[0];
                console.log("xIndex", xIndex);
                this.echartsClick(xIndex);
            }
        });
        window.onresize = mychart1.resize();
    }
};
AgeClassComponent.ctorParameters = () => [
    { type: _law_service__WEBPACK_IMPORTED_MODULE_3__["LawService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AgeClassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-age-class',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./age-class.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/law/age-class/age-class.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./age-class.component.scss */ "./src/app/page/law/age-class/age-class.component.scss")).default]
    })
], AgeClassComponent);



/***/ }),

/***/ "./src/app/page/law/detail/detail.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/page/law/detail/detail.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".back {\n  position: absolute;\n  right: 16px;\n  top: 4px;\n  color: #1890ff;\n  cursor: pointer;\n  font-size: 16px;\n}\n\n.container-wrap {\n  position: relative;\n}\n\n.content {\n  padding: 8px;\n  padding-top: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL3dvcmsvd29yazQvaGRpb2NOZXcvaGRjZ2lvYy9zcmMvbWFpbi9teS1hcHAvc3JjL2FwcC9wYWdlL2xhdy9kZXRhaWwvZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlL2xhdy9kZXRhaWwvZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7QUNFSjs7QURBQTtFQUVJLFlBQUE7RUFDQSxpQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvcGFnZS9sYXcvZGV0YWlsL2RldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNre1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTZweDtcbiAgICB0b3A6IDRweDtcbiAgICBjb2xvcjogIzE4OTBmZjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuLmNvbnRhaW5lci13cmFwe1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jb250ZW50IHtcbiAgICAvLyBiYWNrZ3JvdW5kOiAjRUNFQ0VDO1xuICAgIHBhZGRpbmc6OHB4O1xuICAgIHBhZGRpbmctdG9wOiAzMnB4O1xufSIsIi5iYWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTZweDtcbiAgdG9wOiA0cHg7XG4gIGNvbG9yOiAjMTg5MGZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmNvbnRhaW5lci13cmFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY29udGVudCB7XG4gIHBhZGRpbmc6IDhweDtcbiAgcGFkZGluZy10b3A6IDMycHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/page/law/detail/detail.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/page/law/detail/detail.component.ts ***!
  \*****************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let DetailComponent = class DetailComponent {
    constructor(acrouter, router, doc) {
        this.acrouter = acrouter;
        this.router = router;
        this.doc = doc;
    }
    ngAfterViewInit() {
        window.scroll(0, 0);
    }
    ngOnInit() {
        this.acrouter.queryParams.subscribe(params => {
            console.log("params222", params);
            this.backurl = params["from"];
            this.itemDetail = JSON.parse(params["item"]);
            console.log("this.itemDetail", this.itemDetail);
        });
    }
    goBack() {
        this.router.navigate([this.backurl]);
    }
};
DetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] }
];
DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/law/detail/detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./detail.component.scss */ "./src/app/page/law/detail/detail.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]))
], DetailComponent);



/***/ }),

/***/ "./src/app/page/law/education/education.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/page/law/education/education.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".screens {\n  border-bottom: 1px dashed #ccc;\n}\n\n.temp-kinds-main {\n  display: flex;\n}\n\n.temp-kinds-title {\n  min-width: 60px;\n}\n\n.temp-kinds-list {\n  display: flex;\n  list-style: none;\n  padding-left: 12px;\n  flex-flow: row wrap;\n  max-height: 200px;\n  overflow: auto;\n}\n\n.temp-kinds-list li {\n  padding-left: 8px;\n  padding-right: 8px;\n  cursor: pointer;\n  margin: 0 4px 6px;\n  border: 1px solid #ccc;\n}\n\n.temp-kinds-list li.active {\n  color: #3895FF;\n  border: 1px solid #3895FF;\n}\n\n.age-chart-width {\n  width: 100%;\n  margin-top: 24px;\n  border-bottom: 1px dashed #ccc;\n  margin-bottom: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL3dvcmsvd29yazQvaGRpb2NOZXcvaGRjZ2lvYy9zcmMvbWFpbi9teS1hcHAvc3JjL2FwcC9wYWdlL2xhdy9lZHVjYXRpb24vZWR1Y2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlL2xhdy9lZHVjYXRpb24vZWR1Y2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7QUNDSjs7QURDQTtFQUNJLGFBQUE7QUNFSjs7QURBQTtFQUNJLGVBQUE7QUNHSjs7QUREQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNJSjs7QURGQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQ0tKOztBREZBO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0FDS0o7O0FESEE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDTUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlL2xhdy9lZHVjYXRpb24vZWR1Y2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjcmVlbnN7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjY2NjO1xufVxuLnRlbXAta2luZHMtbWFpbntcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuLnRlbXAta2luZHMtdGl0bGV7XG4gICAgbWluLXdpZHRoOiA2MHB4O1xufVxuLnRlbXAta2luZHMtbGlzdHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG4udGVtcC1raW5kcy1saXN0IGxpe1xuICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luOiAwIDRweCA2cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbn1cblxuLnRlbXAta2luZHMtbGlzdCBsaS5hY3RpdmV7XG4gICAgY29sb3I6ICAjMzg5NUZGO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzODk1RkY7XG59XG4uYWdlLWNoYXJ0LXdpZHRoe1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjY2NjO1xuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG4iLCIuc2NyZWVucyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2NjYztcbn1cblxuLnRlbXAta2luZHMtbWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi50ZW1wLWtpbmRzLXRpdGxlIHtcbiAgbWluLXdpZHRoOiA2MHB4O1xufVxuXG4udGVtcC1raW5kcy1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi50ZW1wLWtpbmRzLWxpc3QgbGkge1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogMCA0cHggNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xufVxuXG4udGVtcC1raW5kcy1saXN0IGxpLmFjdGl2ZSB7XG4gIGNvbG9yOiAjMzg5NUZGO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzg5NUZGO1xufVxuXG4uYWdlLWNoYXJ0LXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2NjYztcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/page/law/education/education.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/page/law/education/education.component.ts ***!
  \***********************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _law_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../law.service */ "./src/app/page/law/law.service.ts");




let EducationComponent = class EducationComponent {
    constructor(lawSerivce, router) {
        this.lawSerivce = lawSerivce;
        this.router = router;
        this.classValueList = []; //类最
        this.penaltyValueList = []; //个罪
        this.selectTypeIndex = 0; //类最选择
        this.selectPenaltyIndex = null; //个罪选择
        this.pageIndex = 1;
        this.total = 100;
        this.listOfData = [];
        this.echartsXlist = [];
    }
    ngOnInit() {
        // this.getClassList();
    }
    getClassList() {
        this.lawSerivce.getPenaltyClass().subscribe((data) => {
            data.penalty_class.forEach((element, index) => {
                if (element != "null" && element != null) {
                    this.classValueList.push({ code: String(index + 1), value: element });
                }
            });
            this.selectTitle = this.classValueList[this.selectTypeIndex].value;
            this.loadCateCharts();
            this.getPenaltyList(this.selectTitle);
            this.getWenshuByEdu();
        });
    }
    getPenaltyList(classname) {
        this.penaltyValueList = [];
        this.lawSerivce.getPenaltyByClass(classname).subscribe((data) => {
            data.penalty_definite.forEach((element, index) => {
                this.penaltyValueList.push({ code: String(index + 1), value: element });
            });
        });
    }
    getWenshuByEdu() {
        this.lawSerivce
            .getWenshuByEduOrType(this.selectTitle, this.selectPenaltyTitle, "", this.eduType, String(this.pageIndex))
            .subscribe((data) => {
            this.total = data.count;
            var list = [];
            data.wenshu_list.forEach((element) => {
                list.push(element);
            });
            this.listOfData = list;
            console.log("listOfData", this.listOfData);
        });
    }
    //点击的类最
    searchSelectType(index, item) {
        this.selectTypeIndex = index;
        this.selectTitle = item.value;
        //类最切换 条件情况
        this.selectPenaltyIndex = null;
        this.selectPenaltyTitle = null;
        this.eduType = null;
        this.loadCateCharts();
        //点击类最加载个罪
        this.getPenaltyList(this.selectTitle);
        debugger;
        this.getWenshuByEdu();
    }
    //点击个罪
    searchPenaltyType(index, item) {
        console.log("page", index);
        if (this.selectPenaltyIndex == index) {
            this.selectPenaltyIndex = null;
            this.selectPenaltyTitle = null;
        }
        else {
            this.selectPenaltyIndex = index;
            this.selectPenaltyTitle = item.value;
        }
        this.loadCateCharts();
        this.getWenshuByEdu();
    }
    //删除选择条件
    deleteFlagType(index, item) {
        if (index == 1) {
            this.selectPenaltyIndex = null;
            this.selectPenaltyTitle = null;
        }
        else if (index == 2) {
            this.eduType = null;
        }
        this.loadCateCharts();
        this.getWenshuByEdu();
    }
    //控制翻页
    searchPageIndexData(index) {
        console.log("page", index);
        this.pageIndex = index;
        this.getWenshuByEdu();
    }
    echartsClick(index) {
        console.log("index", index);
        let nums = this.echartsXlist[index];
        this.eduType = nums;
        this.getWenshuByEdu();
    }
    //详情页面
    gotoDetail(item) {
        this.router.navigate(["/education/detail"], {
            skipLocationChange: true,
            queryParams: {
                item: JSON.stringify(item),
                from: "/education",
            },
        });
    }
    loadCateCharts() {
        if (this.selectPenaltyIndex != null) {
            //判断是否点击了个罪
            this.lawSerivce.getPenaltyEduList().subscribe((data) => {
                debugger;
                data.forEach((element) => {
                    if (element.penalty_class == this.selectTitle) {
                        // for (var key in element.age_num){
                        //     if (key != "unkown"){
                        //         yList.push(element.age_num[key]);
                        //     }
                        // }
                        element.definite.forEach((ele) => {
                            if (ele.name == this.selectPenaltyTitle) {
                                this.loadDataForChart(ele.edu);
                            }
                        });
                    }
                });
            });
        }
        else {
            this.lawSerivce.getPenaltyEduClass().subscribe((data) => {
                data.forEach((element, index) => {
                    if (!!element.penalty_class &&
                        element.penalty_class == this.selectTitle) {
                        this.loadDataForChart(element.edu);
                    }
                });
            });
        }
    }
    loadDataForChart(list) {
        var yList = [];
        var xList = [
            "文盲",
            "半文盲",
            "小学",
            "初中",
            "高中",
            "高职",
            "大专",
            "本科",
            "硕士",
            "博士",
        ];
        this.echartsXlist = xList;
        xList.forEach((item) => {
            var flag = 0;
            list.forEach((ele) => {
                if (item == ele.name) {
                    flag = 1;
                    yList.push(ele.number);
                }
            });
            console.log("flag", flag);
            if (flag == 0) {
                //补0
                yList.push(0);
            }
        });
        console.log("xList", xList, "yList", yList);
        var option = {
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "shadow",
                },
            },
            grid: {
                top: "10%",
                right: "3%",
                left: "15%",
                bottom: "15%",
            },
            xAxis: [
                {
                    type: "category",
                    name: "",
                    nameTextStyle: {
                        color: "#333",
                    },
                    data: xList,
                    axisLine: {
                        lineStyle: {
                            color: "rgba(255,255,255,0.52)",
                        },
                    },
                    axisLabel: {
                        margin: 10,
                        interval: 0,
                        color: "#000",
                        textStyle: {
                            fontSize: 11,
                        },
                    },
                },
            ],
            yAxis: [
                {
                    type: "value",
                    name: "（个）",
                    nameTextStyle: {
                        color: "#333",
                    },
                    axisLabel: {
                        formatter: "{value}",
                        color: "#333",
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: "rgba(196,224,245,1)",
                        },
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            type: "dashed",
                            color: "rgba(196,224,245,1)",
                        },
                    },
                },
            ],
            series: [
                {
                    type: "bar",
                    data: yList,
                    name: "数量",
                    barWidth: "16px",
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: "#4DDEFE",
                                },
                                {
                                    offset: 0.5,
                                    color: "#57FBFA",
                                },
                                {
                                    offset: 1,
                                    color: "#3D8BFF",
                                },
                            ], false),
                            barBorderRadius: [2, 2, 0.1, 0.1],
                            shadowColor: "rgba(0,0,0,0)",
                            shadowBlur: 4,
                            label: {
                                show: true,
                                position: "top",
                                textStyle: {
                                    //数值样式
                                    color: "#111",
                                    fontSize: 14,
                                },
                            },
                        },
                    },
                },
            ],
        };
        var mychart1 = echarts.init(document.getElementById("type-echart"));
        mychart1.clear();
        mychart1.setOption(option);
        mychart1.getZr().on("click", (params) => {
            let pointInPixel = [params.offsetX, params.offsetY];
            console.log("params", params);
            if (mychart1.containPixel("grid", pointInPixel)) {
                let xIndex = mychart1.convertFromPixel({ seriesIndex: 0 }, [
                    params.offsetX,
                    params.offsetY,
                ])[0];
                console.log("xIndex", xIndex);
                this.echartsClick(xIndex);
            }
        });
        window.onresize = mychart1.resize();
    }
};
EducationComponent.ctorParameters = () => [
    { type: _law_service__WEBPACK_IMPORTED_MODULE_3__["LawService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
EducationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-education",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./education.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/law/education/education.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./education.component.scss */ "./src/app/page/law/education/education.component.scss")).default]
    })
], EducationComponent);



/***/ }),

/***/ "./src/app/page/law/law-story/law-story.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/page/law/law-story/law-story.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".screens {\n  border-bottom: 1px dashed #ccc;\n}\n\n.temp-kinds-main {\n  display: flex;\n}\n\n.temp-kinds-title {\n  min-width: 60px;\n}\n\n.temp-kinds-list {\n  display: flex;\n  list-style: none;\n  padding-left: 12px;\n  flex-flow: row wrap;\n  max-height: 150px;\n  overflow: auto;\n}\n\n.temp-kinds-list li {\n  padding-left: 8px;\n  padding-right: 8px;\n  cursor: pointer;\n  margin: 0 4px 6px;\n  border: 1px solid #ccc;\n}\n\n.temp-kinds-list li.active {\n  color: #3895FF;\n  border: 1px solid #3895FF;\n}\n\n.age-chart-width {\n  width: 100%;\n  margin-top: 24px;\n  border-bottom: 1px dashed #ccc;\n  margin-bottom: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL3dvcmsvd29yazQvaGRpb2NOZXcvaGRjZ2lvYy9zcmMvbWFpbi9teS1hcHAvc3JjL2FwcC9wYWdlL2xhdy9sYXctc3RvcnkvbGF3LXN0b3J5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlL2xhdy9sYXctc3RvcnkvbGF3LXN0b3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7QUNDSjs7QURDQTtFQUNJLGFBQUE7QUNFSjs7QURBQTtFQUNJLGVBQUE7QUNHSjs7QUREQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNJSjs7QURGQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQ0tKOztBREZBO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0FDS0o7O0FESEE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDTUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlL2xhdy9sYXctc3RvcnkvbGF3LXN0b3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjcmVlbnN7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjY2NjO1xufVxuLnRlbXAta2luZHMtbWFpbntcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuLnRlbXAta2luZHMtdGl0bGV7XG4gICAgbWluLXdpZHRoOiA2MHB4O1xufVxuLnRlbXAta2luZHMtbGlzdHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAgbWF4LWhlaWdodDogMTUwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG4udGVtcC1raW5kcy1saXN0IGxpe1xuICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luOiAwIDRweCA2cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbn1cblxuLnRlbXAta2luZHMtbGlzdCBsaS5hY3RpdmV7XG4gICAgY29sb3I6ICAjMzg5NUZGO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzODk1RkY7XG59XG4uYWdlLWNoYXJ0LXdpZHRoe1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjY2NjO1xuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG4iLCIuc2NyZWVucyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2NjYztcbn1cblxuLnRlbXAta2luZHMtbWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi50ZW1wLWtpbmRzLXRpdGxlIHtcbiAgbWluLXdpZHRoOiA2MHB4O1xufVxuXG4udGVtcC1raW5kcy1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi50ZW1wLWtpbmRzLWxpc3QgbGkge1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogMCA0cHggNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xufVxuXG4udGVtcC1raW5kcy1saXN0IGxpLmFjdGl2ZSB7XG4gIGNvbG9yOiAjMzg5NUZGO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzg5NUZGO1xufVxuXG4uYWdlLWNoYXJ0LXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2NjYztcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/page/law/law-story/law-story.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/page/law/law-story/law-story.component.ts ***!
  \***********************************************************/
/*! exports provided: LawStoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LawStoryComponent", function() { return LawStoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _law_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../law.service */ "./src/app/page/law/law.service.ts");




// declare var echarts
let LawStoryComponent = class LawStoryComponent {
    constructor(lawSerivce, router) {
        this.lawSerivce = lawSerivce;
        this.router = router;
        this.classValueList = []; //类最
        this.penaltyValueList = []; //个罪
        this.lawStoryList = []; //法定情节
        this.selectTypeIndex = 0; //类最选择
        this.selectPenaltyIndex = null; //个罪选择
        this.selectLawStoryIndex = null; //法定情节选择
        this.selectTagList = [];
        // start_age:string;
        // end_age:string;
        // age_rang:string;
        this.pageIndex = 1;
        this.total = 100;
        this.listOfData = [];
        this.echartsXlist = [];
    }
    ngOnInit() {
        // this.getClassList();
    }
    getClassList() {
        this.lawSerivce.getPenaltyClass().subscribe((data) => {
            data.penalty_class.forEach((element, index) => {
                if (element != "null" && element != null) {
                    this.classValueList.push({ code: String(index + 1), value: element });
                }
            });
            this.selectTitle = this.classValueList[this.selectTypeIndex].value;
            this.loadCateCharts();
            this.getPenaltyList(this.selectTitle);
            this.getLawStroyList();
            this.getWenshuByLawStory();
        });
    }
    getPenaltyList(classname) {
        this.penaltyValueList = [];
        this.lawSerivce.getPenaltyByClass(classname).subscribe((data) => {
            data.penalty_definite.forEach((element, index) => {
                this.penaltyValueList.push({ code: String(index + 1), value: element });
            });
        });
    }
    getLawStroyList() {
        this.lawSerivce.getLawsStory().subscribe((data) => {
            data.forEach((element) => {
                if (element != null) {
                    this.lawStoryList.push(element);
                }
            });
        });
    }
    getWenshuByLawStory() {
        this.lawSerivce
            .getWenshuByStory(this.selectTitle, this.selectPenaltyTitle, this.selectPLawStoryTitle, String(this.pageIndex))
            .subscribe((data) => {
            this.total = data.count;
            var list = [];
            data.wenshu_list.forEach((element) => {
                list.push(element);
            });
            this.listOfData = list;
            console.log("listOfData", this.listOfData);
        });
    }
    //点击的类最
    searchSelectType(index, item) {
        this.selectTypeIndex = index;
        this.selectTitle = item.value;
        //类最切换 条件情况
        this.selectPenaltyIndex = null;
        this.selectPenaltyTitle = null;
        this.selectLawStoryIndex = null;
        this.selectPLawStoryTitle = null;
        // this.loadCateCharts();
        //点击类最加载个罪
        this.getPenaltyList(this.selectTitle);
        this.getWenshuByLawStory();
    }
    //点击个罪
    searchPenaltyType(index, item) {
        console.log("page", index);
        if (this.selectPenaltyIndex == index) {
            this.selectPenaltyIndex = null;
            this.selectPenaltyTitle = null;
        }
        else {
            this.selectPenaltyIndex = index;
            this.selectPenaltyTitle = item.value;
        }
        // this.loadCateCharts();
        this.getWenshuByLawStory();
    }
    //点击法定情节
    searchLawStory(index, item) {
        if (this.selectLawStoryIndex == index) {
            this.selectLawStoryIndex = null;
            this.selectPLawStoryTitle = null;
        }
        else {
            this.selectLawStoryIndex = index;
            this.selectPLawStoryTitle = item;
        }
        // this.loadCateCharts();
        this.getWenshuByLawStory();
    }
    //删除选择条件
    deleteFlagType(index, item) {
        if (index == 1) {
            this.selectPenaltyIndex = null;
            this.selectPenaltyTitle = null;
        }
        else if (index == 2) {
            this.selectLawStoryIndex = null;
            this.selectPLawStoryTitle = null;
        }
        this.loadCateCharts();
        this.getWenshuByLawStory();
    }
    //加载柱状图
    loadCateCharts() {
        debugger;
        if (this.selectPenaltyIndex != null) {
            //判断是否点击了个罪
            this.lawSerivce.getPenaltyAgeList().subscribe((data) => {
                data.forEach((element) => {
                    if (element.penalty_class == this.selectTitle) {
                        // for (var key in element.age_num){
                        //     if (key != "unkown"){
                        //         yList.push(element.age_num[key]);
                        //     }
                        // }
                        element.penalty_definite_age.forEach((ele) => {
                            if (ele.penalty_name_definite == this.selectPenaltyTitle) {
                                this.loadDataForChart(ele);
                            }
                        });
                    }
                });
            });
        }
        else {
            this.lawSerivce.getPenaltyAgeClass().subscribe((data) => {
                data.forEach((element, index) => {
                    if (!!element.penalty_class &&
                        element.penalty_class == this.selectTitle) {
                        this.loadDataForChart(element.age_num);
                    }
                });
            });
        }
    }
    //控制翻页
    searchPageIndexData(index) {
        console.log("page", index);
        this.pageIndex = index;
        this.getWenshuByLawStory();
    }
    //详情页面
    gotoDetail(item) {
        this.router.navigate(["/story/detail"], {
            skipLocationChange: true,
            queryParams: {
                item: JSON.stringify(item),
                from: "/story",
            },
        });
    }
    // private echartsClick(index:number){
    //   console.log("index",index);
    //   let nums:string = this.echartsXlist[index];
    //   this.age_rang = nums;
    //   var age_start = "0";
    //   var age_end = "120"
    //   if (nums.indexOf("-") != -1){
    //    const arr =  nums.split("-");
    //    age_start = arr[0];
    //    age_end = arr[1];
    //   }else{
    //     if (index == 0){
    //       age_end = nums;
    //     }else{
    //       age_start = nums;
    //     }
    //   }
    //   this.start_age = age_start;
    //   this.end_age = age_end;
    //   this.getWenshuByAge();
    //   console.log("age_start",age_start,"age_end",age_end);
    // }
    loadDataForChart(map) {
        //     var yList = [];
        //     var xList = ["<14","14-18","18-30","30-40","40-50","50-60","60-70","70-75",">75"]
        //            for (var key in map){
        //                if (key != "unkown" && key != "unkonwn" && key != "penalty_name_definite"){
        //                    yList.push(map[key]);
        //                }
        //     }
        //     this.echartsXlist  = ["14","14-18","18-30","30-40","40-50","50-60","60-70","70-75","75"];
        //     console.log("xList",xList,"yList",yList);
        //     var option = {
        //     tooltip: {
        //     trigger: 'axis',
        //     axisPointer: {
        //         type: 'shadow'
        //     },
        //     // formatter: '{b0}<br />{a0}: {c0}亿元<br />{a1}: {c1}%'
        //     },
        //     grid: {
        //     top: '10%',
        //     right: '3%',
        //     left: '15%',
        //     bottom: '15%'
        //     },
        //     xAxis: [{
        //     type: 'category',
        //     name: '',
        //     nameTextStyle: {
        //         color: "#333"
        //     },
        //     data: xList,
        //     axisLine: {
        //         lineStyle: {
        //         color: 'rgba(255,255,255,0.52)'
        //         }
        //     },
        //     axisLabel: {
        //         margin: 10,
        //         interval:0,
        //         color: '#000',
        //         textStyle: {
        //         fontSize: 11
        //         },
        //     },
        //     }],
        //     yAxis: [
        //     {
        //         type: 'value',
        //         name: '（个）',
        //         nameTextStyle: {
        //         color: "#333"
        //         },
        //         axisLabel: {
        //         formatter: '{value}',
        //         color: '#333',
        //         },
        //         axisLine: {
        //         show: true,
        //         lineStyle: {
        //             color: 'rgba(196,224,245,1)'
        //         }
        //         },
        //         splitLine: {
        //         show: true,
        //         lineStyle: {
        //             type: 'dashed',
        //             color: 'rgba(196,224,245,1)'
        //         }
        //         }
        //     }],
        //     series: [{
        //     type: 'bar',
        //     data: yList,
        //     name: '数量',
        //     barWidth: '16px',
        //     itemStyle: {
        //         normal: {
        //         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        //             offset: 0,
        //             color: '#4DDEFE' // 0% 处的颜色
        //         }, {
        //             offset: 0.5,
        //             color: '#57FBFA' // 50% 处的颜色
        //         }, {
        //             offset: 1,
        //             color: '#3D8BFF' // 100% 处的颜色
        //         }], false),
        //         barBorderRadius: [2, 2, 0.1, 0.1],
        //         shadowColor: 'rgba(0,0,0,0)',
        //         shadowBlur: 4,
        //         label: {
        //             show: true, //开启显示
        //             position: 'top', //在上方显示
        //             textStyle: { //数值样式
        //             color: '#111',
        //             fontSize: 14
        //             }
        //         },
        //         }
        //     },
        //     }]
        // };
        //     var mychart1 = echarts.init(document.getElementById("type-echart"));
        //     mychart1.clear();
        //     mychart1.setOption(option);
        //     mychart1.getZr().on('click', params => {
        //       let pointInPixel = [params.offsetX, params.offsetY]
        //       console.log("params",params);
        //       if (mychart1.containPixel('grid', pointInPixel)) {
        //         let xIndex = mychart1.convertFromPixel({ seriesIndex: 0 }, [params.offsetX, params.offsetY])[0]
        //         console.log("xIndex",xIndex)
        //         this.echartsClick(xIndex);
        //       }
        //     })
        //     window.onresize = mychart1.resize();
    }
};
LawStoryComponent.ctorParameters = () => [
    { type: _law_service__WEBPACK_IMPORTED_MODULE_3__["LawService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LawStoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-law-story",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./law-story.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/law/law-story/law-story.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./law-story.component.scss */ "./src/app/page/law/law-story/law-story.component.scss")).default]
    })
], LawStoryComponent);



/***/ }),

/***/ "./src/app/page/law/law.module.ts":
/*!****************************************!*\
  !*** ./src/app/page/law/law.module.ts ***!
  \****************************************/
/*! exports provided: LawModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LawModule", function() { return LawModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _age_class_age_class_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./age-class/age-class.component */ "./src/app/page/law/age-class/age-class.component.ts");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./education/education.component */ "./src/app/page/law/education/education.component.ts");
/* harmony import */ var _province_province_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./province/province.component */ "./src/app/page/law/province/province.component.ts");
/* harmony import */ var _period_period_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./period/period.component */ "./src/app/page/law/period/period.component.ts");
/* harmony import */ var _sentence_sentence_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sentence/sentence.component */ "./src/app/page/law/sentence/sentence.component.ts");
/* harmony import */ var _type_case_type_case_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./type-case/type-case.component */ "./src/app/page/law/type-case/type-case.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/page/law/detail/detail.component.ts");
/* harmony import */ var _law_story_law_story_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./law-story/law-story.component */ "./src/app/page/law/law-story/law-story.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./src/app/page/law/login/login.component.ts");
/* harmony import */ var _no_penalty_no_penalty_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./no-penalty/no-penalty.component */ "./src/app/page/law/no-penalty/no-penalty.component.ts");















let LawModule = class LawModule {
};
LawModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _age_class_age_class_component__WEBPACK_IMPORTED_MODULE_3__["AgeClassComponent"],
            _education_education_component__WEBPACK_IMPORTED_MODULE_4__["EducationComponent"],
            _province_province_component__WEBPACK_IMPORTED_MODULE_5__["ProvinceComponent"],
            _period_period_component__WEBPACK_IMPORTED_MODULE_6__["PeriodComponent"],
            _sentence_sentence_component__WEBPACK_IMPORTED_MODULE_7__["SentenceComponent"],
            _type_case_type_case_component__WEBPACK_IMPORTED_MODULE_8__["TypeCaseComponent"],
            _detail_detail_component__WEBPACK_IMPORTED_MODULE_11__["DetailComponent"],
            _law_story_law_story_component__WEBPACK_IMPORTED_MODULE_12__["LawStoryComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
            _no_penalty_no_penalty_component__WEBPACK_IMPORTED_MODULE_14__["NoPenaltyComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_10__["NzTableModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_10__["NzDividerModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_10__["NgZorroAntdModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        ],
        exports: [
            _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"]
        ]
    })
], LawModule);



/***/ }),

/***/ "./src/app/page/law/law.service.ts":
/*!*****************************************!*\
  !*** ./src/app/page/law/law.service.ts ***!
  \*****************************************/
/*! exports provided: LawService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LawService", function() { return LawService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let LawService = class LawService {
    constructor(http) {
        this.http = http;
        this.url = config;
    }
    getPieAllAgeData() {
        return this.http.get("assets/data/all_age.json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
    }
    getPieAllEduData() {
        return this.http.get("assets/data/all_edu.json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
    }
    getPieCategroyFault() {
        return this.http.get("assets/data/penalty_prison_type_num_0917.json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
    }
    getPieloadCateNumb() {
        return this.http.get("assets/data/penalty_class_num.json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
    }
    //类最 刑法种类
    getTypeloadCateNumb() {
        return this.http.get("assets/data/penalty_prison_type_num_0913.json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
    }
    //类最 刑期分布
    getPenaltyLengthClass() {
        return this.http.get("assets/data/penalty_length_class_divide.json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
    }
    //类最文化程度分布
    getPenaltyEduClass() {
        return this.http.get("assets/data/penalty_edu_num_0913.json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
    }
    //个罪文化程度分布
    getPenaltyEduList() {
        return this.http.get("assets/data/penalty_definite_edu_num_0913.json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
    }
    //类最年龄分布
    getPenaltyAgeClass() {
        return this.http.get("assets/data/penalty_age_num_0913.json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
    }
    //个罪年龄分布
    getPenaltyAgeList() {
        return this.http.get("assets/data/penalty_class_definite_age_num_0913.json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
    }
    //类最发生省份分布
    getPenaltyAddress() {
        return this.http.get("assets/data/penalty_province_address.json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
    }
    //类最居住地省份分布
    getPenaltyResidence() {
        return this.http.get("assets/data/penalty_province_residence.json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
    }
    //类最羁押周期
    getTypePeriodLength() {
        return this.http.get("assets/data/decision_inter_month_divide.json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
    }
    //获取类最列表
    getPenaltyClass() {
        debugger;
        return this.http.get(this.url + "get_penalty_class").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
    }
    getAllClass(code) {
        return this.http.get(this.url + "get_penalty_class?code=" + code).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
    }
    getAllList(code) {
        return this.http.get(this.url + "get_wenshuBy_definite?code=" + code).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
    }
    getLawsStory() {
        return this.http.get(this.url + "get_laws").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res.laws));
    }
    getNoPenaltyKeyword() {
        return this.http.get(this.url + "getNoPenaltyKeyword").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res.keyword));
    }
    getNoPenaltyLaws() {
        return this.http.get(this.url + "getNoPenaltyLaws").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res.laws));
    }
    getWenshuByStory(penalty_class, penalty_definite, laws, page_no) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = { headers: headers };
        let params = new URLSearchParams();
        params.append("penalty_class", penalty_class);
        if (penalty_definite)
            params.append("penalty_definite", penalty_definite);
        if (laws)
            params.append("laws", laws);
        if (page_no)
            params.append("page_no", page_no);
        let body = params.toString();
        return this.http.post(this.url + "get_wenshu_laws", body, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
        // return this.http.get("assets/data/service/get_wenshuBy_class.json").pipe(map((res:{"wenshu_list":[any]})=>res))
    }
    // getPenaltyClass(){
    //   return this.http.get("assets/data/service/get_penalty_class.json").pipe(map((res:{"penalty_class":[string]})=>res))
    // }
    //获取类最对应的个罪
    getPenaltyByClass(penalty_class) {
        // return this.http.get("assets/data/service/get_penalty_byClass.json").pipe(map((res:{"penalty_definite":[string]})=>res))
        const param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set("penalty_class", penalty_class);
        return this.http.get(this.url + "get_penalty_byClass", { params: param }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
    }
    //获取年龄对应的文书列表
    getWenshuByAge(penalty_class, penalty_definite, age_start, age_end, page_no) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = { headers: headers };
        let params = new URLSearchParams();
        params.append("penalty_class", penalty_class);
        if (penalty_definite)
            params.append("penalty_definite", penalty_definite);
        if (age_start)
            params.append("age_start", age_start);
        if (age_end)
            params.append("age_end", age_end);
        if (page_no)
            params.append("page_no", page_no);
        let body = params.toString();
        return this.http.post(this.url + "get_wenshu_age", body, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
        // return this.http.get("assets/data/service/get_wenshuBy_class.json").pipe(map((res:{"wenshu_list":[any]})=>res))
    }
    //根据教育程度获取文书列表
    getWenshuByEduOrType(penalty_class, penalty_definite, prison_type, edu_level, page_no) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = { headers: headers };
        let params = new URLSearchParams();
        params.append("penalty_class", penalty_class);
        if (penalty_definite)
            params.append("penalty_definite", penalty_definite);
        if (prison_type)
            params.append("prison_type", prison_type);
        if (edu_level)
            params.append("edu_level", edu_level);
        if (page_no)
            params.append("page_no", page_no);
        let body = params.toString();
        return this.http.post(this.url + "get_wenshu_prisonTypeEdu", body, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
        // return this.http.get("assets/data/service/get_wenshuBy_class.json").pipe(map((res:{"wenshu_list":[any]})=>res))
    }
    //刑期长度
    getWenshuPrisonLength(penalty_class, penalty_definite, length_start, length_end, page_no) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = { headers: headers };
        let params = new URLSearchParams();
        params.append("penalty_class", penalty_class);
        if (penalty_definite)
            params.append("penalty_definite", penalty_definite);
        if (length_start)
            params.append("length_start", length_start);
        if (length_end)
            params.append("length_end", length_end);
        if (page_no)
            params.append("page_no", page_no);
        let body = params.toString();
        return this.http.post(this.url + "get_wenshuPrisonLength", body, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
        // return this.http.get("assets/data/service/get_wenshuBy_class.json").pipe(map((res:{"wenshu_list":[any]})=>res))
    }
    getWenshuProvince(penalty_class, penalty_definite, province_address, province_residence, page_no) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = { headers: headers };
        let params = new URLSearchParams();
        params.append("penalty_class", penalty_class);
        if (penalty_definite)
            params.append("penalty_definite", penalty_definite);
        if (province_address)
            params.append("province_address", province_address);
        if (province_residence)
            params.append("province_residence", province_residence);
        if (page_no)
            params.append("page_no", page_no);
        let body = params.toString();
        return this.http.post(this.url + "get_wenshu_province", body, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
        // return this.http.get("assets/data/service/get_wenshuBy_class.json").pipe(map((res:{"wenshu_list":[any]})=>res))
    }
    //羁押周期文书
    getWenshuInterMonth(penalty_class, penalty_definite, start, end, page_no) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = { headers: headers };
        let params = new URLSearchParams();
        params.append("penalty_class", penalty_class);
        if (penalty_definite)
            params.append("penalty_definite", penalty_definite);
        if (start)
            params.append("start", start);
        if (end)
            params.append("end", end);
        if (page_no)
            params.append("page_no", page_no);
        let body = params.toString();
        return this.http.post(this.url + "get_wenshuInterMonth", body, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
        // return this.http.get("assets/data/service/get_wenshuBy_class.json").pipe(map((res:{"wenshu_list":[any]})=>res))
    }
    //获取类最对应的文书列表
    getWenshuByClass(className) {
        return this.http.get("assets/data/service/get_wenshuBy_class.json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
    }
    //羁押周期文书
    getNoPenaltyWenshu(keyword, law, page_no) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = { headers: headers };
        let params = new URLSearchParams();
        if (keyword)
            params.append("keyword", keyword);
        if (law)
            params.append("law", law);
        if (page_no)
            params.append("page_no", page_no);
        let body = params.toString();
        return this.http.post(this.url + "getNoPenaltyWenshu", body, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
        // return this.http.get("assets/data/service/get_wenshuBy_class.json").pipe(map((res:{"wenshu_list":[any]})=>res))
    }
};
LawService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
LawService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], LawService);



/***/ }),

/***/ "./src/app/page/law/login/login.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/page/law/login/login.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\nbody, ol, ul, li, h1, h2, h3, h4, h5, h6, p, th, td, dl, dd, form, fieldset, legend, input, textarea, select {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-weight: normal;\n}\nbody {\n  font: 16px \"微软雅黑\";\n  background: #fff;\n  -webkit-text-size-adjust: 100%;\n}\na {\n  color: #444444;\n  text-decoration: none;\n}\na:hover {\n  color: #444444;\n}\na:link {\n  color: #444444;\n}\nem {\n  font-style: normal;\n}\nli {\n  list-style: none;\n}\nimg {\n  border: 0;\n  vertical-align: middle;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\np {\n  word-wrap: break-word;\n  padding: 0;\n  margin: 0;\n}\ninput::input-placeholder, textarea::input-placeholder {\n  color: #999;\n}\ninput::-webkit-input-placeholder, textarea::-webkit-input-placeholder {\n  color: #999;\n}\ninput:-moz-placeholder, textarea:-moz-placeholder {\n  color: #999;\n}\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  color: #999;\n}\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  color: #999;\n}\nbutton {\n  border: 0;\n  padding: 0;\n  margin: 0;\n  background: none;\n  outline: none;\n}\ni, a {\n  cursor: pointer;\n}\n.loginheader, .footer {\n  width: 1024px;\n  margin: 0 auto;\n  height: 100px;\n  text-align: center;\n  background-color: #fff;\n  left: 50%;\n  margin-left: -512px;\n}\n.loginheader {\n  position: relative;\n  top: 0;\n}\n.loginheader img {\n  float: left;\n  margin: 10px 50px 0 10px;\n}\n.loginheader p {\n  float: left;\n  font-size: 30px;\n  color: #444;\n  height: 25px;\n  border-left: 2px solid #444;\n  margin-top: 35px;\n  line-height: 22px;\n  padding-left: 40px;\n  margin-right: 20px;\n}\n.login-body {\n  height: 100%;\n  width: 100%;\n  overflow: auto;\n}\n.login-top {\n  height: 99px;\n  width: 1112px;\n  padding: 0;\n  margin: 0 auto;\n  position: relative;\n}\n.login-top > img {\n  position: absolute;\n  left: 0px;\n  top: 50%;\n  transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  -moz-transform: translateY(-50%);\n  -webkit-transform: translateY(-50%);\n  -o-transform: translateY(-50%);\n}\n.login-bg {\n  position: relative;\n  height: 536px;\n  width: 100%;\n  background: url('bg-3.png') center no-repeat;\n  min-width: 1112px;\n}\n.login-box {\n  width: 1112px;\n  margin: 0 auto;\n  height: 389px;\n  padding-top: 74px;\n  box-sizing: content-box;\n  position: absolute;\n  right: 100px;\n}\n.login-box-list {\n  margin-right: 54px;\n  width: 380px;\n  height: 100%;\n  float: right;\n  background-color: rgba(255, 255, 255, 0.8);\n}\n.login-copyright {\n  height: 17px;\n  line-height: 17px;\n  margin: 36px auto;\n  width: 1112px;\n  text-align: center;\n  font-size: 16px;\n  color: rgba(0, 0, 0, 0.54);\n  word-spacing: 28px;\n}\n.login-box-list > h3 {\n  font-size: 20px;\n  color: rgba(0, 0, 0, 0.87);\n  height: 29px;\n  line-height: 29px;\n  margin-top: 35px;\n  margin-left: 28px;\n  margin-bottom: 41px;\n  font-weight: bold;\n}\n.login-input-box {\n  margin-left: 31px;\n  margin-bottom: 19px;\n  width: 314px;\n  height: 46px;\n  line-height: 46px;\n  background-color: #fff;\n  box-sizing: border-box;\n  padding-left: 45px;\n  font-size: 15px;\n  margin-right: 0;\n  position: relative;\n  border: 1px solid #b7bbd3;\n  border-radius: 2px;\n}\n.login-input-box input {\n  height: 100%;\n  width: 100%;\n  background: none;\n  border-radius: 0;\n  outline: none;\n  padding: 0;\n  margin: 0;\n  float: left;\n  padding-left: 16px;\n  box-sizing: border-box;\n}\n.login-input-box input::-webkit-input-placeholder {\n  color: #bdbdbd !important;\n}\n.login-input-box input:-moz-placeholder {\n  color: #bdbdbd !important;\n}\n.login-input-box input::-moz-placeholder {\n  color: #bdbdbd !important;\n}\n/* for the future */\n.login-input-box input:-ms-input-placeholder {\n  color: #bdbdbd !important;\n}\n.login-input-box > .imgbox {\n  width: 46px;\n  position: absolute;\n  left: 0px;\n  top: 0;\n  height: 100%;\n  background: #b7bbd3;\n}\n.login-input-box > .imgbox > img {\n  display: block;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  -o-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  -moz-transform: translate(-50%, -50%);\n  -webkit-transform: translate(-50%, -50%);\n}\n.login-submit {\n  margin-top: 32px;\n  margin-left: 31px;\n  text-align: center;\n  color: #fff;\n  opacity: 0.9;\n  filter: alpha(opacity=90);\n  background-color: #51b2ff;\n  height: 50px;\n  line-height: 50px;\n  width: 314px;\n  font-size: 20px;\n  letter-spacing: 5px;\n  cursor: pointer;\n  border-radius: 2px;\n  margin-bottom: 10px;\n}\n.login-forget {\n  width: 314px;\n  margin-left: 31px;\n  height: 20px;\n  margin-top: 10px;\n}\n.login-forget span {\n  float: right;\n  font-size: 13px;\n  line-height: 17px;\n  cursor: pointer;\n  color: #757575;\n}\n/*.login-forget i{\n    display: block;\n    border: 1px solid rgba(0,0,0,.54);\n    font-style: normal;\n    font-size: 12px;\n    height: 16px;\n    width: 16px;\n    text-align: center;\n    line-height: 14px;\n    border-radius: 8px;\n    float: right;\n    margin-right: 8px;\n    color: rgba(0,0,0,.54);\n    box-sizing: border-box;\n}*/\n@media screen and (max-height: 766px) {\n  .login-bg {\n    height: 416px;\n    background-image: url('bg-3.png');\n  }\n\n  .login-box {\n    padding-top: 14px;\n  }\n}\n@media screen and (max-width: 420px) {\n  .login-bg {\n    height: 416px;\n    background-image: url('bg-3.png');\n  }\n\n  .login-box {\n    padding-top: 14px;\n  }\n\n  body, ol, ul, h1, h2, h3, h4, h5, h6, p, th, td, dl, dd, form, fieldset, legend, input, textarea, select {\n    margin: 0;\n    padding: 0;\n    border: 0;\n  }\n\n  body {\n    font: 16px \"DroidSansFallback\";\n    background: #fff;\n    -webkit-text-size-adjust: 100%;\n  }\n\n  a {\n    color: #444444;\n    text-decoration: none;\n  }\n\n  a:hover {\n    color: #444444;\n  }\n\n  a:link {\n    color: #444444;\n  }\n\n  em {\n    font-style: normal;\n  }\n\n  li {\n    list-style: none;\n  }\n\n  img {\n    border: 0;\n    vertical-align: middle;\n  }\n\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n\n  p {\n    word-wrap: break-word;\n    padding: 0;\n    margin: 0;\n  }\n\n  input {\n    outline: none;\n  }\n\n  input::input-placeholder, textarea::input-placeholder {\n    color: #ccc;\n  }\n\n  input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {\n    color: #ccc;\n  }\n\n  input:-moz-placeholder, textarea:-moz-placeholder {\n    color: #ccc;\n  }\n\n  input::-moz-placeholder, textarea::-moz-placeholder {\n    color: #ccc;\n  }\n\n  input:-ms-input-placeholder, textarea:-ms-input-placeholder {\n    color: #ccc;\n  }\n\n  html, body {\n    height: 100%;\n    width: 100%;\n  }\n\n  .top {\n    margin-top: 60px;\n    text-align: center;\n  }\n\n  .top h1 {\n    font-size: 16px;\n    margin-top: 20px;\n    line-height: 16px;\n    height: 16px;\n    color: #444;\n  }\n\n  .top p {\n    line-height: 24px;\n    font-size: 12px;\n    height: 24px;\n    color: #eee;\n  }\n\n  .form {\n    width: 91%;\n    margin: 0 auto;\n  }\n\n  .form > div {\n    margin-top: 25px;\n    border-bottom: 1px solid #a3b1ff;\n    height: 40px;\n    position: relative;\n  }\n\n  .form input {\n    width: 100%;\n    height: 100%;\n    line-height: 40px;\n    font-size: 16px;\n    text-indent: 10px;\n  }\n\n  .button {\n    border: 0;\n    border-radius: 25px;\n    height: 44px;\n    width: 100%;\n    margin-top: 47px;\n    color: #fff;\n    background-color: rgba(63, 81, 181, 0.9);\n    outline: none;\n    font-size: 16px;\n  }\n\n  .button:active {\n    background-color: rgba(63, 81, 181, 0.8);\n  }\n\n  .password i {\n    position: absolute;\n    display: block;\n    top: 0;\n    right: 0;\n    height: 100%;\n    width: 34px;\n  }\n\n  .find_password {\n    float: right;\n    font-size: 12px;\n    line-height: 28px;\n    color: #ccc;\n  }\n\n  .find_password:link {\n    color: #ccc;\n  }\n\n  .find_password:hover {\n    color: #ededed;\n  }\n}\n.prod {\n  margin-left: 120px;\n  color: #bfbfbf;\n  font-size: 14px;\n}\n.middle {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 20px;\n  right: 12px;\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9sYXcvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYXBwbGUvRGVza3RvcC93b3JrL3dvcms0L2hkaW9jTmV3L2hkY2dpb2Mvc3JjL21haW4vbXktYXBwL3NyYy9hcHAvcGFnZS9sYXcvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQVo7RUFBeUYsU0FBQTtFQUFTLFVBQUE7RUFBVSxTQUFBO0VBQVMsbUJBQUE7QURNekg7QUNMSTtFQUFLLGlCQUFBO0VBQWdCLGdCQUFBO0VBQWdCLDhCQUFBO0FEV3pDO0FDVkk7RUFBRSxjQUFBO0VBQWMscUJBQUE7QURlcEI7QUNkSTtFQUFRLGNBQUE7QURrQlo7QUNqQkk7RUFBTyxjQUFBO0FEcUJYO0FDcEJJO0VBQUcsa0JBQUE7QUR3QlA7QUN2Qkk7RUFBRyxnQkFBQTtBRDJCUDtBQzFCSTtFQUFJLFNBQUE7RUFBUyxzQkFBQTtBRCtCakI7QUM5Qkk7RUFBTSx5QkFBQTtFQUF5QixpQkFBQTtBRG1DbkM7QUNsQ0k7RUFBRSxxQkFBQTtFQUFxQixVQUFBO0VBQVUsU0FBQTtBRHdDckM7QUN2Q0k7RUFBdUQsV0FBQTtBRDJDM0Q7QUMxQ0k7RUFBdUUsV0FBQTtBRDhDM0U7QUM3Q0k7RUFBbUQsV0FBQTtBRGlEdkQ7QUNoREk7RUFBcUQsV0FBQTtBRG9EekQ7QUNuREk7RUFBNkQsV0FBQTtBRHVEakU7QUN0REk7RUFBTyxTQUFBO0VBQVUsVUFBQTtFQUFXLFNBQUE7RUFBVSxnQkFBQTtFQUFpQixhQUFBO0FEOEQzRDtBQzdESTtFQUFJLGVBQUE7QURpRVI7QUNoRUk7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FEbUVSO0FDakVJO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0FEb0VSO0FDakVJO0VBQ0ksV0FBQTtFQUNBLHdCQUFBO0FEb0VSO0FDbEVJO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QURxRVI7QUMzREk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUQ4RFI7QUM1REk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUQrRFI7QUM3REk7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUNBQUE7RUFDQSw4QkFBQTtBRGdFUjtBQzlESTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSw0Q0FBQTtFQUNBLGlCQUFBO0FEaUVSO0FDL0RJO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBRGtFUjtBQ2hFSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7QURtRVI7QUNqRUk7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FEb0VSO0FDbEVJO0VBQ0ksZUFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QURxRVI7QUNuRUk7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FEc0VSO0FDcEVJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUR1RVI7QUNyRUk7RUFDSSx5QkFBQTtBRHdFUjtBQ3RFSTtFQUNJLHlCQUFBO0FEeUVSO0FDdkVJO0VBQ0kseUJBQUE7QUQwRVI7QUN6RU0sbUJBQUE7QUFDRjtFQUNJLHlCQUFBO0FENEVSO0FDMUVJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUQ2RVI7QUMzRUk7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGdDQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0Esd0NBQUE7QUQ4RVI7QUM1RUk7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUQrRVI7QUM3RUk7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QURnRlI7QUM5RUk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QURpRlI7QUMvRUk7Ozs7Ozs7Ozs7Ozs7O0VBQUE7QUFlQTtFQUNJO0lBQ0ksYUFBQTtJQUNBLGlDQUFBO0VEa0ZWOztFQ2hGTTtJQUNJLGlCQUFBO0VEbUZWO0FBQ0Y7QUNqRkk7RUFDSTtJQUNJLGFBQUE7SUFDQSxpQ0FBQTtFRG1GVjs7RUNqRk07SUFDSSxpQkFBQTtFRG9GVjs7RUNsRlM7SUFBc0YsU0FBQTtJQUFTLFVBQUE7SUFBVSxTQUFBO0VEd0ZsSDs7RUN2RkU7SUFBSyw4QkFBQTtJQUE2QixnQkFBQTtJQUFnQiw4QkFBQTtFRDZGcEQ7O0VDNUZFO0lBQUUsY0FBQTtJQUFjLHFCQUFBO0VEaUdsQjs7RUNoR0U7SUFBUSxjQUFBO0VEb0dWOztFQ25HRTtJQUFPLGNBQUE7RUR1R1Q7O0VDdEdFO0lBQUcsa0JBQUE7RUQwR0w7O0VDekdFO0lBQUcsZ0JBQUE7RUQ2R0w7O0VDNUdFO0lBQUksU0FBQTtJQUFTLHNCQUFBO0VEaUhmOztFQ2hIRTtJQUFNLHlCQUFBO0lBQXlCLGlCQUFBO0VEcUhqQzs7RUNwSEU7SUFBRSxxQkFBQTtJQUFxQixVQUFBO0lBQVUsU0FBQTtFRDBIbkM7O0VDekhFO0lBQU0sYUFBQTtFRDZIUjs7RUM1SEU7SUFDQSxXQUFBO0VEK0hGOztFQzdIRTtJQUNBLFdBQUE7RURnSUY7O0VDOUhFO0lBQ0EsV0FBQTtFRGlJRjs7RUMvSEU7SUFDQSxXQUFBO0VEa0lGOztFQ2hJRTtJQUNBLFdBQUE7RURtSUY7O0VDaElFO0lBQ0ksWUFBQTtJQUNBLFdBQUE7RURtSU47O0VDaElFO0lBQ0ksZ0JBQUE7SUFDQSxrQkFBQTtFRG1JTjs7RUNqSUU7SUFDSSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0VEb0lOOztFQ2xJRTtJQUNJLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0VEcUlOOztFQ25JRTtJQUNJLFVBQUE7SUFDQSxjQUFBO0VEc0lOOztFQ3BJRTtJQUNJLGdCQUFBO0lBQ0EsZ0NBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7RUR1SU47O0VDcklFO0lBQ0ksV0FBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtFRHdJTjs7RUN0SUU7SUFDSSxTQUFBO0lBQ0EsbUJBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0lBQ0EsV0FBQTtJQUNBLHdDQUFBO0lBQ0EsYUFBQTtJQUNBLGVBQUE7RUR5SU47O0VDdklFO0lBQ0ksd0NBQUE7RUQwSU47O0VDeElFO0lBQ0ksa0JBQUE7SUFDQSxjQUFBO0lBQ0EsTUFBQTtJQUNBLFFBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtFRDJJTjs7RUN4SUU7SUFDSSxZQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0lBQ0EsV0FBQTtFRDJJTjs7RUN6SUU7SUFDSSxXQUFBO0VENElOOztFQzFJRTtJQUNJLGNBQUE7RUQ2SU47QUFDRjtBQ3hJSTtFQUNRLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUQwSVo7QUN4SUk7RUFDUSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUQySVoiLCJmaWxlIjoic3JjL2FwcC9wYWdlL2xhdy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbmJvZHksIG9sLCB1bCwgbGksIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIHRoLCB0ZCwgZGwsIGRkLCBmb3JtLCBmaWVsZHNldCwgbGVnZW5kLCBpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG5ib2R5IHtcbiAgZm9udDogMTZweCBcIuW+rui9r+mbhem7kVwiO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG59XG5cbmEge1xuICBjb2xvcjogIzQ0NDQ0NDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5hOmhvdmVyIHtcbiAgY29sb3I6ICM0NDQ0NDQ7XG59XG5cbmE6bGluayB7XG4gIGNvbG9yOiAjNDQ0NDQ0O1xufVxuXG5lbSB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxubGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5pbWcge1xuICBib3JkZXI6IDA7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbnAge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuaW5wdXQ6OmlucHV0LXBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6aW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzk5OTtcbn1cblxuaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIsIHRleHRhcmVhOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM5OTk7XG59XG5cbmlucHV0Oi1tb3otcGxhY2Vob2xkZXIsIHRleHRhcmVhOi1tb3otcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzk5OTtcbn1cblxuaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIsIHRleHRhcmVhOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM5OTk7XG59XG5cbmlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciwgdGV4dGFyZWE6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM5OTk7XG59XG5cbmJ1dHRvbiB7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5pLCBhIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubG9naW5oZWFkZXIsIC5mb290ZXIge1xuICB3aWR0aDogMTAyNHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgaGVpZ2h0OiAxMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtNTEycHg7XG59XG5cbi5sb2dpbmhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwO1xufVxuXG4ubG9naW5oZWFkZXIgaW1nIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMTBweCA1MHB4IDAgMTBweDtcbn1cblxuLmxvZ2luaGVhZGVyIHAge1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogIzQ0NDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICM0NDQ7XG4gIG1hcmdpbi10b3A6IDM1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLmxvZ2luLWJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmxvZ2luLXRvcCB7XG4gIGhlaWdodDogOTlweDtcbiAgd2lkdGg6IDExMTJweDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmxvZ2luLXRvcCA+IGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuLmxvZ2luLWJnIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDUzNnB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZS9iZy0zLnBuZykgY2VudGVyIG5vLXJlcGVhdDtcbiAgbWluLXdpZHRoOiAxMTEycHg7XG59XG5cbi5sb2dpbi1ib3gge1xuICB3aWR0aDogMTExMnB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgaGVpZ2h0OiAzODlweDtcbiAgcGFkZGluZy10b3A6IDc0cHg7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMDBweDtcbn1cblxuLmxvZ2luLWJveC1saXN0IHtcbiAgbWFyZ2luLXJpZ2h0OiA1NHB4O1xuICB3aWR0aDogMzgwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG59XG5cbi5sb2dpbi1jb3B5cmlnaHQge1xuICBoZWlnaHQ6IDE3cHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICBtYXJnaW46IDM2cHggYXV0bztcbiAgd2lkdGg6IDExMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICB3b3JkLXNwYWNpbmc6IDI4cHg7XG59XG5cbi5sb2dpbi1ib3gtbGlzdCA+IGgzIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgaGVpZ2h0OiAyOXB4O1xuICBsaW5lLWhlaWdodDogMjlweDtcbiAgbWFyZ2luLXRvcDogMzVweDtcbiAgbWFyZ2luLWxlZnQ6IDI4cHg7XG4gIG1hcmdpbi1ib3R0b206IDQxcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubG9naW4taW5wdXQtYm94IHtcbiAgbWFyZ2luLWxlZnQ6IDMxcHg7XG4gIG1hcmdpbi1ib3R0b206IDE5cHg7XG4gIHdpZHRoOiAzMTRweDtcbiAgaGVpZ2h0OiA0NnB4O1xuICBsaW5lLWhlaWdodDogNDZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZy1sZWZ0OiA0NXB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjdiYmQzO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi5sb2dpbi1pbnB1dC1ib3ggaW5wdXQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5sb2dpbi1pbnB1dC1ib3ggaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2JkYmRiZCAhaW1wb3J0YW50O1xufVxuXG4ubG9naW4taW5wdXQtYm94IGlucHV0Oi1tb3otcGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2JkYmRiZCAhaW1wb3J0YW50O1xufVxuXG4ubG9naW4taW5wdXQtYm94IGlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNiZGJkYmQgIWltcG9ydGFudDtcbn1cblxuLyogZm9yIHRoZSBmdXR1cmUgKi9cbi5sb2dpbi1pbnB1dC1ib3ggaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNiZGJkYmQgIWltcG9ydGFudDtcbn1cblxuLmxvZ2luLWlucHV0LWJveCA+IC5pbWdib3gge1xuICB3aWR0aDogNDZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjYjdiYmQzO1xufVxuXG4ubG9naW4taW5wdXQtYm94ID4gLmltZ2JveCA+IGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4ubG9naW4tc3VibWl0IHtcbiAgbWFyZ2luLXRvcDogMzJweDtcbiAgbWFyZ2luLWxlZnQ6IDMxcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIG9wYWNpdHk6IDAuOTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTkwKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUxYjJmZjtcbiAgaGVpZ2h0OiA1MHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgd2lkdGg6IDMxNHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ubG9naW4tZm9yZ2V0IHtcbiAgd2lkdGg6IDMxNHB4O1xuICBtYXJnaW4tbGVmdDogMzFweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ubG9naW4tZm9yZ2V0IHNwYW4ge1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICM3NTc1NzU7XG59XG5cbi8qLmxvZ2luLWZvcmdldCBpe1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjU0KTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgICB3aWR0aDogMTZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNTQpO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59Ki9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA3NjZweCkge1xuICAubG9naW4tYmcge1xuICAgIGhlaWdodDogNDE2cHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZS9iZy0zLnBuZyk7XG4gIH1cblxuICAubG9naW4tYm94IHtcbiAgICBwYWRkaW5nLXRvcDogMTRweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgLmxvZ2luLWJnIHtcbiAgICBoZWlnaHQ6IDQxNnB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2UvYmctMy5wbmcpO1xuICB9XG5cbiAgLmxvZ2luLWJveCB7XG4gICAgcGFkZGluZy10b3A6IDE0cHg7XG4gIH1cblxuICBib2R5LCBvbCwgdWwsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIHRoLCB0ZCwgZGwsIGRkLCBmb3JtLCBmaWVsZHNldCwgbGVnZW5kLCBpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiAwO1xuICB9XG5cbiAgYm9keSB7XG4gICAgZm9udDogMTZweCBcIkRyb2lkU2Fuc0ZhbGxiYWNrXCI7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gIH1cblxuICBhIHtcbiAgICBjb2xvcjogIzQ0NDQ0NDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cblxuICBhOmhvdmVyIHtcbiAgICBjb2xvcjogIzQ0NDQ0NDtcbiAgfVxuXG4gIGE6bGluayB7XG4gICAgY29sb3I6ICM0NDQ0NDQ7XG4gIH1cblxuICBlbSB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICB9XG5cbiAgbGkge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIH1cblxuICBpbWcge1xuICAgIGJvcmRlcjogMDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG5cbiAgdGFibGUge1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIH1cblxuICBwIHtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICBpbnB1dCB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuXG4gIGlucHV0OjppbnB1dC1wbGFjZWhvbGRlciwgdGV4dGFyZWE6OmlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogI2NjYztcbiAgfVxuXG4gIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICNjY2M7XG4gIH1cblxuICBpbnB1dDotbW96LXBsYWNlaG9sZGVyLCB0ZXh0YXJlYTotbW96LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogI2NjYztcbiAgfVxuXG4gIGlucHV0OjotbW96LXBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICNjY2M7XG4gIH1cblxuICBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIsIHRleHRhcmVhOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICNjY2M7XG4gIH1cblxuICBodG1sLCBib2R5IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAudG9wIHtcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC50b3AgaDEge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgICBjb2xvcjogIzQ0NDtcbiAgfVxuXG4gIC50b3AgcCB7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgICBjb2xvcjogI2VlZTtcbiAgfVxuXG4gIC5mb3JtIHtcbiAgICB3aWR0aDogOTElO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG5cbiAgLmZvcm0gPiBkaXYge1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhM2IxZmY7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5mb3JtIGlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHRleHQtaW5kZW50OiAxMHB4O1xuICB9XG5cbiAgLmJ1dHRvbiB7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgaGVpZ2h0OiA0NHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDQ3cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2MywgODEsIDE4MSwgMC45KTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuXG4gIC5idXR0b246YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYzLCA4MSwgMTgxLCAwLjgpO1xuICB9XG5cbiAgLnBhc3N3b3JkIGkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAzNHB4O1xuICB9XG5cbiAgLmZpbmRfcGFzc3dvcmQge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgY29sb3I6ICNjY2M7XG4gIH1cblxuICAuZmluZF9wYXNzd29yZDpsaW5rIHtcbiAgICBjb2xvcjogI2NjYztcbiAgfVxuXG4gIC5maW5kX3Bhc3N3b3JkOmhvdmVyIHtcbiAgICBjb2xvcjogI2VkZWRlZDtcbiAgfVxufVxuLnByb2Qge1xuICBtYXJnaW4tbGVmdDogMTIwcHg7XG4gIGNvbG9yOiAjYmZiZmJmO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5taWRkbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjBweDtcbiAgcmlnaHQ6IDEycHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufSIsIiAgICBib2R5LG9sLHVsLGxpLGgxLGgyLGgzLGg0LGg1LGg2LHAsdGgsdGQsZGwsZGQsZm9ybSxmaWVsZHNldCxsZWdlbmQsaW5wdXQsdGV4dGFyZWEsc2VsZWN0e21hcmdpbjowO3BhZGRpbmc6MDtib3JkZXI6MDtmb250LXdlaWdodDpub3JtYWw7fVxuICAgIGJvZHl7Zm9udDoxNnB4XCLlvq7ova/pm4Xpu5FcIjtiYWNrZ3JvdW5kOiNmZmY7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OjEwMCU7fVxuICAgIGF7Y29sb3I6IzQ0NDQ0NDt0ZXh0LWRlY29yYXRpb246bm9uZX1cbiAgICBhOmhvdmVye2NvbG9yOiM0NDQ0NDR9XG4gICAgYTpsaW5re2NvbG9yOiM0NDQ0NDR9XG4gICAgZW17Zm9udC1zdHlsZTpub3JtYWx9XG4gICAgbGl7bGlzdC1zdHlsZTpub25lfVxuICAgIGltZ3tib3JkZXI6MDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9XG4gICAgdGFibGV7Ym9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlO2JvcmRlci1zcGFjaW5nOjB9XG4gICAgcHt3b3JkLXdyYXA6YnJlYWstd29yZDtwYWRkaW5nOjA7bWFyZ2luOjA7fVxuICAgIGlucHV0OjppbnB1dC1wbGFjZWhvbGRlciwgdGV4dGFyZWE6OmlucHV0LXBsYWNlaG9sZGVyIHtjb2xvcjogIzk5OTt9XG4gICAgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIsIHRleHRhcmVhOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtjb2xvcjogIzk5OTt9XG4gICAgaW5wdXQ6LW1vei1wbGFjZWhvbGRlciwgdGV4dGFyZWE6LW1vei1wbGFjZWhvbGRlciB7Y29sb3I6ICM5OTk7fVxuICAgIGlucHV0OjotbW96LXBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7Y29sb3I6ICM5OTk7fVxuICAgIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciwgdGV4dGFyZWE6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtjb2xvcjogIzk5OTt9XG4gICAgYnV0dG9ue2JvcmRlcjogMDtwYWRkaW5nOiAwO21hcmdpbjogMDtiYWNrZ3JvdW5kOiBub25lO291dGxpbmU6IG5vbmU7fVxuICAgIGksYXtjdXJzb3I6IHBvaW50ZXI7fVxuICAgIC5sb2dpbmhlYWRlciwuZm9vdGVye1xuICAgICAgICB3aWR0aDogMTAyNHB4O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtNTEycHg7XG4gICAgfVxuICAgIC5sb2dpbmhlYWRlcntcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IDA7XG4gICAgfVxuICAgIFxuICAgIC5sb2dpbmhlYWRlciBpbWd7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBtYXJnaW46IDEwcHggNTBweCAwIDEwcHg7XG4gICAgfVxuICAgIC5sb2dpbmhlYWRlciBwe1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICBjb2xvcjogIzQ0NDtcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICM0NDQ7XG4gICAgICAgIG1hcmdpbi10b3A6IDM1cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICB9XG4gICAgLy8gLmhlYWRlciBzcGFue1xuICAgIC8vIFx0ZmxvYXQ6IGxlZnQ7XG4gICAgLy8gXHRmb250LXNpemU6IDIwcHg7XG4gICAgLy8gXHRkaXNwbGF5OiBibG9jaztcbiAgICAvLyBcdG1hcmdpbi10b3A6IDg4cHg7XG4gICAgLy8gXHRsaW5lLWhlaWdodDogMjBweDtcbiAgICAvLyBcdGNvbG9yOiAjYmZiZmJmO1xuICAgIC8vIH1cbiAgICAubG9naW4tYm9keXtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgfVxuICAgIC5sb2dpbi10b3B7XG4gICAgICAgIGhlaWdodDogOTlweDtcbiAgICAgICAgd2lkdGg6IDExMTJweDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gICAgLmxvZ2luLXRvcD5pbWd7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICB9XG4gICAgLmxvZ2luLWJne1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGhlaWdodDogNTM2cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAgdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZS9iZy0zLnBuZykgY2VudGVyIG5vLXJlcGVhdDtcbiAgICAgICAgbWluLXdpZHRoOiAxMTEycHg7XG4gICAgfVxuICAgIC5sb2dpbi1ib3h7XG4gICAgICAgIHdpZHRoOjExMTJweDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gO1xuICAgICAgICBoZWlnaHQ6IDM4OXB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogNzRweDtcbiAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDEwMHB4O1xuICAgIH1cbiAgICAubG9naW4tYm94LWxpc3R7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNTRweDtcbiAgICAgICAgd2lkdGg6IDM4MHB4O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuOCk7XG4gICAgfVxuICAgIC5sb2dpbi1jb3B5cmlnaHR7XG4gICAgICAgIGhlaWdodDogMTdweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gICAgICAgIG1hcmdpbjogMzZweCBhdXRvO1xuICAgICAgICB3aWR0aDogMTExMnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwwLDAsMC41NCk7XG4gICAgICAgIHdvcmQtc3BhY2luZzoyOHB4O1xuICAgIH1cbiAgICAubG9naW4tYm94LWxpc3Q+aDN7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwwLDAsMC44Nyk7XG4gICAgICAgIGhlaWdodDogMjlweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI5cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDM1cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyOHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0MXB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgLmxvZ2luLWlucHV0LWJveHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMxcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE5cHg7XG4gICAgICAgIHdpZHRoOiAzMTRweDtcbiAgICAgICAgaGVpZ2h0OiA0NnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNDZweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0NXB4O1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYjdiYmQzO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgfVxuICAgIC5sb2dpbi1pbnB1dC1ib3ggaW5wdXR7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB9XG4gICAgLmxvZ2luLWlucHV0LWJveCBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7IFxuICAgICAgICBjb2xvcjogI2JkYmRiZCAhaW1wb3J0YW50O1xuICAgIH0gXG4gICAgLmxvZ2luLWlucHV0LWJveCBpbnB1dDotbW96LXBsYWNlaG9sZGVyIHsgXG4gICAgICAgIGNvbG9yOiAjYmRiZGJkICFpbXBvcnRhbnQ7XG4gICAgfSBcbiAgICAubG9naW4taW5wdXQtYm94IGlucHV0OjotbW96LXBsYWNlaG9sZGVyIHsgXG4gICAgICAgIGNvbG9yOiAjYmRiZGJkICFpbXBvcnRhbnQ7XG4gICAgfSAvKiBmb3IgdGhlIGZ1dHVyZSAqLyBcbiAgICAubG9naW4taW5wdXQtYm94IGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IFxuICAgICAgICBjb2xvcjogI2JkYmRiZCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAubG9naW4taW5wdXQtYm94Pi5pbWdib3h7XG4gICAgICAgIHdpZHRoOiA0NnB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6ICNiN2JiZDM7XG4gICAgfVxuICAgIC5sb2dpbi1pbnB1dC1ib3g+LmltZ2JveD5pbWd7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICB9XG4gICAgLmxvZ2luLXN1Ym1pdHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMxcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIG9wYWNpdHk6IDAuOTtcbiAgICAgICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTkwKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzUxYjJmZjtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgICAgd2lkdGg6IDMxNHB4O1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOjVweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuICAgIC5sb2dpbi1mb3JnZXR7XG4gICAgICAgIHdpZHRoOiAzMTRweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMxcHg7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG4gICAgLmxvZ2luLWZvcmdldCBzcGFue1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgY29sb3I6ICM3NTc1NzU7XG4gICAgfVxuICAgIC8qLmxvZ2luLWZvcmdldCBpe1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuNTQpO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICBjb2xvcjogcmdiYSgwLDAsMCwuNTQpO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIH0qL1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA3NjZweCkge1xuICAgICAgICAubG9naW4tYmd7XG4gICAgICAgICAgICBoZWlnaHQ6IDQxNnB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZS9iZy0zLnBuZyk7XG4gICAgICAgIH1cbiAgICAgICAgLmxvZ2luLWJveHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxNHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gICAgICAgIC5sb2dpbi1iZ3tcbiAgICAgICAgICAgIGhlaWdodDogNDE2cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlL2JnLTMucG5nKTtcbiAgICAgICAgfVxuICAgICAgICAubG9naW4tYm94e1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDE0cHg7XG4gICAgICAgIH1cbiAgICAgICAgICAgYm9keSxvbCx1bCxoMSxoMixoMyxoNCxoNSxoNixwLHRoLHRkLGRsLGRkLGZvcm0sZmllbGRzZXQsbGVnZW5kLGlucHV0LHRleHRhcmVhLHNlbGVjdHttYXJnaW46MDtwYWRkaW5nOjA7Ym9yZGVyOjA7fVxuICAgIGJvZHl7Zm9udDoxNnB4XCJEcm9pZFNhbnNGYWxsYmFja1wiO2JhY2tncm91bmQ6I2ZmZjstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6MTAwJTt9XG4gICAgYXtjb2xvcjojNDQ0NDQ0O3RleHQtZGVjb3JhdGlvbjpub25lfVxuICAgIGE6aG92ZXJ7Y29sb3I6IzQ0NDQ0NH1cbiAgICBhOmxpbmt7Y29sb3I6IzQ0NDQ0NH1cbiAgICBlbXtmb250LXN0eWxlOm5vcm1hbH1cbiAgICBsaXtsaXN0LXN0eWxlOm5vbmV9XG4gICAgaW1ne2JvcmRlcjowO3ZlcnRpY2FsLWFsaWduOm1pZGRsZX1cbiAgICB0YWJsZXtib3JkZXItY29sbGFwc2U6Y29sbGFwc2U7Ym9yZGVyLXNwYWNpbmc6MH1cbiAgICBwe3dvcmQtd3JhcDpicmVhay13b3JkO3BhZGRpbmc6MDttYXJnaW46MDt9XG4gICAgaW5wdXR7b3V0bGluZTogbm9uZTt9XG4gICAgaW5wdXQ6OmlucHV0LXBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6aW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjY2NjO1xuICAgIH1cbiAgICBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciwgdGV4dGFyZWE6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjY2NjO1xuICAgIH1cbiAgICBpbnB1dDotbW96LXBsYWNlaG9sZGVyLCB0ZXh0YXJlYTotbW96LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogI2NjYztcbiAgICB9XG4gICAgaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIsIHRleHRhcmVhOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogI2NjYztcbiAgICB9XG4gICAgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyLCB0ZXh0YXJlYTotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjY2NjO1xuICAgIH1cbiAgICBcbiAgICBodG1sLGJvZHl7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIFxuICAgIC50b3B7XG4gICAgICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLnRvcCBoMXtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICBjb2xvcjogIzQ0NDtcbiAgICB9XG4gICAgLnRvcCBwe1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgIGNvbG9yOiAjZWVlO1xuICAgIH1cbiAgICAuZm9ybXtcbiAgICAgICAgd2lkdGg6IDkxJTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuICAgIC5mb3JtPmRpdntcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhM2IxZmY7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cbiAgICAuZm9ybSBpbnB1dHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgdGV4dC1pbmRlbnQ6IDEwcHg7XG4gICAgfVxuICAgIC5idXR0b257XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgaGVpZ2h0OiA0NHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogNDdweDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjMsODEsMTgxLC45KTtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbiAgICAuYnV0dG9uOmFjdGl2ZXtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2Myw4MSwxODEsLjgpO1xuICAgIH1cbiAgICAucGFzc3dvcmQgaXtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMzRweDtcbiAgICAgICAgLy8gYmFja2dyb3VuZDogdXJsKC4uL2Fzc2V0cy9pbWFnZS9wYXNzd29yZC1zaG93LnBuZykgY2VudGVyIG5vLXJlcGVhdDtcbiAgICB9XG4gICAgLmZpbmRfcGFzc3dvcmR7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgY29sb3I6ICNjY2M7XG4gICAgfVxuICAgIC5maW5kX3Bhc3N3b3JkOmxpbmt7XG4gICAgICAgIGNvbG9yOiAjY2NjO1xuICAgIH1cbiAgICAuZmluZF9wYXNzd29yZDpob3ZlcntcbiAgICAgICAgY29sb3I6ICNlZGVkZWQ7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIFxuICAgIH1cbiAgICAucHJvZHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjEyMHB4O1xuICAgICAgICAgICAgY29sb3I6ICNiZmJmYmY7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICAubWlkZGxle1xuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6MjBweDtcbiAgICAgICAgICAgIHJpZ2h0OjEycHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgfVxuICAgIFxuICAgIFxuICAgIFxuICAgIFxuICAgIFxuICAgIFxuICAgIFxuICAgIFxuICAgIFxuICAgICJdfQ== */");

/***/ }),

/***/ "./src/app/page/law/login/login.component.ts":
/*!***************************************************!*\
  !*** ./src/app/page/law/login/login.component.ts ***!
  \***************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");



let LoginComponent = class LoginComponent {
    constructor(modal) {
        this.modal = modal;
        this.nzChangeLogin = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.login = {};
    }
    ngOnInit() {
        // sessionStorage.get("username").then((val) => {
        //   this.login.username = val;
        // });
        // sessionStorage.get("password").then((val) => {
        //   this.login.password = val;
        // });
    }
    doLogin() {
        var login = true;
        console.log("this.login", this.login);
        if (this.login.username != 'admin') {
            login = false;
        }
        if (this.login.password != 'admin') {
            login = false;
        }
        if (login) {
            this.nzChangeLogin.emit("success");
            sessionStorage.setItem("user", this.login.username);
            sessionStorage.setItem("password", this.login.password);
        }
        else {
            this.showConfirm();
        }
    }
    showConfirm() {
        this.modal.confirm({
            nzTitle: '用户名或密码输入错误,请重新输入',
            nzOnOk: () => { }
        });
    }
    myKeyup(e) {
        let keycode = window.event ? e.keyCode : e.which;
        if (keycode == 13) {
            this.doLogin();
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzModalService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], LoginComponent.prototype, "nzChangeLogin", void 0);
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/law/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/page/law/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/page/law/no-penalty/no-penalty.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/page/law/no-penalty/no-penalty.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".screens {\n  border-bottom: 1px dashed #ccc;\n}\n\n.temp-kinds-main {\n  display: flex;\n}\n\n.temp-kinds-title {\n  min-width: 60px;\n}\n\n.temp-kinds-list {\n  display: flex;\n  list-style: none;\n  padding-left: 12px;\n  flex-flow: row wrap;\n  max-height: 150px;\n  overflow: auto;\n}\n\n.temp-kinds-list li {\n  padding-left: 8px;\n  padding-right: 8px;\n  cursor: pointer;\n  margin: 0 4px 6px;\n  border: 1px solid #ccc;\n}\n\n.temp-kinds-list li.active {\n  color: #3895FF;\n  border: 1px solid #3895FF;\n}\n\n.age-chart-width {\n  width: 100%;\n  margin-top: 24px;\n  border-bottom: 1px dashed #ccc;\n  margin-bottom: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL3dvcmsvd29yazQvaGRpb2NOZXcvaGRjZ2lvYy9zcmMvbWFpbi9teS1hcHAvc3JjL2FwcC9wYWdlL2xhdy9uby1wZW5hbHR5L25vLXBlbmFsdHkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2UvbGF3L25vLXBlbmFsdHkvbm8tcGVuYWx0eS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxhQUFBO0FDRUo7O0FEQUE7RUFDSSxlQUFBO0FDR0o7O0FEREE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDSUo7O0FERkE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUNLSjs7QURGQTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtBQ0tKOztBREhBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ01KIiwiZmlsZSI6InNyYy9hcHAvcGFnZS9sYXcvbm8tcGVuYWx0eS9uby1wZW5hbHR5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjcmVlbnN7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjY2NjO1xufVxuLnRlbXAta2luZHMtbWFpbntcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuLnRlbXAta2luZHMtdGl0bGV7XG4gICAgbWluLXdpZHRoOiA2MHB4O1xufVxuLnRlbXAta2luZHMtbGlzdHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAgbWF4LWhlaWdodDogMTUwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG4udGVtcC1raW5kcy1saXN0IGxpe1xuICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luOiAwIDRweCA2cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbn1cblxuLnRlbXAta2luZHMtbGlzdCBsaS5hY3RpdmV7XG4gICAgY29sb3I6ICAjMzg5NUZGO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzODk1RkY7XG59XG4uYWdlLWNoYXJ0LXdpZHRoe1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjY2NjO1xuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG4iLCIuc2NyZWVucyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2NjYztcbn1cblxuLnRlbXAta2luZHMtbWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi50ZW1wLWtpbmRzLXRpdGxlIHtcbiAgbWluLXdpZHRoOiA2MHB4O1xufVxuXG4udGVtcC1raW5kcy1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi50ZW1wLWtpbmRzLWxpc3QgbGkge1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogMCA0cHggNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xufVxuXG4udGVtcC1raW5kcy1saXN0IGxpLmFjdGl2ZSB7XG4gIGNvbG9yOiAjMzg5NUZGO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzg5NUZGO1xufVxuXG4uYWdlLWNoYXJ0LXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2NjYztcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/page/law/no-penalty/no-penalty.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/page/law/no-penalty/no-penalty.component.ts ***!
  \*************************************************************/
/*! exports provided: NoPenaltyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoPenaltyComponent", function() { return NoPenaltyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _law_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../law.service */ "./src/app/page/law/law.service.ts");




let NoPenaltyComponent = class NoPenaltyComponent {
    constructor(lawSerivce, router) {
        this.lawSerivce = lawSerivce;
        this.router = router;
        this.classValueList = []; //类最
        this.penaltyValueList = []; //个罪
        // lawStoryList = []; //法定情节
        this.selectTypeIndex = 0; //类最选择
        this.selectPenaltyIndex = null; //个罪选择
        this.selectLawStoryIndex = null; //法定情节选择
        this.selectTagList = [];
        // start_age:string;
        // end_age:string;
        // age_rang:string;
        this.pageIndex = 1;
        this.total = 100;
        this.listOfData = [];
        this.echartsXlist = [];
    }
    ngOnInit() {
        // this.getClassList();
    }
    getClassList() {
        this.lawSerivce.getNoPenaltyKeyword().subscribe((data) => {
            data.forEach((element, index) => {
                if (element != "null" && element != null) {
                    this.classValueList.push({ code: String(index + 1), value: element });
                }
            });
            this.selectTitle = this.classValueList[this.selectTypeIndex].value;
            this.loadCateCharts();
            this.getPenaltyList();
            // this.getLawStroyList();
            this.getWenshuByLawStory();
        });
    }
    getPenaltyList() {
        this.penaltyValueList = [];
        this.lawSerivce.getNoPenaltyLaws().subscribe((data) => {
            data.forEach((element, index) => {
                if (element != "null" && element != null) {
                    this.penaltyValueList.push({ code: String(index + 1), value: element });
                }
            });
        });
    }
    // getLawStroyList() {
    //   this.lawSerivce.getLawsStory().subscribe((data) => {
    //     data.forEach((element) => {
    //       if (element != null) {
    //         this.lawStoryList.push(element);
    //       }
    //     });
    //   });
    // }
    getWenshuByLawStory() {
        this.lawSerivce
            .getNoPenaltyWenshu(this.selectTitle, this.selectPenaltyTitle, String(this.pageIndex))
            .subscribe((data) => {
            this.total = data.count;
            var list = [];
            data.wenshu_list.forEach((element) => {
                list.push(element);
            });
            this.listOfData = list;
            console.log("listOfData", this.listOfData);
        });
    }
    //点击的类最
    searchSelectType(index, item) {
        this.selectTypeIndex = index;
        this.selectTitle = item.value;
        //类最切换 条件情况
        this.selectPenaltyIndex = null;
        this.selectPenaltyTitle = null;
        // this.loadCateCharts();
        //点击类最加载个罪
        this.getPenaltyList();
        this.getWenshuByLawStory();
    }
    //点击个罪
    searchPenaltyType(index, item) {
        console.log("page", index);
        if (this.selectPenaltyIndex == index) {
            this.selectPenaltyIndex = null;
            this.selectPenaltyTitle = null;
        }
        else {
            this.selectPenaltyIndex = index;
            this.selectPenaltyTitle = item.value;
        }
        // this.loadCateCharts();
        this.getWenshuByLawStory();
    }
    //点击法定情节
    searchLawStory(index, item) {
        if (this.selectLawStoryIndex == index) {
            this.selectLawStoryIndex = null;
            this.selectPLawStoryTitle = null;
        }
        else {
            this.selectLawStoryIndex = index;
            this.selectPLawStoryTitle = item;
        }
        // this.loadCateCharts();
        this.getWenshuByLawStory();
    }
    //删除选择条件
    deleteFlagType(index, item) {
        if (index == 1) {
            this.selectPenaltyIndex = null;
            this.selectPenaltyTitle = null;
        }
        else if (index == 2) {
            this.selectLawStoryIndex = null;
            this.selectPLawStoryTitle = null;
        }
        this.loadCateCharts();
        this.getWenshuByLawStory();
    }
    //加载柱状图
    loadCateCharts() {
        if (this.selectPenaltyIndex != null) {
            //判断是否点击了个罪
            this.lawSerivce.getPenaltyAgeList().subscribe((data) => {
                data.forEach((element) => {
                    if (element.penalty_class == this.selectTitle) {
                        // for (var key in element.age_num){
                        //     if (key != "unkown"){
                        //         yList.push(element.age_num[key]);
                        //     }
                        // }
                        element.penalty_definite_age.forEach((ele) => {
                            if (ele.penalty_name_definite == this.selectPenaltyTitle) {
                                this.loadDataForChart(ele);
                            }
                        });
                    }
                });
            });
        }
        else {
            this.lawSerivce.getPenaltyAgeClass().subscribe((data) => {
                data.forEach((element, index) => {
                    if (!!element.penalty_class &&
                        element.penalty_class == this.selectTitle) {
                        this.loadDataForChart(element.age_num);
                    }
                });
            });
        }
    }
    //控制翻页
    searchPageIndexData(index) {
        console.log("page", index);
        this.pageIndex = index;
        this.getWenshuByLawStory();
    }
    //详情页面
    gotoDetail(item) {
        this.router.navigate(["/story/detail"], {
            skipLocationChange: true,
            queryParams: {
                item: JSON.stringify(item),
                from: "/story",
            },
        });
    }
    // private echartsClick(index:number){
    //   console.log("index",index);
    //   let nums:string = this.echartsXlist[index];
    //   this.age_rang = nums;
    //   var age_start = "0";
    //   var age_end = "120"
    //   if (nums.indexOf("-") != -1){
    //    const arr =  nums.split("-");
    //    age_start = arr[0];
    //    age_end = arr[1];
    //   }else{
    //     if (index == 0){
    //       age_end = nums;
    //     }else{
    //       age_start = nums;
    //     }
    //   }
    //   this.start_age = age_start;
    //   this.end_age = age_end;
    //   this.getWenshuByAge();
    //   console.log("age_start",age_start,"age_end",age_end);
    // }
    loadDataForChart(map) {
        //     var yList = [];
        //     var xList = ["<14","14-18","18-30","30-40","40-50","50-60","60-70","70-75",">75"]
        //            for (var key in map){
        //                if (key != "unkown" && key != "unkonwn" && key != "penalty_name_definite"){
        //                    yList.push(map[key]);
        //                }
        //     }
        //     this.echartsXlist  = ["14","14-18","18-30","30-40","40-50","50-60","60-70","70-75","75"];
        //     console.log("xList",xList,"yList",yList);
        //     var option = {
        //     tooltip: {
        //     trigger: 'axis',
        //     axisPointer: {
        //         type: 'shadow'
        //     },
        //     // formatter: '{b0}<br />{a0}: {c0}亿元<br />{a1}: {c1}%'
        //     },
        //     grid: {
        //     top: '10%',
        //     right: '3%',
        //     left: '15%',
        //     bottom: '15%'
        //     },
        //     xAxis: [{
        //     type: 'category',
        //     name: '',
        //     nameTextStyle: {
        //         color: "#333"
        //     },
        //     data: xList,
        //     axisLine: {
        //         lineStyle: {
        //         color: 'rgba(255,255,255,0.52)'
        //         }
        //     },
        //     axisLabel: {
        //         margin: 10,
        //         interval:0,
        //         color: '#000',
        //         textStyle: {
        //         fontSize: 11
        //         },
        //     },
        //     }],
        //     yAxis: [
        //     {
        //         type: 'value',
        //         name: '（个）',
        //         nameTextStyle: {
        //         color: "#333"
        //         },
        //         axisLabel: {
        //         formatter: '{value}',
        //         color: '#333',
        //         },
        //         axisLine: {
        //         show: true,
        //         lineStyle: {
        //             color: 'rgba(196,224,245,1)'
        //         }
        //         },
        //         splitLine: {
        //         show: true,
        //         lineStyle: {
        //             type: 'dashed',
        //             color: 'rgba(196,224,245,1)'
        //         }
        //         }
        //     }],
        //     series: [{
        //     type: 'bar',
        //     data: yList,
        //     name: '数量',
        //     barWidth: '16px',
        //     itemStyle: {
        //         normal: {
        //         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        //             offset: 0,
        //             color: '#4DDEFE' // 0% 处的颜色
        //         }, {
        //             offset: 0.5,
        //             color: '#57FBFA' // 50% 处的颜色
        //         }, {
        //             offset: 1,
        //             color: '#3D8BFF' // 100% 处的颜色
        //         }], false),
        //         barBorderRadius: [2, 2, 0.1, 0.1],
        //         shadowColor: 'rgba(0,0,0,0)',
        //         shadowBlur: 4,
        //         label: {
        //             show: true, //开启显示
        //             position: 'top', //在上方显示
        //             textStyle: { //数值样式
        //             color: '#111',
        //             fontSize: 14
        //             }
        //         },
        //         }
        //     },
        //     }]
        // };
        //     var mychart1 = echarts.init(document.getElementById("type-echart"));
        //     mychart1.clear();
        //     mychart1.setOption(option);
        //     mychart1.getZr().on('click', params => {
        //       let pointInPixel = [params.offsetX, params.offsetY]
        //       console.log("params",params);
        //       if (mychart1.containPixel('grid', pointInPixel)) {
        //         let xIndex = mychart1.convertFromPixel({ seriesIndex: 0 }, [params.offsetX, params.offsetY])[0]
        //         console.log("xIndex",xIndex)
        //         this.echartsClick(xIndex);
        //       }
        //     })
        //     window.onresize = mychart1.resize();
    }
};
NoPenaltyComponent.ctorParameters = () => [
    { type: _law_service__WEBPACK_IMPORTED_MODULE_3__["LawService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
NoPenaltyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-no-penalty',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./no-penalty.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/law/no-penalty/no-penalty.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./no-penalty.component.scss */ "./src/app/page/law/no-penalty/no-penalty.component.scss")).default]
    })
], NoPenaltyComponent);



/***/ }),

/***/ "./src/app/page/law/period/period.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/page/law/period/period.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".screens {\n  border-bottom: 1px dashed #ccc;\n}\n\n.temp-kinds-main {\n  display: flex;\n}\n\n.temp-kinds-title {\n  min-width: 60px;\n}\n\n.temp-kinds-list {\n  display: flex;\n  list-style: none;\n  padding-left: 12px;\n  flex-flow: row wrap;\n  max-height: 200px;\n  overflow: auto;\n}\n\n.temp-kinds-list li {\n  padding-left: 8px;\n  padding-right: 8px;\n  cursor: pointer;\n  margin: 0 4px 6px;\n  border: 1px solid #ccc;\n}\n\n.temp-kinds-list li.active {\n  color: #3895FF;\n  border: 1px solid #3895FF;\n}\n\n.age-chart-width {\n  width: 100%;\n  margin-top: 24px;\n  border-bottom: 1px dashed #ccc;\n  margin-bottom: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL3dvcmsvd29yazQvaGRpb2NOZXcvaGRjZ2lvYy9zcmMvbWFpbi9teS1hcHAvc3JjL2FwcC9wYWdlL2xhdy9wZXJpb2QvcGVyaW9kLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlL2xhdy9wZXJpb2QvcGVyaW9kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7QUNDSjs7QURDQTtFQUNJLGFBQUE7QUNFSjs7QURBQTtFQUNJLGVBQUE7QUNHSjs7QUREQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNJSjs7QURGQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQ0tKOztBREZBO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0FDS0o7O0FESEE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDTUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlL2xhdy9wZXJpb2QvcGVyaW9kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjcmVlbnN7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjY2NjO1xufVxuLnRlbXAta2luZHMtbWFpbntcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuLnRlbXAta2luZHMtdGl0bGV7XG4gICAgbWluLXdpZHRoOiA2MHB4O1xufVxuLnRlbXAta2luZHMtbGlzdHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG4udGVtcC1raW5kcy1saXN0IGxpe1xuICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luOiAwIDRweCA2cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbn1cblxuLnRlbXAta2luZHMtbGlzdCBsaS5hY3RpdmV7XG4gICAgY29sb3I6ICAjMzg5NUZGO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzODk1RkY7XG59XG4uYWdlLWNoYXJ0LXdpZHRoe1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjY2NjO1xuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG4iLCIuc2NyZWVucyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2NjYztcbn1cblxuLnRlbXAta2luZHMtbWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi50ZW1wLWtpbmRzLXRpdGxlIHtcbiAgbWluLXdpZHRoOiA2MHB4O1xufVxuXG4udGVtcC1raW5kcy1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi50ZW1wLWtpbmRzLWxpc3QgbGkge1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogMCA0cHggNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xufVxuXG4udGVtcC1raW5kcy1saXN0IGxpLmFjdGl2ZSB7XG4gIGNvbG9yOiAjMzg5NUZGO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzg5NUZGO1xufVxuXG4uYWdlLWNoYXJ0LXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2NjYztcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/page/law/period/period.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/page/law/period/period.component.ts ***!
  \*****************************************************/
/*! exports provided: PeriodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeriodComponent", function() { return PeriodComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _law_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../law.service */ "./src/app/page/law/law.service.ts");




let PeriodComponent = class PeriodComponent {
    constructor(lawSerivce, router) {
        this.lawSerivce = lawSerivce;
        this.router = router;
        this.classValueList = []; //类最
        this.penaltyValueList = []; //个罪
        this.selectTypeIndex = 0; //类最选择
        this.selectPenaltyIndex = null; //个罪选择
        this.pageIndex = 1;
        this.total = 100;
        this.listOfData = [];
        this.echartsXlist = [];
    }
    ngOnInit() {
        // this.getClassList();
    }
    getClassList() {
        this.lawSerivce.getPenaltyClass().subscribe((data) => {
            data.penalty_class.forEach((element, index) => {
                if (element != "null" && element != null) {
                    this.classValueList.push({ code: String(index + 1), value: element });
                }
            });
            this.selectTitle = this.classValueList[this.selectTypeIndex].value;
            this.loadCateCharts();
            // this.getPenaltyList(this.selectTitle);
            this.getWenshuByType();
        });
    }
    getWenshuByType() {
        this.lawSerivce
            .getWenshuInterMonth(this.selectTitle, this.selectPenaltyTitle, this.startLength, this.endLength, String(this.pageIndex))
            .subscribe((data) => {
            this.total = data.count;
            var list = [];
            data.wenshu_list.forEach((element) => {
                list.push(element);
            });
            this.listOfData = list;
            console.log("listOfData", this.listOfData);
        });
    }
    //点击的类最
    searchSelectType(index, item) {
        this.selectTypeIndex = index;
        this.selectTitle = item.value;
        //类最切换 条件情况
        this.selectPenaltyIndex = null;
        this.selectPenaltyTitle = null;
        this.lengthType = null;
        this.startLength = null;
        this.endLength = null;
        this.loadCateCharts();
        //点击类最加载个罪
        debugger;
        this.getWenshuByType();
    }
    //删除选择条件
    deleteFlagType(index, item) {
        if (index == 1) {
            this.selectPenaltyIndex = null;
            this.selectPenaltyTitle = null;
        }
        else if (index == 2) {
            this.lengthType = null;
            this.startLength = null;
            this.endLength = null;
        }
        this.loadCateCharts();
        this.getWenshuByType();
    }
    //控制翻页
    searchPageIndexData(index) {
        console.log("page", index);
        this.pageIndex = index;
        this.getWenshuByType();
    }
    echartsClick(index) {
        console.log("index", index);
        let nums = this.echartsXlist[index];
        this.lengthType = nums;
        var age_start = "0";
        var age_end = "120";
        if (nums.indexOf("-") != -1) {
            const arr = nums.split("-");
            age_start = arr[0];
            age_end = arr[1];
        }
        else {
            if (index == 0) {
                age_end = nums;
            }
            else {
                age_start = nums;
            }
        }
        this.startLength = age_start;
        this.endLength = age_end;
        this.getWenshuByType();
    }
    //详情页面
    gotoDetail(item) {
        this.router.navigate(["/period/detail"], {
            skipLocationChange: true,
            queryParams: {
                "item": JSON.stringify(item),
                "from": "/period"
            }
        });
    }
    loadCateCharts() {
        this.lawSerivce.getTypePeriodLength().subscribe(data => {
            data["RECORDS"].forEach((element, index) => {
                if (!!element.penalty_class && element.penalty_class == this.selectTitle) {
                    this.loadDataForChart(element, index);
                }
            });
        });
    }
    loadDataForChart(element, index) {
        var yList = [];
        var xList = ["0-3", "3-6", "6-12", "12-18", "18-24", "24-30", "30-36", ">36"];
        this.echartsXlist = ["0-3", "3-6", "6-12", "12-18", "18-24", "24-30", "30-36", "36"];
        for (var key in element) {
            if (key != "unkown" && key != "unkonwn" && key != "penalty_class") {
                yList.push(element[key]);
            }
        }
        console.log("xList", xList, "yList", yList);
        var option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
            },
            grid: {
                top: '10%',
                right: '3%',
                left: '15%',
                bottom: '15%'
            },
            xAxis: [{
                    type: 'category',
                    name: '',
                    nameTextStyle: {
                        color: "#333"
                    },
                    data: xList,
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(255,255,255,0.52)'
                        }
                    },
                    axisLabel: {
                        margin: 10,
                        interval: 0,
                        color: '#000',
                        textStyle: {
                            fontSize: 11
                        },
                    },
                }],
            yAxis: [
                {
                    type: 'value',
                    name: '（个）',
                    nameTextStyle: {
                        color: "#333"
                    },
                    axisLabel: {
                        formatter: '{value}',
                        color: '#333',
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(196,224,245,1)'
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            type: 'dashed',
                            color: 'rgba(196,224,245,1)'
                        }
                    }
                }
            ],
            series: [{
                    type: 'bar',
                    data: yList,
                    name: '数量',
                    barWidth: '16px',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#4DDEFE' // 0% 处的颜色
                                }, {
                                    offset: 0.5,
                                    color: '#57FBFA' // 50% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#3D8BFF' // 100% 处的颜色
                                }], false),
                            barBorderRadius: [2, 2, 0.1, 0.1],
                            shadowColor: 'rgba(0,0,0,0)',
                            shadowBlur: 4,
                            label: {
                                show: true,
                                position: 'top',
                                textStyle: {
                                    color: '#111',
                                    fontSize: 14
                                }
                            },
                        }
                    },
                }]
        };
        var mychart1 = echarts.init(document.getElementById("type-echart"));
        mychart1.clear();
        mychart1.setOption(option);
        mychart1.getZr().on('click', params => {
            let pointInPixel = [params.offsetX, params.offsetY];
            console.log("params", params);
            if (mychart1.containPixel('grid', pointInPixel)) {
                let xIndex = mychart1.convertFromPixel({ seriesIndex: 0 }, [params.offsetX, params.offsetY])[0];
                console.log("xIndex", xIndex);
                this.echartsClick(xIndex);
            }
        });
        window.onresize = mychart1.resize();
    }
};
PeriodComponent.ctorParameters = () => [
    { type: _law_service__WEBPACK_IMPORTED_MODULE_3__["LawService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
PeriodComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-period',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./period.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/law/period/period.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./period.component.scss */ "./src/app/page/law/period/period.component.scss")).default]
    })
], PeriodComponent);



/***/ }),

/***/ "./src/app/page/law/province/province.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/page/law/province/province.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".screens {\n  border-bottom: 1px dashed #ccc;\n}\n\n.temp-kinds-main {\n  display: flex;\n}\n\n.temp-kinds-title {\n  min-width: 60px;\n}\n\n.temp-kinds-list {\n  display: flex;\n  list-style: none;\n  padding-left: 12px;\n  flex-flow: row wrap;\n  max-height: 200px;\n  overflow: auto;\n}\n\n.temp-kinds-list li {\n  padding-left: 8px;\n  padding-right: 8px;\n  cursor: pointer;\n  margin: 0 4px 6px;\n  border: 1px solid #ccc;\n}\n\n.temp-kinds-list li.active {\n  color: #3895FF;\n  border: 1px solid #3895FF;\n}\n\n.age-chart-width {\n  width: 100%;\n  margin-top: 24px;\n  border-bottom: 1px dashed #ccc;\n  margin-bottom: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL3dvcmsvd29yazQvaGRpb2NOZXcvaGRjZ2lvYy9zcmMvbWFpbi9teS1hcHAvc3JjL2FwcC9wYWdlL2xhdy9wcm92aW5jZS9wcm92aW5jZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZS9sYXcvcHJvdmluY2UvcHJvdmluY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtBQ0NKOztBRENBO0VBQ0ksYUFBQTtBQ0VKOztBREFBO0VBQ0ksZUFBQTtBQ0dKOztBRERBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0lKOztBREZBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FDS0o7O0FERkE7RUFDSSxjQUFBO0VBQ0EseUJBQUE7QUNLSjs7QURIQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNNSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvbGF3L3Byb3ZpbmNlL3Byb3ZpbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjcmVlbnN7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjY2NjO1xufVxuLnRlbXAta2luZHMtbWFpbntcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuLnRlbXAta2luZHMtdGl0bGV7XG4gICAgbWluLXdpZHRoOiA2MHB4O1xufVxuLnRlbXAta2luZHMtbGlzdHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG4udGVtcC1raW5kcy1saXN0IGxpe1xuICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luOiAwIDRweCA2cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbn1cblxuLnRlbXAta2luZHMtbGlzdCBsaS5hY3RpdmV7XG4gICAgY29sb3I6ICAjMzg5NUZGO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzODk1RkY7XG59XG4uYWdlLWNoYXJ0LXdpZHRoe1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjY2NjO1xuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG4iLCIuc2NyZWVucyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2NjYztcbn1cblxuLnRlbXAta2luZHMtbWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi50ZW1wLWtpbmRzLXRpdGxlIHtcbiAgbWluLXdpZHRoOiA2MHB4O1xufVxuXG4udGVtcC1raW5kcy1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi50ZW1wLWtpbmRzLWxpc3QgbGkge1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogMCA0cHggNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xufVxuXG4udGVtcC1raW5kcy1saXN0IGxpLmFjdGl2ZSB7XG4gIGNvbG9yOiAjMzg5NUZGO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzg5NUZGO1xufVxuXG4uYWdlLWNoYXJ0LXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2NjYztcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/page/law/province/province.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/page/law/province/province.component.ts ***!
  \*********************************************************/
/*! exports provided: ProvinceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvinceComponent", function() { return ProvinceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _law_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../law.service */ "./src/app/page/law/law.service.ts");




let ProvinceComponent = class ProvinceComponent {
    constructor(lawSerivce, router) {
        this.lawSerivce = lawSerivce;
        this.router = router;
        this.classValueList = []; //类最
        this.penaltyValueList = []; //个罪
        this.selectTypeIndex = 0; //类最选择
        this.selectPenaltyIndex = null; //个罪选择
        this.selectAddressIndex = 0;
        this.pageIndex = 1;
        this.total = 100;
        this.listOfData = [];
        this.echartsXlist = [];
        this.addressValueList = ["籍贯", "居住地"];
    }
    ngOnInit() {
        // this.getClassList();
    }
    getClassList() {
        this.lawSerivce.getPenaltyClass().subscribe((data) => {
            data.penalty_class.forEach((element, index) => {
                if (element != "null" && element != null) {
                    this.classValueList.push({ code: String(index + 1), value: element });
                }
            });
            this.selectTitle = this.classValueList[this.selectTypeIndex].value;
            this.loadCateCharts();
            // this.getPenaltyList(this.selectTitle);
            this.getWenshuByType();
        });
    }
    getWenshuByType() {
        this.lawSerivce
            .getWenshuProvince(this.selectTitle, this.selectPenaltyTitle, this.addressType, this.residentType, String(this.pageIndex))
            .subscribe((data) => {
            this.total = data.count;
            var list = [];
            data.wenshu_list.forEach((element) => {
                list.push(element);
            });
            this.listOfData = list;
            console.log("listOfData", this.listOfData);
        });
    }
    //点击切换居住地
    searchAddressType(index, item) {
        this.selectAddressIndex = index;
        // if (index == 0){
        //   this.
        // }else{
        // }
        this.addressType = null;
        this.residentType = null;
        this.loadCateCharts();
    }
    //点击的类最
    searchSelectType(index, item) {
        this.selectTypeIndex = index;
        this.selectTitle = item.value;
        //类最切换 条件情况
        this.selectPenaltyIndex = null;
        this.selectPenaltyTitle = null;
        this.loadCateCharts();
        //点击类最加载个罪
        debugger;
        this.getWenshuByType();
    }
    //删除选择条件
    deleteFlagType(index, item) {
        if (index == 1) {
            this.selectPenaltyIndex = null;
            this.selectPenaltyTitle = null;
        }
        else if (index == 2) {
            // this.eduType = null;
            this.addressType = null;
            this.residentType = null;
        }
        this.loadCateCharts();
        this.getWenshuByType();
    }
    //控制翻页
    searchPageIndexData(index) {
        console.log("page", index);
        this.pageIndex = index;
        this.getWenshuByType();
    }
    echartsClick(index) {
        console.log("index", index);
        let nums = this.echartsXlist[index];
        if (this.selectAddressIndex == 0) {
            this.addressType = nums;
            this.residentType = null;
        }
        else {
            this.residentType = nums;
            this.addressType = null;
        }
        this.getWenshuByType();
    }
    //详情页面
    gotoDetail(item) {
        this.router.navigate(["/province/detail"], {
            skipLocationChange: true,
            queryParams: {
                "item": JSON.stringify(item),
                "from": "/province"
            }
        });
    }
    loadCateCharts() {
        if (this.selectAddressIndex == 0) {
            this.lawSerivce.getPenaltyAddress().subscribe(data => {
                data.forEach((element, index) => {
                    if (!!element.penalty_class && element.penalty_class == this.selectTitle) {
                        this.loadDataForChart(element.province_address);
                    }
                });
            });
        }
        else {
            this.lawSerivce.getPenaltyResidence().subscribe(data => {
                data.forEach((element, index) => {
                    if (!!element.penalty_class && element.penalty_class == this.selectTitle) {
                        this.loadDataForChart(element.province_residence);
                    }
                });
            });
        }
    }
    loadDataForChart(list) {
        var xList = [];
        var yList = [];
        list.forEach(element => {
            if (!!element.name) {
                xList.push(element.name);
                yList.push(element.number);
            }
        });
        this.echartsXlist = xList;
        console.log("xList", xList, "yList", yList);
        var option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
            },
            grid: {
                top: '10%',
                right: '3%',
                left: '8%',
                bottom: '15%'
            },
            xAxis: [{
                    type: 'category',
                    name: '',
                    nameTextStyle: {
                        color: "#333"
                    },
                    data: xList,
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(255,255,255,0.52)'
                        }
                    },
                    axisLabel: {
                        margin: 10,
                        interval: 0,
                        color: '#000',
                        textStyle: {
                            fontSize: 11
                        },
                    },
                }],
            yAxis: [
                {
                    type: 'value',
                    name: '（个）',
                    nameTextStyle: {
                        color: "#333"
                    },
                    axisLabel: {
                        formatter: '{value}',
                        color: '#333',
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(196,224,245,1)'
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            type: 'dashed',
                            color: 'rgba(196,224,245,1)'
                        }
                    }
                }
            ],
            series: [{
                    type: 'bar',
                    data: yList,
                    name: '数量',
                    barWidth: '16px',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#4DDEFE' // 0% 处的颜色
                                }, {
                                    offset: 0.5,
                                    color: '#57FBFA' // 50% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#3D8BFF' // 100% 处的颜色
                                }], false),
                            barBorderRadius: [2, 2, 0.1, 0.1],
                            shadowColor: 'rgba(0,0,0,0)',
                            shadowBlur: 4,
                            label: {
                                show: true,
                                position: 'top',
                                textStyle: {
                                    color: '#111',
                                    fontSize: 12
                                }
                            },
                        }
                    },
                }]
        };
        var mychart1 = echarts.init(document.getElementById("type-echart"));
        mychart1.clear();
        mychart1.setOption(option);
        mychart1.getZr().on('click', params => {
            let pointInPixel = [params.offsetX, params.offsetY];
            console.log("params", params);
            if (mychart1.containPixel('grid', pointInPixel)) {
                let xIndex = mychart1.convertFromPixel({ seriesIndex: 0 }, [params.offsetX, params.offsetY])[0];
                console.log("xIndex", xIndex);
                this.echartsClick(xIndex);
            }
        });
        window.onresize = mychart1.resize();
    }
};
ProvinceComponent.ctorParameters = () => [
    { type: _law_service__WEBPACK_IMPORTED_MODULE_3__["LawService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ProvinceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-province',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./province.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/law/province/province.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./province.component.scss */ "./src/app/page/law/province/province.component.scss")).default]
    })
], ProvinceComponent);



/***/ }),

/***/ "./src/app/page/law/sentence/sentence.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/page/law/sentence/sentence.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("nz-input-group {\n  padding: 10px 0;\n}\n\n.container-wraper {\n  display: flex;\n}\n\n.treeselect {\n  width: 35%;\n  padding-right: 60px;\n}\n\n.type-table {\n  width: 65%;\n}\n\n.screens {\n  border-bottom: 1px dashed #ccc;\n}\n\n.temp-kinds-main {\n  display: flex;\n}\n\n.temp-kinds-title {\n  min-width: 60px;\n}\n\n.temp-kinds-list {\n  display: flex;\n  list-style: none;\n  padding-left: 12px;\n  flex-flow: row wrap;\n  max-height: 200px;\n  overflow: auto;\n}\n\n.temp-kinds-list li {\n  padding-left: 8px;\n  padding-right: 8px;\n  cursor: pointer;\n  margin: 0 4px 6px;\n  border: 1px solid #ccc;\n}\n\n.temp-kinds-list li.active {\n  color: #3895FF;\n  border: 1px solid #3895FF;\n}\n\n.age-chart-width {\n  width: 100%;\n  margin-top: 24px;\n  border-bottom: 1px dashed #ccc;\n  margin-bottom: 24px;\n}\n\n:host ::ng-deep .ant-modal-footer {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL3dvcmsvd29yazQvaGRpb2NOZXcvaGRjZ2lvYy9zcmMvbWFpbi9teS1hcHAvc3JjL2FwcC9wYWdlL2xhdy9zZW50ZW5jZS9zZW50ZW5jZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZS9sYXcvc2VudGVuY2Uvc2VudGVuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSxhQUFBO0FDRUo7O0FEQUE7RUFDSSxVQUFBO0VBQ0EsbUJBQUE7QUNHSjs7QUREQTtFQUNJLFVBQUE7QUNJSjs7QURGQTtFQUNJLDhCQUFBO0FDS0o7O0FESEE7RUFDSSxhQUFBO0FDTUo7O0FESkE7RUFDSSxlQUFBO0FDT0o7O0FETEE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDUUo7O0FETkE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUNTSjs7QUROQTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtBQ1NKOztBRFBBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ1VKOztBRFBJO0VBQ0ksYUFBQTtBQ1VSIiwiZmlsZSI6InNyYy9hcHAvcGFnZS9sYXcvc2VudGVuY2Uvc2VudGVuY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuei1pbnB1dC1ncm91cCB7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICB9XG4uY29udGFpbmVyLXdyYXBlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuLnRyZWVzZWxlY3R7XG4gICAgd2lkdGg6IDM1JTtcbiAgICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xufVxuLnR5cGUtdGFibGV7XG4gICAgd2lkdGg6IDY1JTtcbn1cbi5zY3JlZW5ze1xuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2NjYztcbn1cbi50ZW1wLWtpbmRzLW1haW57XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi50ZW1wLWtpbmRzLXRpdGxle1xuICAgIG1pbi13aWR0aDogNjBweDtcbn1cbi50ZW1wLWtpbmRzLWxpc3R7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmctbGVmdDogMTJweDtcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuLnRlbXAta2luZHMtbGlzdCBsaXtcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbjogMCA0cHggNnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG59XG5cbi50ZW1wLWtpbmRzLWxpc3QgbGkuYWN0aXZle1xuICAgIGNvbG9yOiAgIzM4OTVGRjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzg5NUZGO1xufVxuLmFnZS1jaGFydC13aWR0aHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2NjYztcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwe1xuICAgIC5hbnQtbW9kYWwtZm9vdGVyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG4iLCJuei1pbnB1dC1ncm91cCB7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cblxuLmNvbnRhaW5lci13cmFwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4udHJlZXNlbGVjdCB7XG4gIHdpZHRoOiAzNSU7XG4gIHBhZGRpbmctcmlnaHQ6IDYwcHg7XG59XG5cbi50eXBlLXRhYmxlIHtcbiAgd2lkdGg6IDY1JTtcbn1cblxuLnNjcmVlbnMge1xuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNjY2M7XG59XG5cbi50ZW1wLWtpbmRzLW1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4udGVtcC1raW5kcy10aXRsZSB7XG4gIG1pbi13aWR0aDogNjBweDtcbn1cblxuLnRlbXAta2luZHMtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMTJweDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgbWF4LWhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4udGVtcC1raW5kcy1saXN0IGxpIHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDAgNHB4IDZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbn1cblxuLnRlbXAta2luZHMtbGlzdCBsaS5hY3RpdmUge1xuICBjb2xvcjogIzM4OTVGRjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzM4OTVGRjtcbn1cblxuLmFnZS1jaGFydC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNjY2M7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuYW50LW1vZGFsLWZvb3RlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/page/law/sentence/sentence.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/page/law/sentence/sentence.component.ts ***!
  \*********************************************************/
/*! exports provided: SentenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SentenceComponent", function() { return SentenceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _law_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../law.service */ "./src/app/page/law/law.service.ts");




let SentenceComponent = class SentenceComponent {
    constructor(lawSerivce, router) {
        this.lawSerivce = lawSerivce;
        this.router = router;
        this.isVisible = false;
        this.searchValue = '';
        this.videosrc = '';
        this.listOfData = [];
        this.nodes = [
            {
                title: '0-0',
                key: '0-0',
                children: [
                    {
                        title: '0-0-0',
                        key: '0-0-0',
                        children: [
                            { title: '0-0-0-0', key: '0-0-0-0', isLeaf: true },
                            { title: '0-0-0-1', key: '0-0-0-1', isLeaf: true },
                            { title: '0-0-0-2', key: '0-0-0-2', isLeaf: true }
                        ]
                    },
                    {
                        title: '0-0-1',
                        key: '0-0-1',
                        children: [
                            { title: '0-0-1-0', key: '0-0-1-0', isLeaf: true },
                            { title: '0-0-1-1', key: '0-0-1-1', isLeaf: true },
                            { title: '0-0-1-2', key: '0-0-1-2', isLeaf: true }
                        ]
                    },
                    {
                        title: '0-0-2',
                        key: '0-0-2',
                        isLeaf: true
                    }
                ]
            },
            {
                title: '0-1',
                key: '0-1',
                children: [
                    { title: '0-1-0-0', key: '0-1-0-0', isLeaf: true },
                    { title: '0-1-0-1', key: '0-1-0-1', isLeaf: true },
                    { title: '0-1-0-2', key: '0-1-0-2', isLeaf: true }
                ]
            },
            {
                title: '0-2',
                key: '0-2',
                isLeaf: true
            }
        ];
    }
    ngOnInit() {
        this.getClassList();
    }
    getClassList() {
        // debugger;
        this.lawSerivce.getAllClass('1').subscribe((data) => {
            console.log("data", data);
            this.arrayToTreeArray(data["list"]);
        });
    }
    arrayToTreeArray(array) {
        let rootArray = [];
        array.forEach(element => {
            if (element.pid == '1') {
                rootArray.push(element);
            }
        });
        let treeArray = [];
        rootArray.forEach(item => {
            let tree = {
                title: item.name,
                key: item.id,
                children: array.length > 0 ? this.toTree(item.id, array) : []
            };
            treeArray.push(tree);
        });
        console.log("rootArray", treeArray);
        this.treeIsLeaf(treeArray);
        console.log("rootArray", treeArray);
        this.nodes = treeArray;
    }
    treeIsLeaf(array) {
        array.forEach(item => {
            console.log("item.children", item.children);
            if (!item.children || item.children.length == 0) {
                item.isLeaf = true;
            }
            else {
                item.selectable = false;
                this.treeIsLeaf(item.children);
            }
        });
    }
    toTree(pid, array) {
        let children = [];
        let len = array.length;
        for (var i = 0; i < len; i++) {
            let node = array[i];
            if (node.pid == pid) {
                children.push({
                    title: node.name,
                    key: node.id,
                    children: this.toTree(node.id, array)
                });
            }
        }
        console.log("children", children);
        return children;
    }
    nzEvent(event) {
        console.log(event);
        let key = event.selectedKeys[0].key;
        debugger;
        let selectTitle = event.selectedKeys[0].origin.title;
        if (!!selectTitle) {
            this.selectTitle = selectTitle;
        }
        if (!!key) {
            this.lawSerivce.getAllList(key).subscribe(data => {
                console.log("data", data);
                this.listOfData = data["list"];
            });
        }
    }
    gotoVideo(data) {
        console.log("data");
        if (data.type == '1') {
            this.isVisible = true;
            this.videosrc = 'http://127.0.0.1:8080/' + data.path;
        }
        else {
            window.location.href = "http://127.0.0.1:8080/" + data.path;
        }
    }
    handleOk() {
        console.log('Button ok clicked!');
        this.isVisible = false;
    }
    handleCancel() {
        console.log('Button cancel clicked!');
        this.isVisible = false;
    }
};
SentenceComponent.ctorParameters = () => [
    { type: _law_service__WEBPACK_IMPORTED_MODULE_3__["LawService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SentenceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sentence',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sentence.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/law/sentence/sentence.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sentence.component.scss */ "./src/app/page/law/sentence/sentence.component.scss")).default]
    })
], SentenceComponent);



/***/ }),

/***/ "./src/app/page/law/type-case/type-case.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/page/law/type-case/type-case.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("nz-input-group {\n  padding: 10px 0;\n}\n\n.container-wraper {\n  display: flex;\n}\n\n.treeselect {\n  width: 35%;\n  padding-right: 60px;\n}\n\n.type-table {\n  width: 65%;\n}\n\n.screens {\n  border-bottom: 1px dashed #ccc;\n}\n\n.temp-kinds-main {\n  display: flex;\n}\n\n.temp-kinds-title {\n  min-width: 60px;\n}\n\n.temp-kinds-list {\n  display: flex;\n  list-style: none;\n  padding-left: 12px;\n  flex-flow: row wrap;\n  max-height: 200px;\n  overflow: auto;\n}\n\n.temp-kinds-list li {\n  padding-left: 8px;\n  padding-right: 8px;\n  cursor: pointer;\n  margin: 0 4px 6px;\n  border: 1px solid #ccc;\n}\n\n.temp-kinds-list li.active {\n  color: #3895FF;\n  border: 1px solid #3895FF;\n}\n\n.age-chart-width {\n  width: 100%;\n  margin-top: 24px;\n  border-bottom: 1px dashed #ccc;\n  margin-bottom: 24px;\n}\n\n:host ::ng-deep .ant-modal-footer {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL3dvcmsvd29yazQvaGRpb2NOZXcvaGRjZ2lvYy9zcmMvbWFpbi9teS1hcHAvc3JjL2FwcC9wYWdlL2xhdy90eXBlLWNhc2UvdHlwZS1jYXNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlL2xhdy90eXBlLWNhc2UvdHlwZS1jYXNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKOztBRENBO0VBQ0ksYUFBQTtBQ0VKOztBREFBO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0FDR0o7O0FEREE7RUFDSSxVQUFBO0FDSUo7O0FERkE7RUFDSSw4QkFBQTtBQ0tKOztBREhBO0VBQ0ksYUFBQTtBQ01KOztBREpBO0VBQ0ksZUFBQTtBQ09KOztBRExBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ1FKOztBRE5BO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FDU0o7O0FETkE7RUFDSSxjQUFBO0VBQ0EseUJBQUE7QUNTSjs7QURQQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNVSjs7QURQSTtFQUNJLGFBQUE7QUNVUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvbGF3L3R5cGUtY2FzZS90eXBlLWNhc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuei1pbnB1dC1ncm91cCB7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICB9XG4uY29udGFpbmVyLXdyYXBlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuLnRyZWVzZWxlY3R7XG4gICAgd2lkdGg6IDM1JTtcbiAgICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xufVxuLnR5cGUtdGFibGV7XG4gICAgd2lkdGg6IDY1JTtcbn1cbi5zY3JlZW5ze1xuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2NjYztcbn1cbi50ZW1wLWtpbmRzLW1haW57XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi50ZW1wLWtpbmRzLXRpdGxle1xuICAgIG1pbi13aWR0aDogNjBweDtcbn1cbi50ZW1wLWtpbmRzLWxpc3R7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmctbGVmdDogMTJweDtcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuLnRlbXAta2luZHMtbGlzdCBsaXtcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbjogMCA0cHggNnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG59XG5cbi50ZW1wLWtpbmRzLWxpc3QgbGkuYWN0aXZle1xuICAgIGNvbG9yOiAgIzM4OTVGRjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzg5NUZGO1xufVxuLmFnZS1jaGFydC13aWR0aHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2NjYztcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwe1xuICAgIC5hbnQtbW9kYWwtZm9vdGVyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG4iLCJuei1pbnB1dC1ncm91cCB7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cblxuLmNvbnRhaW5lci13cmFwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4udHJlZXNlbGVjdCB7XG4gIHdpZHRoOiAzNSU7XG4gIHBhZGRpbmctcmlnaHQ6IDYwcHg7XG59XG5cbi50eXBlLXRhYmxlIHtcbiAgd2lkdGg6IDY1JTtcbn1cblxuLnNjcmVlbnMge1xuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNjY2M7XG59XG5cbi50ZW1wLWtpbmRzLW1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4udGVtcC1raW5kcy10aXRsZSB7XG4gIG1pbi13aWR0aDogNjBweDtcbn1cblxuLnRlbXAta2luZHMtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMTJweDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgbWF4LWhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4udGVtcC1raW5kcy1saXN0IGxpIHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDAgNHB4IDZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbn1cblxuLnRlbXAta2luZHMtbGlzdCBsaS5hY3RpdmUge1xuICBjb2xvcjogIzM4OTVGRjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzM4OTVGRjtcbn1cblxuLmFnZS1jaGFydC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNjY2M7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuYW50LW1vZGFsLWZvb3RlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/page/law/type-case/type-case.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/page/law/type-case/type-case.component.ts ***!
  \***********************************************************/
/*! exports provided: TypeCaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeCaseComponent", function() { return TypeCaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _law_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../law.service */ "./src/app/page/law/law.service.ts");




let TypeCaseComponent = class TypeCaseComponent {
    constructor(lawSerivce, router) {
        this.lawSerivce = lawSerivce;
        this.router = router;
        this.webconfig = webconfig;
        this.isVisible = false;
        this.searchValue = '';
        this.videosrc = '';
        this.total = 0;
        this.listOfData = [];
        this.listOfTotal = [];
        this.nodes = [
            {
                title: '0-0',
                key: '0-0',
                children: [
                    {
                        title: '0-0-0',
                        key: '0-0-0',
                        children: [
                            { title: '0-0-0-0', key: '0-0-0-0', isLeaf: true },
                            { title: '0-0-0-1', key: '0-0-0-1', isLeaf: true },
                            { title: '0-0-0-2', key: '0-0-0-2', isLeaf: true }
                        ]
                    },
                    {
                        title: '0-0-1',
                        key: '0-0-1',
                        children: [
                            { title: '0-0-1-0', key: '0-0-1-0', isLeaf: true },
                            { title: '0-0-1-1', key: '0-0-1-1', isLeaf: true },
                            { title: '0-0-1-2', key: '0-0-1-2', isLeaf: true }
                        ]
                    },
                    {
                        title: '0-0-2',
                        key: '0-0-2',
                        isLeaf: true
                    }
                ]
            },
            {
                title: '0-1',
                key: '0-1',
                children: [
                    { title: '0-1-0-0', key: '0-1-0-0', isLeaf: true },
                    { title: '0-1-0-1', key: '0-1-0-1', isLeaf: true },
                    { title: '0-1-0-2', key: '0-1-0-2', isLeaf: true }
                ]
            },
            {
                title: '0-2',
                key: '0-2',
                isLeaf: true
            }
        ];
    }
    ngOnInit() {
        this.getClassList();
        this.queryDataList('1');
    }
    getClassList() {
        // debugger;
        this.lawSerivce.getAllClass('1').subscribe((data) => {
            console.log("data", data);
            this.arrayToTreeArray(data["list"]);
        });
    }
    arrayToTreeArray(array) {
        let rootArray = [];
        array.forEach(element => {
            if (element.pid == '0') {
                this.selectTitle = element.name;
                rootArray.push(element);
            }
        });
        let treeArray = [];
        rootArray.forEach(item => {
            let tree = {
                title: item.name,
                key: item.id,
                expanded: true,
                children: array.length > 0 ? this.toTree(item.id, array) : []
            };
            treeArray.push(tree);
        });
        console.log("rootArray", treeArray);
        this.treeIsLeaf(treeArray);
        console.log("rootArray", treeArray);
        this.nodes = treeArray;
    }
    treeIsLeaf(array) {
        array.forEach(item => {
            console.log("item.children", item.children);
            if (!item.children || item.children.length == 0) {
                item.isLeaf = true;
            }
            else {
                //  item.selectable = false;
                this.treeIsLeaf(item.children);
            }
        });
    }
    toTree(pid, array) {
        let children = [];
        let len = array.length;
        for (var i = 0; i < len; i++) {
            let node = array[i];
            if (node.pid == pid) {
                children.push({
                    title: node.name,
                    key: node.id,
                    children: this.toTree(node.id, array)
                });
            }
        }
        console.log("children", children);
        return children;
    }
    nzEvent(event) {
        console.log(event);
        let key = event.selectedKeys[0].key;
        debugger;
        let selectTitle = event.selectedKeys[0].origin.title;
        if (!!selectTitle) {
            this.selectTitle = selectTitle;
        }
        if (!!key) {
            this.queryDataList(key);
        }
    }
    queryDataList(key) {
        this.lawSerivce.getAllClass(key).subscribe(res => {
            let list = res["list"];
            let code = '';
            list.forEach(item => {
                code += item.id + ",";
            });
            code = code.slice(0, code.length - 2);
            this.lawSerivce.getAllList(code).subscribe(data => {
                console.log("data", data);
                this.total = data["list"].length;
                this.listOfData = data["list"];
                this.listOfTotal = data["list"];
                this.listOfData = this.listOfData.slice(0, 10);
            });
        });
    }
    currentPageDataChange(event) {
        console.log(event);
        this.listOfData = this.listOfTotal.slice((event - 1) * 10, event * 10);
    }
    gotoVideo(data) {
        console.log("data");
        if (data.type == '视频') {
            this.isVisible = true;
            this.videosrc = this.webconfig + data.path;
        }
        else {
            window.location.href = this.webconfig + data.path;
        }
    }
    handleOk() {
        console.log('Button ok clicked!');
        this.isVisible = false;
    }
    handleCancel() {
        console.log('Button cancel clicked!');
        this.isVisible = false;
    }
};
TypeCaseComponent.ctorParameters = () => [
    { type: _law_service__WEBPACK_IMPORTED_MODULE_3__["LawService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
TypeCaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-type-case',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./type-case.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/law/type-case/type-case.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./type-case.component.scss */ "./src/app/page/law/type-case/type-case.component.scss")).default]
    })
], TypeCaseComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/apple/Desktop/work/work4/hdiocNew/hdcgioc/src/main/my-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map