import './service_card.css';

export default function serviceCard(
    serviceType: string,
    serviceTitle: string, 
    serviceDesc: string,
): string{

    let serviceIcon: string = '';

    if(serviceType === 'web'){
        serviceIcon = 'fa-code'
    }else if(serviceType === 'graphics'){
        serviceIcon = 'fa-pen-nib'
    }else if(serviceType === '3D'){
        serviceIcon = 'fa-cube'
    }

    return `
        <div class="service_card" data-service-type='${serviceType}' tabindex="1">
            <h2>
                <i class="fa-solid ${serviceIcon}"></i>
                ${serviceTitle}
            </h2>
            <p>${serviceDesc}</p>
        </div>
    `

}