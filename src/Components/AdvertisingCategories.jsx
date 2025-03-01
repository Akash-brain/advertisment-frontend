import  { useState } from 'react';

const categories = [

 

  { id: 2, name: 'Newspaper Advertising', info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum fugiat dignissimos veniam! Saepe soluta vel cumque suscipit. Perferendis error vero, minus, reprehenderit facere totam maiores necessitatibus, molestias non quo atque culpa porro ipsam. Nesciunt impedit dolorem libero sequi? Vero quibusdam cumque nesciunt tenetur omnis mollitia veritatis sunt beatae voluptate laborum! about Newspaper Advertising...' },

  { id: 3, name: 'Social Media Service', info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum fugiat dignissimos veniam! Saepe soluta vel cumque suscipit. Perferendis error vero, minus, reprehenderit facere totam maiores necessitatibus, molestias non quo atque culpa porro ipsam. Nesciunt impedit dolorem libero sequi? Vero quibusdam cumque nesciunt tenetur omnis mollitia veritatis sunt beatae voluptate laborum! about Radio Advertising...' },

  { id: 4, name: 'Outdoor Advertising', info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum fugiat dignissimos veniam! Saepe soluta vel cumque suscipit. Perferendis error vero, minus, reprehenderit facere totam maiores necessitatibus, molestias non quo atque culpa porro ipsam. Nesciunt impedit dolorem libero sequi? Vero quibusdam cumque nesciunt tenetur omnis mollitia veritatis sunt beatae voluptate laborum! about Outdoor Advertising...' },

  { id: 5, name: 'Digital Advertising', info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum fugiat dignissimos veniam! Saepe soluta vel cumque suscipit. Perferendis error vero, minus, reprehenderit facere totam maiores necessitatibus, molestias non quo atque culpa porro ipsam. Nesciunt impedit dolorem libero sequi? Vero quibusdam cumque nesciunt tenetur omnis mollitia veritatis sunt beatae voluptate laborum! about Digital Advertising...' },

  { id: 6, name: 'Cinema Advertising', info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum fugiat dignissimos veniam! Saepe soluta vel cumque suscipit. Perferendis error vero, minus, reprehenderit facere totam maiores necessitatibus, molestias non quo atque culpa porro ipsam. Nesciunt impedit dolorem libero sequi? Vero quibusdam cumque nesciunt tenetur omnis mollitia veritatis sunt beatae voluptate laborum! about Cinema Advertising...' },

  { id: 7, name: ' Entertainment', info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum fugiat dignissimos veniam! Saepe soluta vel cumque suscipit. Perferendis error vero, minus, reprehenderit facere totam maiores necessitatibus, molestias non quo atque culpa porro ipsam. Nesciunt impedit dolorem libero sequi? Vero quibusdam cumque nesciunt tenetur omnis mollitia veritatis sunt beatae voluptate laborum! about Airline Advertising...' },

  { id: 8, name: '  Product-launch', info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum fugiat dignissimos veniam! Saepe soluta vel cumque suscipit. Perferendis error vero, minus, reprehenderit facere totam maiores necessitatibus, molestias non quo atque culpa porro ipsam. Nesciunt impedit dolorem libero sequi? Vero quibusdam cumque nesciunt tenetur omnis mollitia veritatis sunt beatae voluptate laborum! about Television Advertising...' },
];

const AdvertisingCategories = () => {



  const [activeCategory, setActiveCategory] = useState(categories[0].id);



  return (
    <div className="flex border rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto mt-8 my-8">
      <div className="w-1/4 bg-gray-100 border-r">
        <ul>
          {categories.map((category) => (
            <li
              key={category.id}
              className={`p-4 cursor-pointer ${
                activeCategory === category.id ? 'bg-white font-bold text-red-500' : ''
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-3/4 p-6 bg-white">
        {categories.map((category) => (
          activeCategory === category.id && (
            <div key={category.id}>
              <h2 className="text-2xl font-bold mb-4">{category.name}</h2>
              <p className="text-gray-700">{category.info}</p>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default AdvertisingCategories;