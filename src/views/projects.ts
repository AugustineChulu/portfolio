import projectCard from '../components/project_card/project_card';
import '../css/projects.css';

(document.getElementById('projectsView') as HTMLDivElement).innerHTML = `
    <div id="my_projects_wrapper" class="tab_view">

        <div id="my_projects_intro">
            <div>
                <h1>
                    <i class="fa-solid fa-pen-ruler"></i> 
                    MY WORKS
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
                        ${projectCard('left3_card', 'COMING SOON...', 'project10', '', '')}

                        ${projectCard('left2_card', 'STOCK MANAGEMENT SYSTEM', 'project1', '', '')}

                        ${projectCard('left1_card', 'UNIVERSITY STUDENT PORTAL UI UPLIFT', 'project2', '', '')}

                        ${projectCard('focused_card', 'SWISS BRACKET MANAGER', 'project3', '', '')}

                        ${projectCard('right1_card', 'PHOTO MANIPULATION', 'project4', 'https://www.instagram.com/chuluaugustine/', 'visit instagram')}

                        ${projectCard('right2_card', 'POSTER & COVER DESIGN', 'project5', '', '')}

                        ${projectCard('right3_card', 'ILLUSTRATIONS', 'project6', 'https://www.instagram.com/chuluaugustine/', 'visit instagram')}

                        ${projectCard('', 'COMING SOON...', 'project7', '', '')}

                        ${projectCard('', 'COMING SOON...', 'project8', '', '')}

                        ${projectCard('', 'COMING SOON...', 'project9', '', '')}
                    </div>

                    <button type="button" class="default_icon_btn" id="prev_project_btn" title="previous">
                        <i class="fa-solid fa-arrow-left"></i>
                    </button>

                    <button type="button" class="default_icon_btn" id="next_project_btn" title="next">
                        <i class="fa-solid fa-arrow-right"></i>
                    </button>

                </div>

            </div>
        </div>

    </div>
`

/**************************************************************************************************************/

const cards_carousel = document.getElementById("cards_carousel") as HTMLElement;
const cards = Array.from(cards_carousel.children) as HTMLElement[];

// Define the order of classes
const classOrder = [
    "left3_card",
    "left2_card",
    "left1_card",
    "focused_card",
    "right1_card",
    "right2_card",
    "right3_card",
];

// Function to shift classes
const shiftClasses = (direction: string) => {
    const totalCards = cards.length;
    const numberOfClasses = classOrder.length;

    // Find the current start index (card with `left3_card` class)
    let startIndex = cards.findIndex((card) => card.classList.contains("left3_card"));

    if (startIndex === -1) {
        // Default to starting at the first card if no class is currently set
        startIndex = 0;
    }

    // Determine the new starting index based on direction
    if (direction === "next") {
        startIndex = (startIndex + 1) % totalCards;
    } else if (direction === "previous") {
        startIndex = (startIndex - 1 + totalCards) % totalCards;
    }

    // Remove only classes from classOrder for all cards
    cards.forEach((card) => {
        classOrder.forEach((className) => card.classList.remove(className));
    });

    // Apply the new classOrder starting from the new index
    for (let i = 0; i < numberOfClasses; i++) {
        const cardIndex = (startIndex + i) % totalCards;
        cards[cardIndex].classList.add(classOrder[i]);
    }
};

// Event listeners for buttons
const next_project_btn = document.getElementById("next_project_btn") as HTMLElement;
const prev_project_btn = document.getElementById("prev_project_btn") as HTMLElement;

next_project_btn.addEventListener("click", () => {
    next_project_btn.classList.remove('clicked')
    void next_project_btn.offsetWidth;
    next_project_btn.classList.add('clicked')
    shiftClasses(next_project_btn.getAttribute('title') as string)
});
prev_project_btn.addEventListener("click", () => {
    prev_project_btn.classList.remove('clicked')
    void next_project_btn.offsetWidth;
    prev_project_btn.classList.add('clicked')
    shiftClasses(prev_project_btn.getAttribute('title') as string)
});