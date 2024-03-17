import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const userValid = () => {
    let token = localStorage.getItem("userdbtoken");
    if (!token) {
      navigate("/");
    }
  }

  useEffect(() => {
    userValid();
  }, []);

  // Example static animal blogs
  const animalBlogs = [
    {
      id: 1,
      title: "The Majestic Lion",
      content: "Lions are majestic animals, known as the kings of the jungle...",
    },
    {
      id: 2,
      title: "Amazing Facts About Elephants",
      content: "Elephants are the largest land animals on Earth...",
    },
    {
      id: 3,
      title: "The Fascinating World of Dolphins",
      content: "Dolphins are highly intelligent marine mammals...",
    },
    {
      id: 4,
      title: "The Graceful Cheetah",
      content: "Cheetahs are the fastest land animals, capable of reaching speeds up to 60 miles per hour...",
    },
    {
      id: 5,
      title: "The Mysterious Snow Leopard",
      content: "Snow leopards are elusive and solitary creatures, inhabiting the mountain ranges of Central and South Asia...",
    },
    {
      id: 6,
      title: "The Playful Red Panda",
      content: "Red pandas are arboreal mammals known for their distinctive red fur and bushy tails...",
    },
    {
      id: 7,
      title: "The Noble African Elephant",
      content: "African elephants are the largest land animals, with distinctive large ears and long tusks...",
    }
  ];

  return (
    <div class="container ">
      <div class="card mt-5">
        <div class="card-body">

        <h1>Blogs</h1>
        <ul className="animal-blog-list">
          {animalBlogs.map(blog => (
            <li className="animal-blog-item" key={blog.id}>
              <h3>{blog.title}</h3>
              <p>{blog.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div >
  );
};

export default Dashboard;
