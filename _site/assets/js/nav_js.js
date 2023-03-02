const icon = document.querySelector(".mobile_site_nav_container");
const nav_container = document.querySelector(".top_nav_container");
let dd_active = false;
let main_nav_items = ["Home", "About", "Blog Posts", "Contact"];
let main_nav_links = ["index.html", "about.html", "blog_posts.html", "contact.html"];

icon.addEventListener("click", function display_drop_down() {
    if (!dd_active) {
        console.log("click");
        const nav_dd = document.createElement("div");
        nav_dd.classList.add("nav_dd");
        nav_container.appendChild(nav_dd);
        console.log("done");
        function add_drop_down(x, y) {
            let nav_dd_a = document.createElement("a");
            nav_dd_a.innerHTML = x;
            nav_dd_a.setAttribute("href", y);
            nav_dd.appendChild(nav_dd_a);
        }
        for (i = 0; i < main_nav_items.length; i++) {
            add_drop_down(main_nav_items[i], main_nav_links[i]);
        }
    } else {
        const nav_dd = document.querySelector(".nav_dd");
        nav_dd.remove();
    }
    dd_active = !dd_active;
});

// This is the most beautiful thing I have ever created and I am very proud
// just kidding i need to refactor scope is weird
