import { ErrorRequestHandler } from 'express';

const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
    
    // The error continues to be shown in the server terminal
    console.error(error);

    return response.status(500).json( {message: "Internal server error"} );
    
}

export default errorHandler;