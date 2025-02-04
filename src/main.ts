import './assets/fontawesome-free-6.5.1-web/css/all.css'
import './views/about'
import './views/projects'
import './views/services'
import './views/skillsets'
import './views/menu'

const progress_tracker = document.getElementById("progress_tracker") as HTMLDivElement;
const landing_page = document.getElementById("landing_page") as HTMLDivElement;
const preloadedImages: Record<string, HTMLImageElement> = {};

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

    function updateProgressTracker(): void {
        const progress: number = (imagesLoaded / totalAssets) * 100;
        progress_tracker.style.width = `${progress}%`;
        progress_tracker.style.height = `${progress}%`;

        if (imagesLoaded === totalAssets) {
            resourceMapping();

            progress_tracker.classList.remove('pulse')
            landing_page.classList.add('load')
            landing_page.classList.add('animate_bg')
        }
    }

    // Load images
    imagePaths.forEach((path: string) => {
        const img: HTMLImageElement = new Image();
        img.src = path;
        img.onload = () => {
            preloadedImages[path] = img; // Store the loaded Image object
            imagesLoaded++;
            updateProgressTracker();
        };
        img.onerror = () => {
            console.error(`Failed to load image: ${path}`);
            imagesLoaded++; // Increment even if loading fails to avoid deadlock
            updateProgressTracker();
        };
    });

    // Load fonts
    document.fonts.ready.then(() => {
        imagesLoaded++; // Increment when fonts are ready
        updateProgressTracker();
    }).catch((error: any) => {
        console.error("Failed to load fonts:", error);
        imagesLoaded++; // Avoid deadlock
        updateProgressTracker();
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
                const fileNameError = `Could not extract file name from path: ${path}`;
                console.error(fileNameError);
                return;
            }
    
            // Identify the existing div in the DOM by the extracted file name as ID
            const selectorKey = `.${fileName}`;
            const divs = document.querySelectorAll(selectorKey) as NodeListOf<HTMLDivElement> | null;
    
            if (!divs) {
                const missingElementError = `one or more divs containing class '${fileName}' could not be found in the DOM.`;
                console.warn(missingElementError);
                return;
            }
    
            // Set the background image if preloaded
            if (preloadedImages[path]) {

                divs.forEach((div) =>{
                    const urlVal = `url('${preloadedImages[path].src}')`;
                    div.style.backgroundImage = urlVal;
                })
            } else {
                const prealodError = `Image not preloaded: ${path}`;
                console.error(prealodError);
            }
        });
    };
    
});

/**************************************************************************************************************/

const explore_btn = document.getElementById('explore_btn') as HTMLButtonElement;
const branding_x_me_wrapper = document.getElementById('branding_x_me_wrapper') as HTMLDivElement;

explore_btn.addEventListener('click', () => {

    explore_btn.disabled = true;
    explore_btn.classList.add('pulse')
    landing_page.classList.remove('load');
    landing_page.classList.add('unload');
    landing_page.classList.add('pause')
    branding_x_me_wrapper.classList.add('animate')
});

/**************************************************************************************************************/
const tabs = document.querySelectorAll('.tab') as NodeListOf<HTMLButtonElement>;
const view_wrapper = document.getElementById('view_wrapper') as HTMLDivElement;
const navbar = document.getElementById('navbar') as HTMLDivElement;
const active_view_title = document.getElementById('active_view_title') as HTMLDivElement;

let xOffset = 0;
let lastActiveTabIndex = 0;

const getXoffset = () =>{
    if(getComputedStyle((document.getElementById('active_tab_indicator') as HTMLDivElement)).getPropertyValue('width') === '50px')
        xOffset = 140;
    else
        xOffset = 157;
}

getXoffset();

const animateTabViewSync = (target: string, index: number) =>{
    let translateVal = ''
    if(target === 'active_tab_indicator' )
        translateVal = index * xOffset + '%'
    else
        translateVal = index * -100 + '%'

    document.querySelector<HTMLDivElement>(`#${target}`)!.style.transform = `translateX(${translateVal})`
}

window.addEventListener('resize', () =>{
    animateTabViewSync('active_tab_indicator', lastActiveTabIndex)
    getXoffset()
})


tabs.forEach((tab, index) =>{

    tab.addEventListener('click', (e) =>{
        const clickedElement = e.currentTarget as HTMLElement;
        const activeView =  Array.from(view_wrapper.children)[index];
        lastActiveTabIndex = index;

        active_view_title.classList.add('hide')
        setTimeout(() => {
            active_view_title.textContent = clickedElement.getAttribute('data-viewmap');
            active_view_title.classList.remove('hide')
        }, 400);

        animateTabViewSync('active_tab_indicator', index)

        Array.from(navbar.children).forEach(child => {
            child.classList.remove('active');
        }); 
        clickedElement.classList.add('active');

        Array.from(view_wrapper.children).forEach(child => {
            child.classList.remove('active');
        });
        activeView.classList.add('active');

        animateTabViewSync('view_wrapper', index)
    });
});

/**************************************************************************************************************/
const menu_btn = document.getElementById('menu_btn') as HTMLButtonElement;
const menuView = document.getElementById('menuView') as HTMLDivElement;
const theme_toggle = document.getElementById('theme_toggle') as HTMLDivElement;

menu_btn.addEventListener('click', () =>{

    theme_toggle.classList.toggle('show')
    menu_btn.classList.toggle('focused')
    menuView.classList.toggle('open')
    active_view_title.classList.toggle('unfocused')

    if(menu_btn.classList.contains('focused')){
        tabs.forEach((tab) =>{
            tab.disabled = true;
        })
    }else{
        tabs.forEach((tab) =>{
            tab.disabled = false;
        })
    }
})