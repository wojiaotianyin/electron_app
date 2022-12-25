"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
exports.__esModule = true;
var node_fetch_1 = require("node-fetch");
var TOKEN = "";
var pets = {
    apiKey: "iX4Lg5Bi2Nb73QHihhzRz5Pvxm49cNgYMb6E1zTGT5bEB25Qz6",
    secretKey: "WXHBmP2rxw0LMWqz4lxCTAcJkSAGyp82onImgFcc",
    url_pets: "https://api.petfinder.com/v2/animals?type=dog&page=1",
    url_auth: "https://api.petfinder.com/v2/oauth2/token",
    auth: ''
};
// TODO: typescipt set state
/**
 * get accesss token
 * @param params
 * @returns
 */
function getAuth(params) {
    return __awaiter(this, void 0, void 0, function () {
        var params_, response, data, result, _i, _a, i, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(params == undefined)) return [3 /*break*/, 6];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 5, , 6]);
                    params_ = new URLSearchParams();
                    params_.append('grant_type', 'client_credentials');
                    params_.append('client_id', pets.apiKey);
                    params_.append('client_secret', pets.secretKey);
                    return [4 /*yield*/, (0, node_fetch_1["default"])(pets.url_auth, {
                            method: 'POST',
                            body: params_
                        })];
                case 2:
                    response = _b.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _b.sent();
                    TOKEN = data.access_token;
                    return [4 /*yield*/, getPets(TOKEN)];
                case 4:
                    result = _b.sent();
                    console.log('=== データ数 ===');
                    console.log(result['animals'].length);
                    console.log('=========');
                    for (_i = 0, _a = result['animals']; _i < _a.length; _i++) {
                        i = _a[_i];
                        console.log(i);
                    }
                    return [3 /*break*/, 6];
                case 5:
                    error_1 = _b.sent();
                    if (error_1 instanceof Error) {
                        console.log('error message: ', error_1.message);
                        return [2 /*return*/, error_1.message];
                    }
                    else {
                        console.log('unexpected error: ', error_1);
                        return [2 /*return*/, 'An unexpected error occurred'];
                    }
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
/**
 * get pets information
 * @param token
 * @returns
 */
function getPets(token) {
    return __awaiter(this, void 0, void 0, function () {
        var response, res, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, (0, node_fetch_1["default"])(pets.url_pets, {
                            method: 'GET',
                            headers: { 'Authorization': 'Bearer ' + token }
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    res = _a.sent();
                    return [2 /*return*/, res];
                case 3:
                    error_2 = _a.sent();
                    if (error_2 instanceof Error) {
                        console.log('error message: ', error_2.message);
                        return [2 /*return*/, error_2.message];
                    }
                    else {
                        console.log('unexpected error: ', error_2);
                        return [2 /*return*/, 'An unexpected error occurred'];
                    }
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
getAuth();
