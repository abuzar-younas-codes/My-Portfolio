document.addEventListener('DOMContentLoaded', () => {
    const infoButtons = document.querySelectorAll('.info-btn');

    infoButtons.forEach(button => {
        button.addEventListener('click', () => {
            const project = button.getAttribute('data-project');
            let text = "";

            if(project === 'neon') text = "NEON-GEAR: My practice in CSS styling and simple JS gaming logic.";
            if(project === 'rgb') text = "RGB Calc: Learned how to change styles using Math.random() in JS.";
            if(project === 'admin') text = "Admin Panel: Practice project for handling lists and arrays in JavaScript.";
            if(project === 'prompt') text = "Prompt Calc: My very first logic project using browser pop-ups.";

            alert(text);
        });
    });
});
