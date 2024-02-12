document.addEventListener('DOMContentLoaded', () => {
    const box = document.getElementById('box');

    document.querySelectorAll('.day-button').forEach(button => {
        button.addEventListener('click', () => {
        
            box.style.top = '0px';
    
            box.classList.add('transitioning');

            setTimeout(() => {
                box.style.background = getColorForDay(button.id);

                setTimeout(() => {
                    box.style.top = '200px';

                    setTimeout(() => {
                        box.classList.remove('transitioning');
                    }, 500);
                }, 500); 
            }, 50); 
        });
    });

    function getColorForDay(day) {
        
        switch (day) {
            case 'monday':
                return 'rgb(255, 0, 0)'; 
            case 'tuesday':
                return 'rgb(0, 255, 0)'; 
            case 'wednesday':
                return 'rgb(0, 0, 255)'; 
            case 'thursday':
                return 'rgb(255, 255, 0)'; 
            case 'friday':
                return 'rgb(255, 0, 255)'; 
            case 'saturday':
                return 'rgb(0, 255, 255)'; 
            case 'sunday':
                return 'rgb(128, 0, 128)'; 
            default:
                return getRandomColor();
        }
    }
});
