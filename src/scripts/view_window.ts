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

    document.querySelector<HTMLDivElement>(`#${target}`)!.style.transform = `translate3d(${translateVal},0,0)`
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
            active_view_title.innerHTML = `
                ${clickedElement.children[0].outerHTML}
                <span>${clickedElement.getAttribute('data-viewmap')}</span>
            `
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

        window.appState.currentPage = activeView.id

        animateTabViewSync('view_wrapper', index)
    });
});

/**************************************************************************************************************/
const menu_btn = document.getElementById('menu_btn') as HTMLButtonElement;
const menu_view = document.getElementById('menu_view') as HTMLDivElement;
const theme_toggle = document.getElementById('theme_toggle') as HTMLDivElement;

menu_btn.addEventListener('click', () =>{

    theme_toggle.classList.toggle('show')
    menu_btn.classList.toggle('focused')
    menu_view.classList.toggle('open')
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