import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-primary shadow-lg' : 'bg-primary/90'} backdrop-blur-md`}>
      <div className="overflow-hidden h-10 sm:h-12 md:h-14 flex items-center">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          <span className="font-medium text-xs sm:text-sm md:text-lg text-white mx-4 sm:mx-8">
            🎉 กิจกรรมวันเด็ก Children's Day 2026: Survivor and Nature Play ฝ่าวิกฤติด้วยวิถีธรรมชาติ &gt;&gt; พบกันวันเสาร์ที่ 31 มกราคม 2569
          </span>
          <span className="font-medium text-xs sm:text-sm md:text-lg text-white mx-4 sm:mx-8">
            🎉 กิจกรรมวันเด็ก Children's Day 2026: Survivor and Nature Play ฝ่าวิกฤติด้วยวิถีธรรมชาติ &gt;&gt; พบกันวันเสาร์ที่ 31 มกราคม 2569
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
