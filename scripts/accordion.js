export const accordion = () => {
    document.querySelectorAll('.fui-accordion').forEach((accordion) => {
        accordion.addEventListener('click', (e) => {
            e.currentTarget.classList.toggle('open');
            e.currentTarget.classList.toggle('fade-in');
        });
    });
};
