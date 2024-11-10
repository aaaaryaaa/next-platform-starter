import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s | Netlify',
        default: 'Netlify Starter'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="lofi">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
                <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    color: #333;
                    padding: 20px;
                    margin: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                }
                .container {
                    max-width: 600px;
                    background-color: #ffffff;
                    padding: 30px;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    text-align: center;
                }
                h1 {
                    color: #2c3e50;
                }
                p {
                    line-height: 1.6;
                    font-size: 16px;
                }
                .highlight {
                    color: #e74c3c;
                    font-weight: bold;
                }
                .emoji {
                    font-size: 18px;
                }
            </style>
            </head>
            <body className="antialiased text-white bg-blue-900">
                <div className="flex flex-col min-h-screen px-6 bg-grid-pattern sm:px-12">
                    <div className="flex flex-col w-full max-w-5xl mx-auto grow">
                        <Header />
                        {/*<div className="grow">{children}</div>*/}
                        
                        <body>
                            <div class="container">
                                <h1>Hello, Everyone! <span class="emoji">🌟</span></h1>
                                <p>I'm <span class="highlight">Aarya R</span>, Head of Web Development at ISTE Manipal!</p>
                                <p>I’m here to guide the development of our primary platform, the ISTE website, and to work with all of you on exciting projects that push boundaries. I'm always eager to discuss new project ideas, startups, or anything innovative in tech.</p>
                                <p>I'm a 3rd-year CSE student at MIT, so feel free to reach out if you have any general questions or need help with anything CSE-related.</p>
                                <p class="emoji">Looking forward to an incredible journey with all of you! Let’s make some magic happen! 🚀</p>
                            </div>
                        </body>
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}
