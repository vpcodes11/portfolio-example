"use client";
import { Canvas } from "@react-three/fiber";
import { Environment, PerspectiveCamera, Sparkles } from "@react-three/drei";
import { Suspense } from "react";
import HeroModel from "./HeroModel";
import InteractiveCircle from "./InteractiveCircle";

export default function Scene() {
    return (
        <div className="fixed top-0 left-0 w-full h-screen -z-10">
            <Canvas dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                <Suspense fallback={null}>
                    <Environment preset="city" />
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                    <pointLight position={[-10, -10, -10]} intensity={1} />
                    <Sparkles count={100} scale={10} size={2} speed={0.4} opacity={0.5} color="#000000" />
                    <HeroModel />
                    <InteractiveCircle />
                </Suspense>
            </Canvas>
        </div>
    );
}
