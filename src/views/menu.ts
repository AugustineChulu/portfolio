import '../css/menu.css'

(document.getElementById('menu_view') as HTMLDivElement).innerHTML = `
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

                    <a title="fffuel.co/nnnoise" href="https://www.fffuel.co/nnnoise/">
                    <i class="fa-solid fa-f fa-lg"></i>
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
const app = document.getElementById('app') as HTMLDivElement;
const menu_view = document.getElementById('menu_view') as HTMLDivElement;
const active_tab_indicator = document.getElementById('active_tab_indicator') as HTMLDivElement;

const changeTheme = (theme: string) =>{
    var anti_theme: string = '';

    if(theme == 'light')
        anti_theme = 'dark'
    else if(theme == 'dark')
        anti_theme = 'light'

    if(theme_toggle.classList.contains(anti_theme))
        theme_toggle.classList.remove(anti_theme)

    if(root.classList.contains(anti_theme))
        root.classList.remove(anti_theme)

    if(app.classList.contains(anti_theme))
        app.classList.remove(anti_theme)

    if(menu_view.classList.contains(anti_theme))
        menu_view.classList.remove(anti_theme)

    if(active_tab_indicator.classList.contains(anti_theme))
        active_tab_indicator.classList.remove(anti_theme)

    theme_toggle.classList.add(theme) 
    root.classList.add(theme)
    app.classList.add(theme)
    menu_view.classList.add(theme)
    active_tab_indicator.classList.add(theme)
}

light_theme.addEventListener('click', () =>{ changeTheme('light'); })
dark_theme.addEventListener('click', () =>{ changeTheme('dark'); })

