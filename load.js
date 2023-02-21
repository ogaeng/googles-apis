var gtmLoadFn = (function(history){
    var pushState = history.pushState;
    history.pushState = function(state) {
        if (typeof history.onpushstate == "function") {
            history.onpushstate({state: state});
        }
        dataLayer.push({'event':'gtm.load'});
        return pushState.apply(history, arguments);
    };
})(window.history);