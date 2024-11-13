import React from "react";

export function ModalVideos({ videoSrc, setShowVideo }) {
    function clickHandler() {
        setShowVideo(false);
    }

    return (
        <section className="fixed w-full overflow-hidden h-[100vh] z-[100] top-0 left-0 flex items-center justify-center">
            <section
                onClick={clickHandler}
                className="fixed w-full overflow-clip h-[100vh] z-[0] top-0 left-0 bg-opacity-60 bg-black flex items-center justify-center"
            ></section>
            <section className="w-fit h-fit overflow-hidden flex z-[100] justify-center items-center">
                <iframe
                    title="vimeo-player"
                    src={videoSrc}
                    className="w-[400px] h-auto lg:w-[700px] lg:h-auto"
                    width="1940"
                    height="860"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            </section>
        </section>
    );
}
