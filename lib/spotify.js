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
Object.defineProperty(exports, "__esModule", { value: true });
exports.setVolume = exports.setDevice = exports.seek = exports.saveTracks = exports.removeTracks = exports.next = exports.previous = exports.play = exports.pause = exports.getPlaybackState = exports.getDevices = exports.checkTracksStatus = void 0;
function checkTracksStatus(token, tracks) {
    return __awaiter(this, void 0, void 0, function () {
        var ids;
        return __generator(this, function (_a) {
            ids = Array.isArray(tracks) ? tracks : [tracks];
            return [2 /*return*/, fetch("https://api.spotify.com/v1/me/tracks/contains?ids=" + ids, {
                    headers: {
                        Authorization: "Bearer " + token,
                        'Content-Type': 'application/json',
                    },
                    method: 'GET',
                }).then(function (d) { return d.json(); })];
        });
    });
}
exports.checkTracksStatus = checkTracksStatus;
function getDevices(token) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, fetch("https://api.spotify.com/v1/me/player/devices", {
                    headers: {
                        Authorization: "Bearer " + token,
                        'Content-Type': 'application/json',
                    },
                    method: 'GET',
                }).then(function (d) { return d.json(); })];
        });
    });
}
exports.getDevices = getDevices;
function getPlaybackState(token) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, fetch("https://api.spotify.com/v1/me/player", {
                    headers: {
                        Authorization: "Bearer " + token,
                        'Content-Type': 'application/json',
                    },
                    method: 'GET',
                }).then(function (d) {
                    if (d.status === 204) {
                        return null;
                    }
                    return d.json();
                })];
        });
    });
}
exports.getPlaybackState = getPlaybackState;
function pause(token) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, fetch("https://api.spotify.com/v1/me/player/pause", {
                    headers: {
                        Authorization: "Bearer " + token,
                        'Content-Type': 'application/json',
                    },
                    method: 'PUT',
                })];
        });
    });
}
exports.pause = pause;
function play(token, _a) {
    var context_uri = _a.context_uri, deviceId = _a.deviceId, _b = _a.offset, offset = _b === void 0 ? 0 : _b, uris = _a.uris;
    return __awaiter(this, void 0, void 0, function () {
        var body, isArtist, position;
        return __generator(this, function (_c) {
            if (context_uri) {
                isArtist = context_uri.indexOf('artist') >= 0;
                position = void 0;
                /* istanbul ignore else */
                if (!isArtist) {
                    position = { position: offset };
                }
                body = JSON.stringify({ context_uri: context_uri, offset: position });
            }
            else if (Array.isArray(uris) && uris.length) {
                body = JSON.stringify({ uris: uris, offset: { position: offset } });
            }
            return [2 /*return*/, fetch("https://api.spotify.com/v1/me/player/play?device_id=" + deviceId, {
                    body: body,
                    headers: {
                        Authorization: "Bearer " + token,
                        'Content-Type': 'application/json',
                    },
                    method: 'PUT',
                })];
        });
    });
}
exports.play = play;
function previous(token) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, fetch("https://api.spotify.com/v1/me/player/previous", {
                    headers: {
                        Authorization: "Bearer " + token,
                        'Content-Type': 'application/json',
                    },
                    method: 'POST',
                })];
        });
    });
}
exports.previous = previous;
function next(token) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, fetch("https://api.spotify.com/v1/me/player/next", {
                    headers: {
                        Authorization: "Bearer " + token,
                        'Content-Type': 'application/json',
                    },
                    method: 'POST',
                })];
        });
    });
}
exports.next = next;
function removeTracks(token, tracks) {
    return __awaiter(this, void 0, void 0, function () {
        var ids;
        return __generator(this, function (_a) {
            ids = Array.isArray(tracks) ? tracks : [tracks];
            return [2 /*return*/, fetch("https://api.spotify.com/v1/me/tracks", {
                    body: JSON.stringify(ids),
                    headers: {
                        Authorization: "Bearer " + token,
                        'Content-Type': 'application/json',
                    },
                    method: 'DELETE',
                })];
        });
    });
}
exports.removeTracks = removeTracks;
function saveTracks(token, tracks) {
    return __awaiter(this, void 0, void 0, function () {
        var ids;
        return __generator(this, function (_a) {
            ids = Array.isArray(tracks) ? tracks : [tracks];
            return [2 /*return*/, fetch("https://api.spotify.com/v1/me/tracks", {
                    body: JSON.stringify({ ids: ids }),
                    headers: {
                        Authorization: "Bearer " + token,
                        'Content-Type': 'application/json',
                    },
                    method: 'PUT',
                })];
        });
    });
}
exports.saveTracks = saveTracks;
function seek(token, position) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, fetch("https://api.spotify.com/v1/me/player/seek?position_ms=" + position, {
                    headers: {
                        Authorization: "Bearer " + token,
                        'Content-Type': 'application/json',
                    },
                    method: 'PUT',
                })];
        });
    });
}
exports.seek = seek;
function setDevice(token, deviceId, shouldPlay) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, fetch("https://api.spotify.com/v1/me/player", {
                    body: JSON.stringify({ device_ids: [deviceId], play: shouldPlay }),
                    headers: {
                        Authorization: "Bearer " + token,
                        'Content-Type': 'application/json',
                    },
                    method: 'PUT',
                })];
        });
    });
}
exports.setDevice = setDevice;
function setVolume(token, volume) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, fetch("https://api.spotify.com/v1/me/player/volume?volume_percent=" + volume, {
                    headers: {
                        Authorization: "Bearer " + token,
                        'Content-Type': 'application/json',
                    },
                    method: 'PUT',
                })];
        });
    });
}
exports.setVolume = setVolume;
//# sourceMappingURL=spotify.js.map