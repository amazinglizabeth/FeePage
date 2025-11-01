import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function Testimonials() {
  const stories = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=600&q=60",
      bg: "bg-yellow-100",
      title: "Transformative Payment Management",
      text: "This platform has completely transformed how we manage our international payments. It's fast, secure, and incredibly easy to use!",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600&q=60",
      bg: "bg-green-100",
      title: "Smarter Business Decisions",
      text: "I love the real-time insights feature. It gives me the data I need to make smarter business decisions on the spot.",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&q=60",
      bg: "bg-violet-100",
      title: "Top-Notch Security",
      text: "The security measures are top-notch. I feel confident knowing our transactions are protected at all times.",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=60",
      bg: "bg-pink-100",
      title: "Seamless Integration",
      text: "Integration with our existing systems was seamless. The support team was incredibly helpful throughout the entire process.",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=600&q=60",
      bg: "bg-blue-100",
      title: "Exceptional Customer Support",
      text: "The customer support is exceptional. They're always available and resolve any issues quickly. Highly recommend this platform!",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=60",
      bg: "bg-orange-100",
      title: "Game-Changing Analytics",
      text: "The analytics dashboard has been a game-changer for our team. We can now track everything in real-time and make data-driven decisions.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

  // Detect screen size and update slides per view
  useState(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2); // Tablet
      } else {
        setSlidesPerView(3); // Desktop
      }
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + slidesPerView >= stories.length ? 0 : prev + slidesPerView
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev - slidesPerView < 0
        ? Math.max(0, stories.length - slidesPerView)
        : prev - slidesPerView
    );
  };

  const visibleStories = stories.slice(
    currentIndex,
    currentIndex + slidesPerView
  );

  return (
    <section className="bg-[#f6f9ff] py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10">
          <div>
            <a
              href="#"
              className="text-sm font-medium text-blue-600 hover:underline"
            >
              Customers Stories
            </a>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
              Customers success is <br className="hidden sm:block" /> our
              success
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-4 mt-6 sm:mt-0">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="text-gray-700 w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex + slidesPerView >= stories.length}
              className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowRight className="text-white w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Stories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleStories.map((story) => (
            <div
              key={story.id}
              className={`rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition ${story.bg} flex flex-col`}
            >
              {/* Image */}
              <div className="flex justify-center items-center h-56 bg-white overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {story.title}
                </h3>
                <p className="text-gray-700 mb-6 flex-grow">{story.text}</p>
                <button className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-blue-600 transition">
                  Read Story <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
