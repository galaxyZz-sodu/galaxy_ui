const path = require('path')
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  mode: 'none',
  entry: {
    'button': './tlib/basic/button/index.js',
    'button.min': './tlib/basic/button/index.js',

    'badge': './tlib/data/badge/index.js',
    'badge.min': './tlib/data/badge/index.js',
    'descriptions': './tlib/data/descriptions/index.js',
    'descriptions.min': './tlib/data/descriptions/index.js',
    'descriptionsItem': './tlib/data/descriptionsItem/index.js',
    'descriptionsItem.min': './tlib/data/descriptionsItem/index.js',
    'pagination': './tlib/data/pagination/index.js',
    'pagination.min': './tlib/data/pagination/index.js',
    'progress': './tlib/data/progress/index.js',
    'progress.min': './tlib/data/progress/index.js',
    'table': './tlib/data/table/index.js',
    'table.min': './tlib/data/table/index.js',
    'tableColunm': './tlib/data/tableColunm/index.js',
    'tableColunm.min': './tlib/data/tableColunm/index.js',
    'tag': './tlib/data/tag/index.js',
    'tag.min': './tlib/data/tag/index.js',
    'tree': './tlib/data/tree/index.js',
    'tree.min': './tlib/data/tree/index.js',

    'checkbox': './tlib/form/checkbox/index.js',
    'checkbox.min': './tlib/form/checkbox/index.js',
    'input': './tlib/form/input/index.js',
    'input.min': './tlib/form/input/index.js',
    'inputNumber': './tlib/form/inputNumber/index.js',
    'inputNumber.min': './tlib/form/inputNumber/index.js',
    'radio': './tlib/form/radio/index.js',
    'radio.min': './tlib/form/radio/index.js',
    'rate': './tlib/form/rate/index.js',
    'rate.min': './tlib/form/rate/index.js',
    'select': './tlib/form/select/index.js',
    'select.min': './tlib/form/select/index.js',
    'slider': './tlib/form/slider/index.js',
    'slider.min': './tlib/form/slider/index.js',
    'switch': './tlib/form/switch/index.js',
    'switch.min': './tlib/form/switch/index.js',
    'upload': './tlib/form/upload/index.js',
    'upload.min': './tlib/form/upload/index.js',

    'breadcrumb': './tlib/navigation/breadcrumb/index.js',
    'breadcrumb.min': './tlib/navigation/breadcrumb/index.js',
    'breadcrumbItem': './tlib/navigation/breadcrumbItem/index.js',
    'breadcrumbItem.min': './tlib/navigation/breadcrumbItem/index.js',
    'pageHeader': './tlib/navigation/pageHeader/index.js',
    'pageHeader.min': './tlib/navigation/pageHeader/index.js',
    'step': './tlib/navigation/step/index.js',
    'step.min': './tlib/navigation/step/index.js',
    'steps': './tlib/navigation/steps/index.js',
    'steps.min': './tlib/navigation/steps/index.js',

    'carousel': './tlib/others/carousel/index.js',
    'carousel.min': './tlib/others/carousel/index.js',
    'carouseltem': './tlib/others/carouseltem/index.js',
    'carouseltem.min': './tlib/others/carouseltem/index.js',
    'dialog': './tlib/others/dialog/index.js',
    'dialog.min': './tlib/others/dialog/index.js',
    'magnifier': './tlib/others/magnifier/index.js',
    'magnifier.min': './tlib/others/magnifier/index.js',
    'popover': './tlib/others/popover/index.js',
    'popover.min': './tlib/others/popover/index.js',
    'waterMark': './tlib/others/waterMark/index.js',
    'waterMark.min': './tlib/others/waterMark/index.js',

    'index': './tlib/index.js',
    'index.min': './tlib/index.js'
    
  },
  output: {
    path: path.join(__dirname,"/lib"),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: '[name]',
    libraryExport: 'default'
  },
//   externals:[],
  optimization: {
    minimize: true,
    minimizer: [
        new TerserPlugin({
            test: /\.min\.js$/,
        }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use:  ['vue-loader']
      },
      {
        test: /\.css$/,
        use:  [MiniCssExtractPlugin.loader,'css-loader','postcss-loader']
      },
      {
          test: /\.s[ac]ss$/i,
          use:  [MiniCssExtractPlugin.loader,'css-loader','postcss-loader','sass-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:{
            loader: 'babel-loader',
            options: {
                cacheDirectory: true
            }
        }
        
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
        filename: 'lib-style/[name].css'
    })
  ]
}
