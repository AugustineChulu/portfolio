import './project_card.css';

export default function projectCard(
    cardClass: string,
    projectTitle: string, 
    projectID: string, 
    projectAddress: string,
    addressTitle: string
): string{


    if(projectAddress === ''){
        return `
            <div class="project_card ${cardClass}">
                <h3 class="project_title">${projectTitle}</h3>

                <div class="img_${projectID} project_img"></div>
            </div>
        `;
    }else{
        return `
            <div class="project_card ${cardClass}">
                <h3 class="project_title">${projectTitle}</h3>

                <div class="img_${projectID} project_img"></div>

                <a class="project_address" title="${addressTitle}" href="${projectAddress}">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
            </div>
        `
    }

}