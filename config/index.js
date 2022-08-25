// Powered by = Francisco Weber 

module.exports = { 
    hello: {
        frequency: "* * * * * *",
        handler: "handlers/sayhello"
    },
    goodbye: {
        frequency: "* * * * * *",
        handler: "handlers/saygoodbye"
    },
    tacos: {
        frequency: "* * * * * *",
        handler: "handlers/tacos"
    }
}