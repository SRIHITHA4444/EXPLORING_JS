const reviews = [
    {
        imgSrc : "https://cdn.pixabay.com/photo/2025/02/22/13/12/seeds-9424096_1280.jpg",
        name : "Priya Sharma",
        designation : "Data Analyst at Infosys",
        review : "This platform has truly elevated my data analysis skills. The hands-on projects and real-world datasets made learning both practical and enjoyable. I highly recommend it to anyone in the analytics field."
    },
        
    {
        imgSrc : "https://cdn.pixabay.com/photo/2025/03/15/14/21/mountain-9472312_1280.png",
        name : "Rajeev Menon",
        designation : "Senior Software Engineer at TCS",
        review : "A very intuitive and user-friendly experience. The AI features integrated into the system are impressive, and the performance has been consistently reliable. Great job by the development team!"
    },

    {
        imgSrc : "https://cdn.pixabay.com/photo/2022/01/01/16/29/antelope-6908215_1280.jpg",
        name : "Ananya Desai",
        designation : "Machine Learning Researcher at IIT Bombay",
        review : "The depth and clarity of the course content are outstanding. I especially appreciated the real-time feedback and detailed explanations of complex ML concepts. It’s perfect for both beginners and advanced learners."
    },

    {
        imgSrc : "https://cdn.pixabay.com/photo/2025/01/01/14/48/bird-9303900_1280.jpg",
        name : "Karan Patel",
        designation : "Product Manager at Zomato",
        review : "I loved how seamless the dashboard was for tracking metrics. The integration with other services made our workflow much more efficient. The support team was also very responsive and helpful."
    },

    {
        imgSrc : "https://cdn.pixabay.com/photo/2025/04/03/04/41/ai-generated-9510467_1280.jpg",
        name : "Meera Iyer",
        designation : "Professor of Computer Science at NIT Trichy",
        review : "This platform is a brilliant educational tool. I use it to supplement my lectures, and the students have responded positively to its interactive nature and the quality of content provided."
    }
];

const img = document.getElementById('prof-img');
const userName = document.getElementById('name');
const dsg = document.getElementById('designation');
const review = document.getElementById('review');

function userProfile(pf){
    img.src = pf.imgSrc;
    userName.innerText = pf.name;
    dsg.innerText = pf.designation;
    review.innerText = pf.review;
}

document.addEventListener('DOMContentLoaded', () => {
    let idx = 0;
    userProfile(reviews[idx]);

    setInterval(() => {
        idx = (idx + 1) % reviews.length;
        userProfile(reviews[idx]);
    }, 3000)
})

