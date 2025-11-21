"use client";
import { useRef, useLayoutEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Float, Torus } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";

export default function HeroModel() {
    const meshRef = useRef<THREE.Mesh>(null);
    const torusRef = useRef<THREE.Mesh>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            if (meshRef.current) {
                gsap.fromTo(meshRef.current.scale, { x: 0, y: 0, z: 0 }, { x: 1.8, y: 1.8, z: 1.8, duration: 1.5, ease: "elastic.out(1, 0.5)" });
            }
            if (torusRef.current) {
                gsap.fromTo(torusRef.current.scale, { x: 0, y: 0, z: 0 }, { x: 1, y: 1, z: 1, duration: 1.5, delay: 0.2, ease: "elastic.out(1, 0.5)" });
            }
        });
        return () => ctx.revert();
    }, []);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
        }
        if (torusRef.current) {
            torusRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            torusRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
            torusRef.current.rotation.z = state.clock.getElapsedTime() * 0.05;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <Sphere args={[1, 64, 64]} ref={meshRef} scale={0}>
                <MeshDistortMaterial
                    color="#000000"
                    attach="material"
                    distort={0.3}
                    speed={2}
                    roughness={0.1}
                    metalness={1}
                    envMapIntensity={1.5}
                    clearcoat={1}
                    clearcoatRoughness={0.1}
                />
            </Sphere>
            <Torus args={[3, 0.2, 16, 100]} ref={torusRef} scale={0}>
                <meshStandardMaterial
                    color="#262626"
                    emissive="#000000"
                    roughness={0.8}
                    metalness={0.2}
                />
            </Torus>
        </Float>
    );
}
