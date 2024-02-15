// Directives
"use strict";
// Imports
import * as http from "http";
import colors from "colors"; // Importing colors module
// Constants
const port = 8080;
colors.enable();

// Function to handle requests based on route
const handleRequest = (req, res) => {
    // Log the requested route
    console.log("Requested Route:".yellow, req.url);

    // Parse the requested URL
    const route = req.url;

    // Check the requested route and respond accordingly
    if (route === "/COMP50016") {
        // Respond with the module title
        res.end("Module Title: COMP50016".green);
    } else if (route === "/favicon.ico") {
        // Respond with "Favicon request"
        res.end("Favicon request".blue);
    } else if (route === "/") {
        // Respond with "Hello World" for the default route
        res.end("Hello World".cyan);
    } else {
        // Respond with a 404 Not Found error for unknown routes
        res.statusCode = 404;
        res.end("404 Not Found".red);
    }
};

// Create server at 127.0.0.1:8080 
http.createServer(handleRequest).listen(port, () => {
    console.log(`Server is running on port ${port}`.magenta);
});