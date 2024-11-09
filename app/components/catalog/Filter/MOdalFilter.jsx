import {Filter} from "@/app/components";

export function MOdalFilter({showModal, handleShow, onSelectFilter}) {
    function clickHandler() {
        handleShow(!showModal)
    }
    return (
        <section style={showModal ? {display: 'flex'} : {display: 'none'}} className="absolute overflow-y-scroll w-full h-full z-[0] top-0 left-0 flex items-center justify-center">
            <section
                onClick={clickHandler}
                className="fixed overflow-y-scroll w-full h-full z-[-100] top-0 left-0 bg-opacity-70 bg-black  items-center justify-center"
            > </section>
            <section className=" absolute overflow-y-scroll items-left  w-[80%]  z-[10] top-[0%] rounded-xl left-0 bg-white flex flex-col  justify-center">
                <button onClick={clickHandler} className="w-[60px]items-start py-[40px] px-[20px] justify-start flex h-[60px]">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="black"/>
                    </svg>
                </button>
                <Filter onChangeFilter={onSelectFilter}/>
            </section>
        </section>
    );
}