"use client"
import { useEffect, useState, useCallback } from 'react';


export const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

export default function GoToTop() {
    const [scrollPercentage, setScrollPercentage] = useState(0);

    const toggleVisibility = useCallback(() => {
        const scroll = window.scrollY || window.scrollTop || document.documentElement.scrollTop;
        const maxHeight = Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.offsetHeight,
            document.body.clientHeight,
            document.documentElement.clientHeight
        );
        const windowHeight = Math.max(
            document.documentElement.clientHeight,
            window.innerHeight || 0
        )
        setScrollPercentage(Math.min(((scroll * 100) / (maxHeight - windowHeight)), 100))
    }, [scrollPercentage]);

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility, { passive: true });
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const maxStroke = 150.818
    const strokeDashoffset = Math.abs(((scrollPercentage * maxStroke) / 100) - maxStroke)
    return (
        <button
            onClick={scrollToTop}
            className={`fixed m-auto justify-center items-center overflow-hidden transition-all-height-delay duration-500 right-5 ${scrollPercentage >= 10 ? "bottom-5  opacity-100 z-[400] h-10 w-10 visible text-center bg-slate-950 p-0 m-0  text-white rounded-full shadow-lg hover:bg-gray-300 " : "h-6 z-[-2] w-6 invisible bottom-0 opacity-0"} h-[52px] w-[52px]  `}
        >
            <div className='absolute top-0 left-0'>
                <svg width="52" height="52" viewBox="0 0 52 52">
                    <path d="M26,2 a24,24 0 0,1 0,48 a24,24 0 0,1 0,-48" style={{
                        strokeWidth: 2,
                        "fill": "none",
                        stroke: "white",
                        transition: "stroke-dashoffset 1ms linear",
                        strokeDasharray: maxStroke,
                        strokeDashoffset: strokeDashoffset,
                        willChange: "stroke-dashoffset"
                    }}></path>
                </svg>
            </div>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="w-full  h-full text-white [fill=white]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <g id="Circle_Chev_Up"><g>
                    <path d="M11.65,10.15a.492.492,0,0,1,.7,0l3,3a.495.495,0,0,1-.7.7L12,11.21,9.35,13.85a.495.495,0,0,1-.7-.7Z"></path>
                </g></g>
            </svg>
        </button>
    );
}