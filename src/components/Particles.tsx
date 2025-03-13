import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // Lightweight version

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "#1b0033",
          image: "radial-gradient(circle at center, #3b0764, #1b0033, #000000)",
          position: "center",
          repeat: "no-repeat",
          size: "cover",
        },
        particles: {
          number: {
            value: 120, // Increased for a more populated look
            density: {
              enable: true,
              value_area: 1000,
            },
          },
          color: {
            value: ["#ffafcc", "#a29bfe", "#81ecec", "#e1bee7", "#ffcc80"],
          },
          shape: {
            type: ["circle", "triangle", "star"],
          },
          opacity: {
            value: 0.7,
            random: true,
            animation: {
              enable: true,
              speed: 1.5,
              minimumValue: 0.2,
              sync: false,
            },
          },
          size: {
            value: 3.5,
            random: true,
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 1,
              sync: false,
            },
          },
          move: {
            enable: true,
            speed: 2.5,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "out",
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "bubble",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            bubble: {
              distance: 100,
              size: 6,
              duration: 2,
              opacity: 1,
            },
            push: {
              quantity: 4,
            },
          },
        },
      }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
      }}
    />
  );
};

export default ParticleBackground;