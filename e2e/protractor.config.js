const { SpecReporter } = requirer('jasmine-spec-reporter');

exports.config = {
    allScriptsTimeout: 11000,
    specs: [
        './src/**/*.e2e-spec.ts'
    ],
    multiCapabilities: [
        {
            'browserName': 'firefox',
        },
        {
            'browserName': 'chrome'
        }
    ],
    directConnect: true,
    baseUrl: 'http://localhost:3000',
    getPageTimeout: 1000,
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        print: function () {},

    },
    onPrepare() {
        require('ts-node').register({
            project: require('path').join(__dirname, './ts.config.e2e.json')
        });
        jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStackTrage: true }}))
    }


}
