import React, { useContext } from "react";
import { ThemeContext } from "../../Components/ThemeContext/ThemeContext";
import { FaStar } from "react-icons/fa";

const ReviewsMarquee = () => {
  const { theme } = useContext(ThemeContext);

  const reviews = [
    {
      name: "Alice Johnson",
      photoURL: "https://randomuser.me/api/portraits/women/1.jpg",
      rating: 5,
      comment: "Amazing toys! My kids love them. Highly recommended!",
    },
    {
      name: "Bob Smith",
      photoURL: "https://randomuser.me/api/portraits/men/2.jpg",
      rating: 4,
      comment: "Great service and fast delivery. Toys are top quality.",
    },
    {
      name: "Charlie Davis",
      photoURL: "",
      rating: 5,
      comment: "Perfect gifts for my kids. They are so happy!",
    },
    {
      name: "Diana Miller",
      photoURL: "https://randomuser.me/api/portraits/women/3.jpg",
      rating: 4,
      comment: "Loved the variety and quality of toys. Will order again!",
    },
    {
      name: "Ethan Brown",
      photoURL: "https://randomuser.me/api/portraits/men/4.jpg",
      rating: 5,
      comment: "Excellent customer service and very responsive team.",
    },
  ];

  const repeatedReviews = [...reviews, ...reviews];

  return (
    <section
      className={`py-16 transition-colors duration-500 mt-10
         ${
        theme === "dark" ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-800"
      }`}
    >
      <h2 className="text-4xl font-extrabold text-center mb-8 underline">
        🗣️ Customer Reviews
      </h2>

      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee">
          {repeatedReviews.map((review, idx) => (
            <div
              key={idx}
              className={`min-w-[280px] max-w-sm p-6 rounded-xl shadow-lg flex-shrink-0 mx-4 transition-colors duration-500 ${
                theme === "dark" ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200"
              }`}
            >
              <div className="flex items-center gap-4">
                <img
                  src={review.photoURL || "https://i.ibb.co/MBtjqXQ/user.png"}
                  alt={review.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary"
                />
                <div>
                  <h3 className="font-bold">{review.name}</h3>
                  <div className="flex gap-1 text-yellow-400 mt-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm">"{review.comment}"</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes marquee {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default ReviewsMarquee;
