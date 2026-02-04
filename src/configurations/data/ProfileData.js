// Profile Data - All personal information passed via props
import Me from "../../images/me/me1.JPG"

const ProfileData = {
    // Basic Info
    name: "Nattakit Jinakul",
    nickname: "Nat",
    title: "KMUTNB TCT35 | Web tech REACTS.JS",
    bio: "Hello! I'm a passionate student interested in Web Development and currently learning React.js",

    // Profile Image
    profileImage: Me,

    // Personal Details
    personalInfo: {
        fullName: "Mr. Nattakit Jinakul",
        nickname: "Nat",
        age: 22,
        dateOfBirth: "August 9, 2004",
        nationality: "Thai",
        religion: "Buddhism",
        address: "Bangkok, Thailand"
    },

    // Contact Info
    contact: {
        email: "s6802041510325@kmutnb.email.ac.th",
        phone: "+66 123 456 789",
        line: "@nattakit"
    },

    // Education
    education: [
        {
            degree: "Bachelor's Degree",
            major: "Faculty of Technical Education Computer Education",
            school: " King Mongkut's University of Technology North Bangkok",
            year: "2024 - Present"
        }
    ],

    // Social Links
    socialLinks: [
        { name: "Facebook", icon: "fa-brands fa-facebook", url: "https://web.facebook.com/nattakit98.nat" },
        { name: "Instagram", icon: "fa-brands fa-instagram", url: "https://www.instagram.com/nn_nostalune/" },
        { name: "GitHub", icon: "fa-brands fa-github", url: "https://github.com/NATX0XD" }
    ]
}

export default ProfileData
