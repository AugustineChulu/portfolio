import './service_card.css';

export default function serviceCardView(
    serviceType: string,
    serviceTitle: string, 
    serviceDesc: string,
): string{

    let serviceIcon: string = '';

    if(serviceType === 'web'){
        serviceIcon = '&#xf121'
    }else if(serviceType === 'graphics'){
        serviceIcon = '&#xf5ad'
    }else if(serviceType === '3D'){
        serviceIcon = '&#xf1b2'
    }

    return `
        <div class="service_card">
            <div class="glass1" data-icon="${serviceIcon}"></div>
            <h3>${serviceTitle}</h3>
            <p>${serviceDesc}</p>
        </div>
    `

}