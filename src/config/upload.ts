import multer from 'multer';

// To add with path folders (from node)
import path from "path";

// See the documentation of multer for more explanations

export default {

    storage: multer.diskStorage(
        {
            destination: path.join(__dirname, "")
        }
    )

};