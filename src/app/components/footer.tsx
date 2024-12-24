import Image from 'next/image'
export default function Footer(){
  return (
    <footer className="bg-white text-pink-500 py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        
        {/* Left Section */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h1 className="text-lg font-extrabold md:text-xl">CaseMate Co.</h1>
          <p className="text-sm md:text-base font-bold">© 2024 CaseMate Co. All rights reserved.</p>
        </div>

        {/* Middle Section */}
        <div className="flex space-x-7 mb-4 md:mb-0 justify-center md:justify-start font-bold">
          <a href="/about" className="text-sm md:text-base hover:underline" role="link">About Us</a>
          <a href="/contact" className="text-sm md:text-base hover:underline" role="link">Contact</a>
          <a href="/privacy" className="text-sm md:text-base hover:underline" role="link">Privacy Policy</a>
        </div>

        {/* Right Section */}
        <div className="flex space-x-4 justify-center md:justify-end">
           <Image src="/Images/facebook.jpg" alt="Facebook" width={700} height={700} className="w-6 h-6 md:w-8 md:h-8" />
           <Image src="/Images/linkedin.png" alt="Linked In" width={700} height={700} className="w-6 h-6 md:w-8 md:h-8" />
         

      </div>
      </div>
    </footer>
  );
};