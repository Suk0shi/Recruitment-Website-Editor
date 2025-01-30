import '../styles/InfiniteScrollbar.css'
import { useEffect, useRef, useState } from "react";

function InfiniteScrollbar() {
  const items = [
    "Housekeepers", 
    "Cleaners", 
    "Cooks", 
    "Nannies", 
    "Ladies Maids", 
    "Governesses",
    "Private Tutor’s",
    "Maternity Nurses",
    "Chefs",
    "Butlers",
    "Personal Trainers",
    "Gardeners / Handyman / Maintenance Staff",
    "House Managers",
    "Villa and Estate Managers",
    "Chauffeurs",
    "Security Staff",
    "Private PA’s",
    "Yachting Staff",
    "Aviation Staff",
  ];
  const carouselRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [scrollbarWidth, setScrollbarWidth] = useState(0);

  //gets half the list width (because list is doubled) for when to repeat animation
  useEffect(() => {
    if (carouselRef.current) {
      const listWidth = carouselRef.current.scrollWidth / 2;
      setScrollWidth(listWidth);
    }
  }, []);

  //If there is a scrollbar - take its width so that it can be subtracted from 100vw
  useEffect(() => {
    const updateScrollbarWidth = () => {
      const width = window.innerWidth - document.documentElement.clientWidth;
      setScrollbarWidth(width);
    };

    updateScrollbarWidth();
    window.addEventListener("resize", updateScrollbarWidth);

    return () => window.removeEventListener("resize", updateScrollbarWidth);
  }, []);

  return (
    <div className="jobCarouselContainer" 
      style={{ width: `calc(100vw - ${scrollbarWidth}px)` }}
    >
      <ul
        className="jobCarousel"
        ref={carouselRef}
        style={{ "--scroll-width": `${scrollWidth}px` }}
      >
        {[...items, ...items].map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default InfiniteScrollbar