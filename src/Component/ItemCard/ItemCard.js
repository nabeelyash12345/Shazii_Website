import { GradientCard } from "./gradient-card"
import tiles from '../../Assets/tiles.png'
import event from '../../Assets/event.png'
import Fashion from '../../Assets/ssss.png'
import Donate from '../../Assets/Do.png'
import Marketos from '../../Assets/market.png'
import   Fruitain  from '../../Assets/Do.png'
import  st from '../../Assets/st.png'
import Cleantroo  from '../../Assets/cleantroo.png'
import AbooraChai   from '../../Assets/cup.png'
import Universal  from '../../Assets/store.png'
import Digital from '../../Assets/DigitalMenu.png'




const cards = [
  {
    id: 1,
    icon: tiles,
    title: "Jan and sons tile ",
    description: "35+ years of experience",
    Projector:"5k+ Projects Done",
    gradient: "#FF6B9D, #C06C84",
    link:"/Services"
  },
  {
    id: 2,
    icon: event ,
    title: "Event Elegance",
    description: "Elevated events",
    gradient: "#FFD93D, #FEC868",
     Projector:"5k+ Projects Done",
    link:"/EventBrightos"
  },
  {
    id: 3,
    icon: Fashion,
    title: "Fashion Sounds",
    description: "Music for style",
     Projector:"5k+ Projects Done",
    gradient: "#FF6B6B, #FF8E72",
    
    link:"/FashionHands"
  },

  {
    id: 4,
    icon: Donate ,
    title: "Health & Happiness",
    description: "Wellness at heart",
     Projector:"5k+ Projects Done",
    gradient: "#6BCB77, #4D96FF",
    link:"/Donate"
  },
  {
    id: 5,
    icon: Marketos ,
    title: "Handcrafted",
    description: "Artistic creations",
     Projector:"5k+ Projects Done",
    gradient: "#8B7355, #D4A574",
  },
  {
    id: 6,
    icon: Fruitain,
    title: "Radiance",
    description: "Beauty essence",
    Projector:"5k+ Projects Done",
    gradient: "#A8D8FF, #FFB6C1",
  },
  {
    id: 7,
    icon:  st,
    title: "Social Masterclass",
    description: "Creative connection",
     Projector:"5k+ Projects Done",
    gradient: "#FF4757, #FF6348",
  },
  {
    id: 8,
    icon: Cleantroo,
    title: "Global Reach",
    description: "Worldwide vision",
     Projector:"5k+ Projects Done",
    gradient: "#2ED573, #26A69A",
  },
  {
    id: 9,
    icon: AbooraChai ,
    title: "Celebration Mode",
    description: "Joy moments",
    gradient: "#FFA502, #FFD93D",
     Projector:"5k+ Projects Done",
  },
  {
    id: 10,
    icon: Universal,
    title: "Infiniti Bliss",
    description: "Limitless possibilities",
    Projector:"5k+ Projects Done",
    gradient: "#845EC2, #D65DB1",
  },
  {
    id: 11,
    icon: Digital,
    title: "Digital Nexus",
    description: "Tech intersection",
    gradient: "#00D2D3, #928DAB",
     Projector:"5k+ Projects Done",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen   py-12 ">
      <div className="max-w-7xl ">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
          {cards.map((card) => (
            <GradientCard
              key={card.id}
              icon={card.icon}
              title={card.title}
              description={card.description}
              gradient={card.gradient}
              link={card.link}
              Projector={card.Projector}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
