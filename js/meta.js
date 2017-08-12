
(function () {
    this.Meta = function () {
        var defaultOptions = {
            googlebot: "index,follow,all",
            robots: "index,follow,all"
        }
        if (arguments[0] && typeof arguments[0] === "object" && typeof (arguments[0] != "undefined")) {
            defaultOptions = extendDefaults(defaultOptions, arguments[0]);
        }
        appendMetaTag(defaultOptions);
    }
    function extendDefaults(defaultOptions, properties) {
        var property;
        for (var property in properties) {
            if (properties.hasOwnProperty(property)) {
                defaultOptions[property] = properties[property];
            }
        }
        return defaultOptions;
    }
    Meta.prototype.facebook = function () {
        if (arguments[0] && typeof arguments[0] === "object" && typeof (arguments[0] != "undefined")) {
            for (var key in arguments[0]) {
                if (arguments[0].hasOwnProperty(key)) {
                    createMetaTag(key, arguments[0][key], true);
                }
            }
        }
    }

    Meta.prototype.google = function () {
        if (arguments[0] && typeof arguments[0] === "object" && typeof (arguments[0] != "undefined")) {
            for (var key in arguments[0]) {
                if (arguments[0].hasOwnProperty(key)) {
                    createMetaTag(key, arguments[0][key], false);
                }
            }
        }
    }
    function appendMetaTag(options) {
        var metaText = "";
        for (var key in options) {
            if (options.hasOwnProperty(key)) {
                if (key == "title" || key == "description" || key == "image" || key == "keywords") {
                    createMetaTag(key, options[key], false);
                    createMetaTag(key, options[key], true);
                } else {
                    ;
                    createMetaTag(key, options[key], false);
                }
            }
        }
    }

    function createMetaTag(name, content, og) {
        var meta = document.createElement('meta');
        if (og) {
            meta.setAttribute('name', 'og:' + name)
        } else {
            meta.setAttribute('name', name)
        }
        meta.setAttribute('content', content);
        document.head.appendChild(meta);

    }
})();