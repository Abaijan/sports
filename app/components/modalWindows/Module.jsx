import React from 'react'

export  const  ModalWindow = () =>  {
  return (
    <section>
        <section className="max-w-[700px] manrope py-[80px] px-[100px] mx-auto bg-white border border-gray-200 rounded-[20px] shadow-md">
            <div className="">
              <h2 className="text-2xl font-medium text-center text-gray-800 mb-2">Оформление заказа</h2>
              <p className="text-sm text-gray-600 text-center font-thin mb-4">Заполните форму, и наш менеджер свяжется с вами для подтверждения деталей заказа</p>
              
              <form className="flex gap-[10px] flex-col">
                <div>
                  <label form="fullName" className="block text-sm  text-gray-500">ФИО</label>
                  <input type="text" id="fullName" name="fullName" placeholder="Имя" required
                        className="mt-1 block w-full px-4 bg-[#F3F3F3] font-thin  p-[15px] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
                </div>
                
                <div>
                  <label form="phone" className="block text-sm font-medium text-gray-500">Телефон:</label>
                  <input type="tel" id="phone" name="phone" placeholder="+996 (777) 77 77 77" required
                        className="mt-1 block px-4 w-full  py-[15px] border  bg-[#F3F3F3] font-thin  p-[15px] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
                </div>
                
                <div>
                  <label form="country" className="block text-sm font-medium text-gray-500">Страна/Город</label>
                  <input type="text" id="country" name="country" placeholder="Кыргызыстан / Бишкек" required
                        className="mt-1 block w-full px-4  py-[15px]  border  bg-[#F3F3F3] font-thin  p-[15px] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
                </div>
                
                <button type="submit" className=" py-2 px-4 bg-[#1243C0] w-4/7 font-thin mx-auto text-white rounded-md shadow hover:bg-blue-700 focus:outline-none mt-[20px] focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                  Отправить заявку
                </button>
              </form>
            </div>
</section>

        </section>
  )
}
