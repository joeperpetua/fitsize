let slidesContainer;
let txtTag;
window.onload = () => {
    slidesContainer = document.getElementsByClassName('slides')[0];
    txtTag = document.getElementById('slide-title');

    slidesContainer.onscroll = () => {
        //console.log(slidesContainer.scrollLeft);
        switch (slidesContainer.scrollLeft) {
            case 0:
                txtTag.innerHTML = 'Text 1';
                break;
            
            case 250:
                txtTag.innerHTML = 'Text 2';
                break;

            case 500:
                txtTag.innerHTML = 'Text 3';
                break;

            case 750:
                txtTag.innerHTML = 'Text 4';
                break;

            case 1000:
                txtTag.innerHTML = 'Text 5';
                break;

            default:
                break;
        }
    }
}

function changeText() {

}
  


