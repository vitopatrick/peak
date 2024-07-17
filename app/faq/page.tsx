import Jumbotron from "@/components/jumbotron/Jumbotron";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services does Peak Serve offer?",
    answer:
      "Peak Serve provides a wide range of logistics services including freight forwarding, warehousing, inventory management, distribution, and supply chain consulting.",
  },
  {
    question: "What industries does Peak Serve cater to?",
    answer:
      "We cater to a diverse range of industries including retail, manufacturing, healthcare, automotive, and technology.",
  },
  {
    question: "How do I track my shipment?",
    answer:
      "You can track your shipment through our online tracking system on our website. You will need your tracking number which is provided at the time of shipment.",
  },
  {
    question: "What are your delivery times?",
    answer:
      "Delivery times vary depending on the service selected and the destination. Standard delivery typically takes 3-5 business days, while express options are available for faster delivery.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, Peak Serve offers international shipping to various destinations around the world. Please contact our customer service for specific details regarding international shipments.",
  },
  {
    question: "What warehousing solutions do you provide?",
    answer:
      "We offer a range of warehousing solutions including short-term and long-term storage, climate-controlled facilities, cross-docking, and fulfillment services.",
  },
  {
    question: "How do you ensure the security of stored goods?",
    answer:
      "Our warehouses are equipped with state-of-the-art security systems including 24/7 surveillance, alarm systems, and access control measures to ensure the safety of your goods.",
  },
  {
    question: "Can I access real-time inventory information?",
    answer:
      "Yes, our advanced inventory management system allows clients to access real-time information about their inventory through our online portal.",
  },
  {
    question: "How can I contact Peak Serve customer support?",
    answer:
      "You can reach our customer support team via email at contact@peakserve.online, or through the contact form on our website.",
  },
];

const FaqPage = () => {
  return (
    <div>
      <Jumbotron title="Frequently Asked Question" />
      <div className="w-full p-4 lg:w-[40%] mx-auto">
        <Accordion type="multiple" className="w-full">
          {faqs.map((faq) => (
            <AccordionItem value={faq.question} key={faq.question}>
              <AccordionTrigger className="capitalize">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-light">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FaqPage;
