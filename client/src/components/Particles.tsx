// import { useCallback } from "react";
// import Particles from "react-tsparticles";
// import { loadSlim } from "tsparticles-slim"; // Lightweight version

// const ParticleBackground = () => {
//   const particlesInit = useCallback(async (engine: any) => {
//     await loadSlim(engine);
//   }, []);

//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       options={{
//         background: {
//           color: "#0d0d0d", // Dark background
//         },
//         particles: {
//           number: {
//             value: 100, // Number of particles
//             density: {
//               enable: true,
//               value_area: 800,
//             },
//           },
//           color: {
//             value: "#ffffff", // Particle color
//           },
//           shape: {
//             type: "circle",
//           },
//           opacity: {
//             value: 0.5,
//             random: false,
//           },
//           size: {
//             value: 3,
//             random: true,
//           },
//           move: {
//             enable: true,
//             speed: 2,
//             direction: "none",
//             random: false,
//             straight: false,
//           },
//         },
//         interactivity: {
//           events: {
//             onHover: {
//               enable: true,
//               mode: "repulse",
//             },
//             onClick: {
//               enable: true,
//               mode: "push",
//             },
//           },
//           modes: {
//             repulse: {
//               distance: 100,
//               duration: 0.4,
//             },
//             push: {
//               quantity: 4,
//             },
//           },
//         },
//       }}
//     />
//   );
// };

// export default ParticleBackground;



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
          color: "#0d0d0d", // Dark background
        },
        particles: {
          number: {
            value: 100, // Number of particles
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#ffffff", // Particle color
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
            random: false,
          },
          size: {
            value: 3,
            random: true,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
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
