import { useEffect, useRef, useState } from "react";
import Introduction from "./components/Introduction.js";
import Nav from "./components/Nav.js";
import About from "./components/About.js";
import Projects from "./components/Projects.js";
import Contact from "./components/Contact.js";
import aboutImage from "./images/about.jpeg";
import projectsImage from "./images/projects.jpg";
import contactImage from "./images/contact.jpg";



const baseURL = process.env.NODE_ENV === "development" ? "http://localhost:5000/" : "/";

const App = () => {

	const [navWidth, setNavWidth] = useState("0%");

	useEffect(()=>{

		//adding scroll listener
    	const scrollListener = () => {
      		if(navWidth === "0%") setNavWidth("100%");
    	}
    	window.addEventListener("scroll",scrollListener,{passive:true})

		// adding lazy loading
		const imgTags = document.querySelectorAll("img");
		const backgroundImages = document.querySelectorAll(".background-image");
		const imagesToObserve = [...imgTags, ...backgroundImages];

		const lazyLoadingObserver = new IntersectionObserver((entries, obs)=>{
			entries.forEach(entry =>{
				if(entry.isIntersecting){
					if(entry.target.id === "about"){
						entry.target.style.backgroundImage = `url(${aboutImage})`;

					}else if(entry.target.id === "contact"){
						entry.target.style.backgroundImage = `url(${contactImage})`;

					}else if(entry.target.id === "projects"){
						entry.target.style.backgroundImage = `url(${projectsImage})`;

					}
					else if(entry.target.tagName === "IMG"){
						entry.target.src = entry.target.getAttribute("image");
					}
					obs.unobserve(entry.target);
					
				}
			
			})
		},{
			rootMargin: "10% 0% 10% 0%",
			threshold: 0
		});

		imagesToObserve.forEach(image => lazyLoadingObserver.observe(image));

		//adding positional dependant navbar effects
		const navbuttonHoverEffect = document.querySelectorAll(".hover-effect")
		const navbarEffectsObserver = new IntersectionObserver(entries => {
	
			entries.forEach(entry =>{
				if(entry.isIntersecting){
					
					switch(entry.target.id){
						case "introduction":
							navbuttonHoverEffect[0].style.visibility = "hidden";
							break;
						case "about":
							navbuttonHoverEffect[0].style.visibility = "visible";
							navbuttonHoverEffect[1].style.visibility = "hidden";
							break;
						case "projects":
							navbuttonHoverEffect[0].style.visibility = "hidden";
							navbuttonHoverEffect[1].style.visibility = "visible";
							navbuttonHoverEffect[2].style.visibility = "hidden";
							break;
						case "contact":
							navbuttonHoverEffect[1].style.visibility = "hidden";
							navbuttonHoverEffect[2].style.visibility = "visible";	

					}

				}
			
					
			})
			
			
		}, {threshold: 0.55});

		backgroundImages.forEach(image => navbarEffectsObserver.observe(image));


		// function to run when unmounting
    	return ()=>{
      		window.removeEventListener("scroll",scrollListener,{passive:true});

			  lazyLoadingObserver.disconnect();
			  navbarEffectsObserver.disconnect();
    	}

  	},[])

	const aboutRef = useRef();
	const projectsRef = useRef();
	const contactRef = useRef();

	const scrollToElement = (element) =>{

	let x = 0;
	let y = 0;

	if(element === "about"){
		x = aboutRef.current.offsetLeft;
    	y = aboutRef.current.offsetTop;
	}

	else if(element === "projects"){
		x = projectsRef.current.offsetLeft;
    	y = projectsRef.current.offsetTop;

	}
	else{
		x = contactRef.current.offsetLeft;
    	y = contactRef.current.offsetTop;

	}

	window.scrollTo({
      top: y -44,
      left: x,
      behavior: 'smooth'
    });

  }

	return (
  		<>
			<Nav scrollToElement={scrollToElement} width={navWidth} />
			<Introduction />

			<About baseURL={baseURL} ref={aboutRef} />

			<Projects ref={projectsRef} />
		
			<Contact baseURL={baseURL} ref={contactRef} />
		
    	</>
  );
}

export default App;


