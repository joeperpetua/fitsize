let slidesContainer;
let txtTag;
let descTag;
window.onload = () => {
    slidesContainer = document.getElementsByClassName('slides')[0];
    txtTag = document.getElementById('slide-title');
    descTag = document.getElementById('slide-desc');

    slidesContainer.onscroll = () => {
        //console.log(Math.floor(slidesContainer.scrollLeft));
        switch (Math.floor(slidesContainer.scrollLeft)) {
            case 0:
            case 1:
                txtTag.innerHTML = "Mesurez votre modèle témoin avec l'application FitSize";
                descTag.innerHTML = "Juste une photo est nécessaire pour prendre les mesures, l'application vous recommandera automatiquement la taille réelle ajustée !";
                break;
            
            case 249:
            case 250:
            case 251:
                txtTag.innerHTML = "Faire la retouche avant livraison avec l'application FitSize";
                descTag.innerHTML = "L'application vous indiquera automatiquement la mesure réelle de vos retouches ajustées au modèle de votre boutique.";
                break;
            
            case 499:
            case 500:
            case 501:
                txtTag.innerHTML = "Mesurez votre pied avec l'application FitSize";
                descTag.innerHTML = "Juste une photo est nécessaire pour prendre les mesures, l'application vous recommandera automatiquement la pointure de votre pied !";
                break;

            case 749:
            case 750:
            case 751:
                txtTag.innerHTML = "Mesurez votre monture avec l'application FitSize";
                descTag.innerHTML = "Juste une photo est nécessaire pour prendre les mesures, l'application vous recommandera automatiquement la mesure réelle de vos lunettes !";
                break;

            case 999:
            case 1000:
                txtTag.innerHTML = "Mesurez votre bague avec l'application FitSize";
                descTag.innerHTML = "Juste une photo est nécessaire pour prendre les mesures, l'application vous recommandera automatiquement la mesure réelle de votre bague ajustée !";
                break;

            default:
                break;
        }
    }
}

function changeText() {

}
  


