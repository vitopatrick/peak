"use client";


const Jumbotron = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => {
  return (
    <div
      className="h-[50vh]"
      style={{
        backgroundImage:
          'url("https://giglogistics.com/static/media/banner.ca331fe5.jpeg")',
        backgroundPosition: "center center",
      }}
    >
      <div className="bg-black/60 h-full flex items-center justify-center flex-col space-y-3">
        <h4 className="font-bold text-2xl lg:text-4xl text-white text-center">
          {title}
        </h4>
        <p className="text-white text-center">{subtitle}</p>
      </div>
    </div>
  );
};

export default Jumbotron;
