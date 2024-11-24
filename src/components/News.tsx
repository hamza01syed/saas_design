import { MessageCircleIcon as ChatBubbleIcon, HeartIcon, Share2Icon } from 'lucide-react'
import Image from 'next/image'

const newsItems = [
  {
    image: "/images/firmnews.jpg",
    date: "5 October 2023",
    title: "National top 50 consulting firms",
    description: "Duis consectetur feugiat auctor. Morbi nec enim luctus, feugiat arcu id, ultricies ante. Duis vel massa eleifend, porta est non, feugiat metus.",
    comments: 1,
    likes: 2,
  },
  {
    image: "/images/productnews.jpg",
    date: "3 October 2023",
    title: "Successful product launch",
    description: "Duis consectetur feugiat auctor. Morbi nec enim luctus, feugiat arcu id, ultricies ante. Duis vel massa eleifend, porta est non, feugiat metus.",
    comments: 0,
    likes: 3,
  },
  {
    image: "/images/softwarenews.jpg",
    date: "3 October 2023",
    title: "New 4.3 update of our software",
    description: "Duis consectetur feugiat auctor. Morbi nec enim luctus, feugiat arcu id, ultricies ante. Duis vel massa eleifend, porta est non, feugiat metus.",
    comments: 0,
    likes: 2,
  },
]

export default function News() {
  return (
    <section className="bg-[#363fbe] py-48 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[50px] font-bold text-white mb-16  text-center">Latest news & updates</h2>
        <div className="grid grid-cols-1  md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div key={index} className=" rounded-lg flex flex-col items-start overflow-hidden ">
                <div>
              <Image src={item.image} alt={item.title} className="w-[340px] h-[291px] rounded-3xl object-cover" width={500} height={500} />
              </div>
              <div className="p-1 mt-6">
                <div className="text-sm text-[#ff436b] mb-2"><span className='text-white'>By</span> admin - <span className='text-gray-400'>{item.date}</span></div>
                <h3 className="text-xl text-white font-medium mt-6">{item.title}</h3>
                <p className="text-white text-[16px] mb-4 opacity-90 mt-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center text-gray-500">
                      <ChatBubbleIcon className="w-4 h-4 mr-1" />
                      {item.comments}
                    </span>
                    <span className="flex items-center text-gray-500">
                      <HeartIcon className="w-4 h-4 mr-1" />
                      {item.likes}
                    </span>
                  </div>
                  <button className="text-gray-500 hover:text-indigo-600">
                    <Share2Icon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}