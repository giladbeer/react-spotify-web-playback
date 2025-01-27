var __read = (this && this.__read) || function (o, n) {
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
};
import { canUseDOM as canUseDOMBool } from 'exenv';
export var canUseDOM = function () { return canUseDOMBool; };
export var STATUS = {
    ERROR: 'ERROR',
    IDLE: 'IDLE',
    INITIALIZING: 'INITIALIZING',
    READY: 'READY',
    RUNNING: 'RUNNING',
    UNSUPPORTED: 'UNSUPPORTED',
};
export var TYPE = {
    DEVICE: 'device_update',
    FAVORITE: 'favorite_update',
    PLAYER: 'player_update',
    PROGRESS: 'progress_update',
    STATUS: 'status_update',
    TRACK: 'track_update',
};
export function getSpotifyURIType(uri) {
    var _a = __read(uri.split(':'), 2), _b = _a[1], type = _b === void 0 ? '' : _b;
    return type;
}
export function isEqualArray(A, B) {
    if (!Array.isArray(A) || !Array.isArray(B) || A.length !== B.length) {
        return false;
    }
    var result = true;
    A.forEach(function (a) {
        return B.forEach(function (b) {
            result = a === b;
        });
    });
    return result;
}
export function isNumber(value) {
    return typeof value === 'number';
}
export function loadSpotifyPlayer() {
    return new Promise(function (resolve, reject) {
        var scriptTag = document.getElementById('spotify-player');
        if (!scriptTag) {
            var script = document.createElement('script');
            script.id = 'spotify-player';
            script.type = 'text/javascript';
            script.async = false;
            script.defer = true;
            script.src = 'https://sdk.scdn.co/spotify-player.js';
            script.onload = function () { return resolve(); };
            script.onerror = function (error) { return reject(new Error("loadScript: " + error.message)); };
            document.head.appendChild(script);
        }
        else {
            resolve();
        }
    });
}
export function parseVolume(value) {
    if (!isNumber(value)) {
        return 1;
    }
    if (value > 1) {
        return value / 100;
    }
    return value;
}
/**
 * Round decimal numbers
 */
export function round(number, digits) {
    if (digits === void 0) { digits = 2; }
    var factor = Math.pow(10, digits);
    return Math.round(number * factor) / factor;
}
export function validateURI(input) {
    var validTypes = ['album', 'artist', 'playlist', 'show', 'track', 'episode'];
    /* istanbul ignore else */
    if (input && input.indexOf(':') > -1) {
        var _a = __read(input.split(':'), 3), key = _a[0], type = _a[1], id = _a[2];
        /* istanbul ignore else */
        if (key === 'spotify' && validTypes.indexOf(type) >= 0 && id.length === 22) {
            return true;
        }
    }
    return false;
}
//# sourceMappingURL=utils.js.map