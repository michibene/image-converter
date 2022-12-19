import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Handling error from server in json format, when axios is expecting blob
        if (
            error.request.responseType === "blob" &&
            error.response.data instanceof Blob &&
            error.response.data.type &&
            error.response.data.type.toLowerCase().indexOf("json") != -1
        ) {
            return new Promise((resolve, reject) => {
                let reader = new FileReader();
                reader.onload = () => {
                    error.response.data = JSON.parse(reader.result!.toString());
                    resolve(Promise.reject(error));
                };

                reader.onerror = () => {
                    reject(error);
                };

                reader.readAsText(error.response.data);
            });
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;
