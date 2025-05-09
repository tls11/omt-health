/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/*.html"],
    theme: {
        extend: {
            colors: {
                omtbeige: "#edecea",
                omtgray: "#545454",
                omtea: "#595649",
            },
            fontFamily: {
                forum: ["forumregular"],
            },
            screens: {
                sm: "640px",
                // => @media (min-width: 640px) { ... }

                md: "768px",
                // => @media (min-width: 768px) { ... }

                lg: "1024px",
                // => @media (min-width: 1024px) { ... }

                xl: "1280px",
                // => @media (min-width: 1280px) { ... }
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
    corePlugins: {
        preflight: true,
    },
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
        defaultLineHeights: true,
        standardFontWeights: true,
    },
    extend: {
        float: {
            right: "float: right",
            left: "float: left",
        },
    },
};
