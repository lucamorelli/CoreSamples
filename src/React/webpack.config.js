module.exports = {
    cache: true,
    debug: true,
    entry: {
        app: './app/main.tsx'
    },
    output: {
        filename: './wwwroot/js/site.js'
    },
    resolve: {
        extensions: ['', '.js', '.ts', '.tsx']
    },
    module: {
        loaders: [
			{
			    test: /\.tsx?$/,
			    loader: 'ts-loader'
			    // exclude: /(node_modules|bower_components)/,
			}
        ]
    },
    noParse: [
		/[\/\\]node_modules.*/,
    ]
}