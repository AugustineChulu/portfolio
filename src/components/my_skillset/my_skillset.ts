import './my_skillset.css';

export default function mySkillsetView(): string{

    return `
        <div id="my_skillset_wrapper" class="tab_view">

            <div id="my_skillset_intro">
                <div>
                    <h1>
                        <i class="fa-solid fa-ranking-star"></i>
                        &nbsp; MY SKILLSET
                    </h1>

                    <div id="skill_cards_wrapper">
                        <div class="active skill_card" data-icon="&#xf121">

                            <div>

                                <h4>Web Development</h4>

                                <p>
                                    In the realm of web development and design, I bring a versatile skillset
                                    to the table. Proficient in HTML, CSS and JavaScript. Beyond coding, my capabilities extend to the visual arts. I'm well-versed in 
                                    Adobe Photoshop and Adobe Illustrator enabling me to transform concepts into stunning 
                                    visual designs.
                                </p>

                                <div>
                                    <div class="img_HTML5" title="HTML5">HTML5</div>

                                    <div class="img_CSS3" title="CSS3">CSS3</div>

                                    <div class="img_JS" title="Java-script">Java-script</div>

                                    <div class="img_TS" title="Type-script">Type-script</div>

                                    <div class="img_WORDPRESS" title="Wordpress">Wordpress</div>

                                    <div class="img_NEXT" title="Next JS">Next JS</div>

                                    <div class="img_LARAVEL" title="Laravel">Laravel</div>

                                    <div class="img_REACT" title="React">React</div>
                                </div>
                            
                            </div>

                        </div>

                        <div class="skill_card" data-icon="&#xf1b2">

                            <div>

                                <h4>3D Modelling</h4>

                                <p>
                                    I do 3D modeling. While I may not be an expert, 
                                    I've honed my skills and developed a passion for creating 3D wonders. 
                                    I may not have all the answers, but I'm dedicated to delivering quality results. 
                                    I bring a fresh perspective to every project and embrace the opportunity to learn 
                                    and grow with each new challenge. Client satisfaction is my ultimate goal.
                                </p>

                                <div>
                                    <div class="img_BLENDER" title="Blender">Blender</div>
                                </div> 
                            
                            </div>
                        
                        </div>

                        <div class="skill_card" data-icon="&#xf5ad">
                        
                            <div>

                                <h4>Graphics Design</h4>

                                <p>
                                    My capbilties encompass a range of design disciplines, from logo and branding to web 
                                    graphics and print materials. I'm a firm believer in the power of visuals to 
                                    communicate messages, evoke emotions, and leave a lasting impact. I'm dedicated to 
                                    delivering designs that not only meet but exceed your expectations.
                                </p>

                                <div>
                                    <div class="img_PS" title="Photoshop">Photoshop</div>
                                    <div class="img_ILL" title="Illustrator">Illustrator</div>
                                </div>
                            
                            </div>

                        </div>
                    </div>
                </div>

                <div>
                    
                    <div id="skill_bubble_card_wrapper">
                    
                        <div class="active absolute_center sb_card" data-icon="&#xf121">
                            <div class="img_HTML5" title="HTML5" style="--color: #F16529;"></div>

                            <div class="img_CSS3" title="CSS3" style="--color: #2965F1;"></div>

                            <div class="img_JS" title="Java-script" style="--color: #F7DF1E;"></div>

                            <div class="img_TS" title="Type-script" style="--color: #007ACC;"></div>

                            <div class="img_WORDPRESS" title="Wordpress" style="--color:rgb(0, 43, 160);"></div>

                            <div class="img_NEXT" title="Next JS" style="--color: #000;"></div>

                            <div class="img_LARAVEL" title="Laravel" style="--color: #FE2D20;"></div>

                            <div class="img_REACT" title="React" style="--color:rgb(146, 221, 255);"></div>
                        </div>

                        <div class="absolute_center sb_card" data-icon="&#xf1b2">
                            <div class="img_BLENDER" title="Blender" style="--color: #E9773B;"></div>
                        </div>     
                        
                        <div class="absolute_center sb_card" data-icon="&#xf5ad">
                            <div class="img_PS" title="Photoshop" style="--color:rgb(22, 121, 202);"></div>
                            <div class="img_ILL" title="Illustrator" style="--color:rgb(179, 103, 5);"></div>
                        </div>

                    </div>

                </div>
            </div>
           
        </div>
    `;

}