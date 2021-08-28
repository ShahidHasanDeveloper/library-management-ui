import axios from "axios";

export const libraryApi=
     axios.create(
        {
            baseURL: "http://localhost:8083/library"

        }
    );
