/* =========================
   SCROLL PROGRESS
========================= */

const progressDot =
    document.getElementById("progressDot");


window.addEventListener(
    "scroll",
    function () {

        const totalHeight =
            document.documentElement.scrollHeight
            -
            window.innerHeight;

        const currentScroll =
            window.scrollY;

        let progress = 0;

        if (totalHeight > 0) {
            progress =
                currentScroll
                /
                totalHeight;
        }

        const lineHeight = 280;

        progressDot.style.top =
            (progress * lineHeight)
            +
            "px";

    }
);


/* =========================
   BACKGROUND MUSIC
========================= */

const soundButton =
    document.getElementById("soundToggle");


const archiveMusic =
    new Audio(
        "./Music/portrait-of-tracy.mp3"
    );


archiveMusic.loop = true;

archiveMusic.volume = 0.4;


soundButton.addEventListener(
    "click",
    async function () {

        if (archiveMusic.paused) {

            try {

                await archiveMusic.play();

                soundButton.textContent =
                    "SOUND ON ●";

            }

            catch (error) {

                console.error(
                    "Audio error:",
                    error
                );

                soundButton.textContent =
                    "AUDIO ERROR";

            }

        }

        else {

            archiveMusic.pause();

            soundButton.textContent =
                "SOUND OFF ○";

        }

    }
);