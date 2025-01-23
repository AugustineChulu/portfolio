import './assets/fontawesome-free-6.5.1-web/css/all.css'
import view_window_view from './components/view_window/view_window.ts';
import nav_wrapper_view from './components/nav_wrapper/nav_wrapper.ts';

const app_view = document.querySelector<HTMLDivElement>('#app') as HTMLElement;

app_view.innerHTML += `
    <div id="page_content">
        ${view_window_view()}

        ${nav_wrapper_view()}
    </div>
`;

const balls = document.querySelectorAll<HTMLDivElement>(".ball");
const progressBar = document.getElementById("progress_bar") as HTMLElement;
const landing_page = document.getElementById("landing_page") as HTMLElement;
const preloadedImages: Record<string, HTMLImageElement> = {};
const bg_pattern1 = document.querySelector(".bg_pattern1") as HTMLElement;

document.addEventListener("DOMContentLoaded", () => {
    
    const imagePaths: string[] = [
        `${import.meta.env.BASE_URL}images/id_photo.webp`,
        `${import.meta.env.BASE_URL}images/skills/HTML5.webp`,
        `${import.meta.env.BASE_URL}images/skills/CSS3.webp`,
        `${import.meta.env.BASE_URL}images/skills/JS.webp`,
        `${import.meta.env.BASE_URL}images/skills/TS.webp`,
        `${import.meta.env.BASE_URL}images/skills/WORDPRESS.webp`,
        `${import.meta.env.BASE_URL}images/skills/NEXT.webp`,
        `${import.meta.env.BASE_URL}images/skills/LARAVEL.webp`,
        `${import.meta.env.BASE_URL}images/skills/REACT.webp`,
        `${import.meta.env.BASE_URL}images/skills/BLENDER.webp`,
        `${import.meta.env.BASE_URL}images/skills/PS.webp`,
        `${import.meta.env.BASE_URL}images/skills/ILL.webp`,
        `${import.meta.env.BASE_URL}images/projects/project1.webp`,
        `${import.meta.env.BASE_URL}images/projects/project2.webp`,
        `${import.meta.env.BASE_URL}images/projects/project3.webp`,
        `${import.meta.env.BASE_URL}images/projects/project4.webp`,
        `${import.meta.env.BASE_URL}images/projects/project5.webp`,
        `${import.meta.env.BASE_URL}images/projects/project6.webp`,
    ];    

    let imagesLoaded: number = 0;
    const totalAssets: number = imagePaths.length + 1; // +1 for font loading

    function updateProgressBar(): void {
        const progress: number = (imagesLoaded / totalAssets) * 100;
        progressBar.style.width = `${progress}%`;
        progressBar.style.height = `${progress}%`;

        if (imagesLoaded === totalAssets) {

            resourceMapping();
            progressBar.classList.remove("pulse");
            progressBar.classList.add("completed");

            setTimeout(() => {
                landing_page.classList.add("loaded");
                setTimeout(() => {
                    bg_pattern1.classList.add('enhance');
                }, 50);
                
                setTimeout(() => {
                    balls.forEach((artifact, index) => {
                        artifact.classList.add(`animate_${index + 1}`);
                    });
                }, 500);
            }, 500);
        }
    }

    // Load images
    imagePaths.forEach((path: string) => {
        const img: HTMLImageElement = new Image();
        img.src = path;
        img.onload = () => {
            preloadedImages[path] = img; // Store the loaded Image object
            imagesLoaded++;
            updateProgressBar();
        };
        img.onerror = () => {
            console.error(`Failed to load image: ${path}`);
            imagesLoaded++; // Increment even if loading fails to avoid deadlock
            updateProgressBar();
        };
    });

    // Load fonts
    document.fonts.ready.then(() => {
        imagesLoaded++; // Increment when fonts are ready
        updateProgressBar();
    }).catch((error: any) => {
        console.error("Failed to load fonts:", error);
        imagesLoaded++; // Avoid deadlock
        updateProgressBar();
    });

    const resourceMapping = () => {
        // Utility function to extract file name from path and remove extension
        const getFileName = (path: string): string => {
            return path.split('/').pop()?.replace(/\..*$/, '') || '';
        };
    
        // Iterate over all image paths
        imagePaths.forEach((path: string) => {
            const fileName = `img_${getFileName(path)}`;
    
            if (!fileName) {
                console.error(`Could not extract file name from path: ${path}`);
                return;
            }
    
            // Identify the existing div in the DOM by the extracted file name as ID
            const divs = document.querySelectorAll(`.${fileName}`) as NodeListOf<HTMLDivElement> | null;
    
            if (!divs) {
                console.warn(`one or more divs containing class '${fileName}' could not be found in the DOM.`);
                return;
            }
    
            // Set the background image if preloaded
            if (preloadedImages[path]) {

                divs.forEach((div) =>{
                    div.style.backgroundImage = `url('${preloadedImages[path].src}')`;
                })
            } else {
                console.error(`Image not preloaded: ${path}`);
            }
        });
    };    
    
});
  

/**************************************************************************************************************/

