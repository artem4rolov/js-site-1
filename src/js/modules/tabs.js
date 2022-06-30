
const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {

    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector);

    function hideTabContent() {
        tab.forEach(item => {
            item.classList.remove(activeClass.substring(1));
        });

        content.forEach(item => {
            item.style.display = 'none';
        });
    }

    function showTabContent(i = 0) {
        tab[i].classList.add(activeClass.substring(1));
        content[i].style.display = display;
    }

    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e) => {
        const target = e.target;

        tab.forEach((item, i) => {
            if (target === item || target.parentNode === item) {
                hideTabContent();
                showTabContent(i);
            }
        });
    });


};

export default tabs;