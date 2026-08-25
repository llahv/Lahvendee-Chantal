document.addEventListener("DOMContentLoaded", () => {


    // ==================== AUTOMATIC AGE ====================

    const birthday = new Date(
        2010,
        7,
        13
    );

    const today = new Date();

    let age =
        today.getFullYear() -
        birthday.getFullYear();

    const birthdayThisYear = new Date(
        today.getFullYear(),
        birthday.getMonth(),
        birthday.getDate()
    );

    if (today < birthdayThisYear) {
        age--;
    }


    const ageElement =
        document.getElementById("age");

    const ageInfoElement =
        document.getElementById("ageInfo");


    if (ageElement) {
        ageElement.textContent = age;
    }

    if (ageInfoElement) {
        ageInfoElement.textContent = age;
    }



    // ==================== SPARKLES ====================

    const sparkleContainer =
        document.getElementById("sparkles");


    function createSparkle(x, y) {

        const sparkle =
            document.createElement("span");

        const symbols = [
            "✦",
            "✧",
            "⋆",
            "·",
            "˚"
        ];

        sparkle.className =
            "sparkle";

        sparkle.innerText =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];

        sparkle.style.left =
            `${x}px`;

        sparkle.style.top =
            `${y}px`;

        sparkle.style.fontSize =
            `${Math.random() * 10 + 7}px`;

        sparkleContainer.appendChild(
            sparkle
        );


        setTimeout(() => {
            sparkle.remove();
        }, 1800);

    }


    let lastSparkle = 0;


    document.addEventListener(
        "mousemove",
        event => {

            const now =
                Date.now();

            if (
                now - lastSparkle >
                90
            ) {

                createSparkle(
                    event.clientX,
                    event.clientY
                );

                lastSparkle = now;

            }

        }
    );



    // ==================== CLICK SPARKLES ====================

    document.addEventListener(
        "click",
        event => {

            for (
                let i = 0;
                i < 6;
                i++
            ) {

                setTimeout(() => {

                    createSparkle(
                        event.clientX +
                            (
                                Math.random() *
                                50 -
                                25
                            ),

                        event.clientY +
                            (
                                Math.random() *
                                50 -
                                25
                            )
                    );

                }, i * 60);

            }

        }
    );



    // ==================== NAVIGATION ====================

    const navigationButtons =
        document.querySelectorAll(
            ".little-nav button"
        );

    const sections =
        document.querySelectorAll(
            ".content-section"
        );


    function showSection(id) {

        sections.forEach(
            section => {

                section.classList.remove(
                    "active"
                );

            }
        );


        navigationButtons.forEach(
            button => {

                button.classList.remove(
                    "selected"
                );

            }
        );


        const selected =
            document.getElementById(id);


        const selectedButton =
            document.querySelector(
                `[data-section="${id}"]`
            );


        if (selected) {

            selected.classList.add(
                "active"
            );

        }


        if (selectedButton) {

            selectedButton.classList.add(
                "selected"
            );

        }


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    navigationButtons.forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    showSection(
                        button.dataset.section
                    );

                }
            );

        }
    );



    // ==================== EXPANDABLE SECTIONS ====================

    const expandButtons =
        document.querySelectorAll(
            ".expand-button"
        );


    expandButtons.forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    const content =
                        button.nextElementSibling;

                    const isOpen =
                        content.classList.contains(
                            "open"
                        );


                    document
                        .querySelectorAll(
                            ".expand-content.open"
                        )
                        .forEach(
                            openContent => {

                                if (
                                    openContent !==
                                    content
                                ) {

                                    openContent
                                        .classList
                                        .remove(
                                            "open"
                                        );


                                    const otherButton =
                                        openContent
                                            .previousElementSibling;


                                    if (
                                        otherButton
                                    ) {

                                        otherButton
                                            .classList
                                            .remove(
                                                "open"
                                            );

                                    }

                                }

                            }
                        );


                    if (isOpen) {

                        content
                            .classList
                            .remove(
                                "open"
                            );

                        button
                            .classList
                            .remove(
                                "open"
                            );

                    } else {

                        content
                            .classList
                            .add(
                                "open"
                            );

                        button
                            .classList
                            .add(
                                "open"
                            );

                    }

                }
            );

        }
    );



    // ==================== DARK MODE ====================

    const themeButton =
        document.getElementById(
            "themeButton"
        );


    themeButton.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "dark"
            );


            themeButton.innerText =
                document.body.classList.contains(
                    "dark"
                )
                    ? "☾"
                    : "☼";

        }
    );

    // ==================== DEFAULT SECTION ====================

    showSection("about");

});

// ==================== BACKGROUND MUSIC ====================

const bgMusic = document.getElementById("bgMusic");
const musicButton = document.getElementById("musicButton");

if (bgMusic && musicButton) {

    bgMusic.volume = 0.25;

    musicButton.addEventListener("click", function () {

        if (bgMusic.paused) {

            bgMusic.play()
                .then(() => {
                    musicButton.textContent = "♫";
                })
                .catch((error) => {
                    console.log("Music could not play:", error);
                });

        } else {

            bgMusic.pause();
            musicButton.textContent = "♪";

        }

    });

}

