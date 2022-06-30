const gallery = () => {
    const imgPopup = document.createElement('div'),
          workSection = document.querySelector('.works'),
          imgBig = document.createElement('img');

    imgPopup.classList.add('popup');
    workSection.appendChild(imgPopup);

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.width = '100%';
    imgPopup.style.display = 'none';

    imgPopup.appendChild(imgBig);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;

        if (target && target.classList.contains('preview')) {
            let path = target.parentNode.getAttribute('href');

            imgBig.setAttribute('src', path);
            imgBig.style.width = '30%';
            document.body.style.overflow = 'hidden';
            imgPopup.style.display = 'flex';
        }

        if (target && target === imgPopup) {
            imgPopup.style.display = 'none';
            document.body.style.overflow = '';
        }
    });

};

export default gallery;