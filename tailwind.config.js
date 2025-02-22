/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      maxWidth: {
        "500": "500px",
        "600": "600px",
        "700": "700px",
        "800": "800px",
        "900": "900px",
        "1000": "1000px",
        "1100": "1100px",
        "1200": "1200px",
        "1300": "1300px",
        "1400": "1400px",
        "20%": "20%",
        "40%": "40%",
        "60%": "60%",
        "80%": "80%",
        "90%": "90%",
      },
      width: {
        "500": "500px",
        "600": "600px",
        "700": "700px",
        "800": "800px",
        "900": "900px",
        "1000": "1000px",
        "1100": "1100px",
        "1200": "1200px",
        "1300": "1300px",
        "95%": "95%"
      },
      maxHeight: {
        "20vh": "20vh",
        "40vh": "40vh",
        "60vh": "60vh",
        "80vh": "80vh",
        "70vh": "70vh",
        "90vh": "90vh",
        "95vh": "95vh",
        "75vh": "75vh",
      },
      height: {
        "20vh": "20vh",
        "30vh": "30vh",
        "35vh": "35vh",
        "40vh": "40vh",
        "60vh": "60vh",
        "80vh": "80vh",
        "70vh": "70vh",
        "90vh": "90vh",
        "95vh": "95vh",
      },
      colors: {
        "my-color-dark": "rgb(18, 18, 18)",
        "my-color-dark-2": "rgb(30, 30, 30)",
        "my-color-yellow": "rgb(255, 237, 0)"
      }
    },
  },
  plugins: [],
}

