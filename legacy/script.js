window.onload = () => {
    document.addEventListener('contextmenu', e => e.preventDefault());

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Step 1: BG TEXT
    tl.to(".bg-text", {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 2,
        startAt: { opacity: 0, scale: 1.1, filter: "blur(10px)" }
    });

    // Step 2: Men Silhouette
    tl.to(".men", {
        opacity: 1,
        y: 0,
        duration: 1.5,
        startAt: { opacity: 0, y: 150 },
        delay: -1.2
    });

    // Step 3: Wipe Effect (SPEED INCREASED)
    tl.to(".single-wipe-container", {
        clipPath: "inset(0% 0 0 0)",
        duration: 1.1, // Faster wipe
        ease: "power2.inOut",
        delay: -0.5
    });

    // Step 4: Join Button (SUCCESSION EFFECT + STABLE)
    tl.to(".join-container", {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "elastic.out(1, 0.75)", // Succession effect (bounce)
        startAt: { opacity: 0, scale: 0.2 },
        delay: -0.8
    });

    // Step 5: Navbar
    tl.to(".navbar", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        startAt: { opacity: 0, y: -20 },
        delay: -0.6
    });

    // Note: Floating Animation REMOVED to make it STABLE.
};
