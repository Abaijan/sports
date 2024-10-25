import dynamicFetch from "@/hooks/fetch";

export const Advantages = async () => {
    const advantages = await dynamicFetch('/advantages');

    return (
        <section className="container flex flex-col">
            <h2 className="impact text-[36px] font-semibold">Преимущества</h2>
            <div className="space-y-6 manrope lg:px-[40px] pt-[100px] pb-[100px] font-raleway">
                {advantages.map((item) => (
                    <div key={item.id} className="grid md:grid-cols-3 items-center-cols-1 border-b pb-14">
                        <span className="text-[32px] ">{item.number}/</span>
                        <h2 className="text-[34px] font-semibold w-[200px] text-[#112A76]">
                            {item.title}
                        </h2>
                        <p className="text-[20px] text-center leading-[22px] pt-[20px] font-thin">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

;
