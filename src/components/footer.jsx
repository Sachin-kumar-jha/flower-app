"use client"

import React from "react"
import Image from "next/image"
import facebook from "../public/facebook.png"
import instagram from "../public/instagram.png"
import twitter from "../public/twitter.png"
import linkedin from "../public/linkedin.png"
import youtube from "../public/youtube.png"
export default function Footer(){
    return(
        <footer className="flex flex-col w-full footer space-y-10 justify-center backdrop-blur-lg bg-white/30 ...  rounded-lg[#f9fb71] mt-8">
    <div className="flex justify-center space-x-5 mt-5 ">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Image src={facebook} width={40} height={40} alt="facebook image"/>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Image  src={linkedin} width={40} height={40} alt="facebook image"/>
        </a>
        <a href="https://www.instagram.com/explore/tags/hustlewithmahesh/?hl=en" target="_blank" rel="noopener noreferrer">
            <Image  src={instagram} width={40} height={40} alt="Instagram"/>
        </a>
        <a href="https://www.youtube.com/@hustlewithmahesh" target="_blank" rel="noopener noreferrer">
            <Image  src={youtube} width={40} height={40} alt="messanger"/>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Image src={twitter} width={40} height={40} alt="twitter"/>
        </a>
    </div>
    <p className="text-center text-gray-700 font-medium">&copy; 2024 Company Ltd. All rights reservered.</p>
</footer>
)
}