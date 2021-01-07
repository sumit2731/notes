function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    document.head.append(src);
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Error for ${src}`));
}


loadScript("app.js", function(error, script) {
    if (error) {
        console.log(error);
    } else {
        console.log("Script is loaded");
    }
});

loadScript("app1.js", function(error, script) {
    if (error) {
        console.log(error);
    } else {
        console.log("app1 is loaded");
        loadScript("app2.js", function(error, script) {
            if (error) {
                console.log(error);
            } else {
                console.log("app2 is loaded");
                loadScript("app3.js", function(error, script) {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log("app3 is loaded");
                    }
                });
            }
        });
    }
});