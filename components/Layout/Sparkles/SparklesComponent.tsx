"use client";
import React from "react";
import { SparklesCore } from "./Sparkles";

export function SparklesComponent() {
    return (
        <div className="fixed top-0 h-full w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
            <div className="w-full absolute inset-0 h-screen">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.5}
                    maxSize={2.5}
                    particleDensity={5}
                    className="w-full h-full"
                    particleColor="#ffffff23"
                />
            </div>
        </div>
    );
}
