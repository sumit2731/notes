/*
    Modules, introduction
    
    As our application grows bigger, we want to split it into multiple files, so called “modules”.
    For a long time, JavaScript existed without a language-level module syntax. That wasn’t a problem, because initially scripts were
        small and simple, so there was no need.

    But eventually scripts became more and more complex, so the community invented a variety of ways to organize code into modules, 
        special libraries to load modules on demand.To name some (for historical reasons):

        AMD – one of the most ancient module systems, initially implemented by the library require.js.
        CommonJS – the module system created for Node.js server.
        UMD – one more module system, suggested as a universal one, compatible with AMD and CommonJS.


    Now these all slowly became a part of history, but we still can find them in old scripts.
    The language-level module system appeared in the standard in 2015, gradually evolved since then, and is now supported by all
        major browsers and in Node.js. So we’ll study the modern JavaScript modules from now on.
*/

/* 
    What is a module? - A module is just a file. One script is one module. As simple as that.

    Modules can load each other and use special directives export and import to interchange functionality, call functions of one 
        module from another one:

    The import directive loads the module by path ./sayHi.js relative to the current file, and assigns exported function sayHi to 
    the corresponding variable.
*/

// sayHi.js
export function sayHi(user) {
  console.log(`Hello, ${user}!`);
}

//  main.js
import { sayHi } from "./sayHi.js";

console.log(sayHi); // function...
sayHi("John"); // Hello, John!

/* 
Let’s run the example in-browser.

As modules support special keywords and features, we must tell the browser that a script should be treated as a module, by using the
attribute <script type="module">.

The browser automatically fetches and evaluates the imported module (and its imports if needed), and then runs the script.

If you try to open a web-page locally, via file:// protocol, you’ll find that import/export directives don’t work. Use a local 
web-server, such as static-server or use the “live server” capability of your editor, such as VS Code Live Server Extension to
test modules.

*/

/* 
Core module features

    a)Always “use strict” - When you use type="module" attribute in script tag , all your code is executed in strict mode only.
        even if in your file you do not import or export anytging else

    b)Module-level scope - Each module has its own top-level scope. In other words, top-level variables and functions from a module
        are not seen in other scripts.
        
        a)Example 1 -
            <script type="module" src="user.js"></script>
            <script type="module" src="hello.js"></script>

            here each script cannot see variable declared in other script.

            Modules should export what they want to be accessible from outside and import what they need.

                user.js should export the user variable.
                hello.js should import it from user.js module.

        b)Example 2 -
            if we import module 1 into module2. non exported members of module1 are not visisble inmodule2.


        c)Example 3 -
            Here are two scripts on the same page, both type="module". They don’t see each other’s top-level variables:

                <script type="module">
                    // The variable is only visible in this module script
                    let user = "John";
                </script>

                <script type="module">
                    alert(user); // Error: user is not defined
                </script>

            however a module script can see the top level variables declared by non module script

        In the browser, we can make a variable window-level global by explicitly assigning it to a window property, e.g. 
            window.user = "John".Then all scripts will see it, both with type="module" and without it.That said, making such global 
            variables is frowned upon. Please try to avoid them.


    c)A module code is evaluated only the first time when imported

        If the same module is imported into multiple other modules, its code is executed only once, upon the first import. Then its 
        exports are given to all further importers.The one-time evaluation has important consequences, that we should be aware of.

        a)First, if executing a module code brings side-effects, like showing a message, then importing it multiple times will 
            trigger it only once – the first time:

                // 📁 alert.js
                alert("Module is evaluated!");


                // Import the same module from different files

                // 📁 1.js
                import `./alert.js`; // Module is evaluated!

                // 📁 2.js
                import `./alert.js`; // (shows nothing)

            The second import shows nothing, because the module has already been evaluated.

        b)All importing modules get same copy of exported object.

            // 📁 admin.js
                export let admin = {
                    name: "John"
                };

            All importers get exactly the one and only admin object:

            // 📁 1.js
            import {admin} from './admin.js';
            admin.name = "Pete";

            // 📁 2.js
            import {admin} from './admin.js';
            alert(admin.name); // Pete

            // Both 1.js and 2.js reference the same admin object
            // Changes made in 1.js are visible in 2.js


            That’s exactly because the module is executed only once. Exports are generated, and then they are shared between 
            importers, so if something changes the admin object, other importers will see that.Such behavior is actually very 
            convenient, because it allows us to configure modules.

            In other words, a module can provide a generic functionality that needs a setup. E.g. authentication needs credentials. 
            Then it can export a configuration object expecting the outer code to assign to it.Here’s the classical pattern:

                a)A module exports some means of configuration, e.g. a configuration object.
                b)On the first import we initialize it, write to its properties. The top-level application script may do that.
                c)Further imports use the module.


                For instance, the admin.js module may provide certain functionality (e.g. authentication), but expect the credentials
                to come into the config object from outside:

                    // 📁 admin.js
                    export let config = { };

                    export function sayHi() {
                    alert(`Ready to serve, ${config.user}!`);
                    }

                    Here, admin.js exports the config object (initially empty, but may have default properties too).
                    Then in init.js, the first script of our app, we import config from it and set config.user:

                    // 📁 init.js
                    import {config} from './admin.js';
                    config.user = "Pete";

                    …Now the module admin.js is configured.Further importers can call it, and it correctly shows the current user:


                    // 📁 another.js
                    import {sayHi} from './admin.js';

                    sayHi(); // Ready to serve, Pete!


    d)import.meta - The object import.meta contains the information about the current module. it has 2 proeprties -

        a)url - In a browser, import.meta.url contains the absolute URL to the current ES module.or a current webpage URL if inside 
            HTML.In node.js this will contain the absolute path to the module, e.g. 'file:///absolute-path/main.mjs'.The absolute 
            path inside import.meta.url is always prefixed with file://.
        b)resolve - Executing await import.meta.resolve('./helper.mjs') resolves './helper.mjs' to '/home/user/web-app/helper.mjs' 
            absolute path.
                
            // main.mjs
            const resolvedPath = await import.meta.resolve('./helper.mjs');
            console.log(resolvedPath); // '/home/user/web-app/helper.mjs'


    e)in module "this" is undefined

        <script>
            alert(this); // window
        </script>

        <script type="module">
            alert(this); // undefined
        </script>


*/

