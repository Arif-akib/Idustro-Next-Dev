import Image from 'next/image';

import Star from '/app/components/Shared/Star'

export default function SuccessStory({story}) {
  return (
    <>
      <div className="px-[10%] pb-32">
        <h1 className="text-5xl font-bold text-center">Our Success Story</h1>
        <div className="mt-10 flex items-center">
          <div className="w-[calc(100%-300px)] h-[480px]">
            <Image
              src={story.img}
              alt=""
              className="size-full aspect-auto object-cover"
            />
          </div>
          <div className="rounded-md shadow-md bg-white w-[400px] relative z-10 ml-[-100px]">
            <p className="primary-background text-white text-xl font-bold text-center py-3 rounded-t-md">
              Project Details
            </p>
            <div className="p-8 space-y-2 rounded-b-md text-gray-600">
              <div className="flex justify-between items-center">
                <p className="font-bold text-lg">Name:</p>
                              <p>{ story.name}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-bold text-lg">Date:</p>
                              <p>{ story.date}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-bold text-lg">Clients:</p>
                              <p>{ story.client}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-bold text-lg">Tag:</p>
                              <p>{ story.tag}</p>
                          </div>
                          <div className='pt-5'>
                              <p className="text-2xl font-bold text-black mb-2">Value : $125</p>
                              <Star content={ story} />
                          </div>
            </div>
          </div>
              </div>
              <div className='mt-10'>
                  <p className='text-3xl font-bold mb-5'>Project Details</p>
                  <p>{ story.des}</p>
                  <br />
                  <p>{ story.subdes}</p>
              </div>
      </div>
    </>
  );
}
