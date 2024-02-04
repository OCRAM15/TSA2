document.addEventListener('DOMContentLoaded', () => {
    const box = document.getElementById('box');
  
    document.querySelectorAll('.day-button').forEach(button => {
        button.addEventListener('click', () => {
            box.style.top = '0px';
            box.style.background = getRandomColor();
  
            setTimeout(() => {
                box.style.top = '200px';
                box.style.background = getRandomColor();
            }, 500);
        });
    });

    function getRandomColor() {
        // Generate a random RGB color
        const randomColor = () => Math.floor(Math.random() * 256);
        return `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    }
});
