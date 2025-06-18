import { useEffect, useRef } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";

const TestimonialSlider = () => {
  const sliderRef = useRef(null);
  const instanceRef = useRef(null);
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      instanceRef.current = new KeenSlider(sliderRef.current, {
        loop: true,
        slides: {
          origin: "center",
          perView: 1.2,
          spacing: 16,
        },
        breakpoints: {
          "(min-width: 768px)": {
            slides: {
              perView: 1.5,
              spacing: 24,
            },
          },
          "(min-width: 1024px)": {
            slides: {
              perView: 2,
              spacing: 32,
            },
          },
        },
        mode: "free-snap",
        drag: true, // Enables touch dragging on mobile
      });

      // Attach event listeners
      const prevBtn = prevBtnRef.current;
      const nextBtn = nextBtnRef.current;

      if (prevBtn && nextBtn) {
        prevBtn.addEventListener("click", handlePrev);
        nextBtn.addEventListener("click", handleNext);
      }

      return () => {
        instanceRef.current?.destroy();
        if (prevBtn && nextBtn) {
          prevBtn.removeEventListener("click", handlePrev);
          nextBtn.removeEventListener("click", handleNext);
        }
      };
    }
  }, []);

  const handlePrev = () => {
    instanceRef.current?.prev();
  };

  const handleNext = () => {
    instanceRef.current?.next();
  };

  return (
    <section className="bg-gray-50 text-white mb-10">
      <div className="mx-auto max-w-[1340px] px-6 py-12 sm:px-8 lg:py-16 xl:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
          <div className="max-w-xl text-center sm:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Hear from our happy customers!
            </h2>
            <p className="mt-4 text-gray-800">
              See what our users have to say about our services and their experiences.
            </p>
            <div className="hidden lg:mt-8 lg:flex lg:gap-4">
              <button
                ref={prevBtnRef}
                aria-label="Previous slide"
                className="rounded-full border border-gray-900 p-3 text-gray-700 transition hover:bg-gray-600 hover:text-white cursor-pointer"
              >
                <svg
                  className="size-5 -rotate-180 transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
              <button
                ref={nextBtnRef}
                aria-label="Next slide"
                className="rounded-full border border-gray-900 p-3 text-gray-700 transition hover:bg-gray-600 hover:text-white cursor-pointer"
              >
                <svg
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Slider */}
          <div className="-mx-6 lg:col-span-2 lg:mx-0">
            <div ref={sliderRef} className="keen-slider">
              {/* Testimonial 1 */}
              <div className="keen-slider__slide bg-white p-6 shadow-lg rounded-lg text-gray-900">
                <p className="text-lg font-medium">
                  “This service has changed my life! The quality is unmatched, and I couldn’t be happier.”
                </p>
                <div className="mt-4 flex items-center gap-4">
                  <img
                    className="size-12 rounded-full object-cover"
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="User 1"
                  />
                  <div>
                    <h3 className="text-md font-semibold">John Doe</h3>
                    <p className="text-sm text-gray-500">Software Engineer</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="keen-slider__slide bg-white p-6 shadow-lg rounded-lg text-gray-900">
                <p className="text-lg font-medium">
                  “I was blown away by the level of support and the amazing results I got.”
                </p>
                <div className="mt-4 flex items-center gap-4">
                  <img
                    className="size-12 rounded-full object-cover"
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="User 2"
                  />
                  <div>
                    <h3 className="text-md font-semibold">Sarah Johnson</h3>
                    <p className="text-sm text-gray-500">Marketing Specialist</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="keen-slider__slide bg-white p-6 shadow-lg rounded-lg text-gray-900">
                <p className="text-lg font-medium">
                  “Exceptional experience from start to finish. I highly recommend their services.”
                </p>
                <div className="mt-4 flex items-center gap-4">
                  <img
                    className="size-12 rounded-full object-cover"
                    src="https://randomuser.me/api/portraits/men/50.jpg"
                    alt="User 3"
                  />
                  <div>
                    <h3 className="text-md font-semibold">Michael Brown</h3>
                    <p className="text-sm text-gray-500">Product Manager</p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
