import { ErrorRequestHandler } from 'express';

import { ValidationError } from 'yup';

// We want to return an object containing the field and its errors
// {
//     name: [required, minimum of characters]
// }
// So an associated interface would be:

interface ValidationErrors {
    [key: string]: string[]
}

const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
    
    if(error instanceof ValidationError) {

        let errors: ValidationErrors = {};

        error.inner.forEach(
            err => {
               errors[err.path] = err.errors; 
            }
        );

        return response.status(400).json( {message: "Validation fails", errors} );
        
    }

    // The error continues to be shown in the server terminal
    console.error(error);

    return response.status(500).json( {message: "Internal server error"} );
    
}

export default errorHandler;