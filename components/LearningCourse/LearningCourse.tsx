import React from 'react'

const courses = [
    {
      image: 'https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      category: 'easy',
      title: 'Khóa học cho bé',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      time: '6 mins ago',
      comments: '39'
    },
    {
      image: 'https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      category: 'difficult',
      title: 'Khóa học cấp độ 2',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      time: '10 days ago',
      comments: '0'
    },
    {
      image: 'https://images.pexels.com/photos/6086/food-salad-healthy-vegetables.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      category: 'difficult',
      title: 'Khóa học cấp độ 3',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      time: '16 hours ago',
      comments: '9'
    },
  ]; 

const Course = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-5 w-5/6 mx-auto">
      {courses.map((course, index) => (
        <div key={index} className="rounded-2xl overflow-hidden shadow-lg flex flex-col">
          <div className="relative">
            <a href="#">
              <img className="w-full" src={course.image} alt={course.title} />
              <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
            </a>
            <a href="#!">
              <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                {course.category}
              </div>
            </a>
          </div>
          <div className="px-6 py-4 mb-auto">
            <a href="#" className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
              {course.title}
            </a>
            <p className="text-gray-500 text-sm">{course.description}</p>
          </div>
          <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
            <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
              <svg height="13px" width="13px" viewBox="0 0 512 512">
                <g>
                  <g>
                    <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"></path>
                  </g>
                </g>
              </svg>
              <span className="ml-1">{course.time}</span>
            </span>
            <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
              <svg className="h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
              </svg>
              <span className="ml-1">{course.comments} Comments</span>
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Course