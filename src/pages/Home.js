import React from 'react'
import HeroSection from '../components/HeroSection'
import { StatsData } from '../configurations/data/StatsData'

const Home = () => {
    return (
        <main>
            <HeroSection />

            {/* Stats Section */}
            <section className="py-5 bg-white">
                <div className="container">
                    <div className="row g-4 justify-content-center">
                        {StatsData.map((stat, index) => (
                            <div key={index} className="col-md-4">
                                <div className="p-4 rounded-4 bg-light text-center hover-translate-up transition-all h-100 border border-light shadow-sm">
                                    <h3 className="display-4 fw-bold text-primary mb-0">{stat.value}</h3>
                                    <p className="text-muted mb-0 fw-medium letter-spacing-1">{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home