const appInsights = require("applicationinsights");
appInsights.setup("<your-appinsights-instrumentation-key>")
    .setAutoDependencyCorrelation(true)
    .setAutoCollectRequests(true)
    .setAutoCollectPerformance(true)
    .setAutoCollectExceptions(true)
    .setAutoCollectDependencies(true)
    .setAutoCollectConsole(true)
    .setUseDiskRetryCaching(true)
    .start();

module.exports = { 
    logRequest: function(req) {
        let message = `Request was captured for path: ${req.originalUrl}.`;
        console.log(message);
        appInsights.defaultClient.trackRequest({ name: "normalPage", properties: 
            { type: "page", value: req.originalUrl, dateTime: new Date() }});
    },
    logEvent: function(name, data) {
        appInsights.defaultClient.trackEvent({ name: name, properties: { data: data }});
    },
    logApiCall: function(apiRoute) {
        appInsights.defaultClient.trackRequest({ name: "apiCall", properties: 
        { type: "api", value: apiRoute, dateTime: new Date() }});
    }
}