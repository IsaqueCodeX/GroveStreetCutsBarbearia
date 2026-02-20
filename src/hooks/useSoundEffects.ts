

const hoverAudio = new Audio('https://isaquesantosdev.com/wp-content/uploads/2026/02/Voicy_Select_Press.mp3');
hoverAudio.volume = 0.2;

const missionAudio = new Audio('https://isaquesantosdev.com/wp-content/uploads/2026/02/Voicy_Mission-Passed-.mp3');
missionAudio.volume = 0.4;

export const useSoundEffects = () => {
    const playHoverSound = () => {
        hoverAudio.currentTime = 0;
        hoverAudio.play().catch(e => console.warn("Hover sound failed:", e));
    };

    const playMissionPassed = () => {
        missionAudio.currentTime = 0;
        missionAudio.play().catch(e => console.warn("Mission Passed sound failed:", e));
    };

    return { playHoverSound, playMissionPassed };
};
