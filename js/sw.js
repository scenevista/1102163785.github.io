self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open("static-cache")
            .then(function (cache) {
                return cache.addAll([
                    "/Content/bootstrap.css",
                    "/Scripts/jquery-3.0.0.js",
                    "/Scripts/bootstrap.js",
                    "/Scripts/popper.js",
                    "/favicon.png"
                ]);
            })
    );
});