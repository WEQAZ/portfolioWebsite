// utils/corsRequest.js

function createCORSRequest(method, url, apiKey) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
        // XHR for Chrome/Firefox/Opera/Safari/IE10+.
        xhr.open(method, url, true);
        xhr.setRequestHeader('Teamup-Token', apiKey);
    } else if (typeof XDomainRequest != "undefined") {
        // XDomainRequest for IE8/IE9.
        xhr = new XDomainRequest();
        if (window.location.protocol === 'http:') {
            url = url.replace('https://', 'http://');
        }
        if (method !== 'GET' && method !== 'POST') {
            alert('XDomainRequest only supports GET and POST methods');
            return null;
        }
        if (url.indexOf('?') === -1) {
            url += '?_teamup_token=' + apiKey;
        } else {
            url += '&_teamup_token=' + apiKey;
        }
        xhr.open(method, url);
    } else {
        // CORS not supported.
        xhr = null;
    }
    return xhr;
}

export function makeCorsRequest(url, apiKey, successCallback, errorCallback) {
    var xhr = createCORSRequest('GET', url, apiKey);
    if (!xhr) {
        alert('CORS not supported');
        return;
    }

    xhr.onload = function () {
        if (xhr.status < 400) {
            if (successCallback) successCallback(xhr);
        } else if (errorCallback) {
            errorCallback(xhr);
        }
    };
    xhr.onerror = function () {
        if (errorCallback) {
            errorCallback(xhr);
        }
    };

    xhr.send();
}
