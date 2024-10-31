

const teachers = [
    {
        id:'1',
        name:'Samsun Nahar',
        subject:'ICT',
        image: 'images/1.jpg'
    },
    {
        id:'2',
        name:'Yeasin Arafat',
        subject:'HR',
        image: 'images/2.jpg'
    },
    {
        id:'3',
        name:'Meherun Nessa',
        subject:'FinTech',
        image: 'images/3.jpg'
    },
    {
        id:'4',
        name:'Andria',
        subject:'Cyber Security',
        image: 'images/1.jpg'
    },
    {
        id:'5',
        name:'Anchu',
        subject:'Data Science',
        image: 'images/4.jpg'
    },
    {
        id:'6',
        name:'Asma',
        subject:'ICT',
        image: 'images/2.jpg'
    },
    {
        id:'7',
        name:'Alicia',
        subject:'ICT',
        image: 'images/3.jpg'
    },
    {
        id:'8',
        name:'Rosie',
        subject:'ICT',
        image: 'images/4.jpg'
    },
    {
        id:'9',
        name:'Claire',
        subject:'ICT',
        image: 'images/4.jpg'
    },
    {
        id:'10',
        name:'Hugo',
        subject:'ICT',
        image: 'images/4.jpg'
    },
]

function createTeacherInfoCard(teacher){
    const card = document.createElement('div');
    card.classList.add('teacher-card');

    card.innerHTML = `
        <img src="${teacher.image}" class="teacher-image">
        <h3 class="teacher-name">${teacher.name}</h3>
        <p class="teacher-subject">${teacher.subject}</p>
        <button class="book-teacher">Book Teacher</button>
        
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