const moveToFinalPositions = () => {
    balls.forEach(ball => {
        // Get the current position
        const computedStyle = getComputedStyle(ball);
        const currentX = computedStyle.left;
        const currentY = computedStyle.top;

        // Get final positions from CSS custom properties
        const finalX = computedStyle.getPropertyValue('--x').trim() + '%';
        const finalY = computedStyle.getPropertyValue('--y').trim() + '%';

        // Ensure the ball is in its current position before starting the transition
        ball.style.left = currentX;
        ball.style.top = currentY;

        // Remove existing animations to ensure they don't interfere
        ball.style.animation = 'none';

        // Apply CSS transitions to move from current to final positions
        ball.style.transition = 'left 1s ease, top 1s ease';

        // Trigger a reflow to ensure the current styles are applied
        ball.offsetHeight; // Forces the browser to recognize the current styles

        // Apply final positions
        ball.style.left = finalX;
        ball.style.top = finalY;
    });
};

const pulseButtons = document.querySelectorAll<HTMLElement>('.pulse_btn');

pulseButtons.forEach((button) =>{
    button.addEventListener('click', () =>{

        button.classList.add('pulse');
        setTimeout(() => {
            button.classList.remove('pulse');
        }, 1000);
    })
})

const defaultIconButtons = document.querySelectorAll<HTMLElement>('.default_icon_btn');

defaultIconButtons.forEach((button) =>{
    button.addEventListener('click', () =>{

        button.classList.add('shrink');
        setTimeout(() => {
            button.classList.remove('shrink');
        }, 500);
    })
})

const button_ring = document.getElementById('button_ring') as HTMLElement;
const ring_text: string = ' EXPLORE PAGE';
const ring_text_characters: string[] = ring_text.split('');

button_ring.style.setProperty('--total', `${ring_text_characters.length}`);

for (let c = 0; c < ring_text_characters.length; c++) {
    button_ring.innerHTML += ` <span style="--index: ${c}">${ring_text_characters[c]}</span>`
}

const explore_btn = document.getElementById('explore_btn') as HTMLButtonElement;
const landing_page_wrapper = document.getElementById('landing_page_wrapper') as HTMLElement;

explore_btn.addEventListener('click', () => {

    moveToFinalPositions();
    explore_btn.disabled = true;

    setTimeout(() => {
        landing_page.classList.remove('loaded');
        bg_pattern1.classList.remove('enhance');

        setTimeout(() => {
            balls.forEach( (ball, index) =>{
                ball.classList.remove(`animate_${++index}`);
                
            });

            (document.getElementById('anim_wrapper') as HTMLElement).classList.add('expand');
            (document.getElementById('anim_logo') as HTMLElement).classList.add('fade');

            setTimeout(() => {
    
                (document.getElementById('page_content') as HTMLElement).classList.add('loaded');
                landing_page_wrapper.classList.add('unloaded');
                setTimeout(() => {
    
                    (document.getElementById('navbar') as HTMLElement).classList.add('loaded');
                    (document.getElementById('view_wrapper') as HTMLElement).classList.add('loaded');

                    setTimeout(() => {
                        (document.getElementById('branding_x_me_wrapper') as HTMLElement).classList.add('animate');
                    }, 1000);
                }, 1000);

            }, 1000);

        }, 1500);

    }, 1000);

});

/**************************************************************************************************************/
const menu_btn = document.getElementById('menu_btn') as HTMLElement;
const floating_menu_wrapper = document.getElementById('floating_menu_wrapper') as HTMLElement;

menu_btn.addEventListener('click', () =>{

    menu_btn.classList.toggle('focused')
    floating_menu_wrapper.classList.toggle('open')
})

/**************************************************************************************************************/

const tabs = document.querySelectorAll('.tab') as NodeListOf<HTMLElement>;
const view_wrapper = document.getElementById('view_wrapper') as HTMLElement;
const navbar = document.getElementById('navbar') as HTMLElement;
const active_tab_indicator = document.getElementById('active_tab_indicator') as HTMLElement;

tabs.forEach((tab, index) =>{

    tab.addEventListener('click', (e) =>{
        // Get the clicked element
        const clickedElement = e.currentTarget as HTMLElement;
        // const filteredChildren = Array.from(navbar.children).filter(child => child.hasAttribute('onclick'));
        // const index = filteredChildren.indexOf(clickedElement);
        const activeView =  Array.from(view_wrapper.children)[index];
        
        active_tab_indicator.style.left = `${index * 27.875}%`

        Array.from(navbar.children).forEach(child => {
            child.classList.remove('active');
        }); 
        clickedElement.classList.add('active');

        Array.from(view_wrapper.children).forEach(child => {
            child.classList.remove('active');
        });
        activeView.classList.add('active');

        view_wrapper.style.transform = `translateX(-${index * 100}%)`;

    });
});

/**************************************************************************************************************/

const skill_cards = document.querySelectorAll('.skill_card') as NodeListOf<HTMLElement>;
const skill_cards_wrapper = document.getElementById('skill_cards_wrapper') as HTMLElement;
const skill_bubble_card_wrapper = document.getElementById('skill_bubble_card_wrapper') as HTMLElement;

skill_cards.forEach((card, index) =>{

    card.addEventListener('click', (e) =>{
        // Get the clicked element
        const clickedElement = e.currentTarget as HTMLElement;
        const activeCard =  Array.from(skill_bubble_card_wrapper.children)[index];
        

        Array.from(skill_cards_wrapper.children).forEach(child => {
            child.classList.remove('active');
        }); 
        clickedElement.classList.add('active');

        Array.from(skill_bubble_card_wrapper.children).forEach(child => {
            child.classList.remove('active');
        });
        activeCard.classList.add('active');

    });
});

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
const shiftClasses = (direction: "next" | "previous") => {
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

next_project_btn.addEventListener("click", () => shiftClasses("next"));
prev_project_btn.addEventListener("click", () => shiftClasses("previous"));