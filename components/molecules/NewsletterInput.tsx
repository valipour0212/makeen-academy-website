import React from 'react';

function NewsletterInput() {
    return (
        <div className="flex justify-between items-center gap-2 w-64 md:w-96 h-12 mt-6 rounded-lg border border-gray-300">
            <input placeholder="شماره تماس خود را وارد کنید" className="w-4/5 h-full font-normal md:font-medium text-sm p-2 outline-none"/>
            <button className="w-2/6 h-full bg-[#36A8D9] rounded-l-lg p-2 font-medium text-xs md:text-lg text-white cursor-pointer">عضویت</button>
        </div>
    );
}

export default NewsletterInput;