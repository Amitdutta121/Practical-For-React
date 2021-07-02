module.exports = {
  // Uncomment the line below to enable the experimental Just-in-Time ("JIT") mode.
  // https://tailwindcss.com/docs/just-in-time-mode
  // mode: "jit",

  theme: {
    extend: {
      colors: {
        backgroundImage: (theme) =>({
          'footer-background':"url('/src/assets/images/footer.png')"
        }),
        amber: {
          primary: "#FA5A52",
          secondary: "#FA8751",
          gradient_start:"#FA5A52",
          gradient_end:"#FA8751",
          btn_color:"#2F2F2F",
          card_text:"#6F6F6F",
          hamburger_btn_background:"#4B5563"
          
        },
      },
      fontFamily:{
        sfpro:["Source Sans Pro"],
        poppins:["Poppins"],
        railway:["Railway"]
        
      },
      width: {
        'footer': '36%'
       },
    },
  },
  variants: {},
  plugins: [],
  purge: {
    // Filenames to scan for classes
    content: [
      "./src/**/*.html",
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.ts",
      "./src/**/*.tsx",
      "./public/index.html",
    ],
    // Options passed to PurgeCSS
    options: {
      // Whitelist specific selectors by name
      // safelist: [],
    },
  },
};
