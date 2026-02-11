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
            title: "Web Development Workshop",
            description: "Participated in a comprehensive workshop on modern web technologies including React and Node.js.",
            date: "Jan 2024",
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            tags: ["React", "Workshop"]
        },
        {
            title: "Hackathon 2023",
            description: "Collaborated with a team to build an innovative solution for local businesses within 48 hours.",
            date: "Nov 2023",
            image: "https://images.unsplash.com/photo-1504384308090-c54be3855833?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            tags: ["Hackathon", "Teamwork"]
        },
        {
            title: "Community Service",
            description: "Volunteered for teaching basic computer skills to children at a local community center.",
            date: "Aug 2023",
            image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            tags: ["Volunteer", "Teaching"]
        }
    ]
}

export default ProfileData
