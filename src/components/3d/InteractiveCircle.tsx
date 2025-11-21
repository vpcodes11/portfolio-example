"use client";
import { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Torus, Sparkles } from "@react-three/drei";
import * as THREE from "three";

export default function InteractiveCircle() {
    const circleRef = useRef<THREE.Mesh>(null);
    const lightRef = useRef<THREE.PointLight>(null);
    const [mousePos, setMousePos] = useState(new THREE.Vector3(0, 0, 5));
    const [isHovered, setIsHovered] = useState(false);
    const [lightIntensity, setLightIntensity] = useState(0);

    const { viewport } = useThree();

    useFrame((state) => {
        if (circleRef.current) {
            // Gentle rotation
            circleRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
            circleRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
        }

        // Smooth light intensity transition
        if (lightRef.current) {
            const targetIntensity = isHovered ? 3 : 0;
            setLightIntensity((prev) => THREE.MathUtils.lerp(prev, targetIntensity, 0.1));
            lightRef.current.intensity = lightIntensity;
        }
    });

    const handlePointerMove = (event: any) => {
        const x = (event.point.x);
        const y = (event.point.y);
        const z = (event.point.z);
        setMousePos(new THREE.Vector3(x, y, z));
    };

    return (
        <group position={[0, 0, -2]}>
            <Torus
                ref={circleRef}
                args={[1.5, 0.15, 16, 100]}
                onPointerMove={handlePointerMove}
                onPointerEnter={() => setIsHovered(true)}
                onPointerLeave={() => setIsHovered(false)}
            >
                <meshStandardMaterial
                    color="#000000"
                    emissive="#ffffff"
                    emissiveIntensity={isHovered ? 0.5 : 0}
                    roughness={0.3}
                    metalness={0.8}
                />
            </Torus>

            {/* Dynamic point light that follows mouse */}
            <pointLight
                ref={lightRef}
                position={[mousePos.x, mousePos.y, mousePos.z]}
                color="#ffffff"
                distance={3}
                decay={2}
            />

            {/* Sparkles that appear on hover */}
            {isHovered && (
                <Sparkles
                    count={50}
                    scale={3}
                    size={3}
                    speed={0.8}
                    opacity={1}
                    color="#ffffff"
                    position={[mousePos.x, mousePos.y, mousePos.z]}
                />
            )}
        </group>
    );
}
