import { TeamCard } from "./team-card"

import Shahzad from '../../Assets/ss.png'
import Roshid from '../../Assets/Rashid.png'
import Sajjad from '../../Assets/sajjed.png'
import Arslan from '../../Assets/ar.png'


const teamMembers = [
  {
    id: 1,
    name: "Shahzad Hussain",
    position: "Managing Director",
    description:
      "A Managing Director (MD) oversees the overall operations and strategic direction of the company. They are responsible for making key business decisions, managing senior leadership, and ensuring company goals are met.",
    avatar: Shahzad,
    rating: 5,
  },
  {
    id: 2,
    name: "Roshid Hussain",
    position: "Co-Founder",
    description:
      "At Shazir Enterprise, our success is driven by a passionate and experienced team of professionals. Each member brings a unique set of skills, working together to deliver excellence across various industries.",
    avatar:Roshid,
    rating: 5,
  },
  {
    id: 3,
    name: "Sajjad Hussain",
    position: "Finance Manager",
    description:
      "A Finance Manager oversees the financial health of a company by managing budgets, analyzing financial data, and ensuring compliance with regulations. They develop strategies to improve financial performance.",
    avatar: Sajjad,
    rating: 5,
  },
  {
    id: 4,
    name: "Arslan Hussain",
    position: "HR Manager",
    description:
      "HR Manager oversees recruitment, employee relations, and performance management. They develop and implement company policies and training programs to create a positive workplace.",
    avatar: Arslan,
    rating: 5,
  },
]

export function TeamSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our team</h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl">
            At Shazir Enterprise, our success is driven by a passionate and experienced team of professionals. Each
            member brings a unique set of skills, working together to deliver excellence across various industries.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} {...member} />
          ))}
        </div>
      </div>
    </section>
  )
}
