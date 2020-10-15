import multer from 'multer';

// To add with path folders (from node)
import path from "path";

// See the documentation of multer for more explanations

export default {

    storage: multer.diskStorage(

        {
        
            destination: path.join(__dirname, "..", "..", "uploads"),

            filename: (request, file, cb) => {

                // Changing the fileName to reduce the possibility of two equal names
                const fileName = `${Date.now()}-${file.originalname}`;

                // As no error is expected, we pass null as the first parameter
                cb(null, fileName);

            }
        
        }
    
    )

};