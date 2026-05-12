'use client';

import React from "react";
import { motion } from "framer-motion";

interface SectionWithMockupProps {
    title: string | React.ReactNode;
    description: string | React.ReactNode;
    primaryImageSrc: string;
    secondaryImageSrc: string;
    reverseLayout?: boolean;
}

const SectionWithMockup: React.FC<SectionWithMockupProps> = ({
    title,
    description,
    primaryImageSrc,
    secondaryImageSrc,
    reverseLayout = false,
}) => {

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.25,
            }
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 60, scale: 0.97, filter: "blur(6px)" },
        visible: {
            opacity: 1, y: 0, scale: 1, filter: "blur(0px)",
            transition: { duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }
        },
    };

    const layoutClasses = reverseLayout
        ? "md:grid-cols-2 md:grid-flow-col-dense"
        : "md:grid-cols-2";

    const textOrderClass = reverseLayout ? "md:col-start-2" : "";
    const imageOrderClass = reverseLayout ? "md:col-start-1" : "";

    return (
        <section className="relative py-8 pb-24 md:py-16 overflow-hidden">
            <div className="container max-w-[1220px] w-full px-6 md:px-10 relative z-10 mx-auto">
                <motion.div
                    className={`grid grid-cols-1 gap-16 md:gap-20 lg:gap-32 w-full items-center ${layoutClasses}`}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    {/* Text Content */}
                    <motion.div
                        className={`flex flex-col items-start gap-4 mt-10 md:mt-0 max-w-[546px] mx-auto md:ml-0 md:-translate-x-6 lg:-translate-x-12 ${textOrderClass}`}
                        variants={itemVariants}
                    >
                        <div className="space-y-2 md:space-y-1">
                            <h2
                                className="text-[#111111] text-3xl md:text-[40px] font-bold leading-tight md:leading-[53px] font-disket uppercase"
                            >
                                {title}
                            </h2>
                        </div>

                        <p
                            className="text-[#444444] text-sm md:text-[15px] leading-6 font-geist"
                        >
                            {description}
                        </p>
                    </motion.div>

                    {/* App mockup/Image Content */}
                    <motion.div
                        className={`relative mt-10 md:mt-0 mx-auto ${imageOrderClass} w-full max-w-[300px] md:max-w-[471px] md:translate-x-6 lg:translate-x-12`}
                        variants={itemVariants}
                    >
                        {/* Decorative Background Element */}
                        <motion.div
                            className={`absolute w-[300px] h-[317px] md:w-[472px] md:h-[500px] bg-[#e8e8e8] rounded-[32px] z-0`}
                            style={{
                                top: reverseLayout ? 'auto' : '10%',
                                bottom: reverseLayout ? '10%' : 'auto',
                                left: reverseLayout ? 'auto' : '-20%',
                                right: reverseLayout ? '-20%' : 'auto',
                                transform: reverseLayout ? 'translate(0, 0)' : 'translateY(10%)',
                                filter: 'blur(2px)'
                            }}
                            initial={{ y: 0, opacity: 0 }}
                            whileInView={{ y: reverseLayout ? -20 : -30, opacity: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            viewport={{ once: false, amount: 0.4 }}
                        >
                            <div
                                className="relative w-full h-full bg-cover bg-center rounded-[32px]"
                                style={{ backgroundImage: `url(${secondaryImageSrc})` }}
                            />
                        </motion.div>

                        {/* Main Mockup Card */}
                        <motion.div
                            className="relative mt-8 md:mt-20 w-full aspect-[4/5] sm:aspect-square md:aspect-auto md:h-[500px] md:w-[85%] md:ml-auto bg-[#00000008] rounded-[24px] md:rounded-[32px] backdrop-blur-[15px] border border-black/10 z-10 overflow-hidden shadow-2xl"
                            initial={{ y: 0, opacity: 0, scale: 0.95 }}
                            whileInView={{ y: reverseLayout ? 15 : 20, opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <div className="p-0 h-full">
                                <div className="h-full relative">
                                    <div
                                        className="w-full h-full bg-cover bg-center bg-no-repeat"
                                        style={{ backgroundImage: `url(${primaryImageSrc})`, opacity: 1 }}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Decorative bottom gradient */}
            <div
                className="absolute w-full h-px bottom-0 left-0 z-0"
                style={{
                    background:
                        "radial-gradient(50% 50% at 50% 50%, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0) 100%)",
                }}
            />
        </section>
    );
};

export default SectionWithMockup;
