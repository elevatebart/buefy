module.exports = {
    webpackConfig: require("./build/webpack.dev.conf"),
    require: ["./src/scss/buefy-build.scss"],
    defaultExample: true,
    components: "src/components/**/*.vue"
};
