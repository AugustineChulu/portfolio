import serviceCard from '../components/service_card/service_card';
import '../css/services.css';

(document.getElementById('servicesView') as HTMLDivElement).innerHTML = `
    <div id="my_services_wrapper" class="tab_view">
            
        <div id="my_services_intro">
            <div>
                <h1>
                    <i class="fa-solid fa-hand-holding-medical"></i> 
                    SERVICES I OFFER
                </h1>

                <p>
                    I am currently available for new opportunities and eager to contribute my skills 
                    and expertise to your projects. If you are interested in exploring a collaboration 
                    or have specific inquiries, my contact information is readily accessible
                    Feel free to reach out through the provided channels, and I will respond 
                    promptly to discuss how I can bring value to your team or project. I am 
                    open to discussions about potential collaborations, freelance work, or 
                    employment opportunities. I offer the services bellow, looking forward to connecting with you.
                </p>
            </div>

            <div>
                
                <div id="service_cards_wrapper">
                
                    <div class="service_type_wrapper">
                        ${serviceCard(
                            'web', 
                            'Design & Development', 
                            `Whether you need a responsive, mobile-friendly site or want to enhance 
                            your existing web presence, I'm here to turn your vision into a reality. 
                            Let's collaborate and bring your online goals to life!`
                        )}

                        ${serviceCard(
                            'web', 
                            'Consulting & Training', 
                            `From technology selection to user experience optimization, I'll ensure 
                            your web projects are on the path to success. Let's work together to 
                            turn your web development aspirations into a well-executed reality.`
                        )}
                    </div>

                    <div class="service_type_wrapper">
                        ${serviceCard(
                            'graphics', 
                            'Branding', 
                            `I'm here to bring your vision to life.Whether you're starting a new 
                            venture or rebranding an existing one, let's collaborate to elevate 
                            your brand's visual identity and make it stand out in the market.`
                        )}

                        ${serviceCard(
                            'graphics', 
                            'Photo Manipulation', 
                            `I breathe new life into images, turning them into captivating tales that 
                            resonate with emotion and imagination. Whether it's altering perspectives, 
                            blending elements seamlessly, or introducing fantastical elements, each project 
                            becomes a personalized journey into the realms of creativity.`
                        )}

                        ${serviceCard(
                            'graphics', 
                            'Poster & Cover Art', 
                            `From dynamic posters that command attention to album covers that encapsulate the essence 
                            of your music, every project is an immersive exploration of aesthetics and messaging. 
                            Meticulously combining graphic elements, typography, and vibrant imagery, 
                            I ensure each design is a seamless fusion of creativity and purpose.`
                        )}

                        ${serviceCard(
                            'graphics', 
                            'Illustrations', 
                            `Bringing ideas to life through expressive and unique illustrations. From 
                            character design to detailed concepts, I create visuals that spark imagination, 
                            and leave a lasting impression.`
                        )}
                    </div>

                    <div class="service_type_wrapper">
                        ${serviceCard(
                            '3D', 
                            'Hard Surface Modelling', 
                            `Leveraging advanced modeling techniques and cutting-edge software, 
                            I bring your concepts to life with intricate details and realistic textures. 
                            Whether it's architectural visualization, product prototyping, or any other 
                            hard surface modeling needs, I ensure that every project reflects a meticulous 
                            attention to detail and a commitment to exceeding your expectations.`
                        )}

                        ${serviceCard(
                            '3D', 
                            'Prooduct Design & Branding', 
                            `I craft immersive brand experiences that captivate your audience. 
                            From conceptualizing 3D logos to designing eye-catching promotional materials, 
                            my expertise lies in creating a cohesive and memorable visual identity for your brand. 
                            By integrating innovative 3D elements into your advertising campaigns.`
                        )}
                    </div>

                </div>

            </div>
        </div>

    </div>
`