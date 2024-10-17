import React from 'react';
import CommentSection from './CommentSection';


const HealthyHabitsBlogPost = () => {
    return (
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Shaping Tomorrow's Health: The Impact of Childhood
                Habits</h1>
            <div className="flex items-center text-gray-500 text-sm mb-6">
                <img src="/path-to-paola-photo.jpg" alt="Paola Michelle" className="w-10 h-10 rounded-full mr-3"/>
                <span className="mr-3">By Paola Michelle</span>
                <span>|</span>
                <time className="ml-3" dateTime="2024-04-15">April 15, 2024</time>
            </div>
            <div className="prose prose-lg text-gray-500 mb-8">
                <p>In the journey of life, the habits we form in childhood often become the cornerstones of our adult
                    health. Today, we're diving deep into the crucial role parents play in shaping their children's
                    future well-being, inspired by a powerful video that serves as both a wake-up call and a guide for
                    positive change.</p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">The Ripple Effect of Childhood
                    Choices</h2>

                <p>Meet Jim—the character in the "Rewind the Future" video below. His life flashes before our eyes,
                    revealing a stark reality: the habits formed in youth can lead to significant health challenges in
                    adulthood. This compelling narrative urges us to consider how the choices we make for our children
                    today will shape their tomorrow.</p>

                <div className="my-8 relative" style={{paddingBottom: '56.25%', height: '480px'}}>
                    <iframe
                        src="https://www.youtube.com/embed/xUmp67YDlHY"
                        title="Rewind the Future"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full"
                        style={{ minHeight: '480px' }}
                    ></iframe>
                </div>

                <p>The video's message is clear and powerful: "The choices you teach your child today become the habits
                    they take into their adulthood." This simple yet profound statement encapsulates the essence of
                    preventive health and the long-term impact of early lifestyle choices.</p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Building a Foundation for Lifelong
                    Health</h2>

                <p>As parents, guardians, and role models, we have the opportunity—and responsibility—to instill healthy
                    habits in the younger generation. Here are some key areas to focus on:</p>

                <ul className="list-disc pl-6 mb-6">
                    <li><strong>Nutritious Eating:</strong> Introduce a variety of fruits, vegetables, and whole grains
                        early on. Make healthy eating a fun and normal part of daily life.
                    </li>
                    <li><strong>Active Lifestyle:</strong> Encourage regular physical activity through play, sports, or
                        family outings. Limit screen time and promote outdoor activities.
                    </li>
                    <li><strong>Emotional Well-being:</strong> Teach stress-management techniques and foster open
                        communication about feelings and mental health.
                    </li>
                    <li><strong>Sleep Hygiene:</strong> Establish consistent sleep routines to ensure adequate rest,
                        crucial for both physical and mental development.
                    </li>
                    <li><strong>Positive Role Modeling:</strong> Children often mimic the behaviors they see. Be mindful
                        of your own habits and strive to set a good example.
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Small Changes, Big Impact</h2>

                <p>Remember, creating healthy habits doesn't require drastic lifestyle overhauls. Small, consistent
                    changes can lead to significant long-term benefits. Start with one area, like swapping sugary drinks
                    for water or having a daily family walk after dinner. Gradually introduce more positive habits as
                    these become routine.</p>

                <p>By taking steps today to promote healthy choices, we're not just affecting immediate well-being—we're
                    setting the stage for a healthier, happier future for the next generation. Let's commit to being the
                    positive change we want to see, one habit at a time.</p>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Take Action Today</h3>
                <p className="text-blue-700">What's one healthy habit you can start or improve with your family this
                    week? Share your ideas and experiences in the comments below, and let's inspire each other to create
                    a healthier future for our children!</p>
            </div>
            <CommentSection />
        </article>
    );
};

export default HealthyHabitsBlogPost;