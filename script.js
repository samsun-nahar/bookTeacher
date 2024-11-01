

const teachers = [
    {
        id:'1',
        name:'Samsun Nahar',
        subject:'Mathematics - Statistic, Algebra, Geometry',
        image: 'images/teacher2.jpg'
    },
    {
        id:'2',
        name:'Yeasin Arafat',
        subject:'Human Resource - Management, Marketing, Training and Development',
        image: 'images/teacher1.jpg'
    },
    {
        id:'3',
        name:'Meherun Nessa',
        subject:'Financial Technology - Corporate Finance, Financial Management, Investment Banking',
        image: 'images/teacher3.jpg'
    },
    {
        id:'4',
        name:'Andria',
        subject:'Cyber Security - Computer Network, Cryptography, Ethical Hacking',
        image: 'images/teacher1.jpg'
    },
    {
        id:'5',
        name:'Anchu',
        subject:'Data Science - Machine Learning, Deep Learning, Artificial Intelligence',
        image: 'images/teacher3.jpg'
    },
    {
        id:'6',
        name:'Asma',
        subject:'Mathematics - Statistic, Algebra, Geometry',
        image: 'images/teacher2.jpg'
    },
    {
        id:'7',
        name:'Alicia',
        subject:'Cyber Security - Computer Network, Cryptography, Ethical Hacking',
        image: 'images/teacher1.jpg'
    },
    {
        id:'8',
        name:'Rosie',
        subject:'Financial Technology - Corporate Finance, Financial Management, Investment Banking',
        image: 'images/teacher2.jpg'
    },
    {
        id:'9',
        name:'Claire',
        subject:'Financial Technology - Corporate Finance, Financial Management, Investment Banking',
        image: 'images/teacher3.jpg'
    },
    {
        id:'10',
        name:'Hugo',
        subject:'Human Resource - Management, Marketing, Training and Development',
        image: 'images/teacher1.jpg'
    },
]

function createTeacherInfoCard(teacher){
    const card = document.createElement('div');
    card.classList.add('teacher-card');

    const [subjectName, subjectDescription] = teacher.subject.split(" - ");

    card.innerHTML = `
        <img src="${teacher.image}" class="teacher-image">
        <h3 class="teacher-name">${teacher.name}</h3>
        <p class="teacher-subject">
            <span style="font-weight: bold;">${subjectName}</span> - ${subjectDescription}
        </p>
        <button class="book-teacher">Book Lesson</button>
        
    `;
    return card
}

function showTeachers(){
    const container = document.getElementById('teachers-container');
    teachers.forEach(teacher => {
        const teacherInfoCard = createTeacherInfoCard(teacher);
        container.appendChild(teacherInfoCard);
    })
}

showTeachers();