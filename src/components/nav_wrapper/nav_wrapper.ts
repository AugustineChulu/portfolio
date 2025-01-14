import './nav_wrapper.css';

export default function nav_wrapper_view(): string{

    return `
        <div id="nav_wrapper">

            <button type="button" class="default_icon_btn" id="menu_btn" title="menu">
                <i class="fa-solid fa-bars"></i>
            </button>

            <div id="navbar">

                <div id="active_tab_indicator"></div>

                <div class="tab active">
                    <i class="fa-solid fa-user-tie"></i>
                    <span>About</span>
                </div>
        
                <div class="tab">
                    <i class="fa-solid fa-ranking-star"></i>
                    <span>Skills</span>
                </div>

                <div class="tab">
                    <i class="fa-solid fa-pen-ruler"></i>
                    <span>Projects</span>
                </div>

                <div class="tab">
                    <i class="fa-solid fa-hand-holding-medical"></i>
                    <span>Services</span>
                </div>

            </div>
            
        </div>
    `;

}