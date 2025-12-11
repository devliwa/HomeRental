import { testimonials } from "../assets/data"
import TestimonialCard from "./TestimonialCard"

const TestimonialSection = () => {
  return <section className="max-w-7xl mx-auto px-6 py-16">
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12
  item-start">
    {/* Left Headline */}
    <div className="lg:col-span-1">
      <h2 className="text-4xl font-bold leading-tight
      text-zinc-900">
        What Our Customers Are Saying
      </h2>
    </div>
    {/* Right Testimonial Grid */}
    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
      {
        testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial}/>
        ))}
    </div>
  </div>

  </section>
}

export default TestimonialSection
