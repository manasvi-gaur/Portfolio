import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Air Canvas',
        description: "Produced a real-time drawing app that has a 95% accuracy rate. The recognition of finger gestures can be accurately detected using OpenCV, Mediapipe, and Python. Implemented advanced algorithms to ensure a smooth and responsive drawing experience, enhancing user interaction and precision.",
        tools: ['Python', 'Mediapipe', 'OpenCV', ],
        role: 'Developer',
        code: '',
        demo: '',
        image: ayla,
    },
    {
        id: 2,
        name: 'Eccomerce Website "BlissBuy"',
        description: 'Architected “BlissBuy" e-commerce site with price optimization AI, responsive web design.Achieved client conversion rates by 25%, enhancing the overall user experience. ',
        tools: ['ReactJS', 'Tailwind CSS', "Javascript", "RazorPay", "MongoDB",],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
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
        description: "Implemented inclusive communication features can maximize user engagement by 15%, including chat, call, and collaboration, using Android Studio, Java, XML, and Firebase.",
        tools: ['Android Studio', 'Java', 'XML', 'Firebase'],
        code: '',
        demo: '',
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