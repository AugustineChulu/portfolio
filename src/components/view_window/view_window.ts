import aboutMeView from "../about_me/about_me";
import myProjectsView from "../my_projects/my_projects";
import myServicesView from "../my_services/my_services";
import mySkillsetView from "../my_skillset/my_skillset";
import "./view_window.css";

export default function view_window_view(): string {
  return `
        <div id="view_window">

            <svg class="bg_pattern1" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1900 1900'>
                <defs>
                    <pattern id="vw_bg" patternUnits="userSpaceOnUse" width="800" height="800">
                        <g>
                            <path d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/>
                            <path d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/>
                            <path d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/>
                            <path d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/>
                            <path d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/>
                        </g>
                        <g fill='#505'>
                            <circle cx='769' cy='229' r='7'/>
                            <circle cx='539' cy='269' r='7'/>
                            <circle cx='603' cy='493' r='7'/>
                            <circle cx='731' cy='737' r='7'/>
                            <circle cx='520' cy='660' r='7'/>
                            <circle cx='309' cy='538' r='7'/>
                            <circle cx='295' cy='764' r='7'/>
                            <circle cx='40' cy='599' r='7'/>
                            <circle cx='102' cy='382' r='7'/>
                            <circle cx='127' cy='80' r='7'/>
                            <circle cx='370' cy='105' r='7'/>
                            <circle cx='578' cy='42' r='7'/>
                            <circle cx='237' cy='261' r='7'/>
                            <circle cx='390' cy='382' r='7'/>
                        </g>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#vw_bg)" />
            </svg>

            <div id="floating_menu_wrapper" class="glass1">
                <div>
                    <div class="menu_external_links_wrapper">
                        <div>Welcome to my portfolio website, get in touch with me throw the following links</div>

                        <div class="icon_links">
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

                        <div class="icon_links">
                            <a title="SVGBackgrounds.com" href="https://www.svgbackgrounds.com/set/free-svg-backgrounds-and-patterns/">
                                <i class="fa-solid fa-crown fa-lg"></i>
                            </a>
                        </div>
                    </div>
                    
                    <div id="copyright" data-txt="&copy; AUGUST 2025 | Augustine Chulu. All Rights Reserved"></div>
                </div>
            </div>

            <div id="view_wrapper">

                <div class="active custom_scroll_bar">
                    ${aboutMeView()}
                </div>

                <div class="custom_scroll_bar">
                    ${mySkillsetView()}
                </div>

                <div class="custom_scroll_bar">
                    ${myProjectsView()}
                </div>

                <div class="custom_scroll_bar">
                    ${myServicesView()}
                </div>
            </div>

        </div>
    `;
}
