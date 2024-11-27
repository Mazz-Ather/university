// components/Marquee.jsx
'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const testimonials = [
    {
        id: 1,
        name: "John Smith",
        role: "CEO, Tech Solutions",
        image: "/brand1.jpg",
        rating: 5,
        text: "Outstanding service! Their team delivered beyond our expectations. Highly recommended for any business looking to scale."
    },
    {
        id: 2,
        name: "Sarah Johnson",
        role: "Marketing Director",
        image: "/testimonials/person2.jpg",
        rating: 5,
        text: "The attention to detail and creativity they brought to our project was exceptional. A game-changer for our business."
    },
    {
        id: 3,
        name: "Michael Chen",
        role: "Startup Founder",
        image: "/testimonials/person3.jpg",
        rating: 4,
        text: "Professional, responsive, and innovative. They transformed our vision into reality."
    },
    {
        id: 4,
        name: "Emma Williams",
        role: "Product Manager",
        image: "/testimonials/person4.jpg",
        rating: 5,
        text: "Best agency we've worked with! Their strategic approach and execution are unmatched."
    },
    {
        id: 5,
        name: "David Brown",
        role: "CTO, Innovation Labs",
        image: "/testimonials/person5.jpg",
        rating: 4,
        text: "Exceptional work ethics and delivered outstanding results. Would definitely work with them again."
    },
    {
        id: 6,
        name: "Lisa Anderson",
        role: "E-commerce Director",
        image: "/testimonials/person6.jpg",
        rating: 5,
        text: "They helped us achieve record-breaking growth. Their expertise is truly remarkable."
    },
    {
        id: 7,
        name: "Robert Martinez",
        role: "Digital Strategist",
        image: "/testimonials/person7.jpg",
        rating: 5,
        text: "Innovative solutions and excellent communication throughout the project."
    },
    {
        id: 8,
        name: "Jennifer Lee",
        role: "Brand Manager",
        image: "/testimonials/person8.jpg",
        rating: 4,
        text: "Their creative approach and technical expertise made our project a huge success."
    },
    {
        id: 9,
        name: "Tom Wilson",
        role: "Operations Head",
        image: "/testimonials/person9.jpg",
        rating: 5,
        text: "Exceptional service quality and professional team. Highly recommended!"
    },
    {
        id: 10,
        name: "Rachel Green",
        role: "Creative Director",
        image: "/testimonials/person10.jpg",
        rating: 5,
        text: "They exceeded our expectations in every way. A truly outstanding agency."
    }
];

const Marquee = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="marquee-container !bg-black/30">
            <div className={`marquee-wrapper ${isHovered ? 'paused' : ''}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <div className="marquee-content">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="testimonial-card">
                            <div className="image-container">
                                <Image
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    width={80}
                                    height={80}
                                    className="profile-image"
                                />
                            </div>
                            <div className="rating">
                                {[...Array(5)].map((_, index) => (
                                    <span key={index} className={`star ${index < testimonial.rating ? 'filled' : ''}`}>
                                        ★
                                    </span>
                                ))}
                            </div>
                            <p className="testimonial-text">{testimonial.text}</p>
                            <h3 className="name">{testimonial.name}</h3>
                            <p className="role">{testimonial.role}</p>
                        </div>
                    ))}
                </div>
                <div className="marquee-content" aria-hidden="true">
                    {testimonials.map((testimonial) => (
                        <div key={`duplicate-${testimonial.id}`} className="testimonial-card">
                            <div className="image-container">
                                <Image
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    width={80}
                                    height={80}
                                    className="profile-image"
                                />
                            </div>
                            <div className="rating">
                                {[...Array(5)].map((_, index) => (
                                    <span key={index} className={`star ${index < testimonial.rating ? 'filled' : ''}`}>
                                        ★
                                    </span>
                                ))}
                            </div>
                            <p className="testimonial-text">{testimonial.text}</p>
                            <h3 className="name">{testimonial.name}</h3>
                            <p className="role">{testimonial.role}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/* <style jsx>{`
                .marquee-container {
                    width: 100%;
                    overflow: hidden;
                    background: #f8f9fa;
                    padding: 2rem 0;
                }

                .marquee-wrapper {
                    display: flex;
                    width: fit-content;
                    animation: scroll 60s linear infinite;
                }

                .marquee-wrapper.paused {
                    animation-play-state: paused;
                }

                .marquee-content {
                    display: flex;
                    gap: 2rem;
                    padding: 1rem;
                }

                .testimonial-card {
                    background: white;
                    border-radius: 10px;
                    padding: 1.5rem;
                    width: 300px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }

                .testimonial-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
                }

                .image-container {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 1rem;
                }

                .profile-image {
                    border-radius: 50%;
                    object-fit: cover;
                }

                .rating {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 1rem;
                }

                .star {
                    color: #ddd;
                    font-size: 1.2rem;
                    margin: 0 2px;
                }

                .star.filled {
                    color: #ffd700;
                }

                .testimonial-text {
                    font-size: 0.9rem;
                    line-height: 1.6;
                    color: #666;
                    margin-bottom:
                    text-align: center;
                }

                .name {
                    font-size: 1.1rem;
                    font-weight: 600;
                    margin: 0;
                    text-align: center;
                    color: #333;
                }

                .role {
                    font-size: 0.9rem;
                    color: #666;
                    margin: 0.25rem 0 0;
                    text-align: center;
                }

                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                @media (max-width: 768px) {
                    .testimonial-card {
                        width: 250px;
                        padding: 1rem;
                    }

                    .testimonial-text {
                        font-size: 0.8rem;
                    }

                    .name {
                        font-size: 1rem;
                    }

                    .role {
                        font-size: 0.8rem;
                    }
                }
            `}</style> */}
        </div>
    );
};

export default Marquee;
