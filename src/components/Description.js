import React from "react";

const Description = () => {
  return (
    <div className="p-4 my-3 bg-gray-50 rounded-md shadow-md">
      <p className="font-semibold text-2xl">Description</p>

      {[...Array(3)].map((_, i) => (
        <div key={i} className="my-4">
          <h2 className="text-2xl font-bold">
            ROWA 32S52 32 Inch HD Android Smart LED Television
          </h2>
          <p>
            ROWA 32S52 32 Inch Android Smart LED Television has a 32-inch HD
            display with a resolution of 1366×768 pixels. This television
            delivers stunning visual clarity and detail. You can enjoy a wider
            range of colors and brightness levels with HDR10 and experience
            crystal-clear audio with Dolby Audio technology. Dynamic Color
            Enhancement provides vivid and lifelike hues, making colors pop and
            adding depth to images. The ROWA 32S52 television also features HDMI
            2.0, allowing you to connect your favorite devices and enjoy
            high-quality audio and video. With Chromecast Built-in, you can
            easily stream content from your smartphone or tablet directly to the
            TV. ROWA 32S52 32 Inch HD Android Smart TV provides access to all
            your favorite apps and streaming services, including popular
            services like Netflix, Amazon Prime Video, and YouTube. Built-in
            Wi-Fi allows for seamless streaming and connectivity. With multiple
            HDMI and USB ports, connecting your devices to the television is
            easy.
          </p>
        </div>
      ))}
    </div>
  );
};

export default Description;
