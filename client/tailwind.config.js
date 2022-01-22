module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(39,40,47)',
        secondary: 'rgb(204,204,204)',
        tertiary: 'rgb(0,169,226)',
        tertiaryDark: 'rgb(0,72,96)',
        white: 'rgb(255,255,255)',
        black: 'rgb(0,0,0)',
        darkGray: "rgb(99,99,99)",
        pink: 'rgb(233,12,218)',
        new: 'rgb(0, 63, 156)',
        careful: 'orange',
        warning: 'red'
      },
      width: {
        // '100': '100px',
        '150': '150px',
        '200': '200px',
        '250': '250px',
        '300': '300px',
        '300': '300px',
        '350': '350px',
        '400': '400px',
        '450': '450px',
        '500': '500px',
        '550': '550px',
        '600': '600px',
        '650': '650px',
        '700': '700px',
        '750': '750px',
        '800': '800px',
        '850': '850px',
        '900': '900px',
        '950': '950px',
        '1000': '1000px',
        '1050': '1050px',
        '1100': '1100px',

        "90%": "90%"
      },
      height: {
        "90%": "90%",
        "90": "90vh"
      },
      backgroundImage: theme => ({
        'blackGradient': "url('/src/assets/images/black.jpg')",
        'chalkboard': "url('/src/assets/images/chalkboard.png')",
        'rightArrow': "url('/src/assets/images/rightArrow.png')"
      }),
    },
  },
  plugins: [],

}

// --primary - color: 39, 40, 47;
// --secondary - color: 204, 204, 204;
// --black: 0, 0, 0;
// --tertiary - color: 0, 169, 226;
// --black: 255, 255, 255;
// --grey: 61, 61, 61;
// --pink: 233, 12, 218;