/* 
Browser-specific features
    There are also several browser-specific differences of scripts with type="module" compared to regular ones.


    a)Module scripts are deferred. That is true even for inline scripts.normally defer and async attributes do not apply to script
       tags which do not have src attributes.

        <script type="module">
            alert(typeof button); // object: the script can 'see' the button below
            // as modules are deferred, the script runs after the whole page is loaded
        </script>


        <script>
        alert(typeof button); // button is undefined, the script can't see elements below
        // regular scripts run immediately, before the rest of the page is processed
        </script>

        <button id="button">Button</button>


        When using modules, we should be aware that the HTML page shows up as it loads, and JavaScript modules run after that, so the
         user may see the page before the JavaScript application is ready. Some functionality may not work yet. We should put “loading
         indicators”, or otherwise ensure that the visitor won’t be confused by that.

    b)Async works on inline scripts also if we use type="module"
        For non-module scripts, the async attribute only works on external scripts.For module scripts, it works on inline scripts as 
        well.

    c)External scripts
        1)External scripts with the same src run only once:

            <!-- the script my.js is fetched and executed only once -->
            <script type="module" src="my.js"></script>
            <script type="module" src="my.js"></script>
        
        2)External scripts that are fetched from another origin (e.g. another site) require CORS headers.if a module script is fetched
            from another origin, the remote server must supply a header Access-Control-Allow-Origin allowing the fetch.
            
            <!-- another-site.com must supply Access-Control-Allow-Origin -->
            <!-- otherwise, the script won't execute -->
            <script type="module" src="http://another-site.com/their.js"></script>


*/

/* 
No “bare” modules allowed

In the browser, import must get either a relative or absolute URL. Modules without any path are called “bare” modules. Such modules
    are not allowed in import.

    import {sayHi} from 'sayHi'; // Error, "bare" module
    // the module must have a path, e.g. './sayHi.js' or wherever the module is

    Certain environments, like Node.js or bundle tools allow bare modules, without any path, as they have their own ways for finding
    modules and hooks to fine-tune them. But browsers do not support bare modules yet.

*/

/* 
Compatibility, “nomodule”

Old browsers do not understand type="module". Scripts of an unknown type are just ignored. For them, it’s possible to provide a 
    fallback using the nomodule attribute:

    <script type="module">
        alert("Runs in modern browsers");
    </script>

    <script nomodule>
        alert("Modern browsers know both type=module and nomodule, so skip this")
        alert("Old browsers ignore script with unknown type=module, but execute this.");
    </script>

*/

/* 
Build tools - Read from website

*/
