import React from 'react'
import HeroSection from '../components/HeroSection'
import { StatsData } from '../configurations/data/StatsData'

const Home = () => {
    return (
        <main>
            <HeroSection />

            {/* Stats Section */}
            <section className="py-5 bg-light position-relative overflow-hidden">
                <div className="container position-relative z-1">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="card border-0 shadow-lg rounded-5 overflow-hidden bg-white">
                                <div className="card-body p-0">
                                    <div className="row g-0">
                                        {StatsData.map((stat, index) => (
                                            <div key={index} className="col-md-4 position-relative">
                                                <div className={`p-5 text-center transition-all hover-bg-light h-100 ${index !== StatsData.length - 1 ? 'border-end-md' : ''}`}>
                                                    <div className={`d-inline-flex align-items-center justify-content-center width-80 height-80 rounded-circle bg-${stat.color} bg-opacity-10 text-${stat.color} mb-4 shadow-sm transition-transform hover-scale`}>
                                                        <i className={`${stat.icon} fs-3`}></i>
                                                    </div>
                                                    <h3 className="display-4 fw-bold text-dark mb-2 tracking-tight">{stat.value}</h3>
                                                    <p className="text-secondary text-uppercase fw-bold letter-spacing-2 small mb-0">{stat.label}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home