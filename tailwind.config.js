/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/*.html"],
    theme: {
        extend: {
            colors: {
                omtbeige: "#edecea",
                omtgray: "#545454",
            },
            fontFamily: {
                forum: ["forumregular"],
            },
        },
    },
    plugins: [],
};
