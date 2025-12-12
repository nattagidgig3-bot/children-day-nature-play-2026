import { Package, Clock, Banknote, CheckCircle2 } from 'lucide-react';
import giveItemsImg from '../assets/give-items.jpg';
import giveTimeImg from '../assets/give-time.jpg';
import giveMoneyImg from '../assets/give-money.jpg';


const cards = [
  {
    icon: Package,
    image: giveItemsImg,
    title: 'สิ่งของ',
    subtitle: 'Give Items',
    description: 'บริจาคอุปกรณ์สำหรับกิจกรรมและการเรียนรู้ของเด็กๆ',
    items: ['เต็นท์ / เสื่อรองนอน', 'ชุดปฐมพยาบาล', 'เมล็ดพันธุ์พืช', 'อุปกรณ์เดินป่า'],
    color: 'primary',
  },
  {
    icon: Clock,
    image: giveTimeImg,
    title: 'เวลา / อาสา',
    subtitle: 'Give Time',
    description: 'ร่วมเป็นอาสาสมัครดูแลและนำกิจกรรมให้เด็กๆ',
    items: ['พี่เลี้ยงกิจกรรม', 'วิทยากรสอนทักษะ', 'ผู้ช่วยประสานงาน', 'ช่างภาพ / วิดีโอ'],
    color: 'secondary',
  },
  {
    icon: Banknote,
    image: giveMoneyImg,
    title: 'เงินทุน',
    subtitle: 'Give Money',
    description: 'สนับสนุนค่าอาหาร วัสดุการเรียนรู้ และค่าดำเนินกิจกรรม',
    items: ['อาหารและเครื่องดื่ม', 'อุปกรณ์การเรียนรู้', 'ค่าเดินทาง', 'ของที่ระลึกเด็ก'],
    color: 'primary',
  },
];

const WaysToGiveSection = () => {
  const handleCardClick = (type: string) => {
    if (type === 'Give Time') {
      window.open('https://lin.ee/UmzN9LL', '_blank');
    } else {
      const element = document.getElementById('donate');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="ways-to-give" className="section-padding gradient-nature-bg">
      <div className="container mx-auto">
        {/* Infographic Image */}


        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16 px-2">
          <span className="inline-block text-secondary font-medium mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-wider">
            3 รูปแบบการให้
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            รูปแบบการให้ของคุณ
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            ไม่ว่าคุณจะมีอะไรพร้อมแบ่งปัน เราพร้อมรับและส่งต่อให้เด็กๆ ทุกการให้มีคุณค่าเท่ากัน
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="card-giving group p-4 sm:p-6"
            >
              {/* Image instead of Icon */}
              <div className="mb-6 rounded-xl overflow-hidden shadow-sm">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Title */}
              <div className="mb-3 sm:mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">{card.title}</h3>
                <span className="text-xs sm:text-sm text-muted-foreground">{card.subtitle}</span>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">{card.description}</p>

              {/* Items List */}
              <ul className="space-y-2 sm:space-y-3">
                {card.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-foreground">
                    <CheckCircle2 className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 ${card.color === 'secondary' ? 'text-secondary' : 'text-primary'
                      }`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={() => handleCardClick(card.subtitle)}
                className={`mt-6 sm:mt-8 w-full py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-medium transition-all duration-300 ${card.color === 'secondary'
                  ? 'bg-secondary/10 text-secondary hover:bg-secondary hover:text-secondary-foreground'
                  : 'bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground'
                  }`}
              >
                {card.subtitle === 'Give Time' ? 'ร่วมสนับสนุน (LINE)' : 'ร่วมสนับสนุน'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WaysToGiveSection;
