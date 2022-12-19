# Convert image to grayscale

Simple micro web service providing conversion of color images to grayscale via standard HTTP methods.
It is implemented with Node.JS and Express framework for backend and React for frontend part.

## Installation

1. Clone repository

    ```
    git clone git@github.com:michibene/image-converter.git
    cd image-converter
    ```

2. Install necessary packages for backend & frontend

    ```
    cd backend
    npm install
    ```

    ```
    cd ../frontend
    npm install
    ```

3. (optional)  
   You can specify a custom server port by creating an `.env` file in backend folder
    ```
    # Server configuration
    PORT = 3000
    ```

## Usage

To start the program correctly, you have to start both backend and the frontend server.

1. In the backend folder run

    ```
    npm run devServer
    ```

2. In the frontend folder run

    ```
    npm run devServer
    ```

3. By default the web service will be accessible on localhost: `http://127.0.0.1:5173/`

    - With frontend server running you can also:

        ```
        press u to show server url
        press o to open in browser
        press q to quit
        ```

## Acknowledgments

Conversion to grayscale is done using **Jimp** - image processing library for Node (https://github.com/oliver-moran/jimp#installation)
