//Function that takes callback
function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    document.head.append(src);
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Error for ${src}`));
}

//calling that function and passing callback
loadScript("app.js", function(error, script) {
    if (error) {
        console.log(error);
    } else {
        console.log("Script is loaded");
    }
});

//Callback hell or pyramid or doom
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
                        // conti nue doing other things
                    }
                });
            }
        });
    }
});


//One solittion to avoid pyramid of doom
//but the code looks like a torn apart spreadsheet. It’s difficult to read, and you probably noticed that one needs to eye-jump
// between pieces while reading it. That’s inconvenient, especially if the reader is not familiar with the code and doesn’t know 
//where to eye-jump.

loadScript("app1.js", loadScript2);

function AfterloadScript1(error, script) {
    if (error) {
        console.log(error);
    } else {
        console.log(script + "Loaded");
        loadScript("app2", loadScript3);
    }
}

function afterLoadScript2(error, script) {
    if (error) {
        console.log(error);
    } else {
        loadScript("app3.js");
    }
}

function afterLoadScript3(error, script) {
    if (error) {
        console.log(error);
    } else {
        console.log(script + " Loaded");
    }
}