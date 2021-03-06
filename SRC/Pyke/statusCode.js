module.exports = {
    "400": {
        "description": "This error indicates that there is a syntax error in the request and the request has therefore been denied. The client should not continue to make similar requests without modifying the syntax or the requests being made.",
        "default": "Bad Request"
    },
    "401" : {
        "description": "This error indicates that the request being made did not contain the necessary authentication credentials (e.g., an API key) and therefore the client was denied access. The client should not continue to make similar requests without including an API key in the request.",
        "default": "Unauthoritzed"
    },
    "403": {
        "description": "This error indicates that the server understood the request but refuses to authorize it. There is no distinction made between an invalid path or invalid authorization credentials (e.g., an API key). The client should not continue to make similar requests.",
        "default" : "Forbidden"
    },
    "404": {
        "description": "This error indicates that the server has not found a match for the API request being made. No indication is given whether the condition is temporary or permanent.",
        "default": "Data not Found"
    },
    "415": {
        "description": "This error indicates that the server is refusing to service the request because the body of the request is in a format that is not supported.",
        "default": "Unsupported Media Type"
    },
    "429": {
        "description": "This error indicates that the application has exhausted its maximum number of allotted API calls allowed for a given duration. If the client receives a Rate Limit Exceeded response the client should process this response and halt future API calls for the duration, in seconds, indicated by the Retry-After header. Applications that are in violation of this policy may have their access disabled to preserve the integrity of the API. Please refer to our Rate Limiting documentation for more information on determining if you have been rate limited and how to avoid it.",
        "default": "Rate Limit Exceeded"
    },
    "500": {
        "description": "This error indicates an unexpected condition or exception which prevented the server from fulfilling an API request.",
        "default" : "Internal Server Error"
    },
    "503 ": {
        "description": "This error indicates the server is currently unavailable to handle requests because of an unknown reason. The Service Unavailable response implies a temporary condition which will be alleviated after some delay.",
        "default" : "Service Unavailable"
    }
}
