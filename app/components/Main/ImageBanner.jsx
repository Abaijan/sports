import dynamicFetch from "@/hooks/fetch";

export const ImageBanner = async () => {
    const banner = await dynamicFetch('/main-banner')
    return (
        <section  >
            {
                banner && banner.map(item => (
                    <section style={{backgroundImage: `url(${item.image})`}} className="mx-auto bg-no-repeat bg-center h-[900px] w-full max-w-[2300px] bg-cover flex justify-center " >
                        {/*<Image src={item.image} alt="sport banner" className="w-full h-[900px]" width={2040} height={800}/>*/}
                    </section>
                ))
            }
        </section>
    )

}