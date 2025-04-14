import React, { useState } from 'react';

const Carousel = () => {
    const doctors = [
        {
            name: "Dr. Chandrika K",
            experience: "24 Years Experience",
            specialization: "Internal Medicine | MBBS, MD, PGDMLS",
            description: "Director of Clinical Services at HCG Group\nVP Clinical Services at Columbia Asia, India\nPhysician at Brockton Hospital, USA",
            bgColor: '#f8d7da'
        },
        {
            name: "Dr. Binita P",
            experience: "20 Years Experience",
            specialization: "General Surgery (MBBS, MS), Family Medicine (M. Med)",
            description: "Senior Consultant & Head Clinical Services at Doctome\nSenior Resident Surgeon at Max Super Specialty Hospital\nResident General Surgeon at Safdarjung Hospital",
            bgColor: '#d1ecf1'
        },
        {
            name: "Dr. Mohan",
            experience: "13 Years Experience",
            specialization: "MBBS, Fellowship in Critical Care",
            description: "Medical Consultant, New Delhi\nMedical Director at Healthcare\nConsultant at Acuri and Tata P",
            bgColor: '#fff3cd'
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? doctors.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === doctors.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', backgroundColor: '#000', borderRadius: '10px' }}>
            <h2 style={{ textAlign: 'center', color: '#fff', fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
                India's top medical professionals are now your family doctors
            </h2>
            <div style={{ position: 'relative', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ display: 'flex', transition: 'transform 0.5s ease-in-out', transform: `translateX(-${currentIndex * 100}%)` }}>
                    {doctors.map((doctor, index) => (
                        <div key={index} style={{
                            minWidth: '300px',
                            padding: '20px',
                            borderRadius: '8px',
                            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                            backgroundColor: doctor.bgColor,
                            textAlign: 'center',
                            margin: '0 10px',
                            color: '#000',
                        }}>
                            <h3 style={{ fontSize: '20px', fontWeight: '600' }}>{doctor.name}</h3>
                            <p style={{ fontSize: '14px', margin: '5px 0' }}>{doctor.experience}</p>
                            <p style={{ fontSize: '14px', margin: '5px 0' }}>{doctor.specialization}</p>
                            <p style={{ fontSize: '14px', margin: '5px 0' }}>{doctor.description}</p>
                        </div>
                    ))}
                </div>
                <button onClick={handlePrev} style={buttonStyle}>←</button>
                <button onClick={handleNext} style={buttonStyle}>→</button>
            </div>
        </div>
    );
};

const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    position: 'absolute',
    cursor: 'pointer'
};

export default Carousel;