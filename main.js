// alib.js

// Ensure jQuery is loaded
(function() {
    if (typeof jQuery === "undefined") {
        var script = document.createElement("script");
        script.src = "https://code.jquery.com/jquery-3.6.4.min.js";
        script.type = "text/javascript";
        script.onload = function() {
            console.log("jQuery loaded!");
        };
        document.head.appendChild(script);
    }
})();

// Main helper library
var alib = (function($) {
    if (!$) {
        throw new Error("jQuery is required for alib to work!");
    }

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
})(window.jQuery || null);
