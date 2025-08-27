import { SiAdobephotoshop, SiAdobeillustrator  } from 'react-icons/si';

import React from 'react';

const AboutProgramList = () => {
  return (
    <>
        <h2 className="text-4xl font-bold mt-12 mb-4 fade-up-scroll">
            Tools & Technologies I Use
        </h2>
        <ul className="list-none space-y-6">
        <li>
            <strong className="block text-xl mb-4">Design & Graphics</strong>
            <ul className="pl-4 space-y-6">
            <li className="flex items-center gap-3">
                <img className="w-6 h-6 object-contain " src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1200px-Adobe_Photoshop_CC_icon.svg.png" alt="icon" />
                Adobe Photoshop – Graphic editing and photo manipulation
            </li>
            <li className="flex items-center gap-3">
                <img className="w-6 h-6 object-contain " src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/800px-Adobe_Illustrator_CC_icon.svg.png" alt="icon" />
                Adobe Illustrator – Vector-based illustration and design
            </li>
            <li className="flex items-center gap-3">
                <img className="w-6 h-6 object-contain " src="https://images.squarespace-cdn.com/content/v1/5fb0aea913eba3050d739796/bb5a5288-51fb-4b0c-ab03-b4479c6f3a47/sb_icon.png" alt="icon" />
                Autodesk Sketchbook – Digital drawing and painting tool
            </li>
            <li className="flex items-center gap-3">
                <img className="w-6 h-6 object-contain " src="https://play-lh.googleusercontent.com/3aWGqSf3T_p3F6wc8FFvcZcnjWlxpZdNaqFVEvPwQ1gTOPkVoZwq6cYvfK9eCkwCXbRY" alt="icon" />
                Canva – Online graphic design platform
            </li>
            <li className="flex items-center gap-3">
                <img className="w-6 h-6 object-contain " src="https://avatars.githubusercontent.com/u/5155369?s=200&v=4" alt="icon" />
                Figma – Collaborative UI/UX design tool
            </li>
            <li className="flex items-center gap-3">
                <img className="w-6 h-6 object-contain " src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Calligrakrita-base.svg/960px-Calligrakrita-base.svg.png" alt="icon" />
                Krita – Free and open-source digital painting tool
            </li>
            <li className="flex items-center gap-3">
                <img className="w-6 h-6 object-contain " src="https://www.gimp.org/images/frontpage/wilber-big.png" alt="icon" />
                GIMP – GNU image editor for raster graphics
            </li>
            </ul>
        </li>
        <li>
            <strong className="block mb-4 text-xl">Development Tools</strong>
            <ul className="pl-4 space-y-6">
            <li className="flex items-center gap-3">
                <img className="w-6 h-6 object-contain " src="https://upload.wikimedia.org/wikipedia/commons/9/92/Bootstrap_Studio_Logo.png" alt="icon" />
                Bootstrap Studio – Drag-and-drop website builder
            </li>
            <li className="flex items-center gap-3">
                <img className="w-6 h-6 object-contain " src="https://static.vecteezy.com/system/resources/previews/021/059/825/non_2x/chatgpt-logo-chat-gpt-icon-on-green-background-free-vector.jpg" alt="icon" />
                ChatGPT – AI assistant for coding, writing, and learning
            </li>
            <li className="flex items-center gap-3">
                <img className="w-6 h-6 object-contain " src="https://images.seeklogo.com/logo-png/61/2/deepseek-ai-icon-logo-png_seeklogo-611473.png" alt="icon" />
                Deepseek – AI tool for code-related queries and research
            </li>
            <li className="flex items-center gap-3">
                <img className="w-6 h-6 object-contain " src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="icon" />
                Git – Version control system
            </li>
            <li className="flex items-center gap-3">
                <img className="w-6 h-6 object-contain " src="https://images.seeklogo.com/logo-png/30/2/github-logo-png_seeklogo-304612.png" alt="icon" />
                GitHub – Code hosting and collaboration platform
            </li>
            <li className="flex items-center gap-3">
                <img className="w-6 h-6 object-contain " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSITHn_TgjDyhdWvePNw0mveDrTUr00GLfv_Q&s" alt="MongoDB icon" />
                MongoDB Community Server - NoSQL database
            </li>
            <li className="flex items-center gap-3">
                <img className="w-6 h-6 object-contain " src="https://code.visualstudio.com/assets/updates/1_35/logo-stable.png" alt="icon" />
                VS Code – Source code editor by Microsoft
            </li>
            <li className="flex items-center gap-3">
                <img className="w-6 h-6 object-contain " src="https://cdn2.iconfinder.com/data/icons/pack1-baco-flurry-icons-style/512/XAMPP.png" alt="icon" />
                XAMPP – Local web server stack (Apache, MySQL, PHP)
            </li>
            </ul>
        </li>
        <li>
            <strong className="block mb-4 text-xl">Web Technologies</strong>
            <ul className="pl-4 space-y-6">
            <li className="flex items-center gap-3">
                <img className="w-6 h-6 object-contain " src="https://www.markusantonwolf.com/topics/alpine-js/alpinejs-logo.svg" alt="icon" />
                Alpine.js – Lightweight JavaScript framework
            </li>
            <li className="flex items-center gap-3">
                <img className="w-6 h-6 object-contain " src="https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg" alt="icon" />
                C – Low-level programming language
            </li>
            <li className="flex items-center gap-3">
                <img className="w-6 h-6 object-contain " src="https://cdn-icons-png.flaticon.com/256/6132/6132222.png" alt="icon" />
                C++ – Object-oriented programming language
            </li>
            <li className="flex items-center gap-3">
                <img className="w-6 h-6 object-contain " src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg" alt="icon" />
                C# – Microsoft’s language for .NET development
            </li>
            <li className="flex items-center gap-3">
                <img className="w-6 h-6 object-contain " src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png" alt="icon" />
                CSS – Styling language for web pages
            </li>
            <li className="flex items-center gap-3">
                <img className="w-6 h-6 object-contain " src="https://img.daisyui.com/images/daisyui/mark-static.svg" alt="icon" />
                daisyUI – TailwindCSS component library
            </li>
            <li className="flex items-center gap-3">
                <img className="w-6 h-6 object-contain " src="https://spng.pngfind.com/pngs/s/136-1363736_express-js-icon-png-transparent-png.png" alt="Express.js icon" />
                Express.js - Backend web framework
            </li>
            <li className="flex items-center gap-3">
                <img className="w-6 h-6 object-contain " src="https://edvantou.com/wp-content/uploads/2025/04/0x0.png" alt="icon" />
                Hostinger – Web hosting service provider
            </li>
            <li className="flex items-center gap-3">
                <img className="w-6 h-6 object-contain " src="https://cdn-icons-png.flaticon.com/512/5968/5968267.png" alt="icon" />
                HTML – Markup language for web content
            </li>
            <li className="flex items-center gap-3">
                <img className="w-6 h-6 object-contain " src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="icon" />
                JavaScript – Core scripting language of the web
            </li>
            <li className="flex items-center gap-3">
                <img className="w-6 h-6 object-contain " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR-LhSen1K-3xSIN8e4c4FgarQ-fheIgbzI8RZn4VfxVJ_q6ChRmQihya9xKhRsI0fNAk" alt="icon" />
                Laravel – PHP framework for web applications
            </li>
            <li className="flex items-center gap-3">
                <img className="w-6 h-6 object-contain " src="https://www.svgrepo.com/show/354119/nodejs-icon.svg" alt="icon" />
                Node.js – JavaScript runtime for backend development
            </li>
            <li className="flex items-center gap-3">
                <img className="w-6 h-6 object-contain " src="https://cdn-icons-png.flaticon.com/512/919/919830.png" alt="icon" />
                PHP – Server-side scripting language
            </li>
            <li className="flex items-center gap-3">
                <img className="w-6 h-6 object-contain " src="https://images.ctfassets.net/zojzzdop0fzx/4jWojoqYZoayRvNy8av2jr/e86d85fec34cc1cb4b7a96787b343759/react-icon.svg?fm=webp&w=3840&q=75" alt="icon" />
                React – JavaScript library for building UIs
            </li>
            <li className="flex items-center gap-3">
                <img className="w-6 h-6 object-contain " src="https://pbs.twimg.com/profile_images/1735429515541938176/zOO1N7Su_400x400.jpg" alt="icon" />
                Render – Cloud platform for deploying web apps
            </li>
            <li className="flex items-center gap-3">
                <img className="w-6 h-6 object-contain " src="https://www.svgrepo.com/show/374118/tailwind.svg" alt="icon" />
                TailwindCSS – Utility-first CSS framework
            </li>
            <li className="flex items-center gap-3">
                <img className="w-6 h-6 object-contain " src="https://www.svgrepo.com/show/354513/vercel-icon.svg" alt="icon" />
                Vercel – Frontend hosting platform for frameworks
            </li>
            <li className="flex items-center gap-3">
                <img className="w-6 h-6 object-contain " src="https://img.icons8.com/?size=160&id=eETV3RNHVrWA&format=png" alt="icon" />
                VueJS – Progressive JavaScript framework
            </li>
            </ul>
        </li>
        <li>
            <strong className="block mb-4 text-xl">Office Software</strong>
            <ul className="pl-4 space-y-6">
            <li className="flex items-center gap-3">
                <img className="w-6 h-6 object-contain " src="https://cdn-icons-png.flaticon.com/512/5968/5968517.png" alt="icon" />
                Google Workspaces – Cloud-based office tools (Docs, Sheets, etc.)
            </li>
            <li className="flex items-center gap-3">
                <img className="w-6 h-6 object-contain " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjK11NF_w_pmnje3cgjfLjtHvCEvmyQwXndadLabUnHiOhziXHhAEq8ZVImQXTF9NUi0g" alt="icon" />
                LibreOffice – Free and open-source office suite
            </li>
            <li className="flex items-center gap-3">
                <img className="w-6 h-6 object-contain " src="https://images.icon-icons.com/1156/PNG/512/1486565573-microsoft-office_81557.png" alt="icon" />
                Microsoft Office – Industry-standard office tools (Word, Excel, etc.)
            </li>
            </ul>
        </li>
        <li>
            <strong className="block mb-4 text-xl">Other Tools</strong>
            <ul className="pl-4 space-y-6">
                <li className="flex items-center gap-3">
                    <img className="w-6 h-6 object-contain " src="https://cdn0.iconfinder.com/data/icons/flat-round-system/512/archlinux-512.png" alt="icon" />
                    Arch Linux – A popular, user-friendly Linux distribution based on Debian.
                </li>
                <li className="flex items-center gap-3">
                    <img className="w-6 h-6 object-contain " src="https://img.icons8.com/color/512/brave-web-browser.png" alt="icon" />
                    Brave Browser – Privacy-focused web browser
                </li>
                <li className="flex items-center gap-3">
                    <img className="w-6 h-6 object-contain " src="https://cdn-icons-png.flaticon.com/512/732/732205.png" alt="icon" />
                    Chrome – Popular web browser by Google
                </li>
                <li className="flex items-center gap-3">
                    <img className="w-6 h-6 object-contain " src="https://www.svgrepo.com/show/353655/discord-icon.svg" alt="icon" />
                    Discord – Chat platform for communities and teams
                </li>
                <li className="flex items-center gap-3">
                    <img className="w-6 h-6 object-contain " src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Firefox_logo%2C_2019.svg" alt="icon" />
                    Firefox – Open-source web browser by Mozilla
                </li>
                <li className="flex items-center gap-3">
                    <img className="w-6 h-6 object-contain " src="https://www.image-line.com/innovaeditor/assets/FLStudio20_MasterIcon.png" alt="icon" />
                    FL Studio – Digital audio workstation for music production
                </li>
                <li className="flex items-center gap-3">
                    <img className="w-6 h-6 object-contain " src="https://upload.wikimedia.org/wikipedia/commons/2/27/I3_window_manager_logo.svg" alt="icon" />
                    i3wm – A lightweight, tiling window manager for Linux/BSD.
                </li>
                <li className="flex items-center gap-3">
                    <img className="w-6 h-6 object-contain " src="https://images.seeklogo.com/logo-png/8/3/linux-tux-logo-png_seeklogo-84509.png" alt="icon" />
                    Linux – A free, open-source operating system kernel
                </li>
                <li className="flex items-center gap-3">
                    <img className="w-6 h-6 object-contain " src="https://cdn.prod.website-files.com/657639ebfb91510f45654149/67b4c29681d1fb959e3bbba9_logo-512.png" alt="icon" />
                    Messenger – Facebook's messaging app
                </li>
                <li className="flex items-center gap-3">
                    <img className="w-6 h-6 object-contain " src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/OBS_Studio_Logo.svg/250px-OBS_Studio_Logo.svg.png" alt="icon" />
                    OBS Studio – Screen recording and streaming software
                </li>
                <li className="flex items-center gap-3">
                    <img className="w-6 h-6 object-contain " src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Olive_Video_Editor_Logo.png" alt="icon" />
                    Olive – Free and open-source video editor
                </li>
                <li className="flex items-center gap-3">
                    <img className="w-6 h-6 object-contain " src="https://w7.pngwing.com/pngs/503/133/png-transparent-ubuntu-plain-logo-icon-thumbnail.png" alt="icon" />
                    Ubuntu – A popular, user-friendly Linux distribution based on Debian.
                </li>
                <li className="flex items-center gap-3">
                    <img className="w-6 h-6 object-contain " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFYrT7QBvmjKVqHWpnUYJPx9P8CUsr0qi9mg&s" alt="icon" />
                    Zoom – Video conferencing and meeting platform
                </li>
            </ul>
        </li>
        </ul>
    </>
  );
};

export default AboutProgramList;