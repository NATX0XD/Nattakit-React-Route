import logoTCT from "../../images/logo/LOGO-TCT.jpeg";
import logoKMUTNB from "../../images/logo/LOGO-KMUTNB.png";

const ProfileData = {
    // Basic Info for Fallback or other uses
    personalInfo: {
        fullName: "Mr. Nattakit Jinakul",
        nickname: "Nat",
        age: 22,
        dateOfBirth: "August 9, 2004",
        nationality: "Thai",
        religion: "Buddhism",
        address: "Bangkok, Thailand"
    },

    contact: {
        email: "s6802041510325@kmutnb.email.ac.th",
        phone: "+66 123 456 789",
        line: "@nattakit"
    },

    education: [
        {
            degree: "Bachelor's Degree",
            major: "Computer Education",
            faculty: "Faculty of Technical Education",
            school: "King Mongkut's University of Technology North Bangkok",
            year: "2024 - Present",
            gpa: "3.85",
            logo: logoKMUTNB,
            url: "https://www.kmutnb.ac.th/",
            icon: "fa-solid fa-university"
        },
        {
            degree: "High Vocational Certificate",
            major: "Digital Business Technology",
            faculty: "Mobile Application for Business",
            school: "Thonburi Commercial College",
            year: "2023 - 2025",
            gpa: "3.98",
            logo: logoTCT,
            url: "https://www.panitthon.ac.th",
            icon: "fa-solid fa-school"
        },
        {
            degree: "Vocational Certificate",
            major: "Business Computer",
            faculty: "Business Computer",
            school: "Thonburi Commercial College",
            year: "2020 - 2023",
            gpa: "3.96",
            logo: logoTCT,
            url: "https://www.panitthon.ac.th",
            icon: "fa-solid fa-school"
        }

    ],

    internships: [
        {
            key: "Intership01",
            company: "Nitirat Law & Collection Co., Ltd.",
            title: "Frontend Developer",
            years: "September - February",
            detail: "Position: Frontend Developer\n- Developed and maintained user interfaces.\n- Collaborated with backend team.",
            role: "Frontend Developer",
            image: "https://via.placeholder.com/150?text=Nitirat",
        },
        {
            key: "Intership02",
            company: "Bangphai Hospital",
            title: "IT Support",
            years: "May - September",
            detail: "Position: IT Support\n- Provided technical support to hospital staff.\n- Maintained hardware and software systems.",
            role: "IT Support",
            image: "https://via.placeholder.com/150?text=Bangphai",
        }
    ],

    activities: [
        {
            title: "Full Stack Development",
            description: "Passionate about both Frontend and Backend development, utilizing technologies like React, Next.js, and Node.js.",
            date: "Current",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            tags: ["Coding", "Full Stack", "Dev"],
            link: "https://github.com/NATX0XD"
        },
        {
            title: "Formula 1 Enthusiast",
            description: "A big fan of Formula 1 racing, following the engineering marvels and strategic depth of the sport.",
            date: "Hobby",
            image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            tags: ["F1", "Racing", "Speed"],
            link: "https://www.formula1.com/"
        },
        {
            title: "Food & Cuisine",
            description: "Love exploring new cuisines, tasting different dishes, and enjoying food culture.",
            date: "Lifestyle",
            image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            tags: ["Food", "Eating", "Tasting"],
            link: "https://food.trueid.net/detail/M6oyloE4klNB"
        }
    ]
}

export default ProfileData
