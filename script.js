const toggles = document.querySelectorAll('.faq-toogle');

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
}) 