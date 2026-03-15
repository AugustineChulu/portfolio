import "../css/menu.css";

(document.getElementById("menu_view") as HTMLDivElement).innerHTML = `
    <div id="menu_wrapper">
        <div id="copyright">&copy; AUGUST 2026 | Augustine Chulu. All Rights Reserved</div>

        <div id="menu_content_wrapper">
            <div class="menu_external_links_wrapper">
                <h2>
                    Hi! I’m Augustine, <br>
                    let’s connect and create something amazing.
                </h2>
                <p>
                    <br>
                    Welcome to my portfolio! I’m excited to share my work with you.
                    Whether you’d like to collaborate, share ideas, give insightful feedback, or just say hello, 
                    feel free to reach out through the links below I’ll get back to you promptly.
                    Let’s connect and create something great together!
                </p>

                <div class="contact_links menu_links">
                    <a title="facebook" href="https://web.facebook.com/august.chulu/">
                        <i class="fa-brands fa-facebook fa-lg"></i>
                        <span>Facebook</span>
                    </a>

                    <a title="instagram" href="https://www.instagram.com/chuluaugustine/">
                        <i class="fa-brands fa-instagram fa-lg"></i>
                        <span>Instagram</span>
                    </a>

                    <a title="gmail" href="mailto:chuluaugustine@gmail.com">
                        <i class="fa-solid fa-envelope fa-lg"></i>
                        <span>Gmail</span>
                    </a>

                    <a title="github" href="https://github.com/AugustineChulu">
                        <i class="fa-brands fa-github fa-lg"></i>
                        <span>Github</span>
                    </a> 
                </div>
            </div>

            <div class="menu_external_links_wrapper">
                <p>credits & attributions</p>

                <div class="contact_links menu_links">
                    <a title="fffuel.co/nnnoise" href="https://www.fffuel.co/nnnoise/">
                        <i class="fa-solid fa-f fa-lg"></i>
                        <span>fffuel.co</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
`;

/**************************************************************************************************************/

const theme_toggle = document.getElementById("theme_toggle") as HTMLDivElement;
const root = document.querySelector(":root") as HTMLElement;
const app = document.getElementById("app") as HTMLDivElement;
const menu_view = document.getElementById("menu_view") as HTMLDivElement;
const active_tab_indicator = document.getElementById(
  "active_tab_indicator",
) as HTMLDivElement;

const toggleTheme = () => {
  theme_toggle.classList.toggle("light");
  root.classList.toggle("light");
  app.classList.toggle("light");
  menu_view.classList.toggle("light");
  active_tab_indicator.classList.toggle("light");
};

theme_toggle.addEventListener("click", () => {
  toggleTheme();
});
