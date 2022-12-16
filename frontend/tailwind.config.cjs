/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                fontLightestColor: "#94A0B8",
                fontLightColor: "#7989a6",
                fontDarkestColor: "#1a1919",
                primaryColor: "#0091d0",
                primaryDarkerColor: "#0577a9",
            },
        },
    },
    plugins: [],
};
