// app/components/Services.jsx
import {
  PencilIcon,
  DevicePhoneMobileIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    Icon: PencilIcon,
    title: "Design",
    description: "Clean, intuitive layouts that resonate.",
  },
  {
    Icon: DevicePhoneMobileIcon,
    title: "Development",
    description: "Modern, responsive React sites that load fast.",
  },
  {
    Icon: Cog6ToothIcon,
    title: "Optimization",
    description: "Performance tuning, SEO, and lightning-fast UX.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="px-4 py-20 bg-white text-center"
    >
      <h2 className="text-3xl font-bold text-navy mb-8">What We Do</h2>
      <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 md:grid-cols-3">
        {services.map(({ Icon, title, description }) => (
          <div
            key={title}
            className="flex flex-col items-center space-y-4 rounded-lg border border-gray-200 p-6 hover:shadow-lg transition"
          >
            <Icon className="h-12 w-12 text-teal" />
            <h3 className="text-xl font-semibold text-navy">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}