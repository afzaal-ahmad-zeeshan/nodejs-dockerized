let port = process.env.PORT || process.env.PORT_AZURE || process.env.PORT_AWS || 80;

if(process.env.OVERRIDE_PORT) {
    port = process.env.CUSTOM_PORT;
}

if(process.env.VARIABLE_PORT) {
    port = process.env[process.env.VARIABLE_PORT_NAME];
}

module.exports = {
    serverPort: port
};