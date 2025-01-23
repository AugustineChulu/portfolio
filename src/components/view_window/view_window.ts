import aboutMeView from "../about_me/about_me";
import myProjectsView from "../my_projects/my_projects";
import myServicesView from "../my_services/my_services";
import mySkillsetView from "../my_skillset/my_skillset";
import "./view_window.css";

export default function view_window_view(): string {
  return `
        <div id="view_window">

            <div class="bg_pattern1"></div>

            <div id="floating_menu_wrapper" class="glass1">
                <div>
                    <div class="menu_external_links_wrapper">
                        <div>Welcome to my portfolio website, get in touch with me through the following links</div>

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
