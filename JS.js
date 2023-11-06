let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'C':
                display.innerHTML = '';
                break;
            case '=':
                try {
                    display.innerHTML = eval(display.innerHTML);
                } catch {
                    display.innerHTML = "Error";
                }
                break;
            case '←':
                if (display.innerHTML) {
                    display.innerHTML = display.innerHTML.slice(0, -1);
                }
                break;
            default:
                display.innerHTML += e.target.innerText;
        }
    });
});
