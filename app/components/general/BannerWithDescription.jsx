
import styles from './banner.module.css';

export const  BannerWithDescription = () => {
  return (
      <section className="container mx-auto px-4 flex flex-col md:flex-row items-center p-10">
         <div className={`relative h-96 flex items-center justify-center px-[300px] ${styles.banner}`}>
           <div className='absolute inset-0 bg-black opacity-30'></div>
             <div className='relative text-center text-white z-10'> 
                <h2 className='text-2xl font-medium mb-4'>
                  Мы — команда, которая любит спорт и знает, что нужно для эффективных тренировок.
                  В нашем магазине представлены лучшие спорт
                </h2>
                <button className="bg-blue-600 text-white font-medium py-2 px-6 rounded-[10px] hover:bg-blue-700 transition duration-300">
                  Связаться с нами
                </button>
            </div>
        </div>
    </section>
  );
}
