(function () {
    'use strict'
    const URL = document.currentScript.getAttribute('redirect-url') || '';
    const AUTHENTICATED_URL = window.location.protocol + '//' + window.location.host + URL;
    const REDIRECT_INTERVAL = document.currentScript.getAttribute('redirect-interval') || 1000 * 60;

    function _ajaxGet(url) {
        const xmlHttpRequest = new XMLHttpRequest();
        xmlHttpRequest.onloadend = function () {
            if (xmlHttpRequest.responseURL !== url) {
                window.location.href = xmlHttpRequest.responseURL
            }
        }
        xmlHttpRequest.onreadystatechange = function () {

        };
        xmlHttpRequest.open("GET", url, true);
        xmlHttpRequest.send();
    }

    setInterval(function () {
        _ajaxGet(AUTHENTICATED_URL)
    }, parseInt(REDIRECT_INTERVAL));
})();