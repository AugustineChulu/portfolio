import projectCardView from '../project_card/project_card';
import './my_project.css';

export default function myProjectsView(): string{

    return `
        <div id="my_projects_wrapper" class="tab_view">

            <div id="my_projects_intro">
                <div>
                    <h1>
                        <i class="fa-solid fa-pen-ruler"></i> 
                        &nbsp; MY WORKS
                    </h1>

                    <p>
                        I have curated a collection of project samples that serve as a comprehensive 
                        showcase of my professional work. These projects offer an interested party the opportunity to gain insight into 
                        my skills, creativity, and problem-solving abilities.
                        Whether exploring web development, design, or other areas of expertise, these projects 
                        stand as a testament to the quality and innovation that characterize my professional 
                        contributions.
                    </p>
                </div>

                <div>
                    
                    <div id="project_cards_wrapper">
                    
                        <div id="cards_carousel">
                            ${projectCardView('left3_card', 'COMING SOON...', 'project10', '', '')}

                            ${projectCardView('left2_card', 'STOCK MANAGEMENT SYSTEM', 'project1', '', '')}

                            ${projectCardView('left1_card', 'UNIVERSITY STUDENT PORTAL UI UPLIFT', 'project2', '', '')}

                            ${projectCardView('focused_card', 'SWISS BRACKET MANAGER', 'project3', '', '')}

                            ${projectCardView('right1_card', 'PHOTO MANIPULATION', 'project4', 'https://www.instagram.com/chuluaugustine/', 'visit instagram')}

                            ${projectCardView('right2_card', 'POSTER & COVER DESIGN', 'project5', '', '')}

                            ${projectCardView('right3_card', 'ILLUSTRATIONS', 'project6', 'https://www.instagram.com/chuluaugustine/', 'visit instagram')}

                            ${projectCardView('', 'COMING SOON...', 'project7', '', '')}

                            ${projectCardView('', 'COMING SOON...', 'project8', '', '')}

                            ${projectCardView('', 'COMING SOON...', 'project9', '', '')}
                        </div>

                        <button type="button" class="default_icon_btn" id="prev_project_btn" title="previous">
                            <i class="fa-solid fa-chevron-left"></i>
                        </button>

                        <button type="button" class="default_icon_btn" id="next_project_btn" title="next">
                            <i class="fa-solid fa-chevron-right"></i>
                        </button>

                    </div>

                </div>
            </div>
           
        </div>
    `;

}