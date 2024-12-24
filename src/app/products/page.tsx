import Image from 'next/image'
export default function Products() {
  return (
      <div>
        <div className="bg-pink-300 min-h-screen p-10">
          <h1 className="text-pink-600 text-center text-4xl font-bold mb-8"> Case Mate Products</h1>
          <div >
            <p className="text-pink-600  bg-white mx-auto text-center text-2xl font-bold mb-8">Hurry UP!! Place your order right now</p>
          
              <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform">
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-7" >
             <Image
              src="/Images/pic 1.jpg"
              alt="pic 1"
              width={1500}
              height={1500}
              className="rounded-md object-cover w-full  h-50"
            />  <Image
            src="/Images/pic 2.jpg"
            alt="pic 2"
            width={1500}
            height={1500}
            className="rounded-md object-cover w-full  h-50"
          />  <Image
          src="/Images/pic 3.jpg"
          alt="pic 3"
          width={1500}
          height={1500}
          className="rounded-md object-cover w-full  h-50"
        />  <Image
        src="/Images/pic 4.jpg"
        alt="pic 4"
        width={1500}
        height={1500}
        className="rounded-md object-cover w-full  h-50"
      />  <Image
      src="/Images/pic 5.jpg"
      alt="pic 5"
      width={1500}
      height={1500}
      className="rounded-md object-cover w-full  h-50"
       />
          <Image
            src="/Images/pic 6.jpg"
              alt="pic 6"
         width={1500}
             height={1500}
              className="rounded-md object-cover w-full  h-50"
        /> 
         <Image
            src="/Images/pic 7.jpg"
         alt="pic 7"
          width={1500}
         height={1500}
           className="rounded-md object-cover w-full  h-50"
             />  
          <Image
              src="/Images/pic 8.jpg"
              alt="pic 8"
              width={1500}
              height={1500}
              className="rounded-md object-cover w-full  h-50"
            />  
            <Image
            src="/Images/pic 9.jpg"
            alt="pic 9"
            width={1500}
            height={1500}
            className="rounded-md object-cover w-full  h-50"
          />
         </div>
              </div>
           </div>
        </div>
      </div>
    );
  }
  