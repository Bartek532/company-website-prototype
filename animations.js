const tl = new TimelineMax();
gsap.registerPlugin(ScrollTrigger);

//start
tl.from(".menu", 0.5, {
		opacity: 0,
		x: 300,
	})
	.addLabel("start")
	.from(".first h1", 0.3, {
		opacity: 0,
		y: -100,
	})
	.from(
		".first p",
		0.3, {
			opacity: 0,
			y: 100,
		},
		"start"
	)
	.addLabel("button")
	.from(".first .circle", 0.4, {
		scale: 0,
		transformOrigin: "50% 50%",
		stagger: "." + Math.floor(Math.random() * 5),
	})
	.from(
		".purple",
		0.4, {
			opacity: 0,
			x: -50,
		},
		"button"
	)
	.from(
		".green",
		0.4, {
			opacity: 0,
			x: 50,
		},
		"button"
	);
//team
let team = gsap.timeline({
	scrollTrigger: {
		trigger: ".team",
		start: "top 80%",
		end: "+=100px",
	},
});

team
	.from(".team #back", 0.5, {
		scaleX: 0,
		opacity: 0,
		x: -400,
		transformOrigin: "0% 50%",
	})
	.addLabel("team")
	.from(".team #person1", 0.5, {
		x: -400,
		opacity: 0,
	})
	.from(
		".team #person4",
		0.5, {
			x: 400,
			opacity: 0,
		},
		"team"
	)
	.from(
		".team #person2",
		0.5, {
			y: -400,
			opacity: 0,
		},
		"team"
	)
	.from(
		".team #person3",
		0.5, {
			y: -300,
			opacity: 0,
		},
		"team"
	);

let about = gsap.timeline({
	scrollTrigger: {
		trigger: ".second",
		start: "top 50%",
		end: "+=100px",
	},
});

about
	.addLabel("header")
	.from(".header h2", 0.3, {
		y: -70,
		opacity: 0,
	})
	.from(
		".header p",
		0.3, {
			opacity: 0,
			y: 70,
		},
		"header"
	)
	.from(".features .feature", 0.3, {
		opacity: 0,
		y: 200,
		stagger: 0.1,
		ease: "easeOut",
	})
	.from(".all", 0.2, {
		scale: 0,
		transformOrigin: "50% 50%",
	});

//services
let services = gsap.timeline({
	scrollTrigger: {
		trigger: "#services",
		start: "top 80%",
		end: "+=100px",
	},
});

services
	.from("#services .desc", 0.5, {
		x: -400,
		opacity: 0,
	})
	.from(".build #window", 0.4, {
		y: -300,
		opacity: 0,
	})
	.addLabel("tabs")
	.from(".build #tabs g", 0.4, {
		scale: 0,
		transformOrigin: "50% 50%",
		stagger: 0.15,
	})
	.from(".build #squares path", 0.3, {
		scale: 0,
		transformOrigin: "50% 50%",
		stagger: 0.15,
	})
	.from(".build #person1", 0.5, {
		opacity: 0,
		zIndex: -1,
		x: 300,
	})
	.from(".build #person3", 0.4, {
		opacity: 0,
		x: 300,
	})
	.from(".build #person2", 0.4, {
		y: 300,
		opacity: 0,
	});

//socials
let socials = gsap.timeline({
	scrollTrigger: {
		trigger: "#social",
		start: "top 50%",
		markers: true,
		end: "+=200px",
	},
});

socials
	.from("#social .desc", 0.5, {
		x: -400,
		opacity: 0,
	})
	.addLabel("floor")
	.from("#box", 0.3, {
		y: -650,
		opacity: 0,
		stagger: 0.15,
	})
	.from(
		"#floor",
		0.4, {
			transformOrigin: "50% 50%",
			scale: 0,
		},
		"floor"
	)
	.from(".delivery #person", 0.4, {
		opacity: 0,
		y: -400,
	})
	.from("#stalks path", 0.25, {
		transformOrigin: "50% 100%",
		scaleY: 0,
		stagger: 0.1,
	})
	.from("#flower", 0.25, {
		transformOrigin: "50% 100%",
		scale: 0,
		stagger: 0.1,
	});

//contact

let contact = gsap.timeline({
	scrollTrigger: {
		trigger: "#contact",
		start: "top 70%",
	},
});

contact
	.addLabel("header")
	.from("..contact .title", 0.4, {
		y: -200,
		opacity: 0,
	})
	.from(
		".contact .subtitle",
		0.4, {
			y: 200,
			opacity: 0,
		},
		"header"
	)
	.from(".newsletter", 0.4, {
		x: -200,
		opacity: 0,
	});