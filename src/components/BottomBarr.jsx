import React from 'react'

function BottomBarr() {
  return (
    <div className="relative bottom-0 py-6 px-3 bg-slate-950 text-violet-300 flex justify-between items-center">
        <div className="block text-sm">
        <p className="text-lg">Copyright 2022</p>
        <p>Threads Clothing Store</p>
        <p>123 Fashion Avenue, Suite 456
        Style City, ST 78901
        Email: support@threads.com
        Phone: (123) 456-7890</p>
        </div>

        <div className="block text-sm">
        <p className="text-lg">Follow Us on</p>
        <p>Instagram: @ThreadsFashion</p>
        <p>Facebook: ThreadsFashion</p>
        </div>
    </div>
  )
}

export default BottomBarr