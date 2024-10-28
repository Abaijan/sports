import React from 'react'

export  function Module() {
  return (
    <section>
        <section className='container'>
        <section class="max-w-md mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-md">


            <div class=" peer-checked:block">
              <h2 class="text-2xl font-semibold text-center text-gray-800 mb-2">Форма</h2>
              <p class="text-sm text-gray-600 text-center mb-4">Заполните данные ниже:</p>
              
              <form class="space-y-4">
                <div>
                  <label for="fullName" class="block text-sm font-medium text-gray-700">ФИО:</label>
                  <input type="text" id="fullName" name="fullName" placeholder="Иван Иванов" required
                        class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
                </div>
                
                <div>
                  <label for="phone" class="block text-sm font-medium text-gray-700">Телефон:</label>
                  <input type="tel" id="phone" name="phone" placeholder="+7 (900) 000-0000" required
                        class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
                </div>
                
                <div>
                  <label for="country" class="block text-sm font-medium text-gray-700">Страна:</label>
                  <input type="text" id="country" name="country" placeholder="Россия" required
                        class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
                </div>
                
                <button type="submit" class="w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-md shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                  Отправить заявку
                </button>
              </form>
            </div>
</section>

        </section>
    </section>
  )
}
