const rm = require('rimraf');
let dateFormat = () => {
    let date = new Date();
    let mon = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
    let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    let hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    let min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    let sec = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    return `${mon}${day}_${hour}${min}${sec}`;
};
let projectName = require('./package').name;

if(process.env.NODE_ENV === 'production' && projectName === 'template') {
    /* eslint-disable no-console */
    console.warn('请修改 package.json 的 name 字段来修改打包目录名称');
}

module.exports = {
    // 基本路径
    // baseUrl:'/',
    publicPath: process.env.NODE_ENV === 'production'
    ? '/production-sub-path/'
    : '/',
    //输出目录
    outputDir:'dist',
    // outputDir= projectName + '_' + dateFormat(),
    // eslint-loader 是否在保存时候检测
    lintOnSave: true,
    //use the full build with in-browser compiler?
    //https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
    compiler: false,
    //webpack 配置
    //see https://github.com/vue.js/vue-cli/blob/dev/docs/webpack.md
    chainWebpak: ()=>{},
    configureWebpack: ()=>{
        if(process.env.NODE_ENV === 'production') {
            rm('./' + projectName + '*', (e) => {
                if(e) {
                    throw new Error(e);
                }

                if(e === null) {
                    console.log('清除原有打包文件成功,开始打包');
                }

                if(e === undefined) {
                    console.log('当前目录没有打包文件,开始打包 ');
                }
            });
        }
    },
    // vue-loader配置
    vueLoader:{},
    //生产环境是否生成 sourceMap文件
    productionSourceMap: true,
    // css相关配置
    css:{
        // 是否使用css分离插件 ExtractTextPlugin
        extract: true,
        // 开启 css source map？
        sourceMap: false,
        // css 预设器配置项
        loaderOptions :{},
        // 启用 css modules for all css / pre-processor files
        modules: false,
    },
    // use thread-loader for babel & TS in production build
    // enabled by default if the machine has more then 1 cores
    parallel: require('os').cpus().length>1,
    //是否启用dll
    // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
    dll: false,
    // PWA插件相关配置
    // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    pwa:{},
    // webpack-dev-server 相关配置
    devServer:{
        open:process.platform === 'darwin',
        host:"localhost",
        port:8080,
        https:false,
        hotOnly: false,
        proxy: null,// 设置代理
        before: app => {},
        // 取消eslint
        overlay:{
            warning: false,
            errors: false
        },
        lintOnSave: false
    },
    // 第三方插件
    pluginOptions:{}
}