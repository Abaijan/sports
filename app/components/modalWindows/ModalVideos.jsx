export function ModalVideos({param, setShowModal}) {
    return (
        <section className="fixed w-full h-full z-[0] top-0 left-0 flex items-center justify-center">
            <section
                onClick={() => setShowModal(false)}
                className="fixed w-full h-full z-[0] top-0 left-0 bg-opacity-70 bg-black flex items-center justify-center"
            ></section>
            <section className="w-full h-full flex justify-center items-center">
                <iframe
                    width="560"
                    height="315"
                    src={param}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </section>
        </section>
    );
}