
const path = require('path');


module.exports = {
    entry: "./src/index.js",
    output: {
        filename: 'bundle.js',
        //path: './dist', it needs to be absolute not relative
        path: path.resolve(__dirname, './dist'),
        /* 
        *Public path tells webpack where generated files are located, if we dnt give public path, then it
        will look at 'path' where output files re generated. when webpack creates path to the file, it will 
        concatenate public path, with fle name
        */
        publicPath: 'dist/'
    },
    mode: 'none',
    module: {
        /* 
        rules is arry of object. each object will have atleast 2 proeprties. test is regular expression to match files.
        use defines loader to use for files matched in step 1.by default webpack can import js and json file.For any other
        file, if there is no rule for it then webpack will give error.so loader is basically a instruction for webpack to 
        how to load different files.
    
        There are many diffrent loaders. You can install and use any one of them
        */
        rules: [
            {
                test: /\.(png|jpg)$/,
                use: ['file-loader']
            },
            /* 
            We can combine mutiple loaders inside single rule.here webpack will use both loaders while loading css files.
            css-loader reads the content of css file and returns this content, but it does not do anything else with 
            this css. then styles-loader takes this css and injects it into page using style tag. by the way using 
            syle-loader bundles your css togather with js into a single resultant file. in future videos we will see 
            how to make it generate separate files.
            */
           {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
           },
           /* 
           *Webpack processes the loaders from right to left. so sass-loader converts scss converts  css.
           then css-loader takes this converted css and converts it into jvacsript representation. then styles loader
           creates style tags inside our html and pits css into it.
           */
           {
                test: /\.scss$/,
                use: [
                    'style-loader', 'css-loader','sass-loader'
                ]
           },
           /* 
           Here we want to use babel loader for all js files except those in node_modules
           then we pass some options to babel-loader, we can pass options to any laoder, that loader should
           support those options.

           First option is presets. we need special bable preset called env, this preeets compiles, ES6,7,8,9 to ES5.
            class proeprties are not part of official ecma script specification. so we use 'transform-class-properties' 
            plugin to support this fetaure.

            if you want to use another modern js feature that is not supported by major browsers yet , you should find babel
             plugin and add it to list of babel plugins.you can use as many babel plugins as you want.
           */
           {
               test: /\.js$/,
               exclude: /node_modules/,
               use: {
                   loader: 'babel-loader',
                   options: {
                       presets: ['@babel/env'],
                       plugins: ['transform-class-properties']
                   }
               }
           }
        ]
    }
}