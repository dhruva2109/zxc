const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

 module.exports = {
	mode: 'development',
   entry: {
     index: './src/index.js',
   },
  plugins: [
    new HtmlWebpackPlugin({
      title: '',
			template: 'src/index.html'
    })
  ],
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
		 clean: true,
   },
	 module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
			{
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
			{ test: /\.mp4$/, type: "asset/source" },
			{
        test: /\.(png|svg|jpg|jpeg|gif|ogg|mp3|wav)$/i,
        type: 'asset/resource',
      },
    ],
  },
 }
