import '../css/menu.css'

(document.getElementById('menuView') as HTMLDivElement).innerHTML = `
    <div id="menu_wrapper">
        <div id="copyright">&copy; AUGUST 2025 | Augustine Chulu. All Rights Reserved</div>

        <div>
            <div class="menu_external_links_wrapper">
                <div>Welcome to my portfolio website, get in touch with me through the following links</div>

                <div class="contact_links">
                    <a title="facebook" href="https://web.facebook.com/august.chulu/">
                        <i class="fa-brands fa-facebook fa-lg"></i>
                    </a>

                    <a title="instagram" href="https://www.instagram.com/chuluaugustine/">
                        <i class="fa-brands fa-instagram fa-lg"></i>
                    </a>

                    <a title="gmail" href="mailto:chuluaugustine@gmail.com">
                        <i class="fa-solid fa-envelope fa-lg"></i>
                    </a>

                    <a title="github" href="https://github.com/AugustineChulu">
                        <i class="fa-brands fa-github fa-lg"></i>
                    </a> 
                </div>
            </div>

            <div class="menu_external_links_wrapper">
                <div>credits & attributions</div>

                <div class="contact_links">
                    <a title="SVGBackgrounds.com" href="https://www.svgbackgrounds.com/set/free-svg-backgrounds-and-patterns/">
                        <i class="fa-solid fa-crown fa-lg"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
`

/**************************************************************************************************************/
const light_theme = document.getElementById('light_theme') as HTMLButtonElement;
const dark_theme = document.getElementById('dark_theme') as HTMLButtonElement;
const theme_toggle = document.getElementById('theme_toggle') as HTMLDivElement;
const root = document.querySelector(':root') as HTMLElement;

light_theme.addEventListener('click', () =>{

    root.classList.remove('dark')
    root.classList.add('light')
    theme_toggle.classList.remove('dark')
    theme_toggle.classList.add('light')
})

dark_theme.addEventListener('click', () =>{

    root.classList.remove('light')
    root.classList.add('dark')
    theme_toggle.classList.remove('light')
    theme_toggle.classList.add('dark')
})