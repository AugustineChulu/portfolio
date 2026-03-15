import serviceCard from '../components/service_card/service_card';
import '../css/services.css';

(document.getElementById('servicesView') as HTMLDivElement).innerHTML = `
    <div id="my_services_wrapper" class="tab_view">
            
        <div id="my_services_intro">
            <div>
                <h1 class="view_title_header">
                    <i class="fa-solid fa-hand-holding-medical"></i> 
                    SERVICES I OFFER
                </h1>

                <p>
                    I’m currently working as a <b>Graphic Designer at Varun Beverages Zambia</b> and also take on <b>freelance projects, 
                    collaborations, and creative opportunities</b>. I bring experience in <b>web development, 
                    graphic design, and 3D modeling</b> to every project I take on. Here’s what I can offer:
                </p>
            </div>

            <div>
                
                <div id="service_cards_wrapper">
                
                    <div class="service_type_wrapper">
                        ${serviceCard(
                            'web', 
                            'Design & Development', 
                            `I create <b>responsive, mobile-friendly websites</b> and help enhance existing web presences. 
                            Together, we can turn your ideas into a website that looks great and works smoothly.`
                        )}

                        ${serviceCard(
                            'web', 
                            'Consulting & Training', 
                            `I provide guidance on <b>technology selection, design decisions, and best practices</b>, 
                            helping you make the most of your web projects. 
                            I also offer training to help you or your team work confidently with your web tools.`
                        )}
                    </div>

                    <div class="service_type_wrapper">
                        ${serviceCard(
                            'graphics', 
                            'Branding', 
                            `I develop <b>visual identities</b> for businesses and projects, from logos to full brand designs. 
                            My goal is to create a cohesive look that makes your brand memorable and professional.`
                        )}

                        ${serviceCard(
                            'graphics', 
                            'Photo Manipulation', 
                            `I enhance and transform images to create <b>compelling visuals</b>. Whether adjusting perspectives, 
                            blending elements, or adding creative effects, I turn photos into polished, eye-catching graphics.`
                        )}

                        ${serviceCard(
                            'graphics', 
                            'Poster & Cover Art', 
                            `I design <b>posters, album covers, and promotional visuals</b> that stand out. By combining typography, 
                            graphics, and color thoughtfully, I create designs that are both creative and purposeful.`
                        )}

                        ${serviceCard(
                            'graphics', 
                            'Illustrations', 
                            `I produce <b>custom illustrations</b> for characters, concepts, or any visual idea. 
                            My work is expressive and designed to leave a lasting impression.`
                        )}
                    </div>

                    <div class="service_type_wrapper">
                        ${serviceCard(
                            '3D', 
                            'Hard Surface Modelling', 
                            `I create <b>detailed 3D models</b> for products, architecture, and other projects. Using Blender, 
                            I focus on clean forms, textures, and professional presentation.`
                        )}

                        ${serviceCard(
                            '3D', 
                            'Prooduct Design & Branding', 
                            `I design <b>3D logos, promotional visuals, and branded elements</b> to enhance your marketing and identity. 
                            My goal is to create <b>cohesive, visually engaging assets</b> that elevate your brand.`
                        )}
                    </div>

                </div>

            </div>
        </div>

    </div>
`