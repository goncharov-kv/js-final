document.addEventListener('DOMContentLoaded', () => {

const QAbutton = document.querySelector('.qa-worker');
const JSbutton = document.querySelector('.js-worker');
const JavaButton = document.querySelector('.java-worker');
const PythonButton = document.querySelector('.python-worker');

const createStd = (stdData) => {
    const {id, fio, date, competitionType, photo} = stdData;
    
    const std = 
    document.createElement('div');
    std.innerHTML = `
    <div>
    <div class="block-inf"><p>${id}</p></div>
    <div class="block-inf"><p>${fio}</p></div>
    <div class="block-inf"><p>${date}</p></div>
    <button>Подробнее</button>
    </div>
    
    `;
    if(date === '') {
        std.innerHTML = `
        <div>
    <div class="block-inf"><p>${id}</p></div>
    <div class="block-inf"><p>${fio}</p></div>
    <div class="block-inf"><p>Отсутствует</p></div>
    <button>Подробнее</button>
    </div>
        `
    }
    return std;
};
const ButtonClickJAVA = () => {
    fetch('http://goiteens.club/hse/back/students.php')
    .then(data => data.json())
            .then(data => {
                const student = document.querySelector('.student')
                student.innerHTML = '';
                for(let i = 0;i < data.length;i++) {
                    
                    if(data[i].competitionType === "JAVA") {
                        const stdJava = {
                            ...data[i],
                            id: i + 1
                        };
                        const newStd = createStd(stdJava);
                        student.innerHTML +=  newStd.innerHTML;
                        
                    }


                }
                






            





})


};
const ButtonClickQA = () => {
    fetch('http://goiteens.club/hse/back/students.php')
    .then(data => data.json())
            .then(data => {
                const student = document.querySelector('.student')
                student.innerHTML = '';
                for(let i = 0;i < data.length;i++) {

                    if(data[i].competitionType === "QA") {
                        const stdQA = {
                            ...data[i],
                            id: i + 1
                        };
                        const newStd = createStd(stdQA);
                        student.innerHTML +=  newStd.innerHTML;
                        
                    }


                }
                






            





})


};
const ButtonClickJS = () => {
    fetch('http://goiteens.club/hse/back/students.php')
    .then(data => data.json())
            .then(data => {
                const student = document.querySelector('.student')
                student.innerHTML = '';
                for(let i = 0;i < data.length;i++) {
                    if(data[i].competitionType === "JS") {
                        const stdJS = {
                            ...data[i],
                            id: i + 1
                        };
                        const newStd = createStd(stdJS);
                        student.innerHTML +=  newStd.innerHTML;
                        
                    }


                }
                






            





})


};
const ButtonClickPython = () => {
    fetch('http://goiteens.club/hse/back/students.php')
    .then(data => data.json())
            .then(data => {
                const student = document.querySelector('.student')
                student.innerHTML = '';
                for(let i = 0;i < data.length;i++) {
                    if(data[i].competitionType === "Python") {
                        const stdP = {
                            ...data[i],
                            id: i + 1
                        };
                        const newStd = createStd(stdP);
                        student.innerHTML +=  newStd.innerHTML;
                        
                    }


                }
                






            





})


};
JavaButton.addEventListener('click', ButtonClickJAVA);
QAbutton.addEventListener('click', ButtonClickQA);
JSbutton.addEventListener('click', ButtonClickJS);
PythonButton.addEventListener('click', ButtonClickPython)
});