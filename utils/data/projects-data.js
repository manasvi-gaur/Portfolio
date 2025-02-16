import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    // {
    //     id: 1,
    //     name: 'Air Canvas',
    //     description: "Produced a real-time drawing app that has a 95% accuracy rate. The recognition of finger gestures can be accurately detected using OpenCV, Mediapipe, and Python. Implemented advanced algorithms to ensure a smooth and responsive drawing experience, enhancing user interaction and precision.",
    //     tools: ['Python', 'Mediapipe', 'OpenCV', ],
    //     role: 'Developer',
    //     code: '',
    //     demo: '',
    //     image: ayla,
    // },
    {
        id: 2,
        name: 'Eccomerce Website "BlissBuy"',
        description: 'Built a high-performance e-commerce platform using Redux Toolkit, optimizing API calls by 35%. The Node.js and MongoDB backend improved query execution by 40%, while Razorpay integration ensured a 98% transaction success rate. Implementing JWT authentication secured access, and Dockerization reduced deployment time by 50%.',
        tools: ['ReactJS', 'Tailwind CSS', "Javascript", "RazorPay", "MongoDB","ExpressJS","NodeJS"],
        role: 'Full Stack Developer',
        code: 'https://github.com/manasvi-gaur/blissbuy',
        demo: 'https://blissbuy.vercel.app/',
        image: crefin,
    },
    // {
    //     id: 3,
    //     name: 'AI Powered "Sea Green"',
    //     description: 'Spearheaded the development of a web application for detecting marine plastic. Achieved real-time detection and statistical analysis using YOLOv8, Django, and React. The trained YOLOv8 model gained 90% detection accuracy.',
    //     tools: ['React', 'Bootstrap', 'Django,', 'YOLOv8 model', 'Webcam integrated', ],
    //     code: '',
    //     role: 'Frontend Developer',
    //     demo: '',
    //     image: realEstate,
    // },
    {
        id: 4,
        name: 'Social Media App "SKET"',
        description: "Developed a social media app for Android using Java and XML, reducing message latency to under 200ms with Firebase Firestore for real-time chat. Optimizing UI/UX with RecyclerView and ViewPager improved navigation speed by 30%. Implementing CRUD operations and Firebase Storage enhanced content management and boosted image retrieval speed by 40%.",
        tools: ['Android Studio', 'Java', 'XML', 'Firebase'],
        code: 'https://github.com/manasvi-gaur/SKET',
        demo: 'https://github.com/manasvi-gaur/SKET/releases/tag/v1.0.0-alpha',
        image: travel,
        role: 'Android Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },