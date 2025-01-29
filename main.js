// alib.js

(function() {
    // Load jQuery if it's not already present
    function loadJQuery(callback) {
        if (typeof jQuery === "undefined") {
            var script = document.createElement("script");
            script.src = "https://code.jquery.com/jquery-3.6.4.min.js";
            script.type = "text/javascript";
            script.onload = callback;
            document.head.appendChild(script);
        } else {
            callback(); // jQuery is already loaded
        }
    }

    // Initialize the library after jQuery has loaded
    loadJQuery(function() {
        window.alib = (function($) {
            return {
                // DOM manipulation shortcuts
                select: function(selector) {
                    return $(selector);
                },

                hide: function(selector) {
                    $(selector).hide();
                },

                show: function(selector) {
                    $(selector).show();
                },

                // AJAX helpers
                get: function(url, successCallback, errorCallback) {
                    $.ajax({
                        url: url,
                        type: "GET",
                        success: successCallback,
                        error: errorCallback
                    });
                },

                post: function(url, data, successCallback, errorCallback) {
                    $.ajax({
                        url: url,
                        type: "POST",
                        data: data,
                        success: successCallback,
                        error: errorCallback
                    });
                },

                // Local storage helpers
                setStorage: function(key, value) {
                    localStorage.setItem(key, JSON.stringify(value));
                },

                getStorage: function(key) {
                    var value = localStorage.getItem(key);
                    return value ? JSON.parse(value) : null;
                },

                removeStorage: function(key) {
                    localStorage.removeItem(key);
                },

                // Logging helper
                log: function(message) {
                    console.log(message);
                }
            };
        })(window.jQuery);
        console.log("alib is ready!");
    });
})();
