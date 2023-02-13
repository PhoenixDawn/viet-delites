const desktop = document.getElementsByClassName("desktop");

console.log(desktop[0])

if (screen.width < 500){
    for (i = 0; i < desktop.length; i++){
        desktop[i].style.display = 'none';

    }
}