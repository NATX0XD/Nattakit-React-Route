import React from 'react'

import ProfileData from '../configurations/data/ProfileData'

import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import EducationSection from '../components/EducationSection'
import ContactSection from '../components/ContactSection'

const Home = () => {
    const {
        name,
        title,
        profileImage,
        bio,
        personalInfo,
        contact,
        education,
        socialLinks
    } = ProfileData

    return (
        <>
            <HeroSection
                name={name}
                title={title}
                profileImage={profileImage}
                bio={bio}
            />

            <AboutSection
                personalInfo={personalInfo}
                contact={contact}
            />

            <EducationSection education={education} />

            <ContactSection
                contact={contact}
                socialLinks={socialLinks}
            />
        </>
    )
}

export default Home