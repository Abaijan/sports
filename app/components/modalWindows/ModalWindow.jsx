import React from 'react';
import { ModalWindow } from "@/app/components";
import { ModalSuccess } from "@/app/components/modalWindows/successful";
import {ModalVideos} from "@/app/components/modalWindows/ModalVideos";

const defineModal = (param) => {
    switch (param) {
        case 'basket':
            return <ModalWindow />;
        case 'success':
            return <ModalSuccess />;
        default:
            return <ModalWindow />;
    }
};

export const  ModalWind = ({ param, setShowModal }) => {
    return (
        <section className="fixed w-full h-full z-[0] top-0 left-0 flex items-center justify-center">
            <section
                onClick={() => setShowModal(false)}
                className="fixed w-full h-full z-[0] top-0 left-0 bg-opacity-70 bg-black flex items-center justify-center"
            ></section>
            {defineModal(param)}
        </section>
    );
};
