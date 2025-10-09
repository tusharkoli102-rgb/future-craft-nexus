import { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { HumanoidScene } from './HumanoidScene';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ScrollScene = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const canvasContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasContainerRef.current) return;

    const scrollTrigger = ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1,
      onUpdate: (self) => {
        setScrollProgress(self.progress);
      },
    });

    return () => {
      scrollTrigger.kill();
    };
  }, []);

  return (
    <div
      ref={canvasContainerRef}
      className="fixed inset-0 z-0"
      style={{ height: '100vh', width: '100vw' }}
    >
      <Canvas
        shadows
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: 'high-performance'
        }}
        dpr={[1, 2]}
      >
        <color attach="background" args={['#000011']} />
        <fog attach="fog" args={['#000022', 5, 25]} />
        <HumanoidScene scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  );
};
