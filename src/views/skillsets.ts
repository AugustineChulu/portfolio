import '../css/skillsets.css';


(document.getElementById('skillsetsView') as HTMLDivElement).innerHTML = `
    <div id="my_skillset_wrapper" class="tab_view">
        <div id="my_skillset_intro">
            <div>
                <div id="skill_bubble_card_wrapper">
                
                    <div class="active skill_bubble_card" data-icon="&#xf121">
                        <div class="img_HTML5 bubble" title="HTML5" style="--color: #F16529;"></div>

                        <div class="img_CSS3 bubble" title="CSS3" style="--color: #2965F1;"></div>

                        <div class="img_JS bubble" title="Java-script" style="--color: #F7DF1E;"></div>

                        <div class="img_TS bubble" title="Type-script" style="--color: #007ACC;"></div>

                        <div class="img_WORDPRESS bubble" title="Wordpress" style="--color: #002ba0;"></div>

                        <div class="img_NEXT bubble" title="Next JS" style="--color: #000000;"></div>

                        <div class="img_LARAVEL bubble" title="Laravel" style="--color: #FE2D20;"></div>

                        <div class="img_REACT bubble" title="React" style="--color: #92ddff;"></div>
                    </div>

                    <div class="skill_bubble_card" data-icon="&#xf5ad">
                        <div class="img_PS bubble" title="Photoshop" style="--color: #1679ca;"></div>
                        <div class="img_ILL bubble" title="Illustrator" style="--color: #b36705;"></div>
                    </div>

                    <div class="skill_bubble_card" data-icon="&#xf1b2">
                        <div class="img_BLENDER bubble" title="Blender" style="--color: #E9773B;"></div>
                    </div>     

                </div>
            </div>

            <div>
                <h1>
                    <i class="fa-solid fa-wand-magic-sparkles"></i>
                    MY SKILLSETS
                </h1>

                <div id="skill_cards_wrapper">
                    <div class="active skill_card">

                        <div>

                            <h2 data-icon="&#xf121">Web Development</h2>

                            <p>
                                In the realm of web development and design, I bring a versatile skillset
                                to the table. Proficient in HTML, CSS and JavaScript. Beyond coding, my capabilities extend to the visual arts. I'm well-versed in 
                                Adobe Photoshop and Adobe Illustrator enabling me to transform concepts into stunning 
                                visual designs.
                            </p>

                            <div>
                                <div class="img_HTML5" title="HTML5" style="--color: #F16529;">HTML5</div>

                                <div class="img_CSS3" title="CSS3" style="--color: #2965F1;">CSS3</div>

                                <div class="img_JS" title="Java-script" style="--color: #F7DF1E;">Java-script</div>

                                <div class="img_TS" title="Type-script" style="--color: #007ACC;">Type-script</div>

                                <div class="img_WORDPRESS" title="Wordpress" style="--color: #002ba0;">Wordpress</div>

                                <div class="img_NEXT" title="Next JS" style="--color: #000000;">Next JS</div>

                                <div class="img_LARAVEL" title="Laravel" style="--color: #FE2D20;">Laravel</div>

                                <div class="img_REACT" title="React" style="--color: #92ddff;">React</div>
                            </div>
                        
                        </div>

                    </div>

                    <div class="skill_card">
                    
                        <div>

                            <h2 data-icon="&#xf5ad">Graphics Design</h2>

                            <p>
                                My capbilties encompass a range of design disciplines, from logo and branding to web 
                                graphics and print materials. I'm a firm believer in the power of visuals to 
                                communicate messages, evoke emotions, and leave a lasting impact. I'm dedicated to 
                                delivering designs that not only meet but exceed your expectations.
                            </p>

                            <div>
                                <div class="img_PS" title="Photoshop" style="--color: #1679ca;">Photoshop</div>
                                <div class="img_ILL" title="Illustrator" style="--color: #b36705;">Illustrator</div>
                            </div>
                        
                        </div>

                    </div>

                    <div class="skill_card">

                        <div>

                            <h2 data-icon="&#xf1b2">3D Modelling</h2>

                            <p>
                                I do 3D modeling. While I may not be an expert, 
                                I've honed my skills and developed a passion for creating 3D wonders. 
                                I may not have all the answers, but I'm dedicated to delivering quality results. 
                                I bring a fresh perspective to every project and embrace the opportunity to learn 
                                and grow with each new challenge. Client satisfaction is my ultimate goal.
                            </p>

                            <div>
                                <div class="img_BLENDER" title="Blender" style="--color: #E9773B;">Blender</div>
                            </div> 
                        
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
`

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