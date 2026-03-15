import "../css/skillsets.css";

(document.getElementById("skillsetsView") as HTMLDivElement).innerHTML = `
    <div id="my_skillset_wrapper" class="tab_view">
        <div id="my_skillset_intro">
            <div>
                <div id="skill_groups_wrapper">
                    <div class="active skill_group" data-icon="&#xf121" style="--skill_tile_count: 8;">
                        <div data-img="HTML5" class="skill_tile" title="HTML5" style="--skill_tile_index: 1; --skill_tile_theme: 241, 101, 41;"></div>
                        <div data-img="CSS3" class="skill_tile" title="CSS3" style="--skill_tile_index: 2; --skill_tile_theme: 41, 101, 241;"></div>
                        <div data-img="JS" class="skill_tile" title="Java-script" style="--skill_tile_index: 3; --skill_tile_theme: 247, 223, 30;"></div>
                        <div data-img="TS" class="skill_tile" title="Type-script" style="--skill_tile_index: 4; --skill_tile_theme: 0, 122, 204;"></div>
                        <div data-img="WORDPRESS" class="skill_tile" title="Wordpress" style="--skill_tile_index: 5; --skill_tile_theme: 0, 43, 160;"></div>
                        <div data-img="NEXT" class="skill_tile" title="Next JS" style="--skill_tile_index: 6; --skill_tile_theme: 100, 100, 100;"></div>
                        <div data-img="LARAVEL" class="skill_tile" title="Laravel" style="--skill_tile_index: 7; --skill_tile_theme: 254, 45, 32;"></div>
                        <div data-img="REACT" class="skill_tile" title="React" style="--skill_tile_index: 8; --skill_tile_theme: 146, 221, 255;"></div>

                        <div class="origin" data-icon="&#xf121"></div>
                    </div>

                    <div class="skill_group" data-icon="&#xf5ad" style="--skill_tile_count: 2;">
                        <div data-img="PS" class="skill_tile" title="Photoshop" style="--skill_tile_index: 1; --skill_tile_theme: 22, 121, 202;"></div>
                        <div data-img="ILL" class="skill_tile" title="Illustrator" style="--skill_tile_index: 2; --skill_tile_theme: 179, 103, 5;"></div>

                        <div class="origin" data-icon="&#xf5ad"></div>
                    </div>

                    <div class="skill_group" data-icon="&#xf1b2" style="--skill_tile_count: 1;">
                        <div data-img="BLENDER" class="skill_tile" title="Blender" style="--skill_tile_index: 1; --skill_tile_theme: 233, 119, 59;"></div>

                        <div class="origin" data-icon="&#xf1b2"></div>
                    </div>     
                </div>
            </div>

            <div>
                <h1 class="view_title_header">
                    <i class="fa-solid fa-wand-magic-sparkles"></i>
                    MY SKILLSETS
                </h1>

                <div id="skill_cards_wrapper">
                    <div class="active skill_card">
                        <div>
                            <h2 data-icon="&#xf121">Web Development</h2>

                            <p>
                                I create <b>websites and interactive experiences</b> that are smooth, responsive, 
                                and easy to use. I focus on designing layouts and interfaces that feel natural 
                                and enjoyable for anyone visiting, while keeping the design modern and polished. 
                                My work uses tools like <b>HTML5, CSS3, JavaScript, TypeScript, React, Next.js, Laravel, and WordPress.</b>
                            </p>

                            <div>
                                <div data-img="HTML5" title="HTML5" style="--color: #F16529;">HTML5</div>
                                <div data-img="CSS3" title="CSS3" style="--color: #2965F1;">CSS3</div>
                                <div data-img="JS" title="Java-script" style="--color: #F7DF1E;">Java-script</div>
                                <div data-img="TS" title="Type-script" style="--color: #007ACC;">Type-script</div>
                                <div data-img="WORDPRESS" title="Wordpress" style="--color: #002ba0;">Wordpress</div>
                                <div data-img="NEXT" title="Next JS" style="--color: #000000;">Next JS</div>
                                <div data-img="LARAVEL" title="Laravel" style="--color: #FE2D20;">Laravel</div>
                                <div data-img="REACT" title="React" style="--color: #92ddff;">React</div>
                            </div>
                        </div>
                    </div>

                    <div class="skill_card">
                        <div>
                            <h2 data-icon="&#xf5ad">Graphics Design</h2>

                            <p>
                                I design <b>logos, branding, web graphics, and print materials</b> that are visually appealing and cohesive. 
                                I pay close attention to color, composition, and typography to make every design look professional. 
                                I mainly work with <b>Adobe Photoshop and Illustrator</b> to bring concepts to life.
                            </p>

                            <div>
                                <div data-img="PS" title="Photoshop" style="--color: #1679ca;">Photoshop</div>
                                <div data-img="ILL" title="Illustrator" style="--color: #b36705;">Illustrator</div>
                            </div>
                        </div>
                    </div>

                    <div class="skill_card">
                        <div>
                            <h2 data-icon="&#xf1b2">3D Modelling</h2>

                            <p>
                                I create <b>3D models and visual assets</b> that are detailed, well-crafted, and visually striking. 
                                My focus is on shape, texture, and presentation to produce polished 3D designs. 
                                I use <b>Blender</b> to model, sculpt, and render these creations.
                            </p>

                            <div>
                                <div data-img="BLENDER" title="Blender" style="--color: #E9773B;">Blender</div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

/**************************************************************************************************************/

const skill_cards = document.querySelectorAll(
  ".skill_card"
) as NodeListOf<HTMLElement>;
const skill_cards_wrapper = document.getElementById(
  "skill_cards_wrapper"
) as HTMLElement;
const skill_groups_wrapper = document.getElementById(
  "skill_groups_wrapper"
) as HTMLElement;

var lastClickedElement: HTMLElement

skill_cards.forEach((card, index) => {
  card.addEventListener("click", (e) => {
    const clickedElement = e.currentTarget as HTMLElement;
    const activeCard = Array.from(skill_groups_wrapper.children)[index];

    if (clickedElement != lastClickedElement) {
      Array.from(skill_cards_wrapper.children).forEach((child) => {
        child.classList.remove("active");
      });
      clickedElement.classList.add("active");

      Array.from(skill_groups_wrapper.children).forEach((child) => {
        child.classList.remove("active");
      });

      setTimeout(() => {
        activeCard.classList.add("active");
      }, 250);
      
      lastClickedElement = clickedElement;
    }
  });
});
