const AboutUsPage = () => {
  return (
    <div>
      {/* container flex */}
      <div className=" w-[80%] mx-auto p-2 md:grid grid-cols-3 gap-8">
        <div className="w-full flex-1">
          <h4 className="md:text-3xl text-3xl  font-semibold">About Us</h4>
        </div>
        <div className=" col-span-2">
          <img
            src="https://apexserve.org/assets/db85e570/images/1.jpg"
            alt="pic"
            className="rounded-md w-full"
          />
          <div className="w-full">
            <h4 className="font-semibold text-2xl md:text-2xl my-3">
              Who Are We
            </h4>
            <p className="font-body font-light text-[0.9rem]">
              Peak Serve is a top ten global logistics company. We run our
              business as one, highly integrated network of people, technology
              and physical assets in 34 countries, with over 88,000 employees
              and 1,440 locations. We use our network to help customers manage
              their goods more efficiently throughout their supply chains.
            </p>
          </div>
        </div>
      </div>
      {/* second section */}
      <div className="my-[4rem]">
        {/* container */}
        <section className="w-[80%] mx-auto">
          <div>
            <h4 className="text-2xl md:text-4xl font-headerTwo  font-semibold">
              Our Goal
            </h4>
            <p className="md:w-[60%] font-body font-light ">
              To be the worlds leading Ecommerce logistics platform.We are
              committed to relentlessly exceed customer’s expectation through
              innovative technology solutions for logistics
            </p>
          </div>
        </section>
      </div>
      {/* third One */}
      <div className="my-[4rem]">
        {/* container */}
        <section className="w-[80%] mx-auto">
          <div>
            <h4 className="text-2xl md:text-4xl font-headerTwo font-semibold">
              Our team
            </h4>
            <p className="md:w-[60%] font-body font-light">
              Our team is made up of experienced professionals with a deep
              understanding of the industry. We are dedicated to providing our
              clients with personalized solutions tailored to their unique
              business needs. Get to know some of our team members below.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;
