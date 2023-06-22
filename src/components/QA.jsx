import React from "react";
import faq from "../assets/faq.png";

const QA = () => {
  return (
    <div className="container mx-auto py-20">
      <h2 className="font-bold text-5xl text-black py-5">
        Frequently Asked Any Questions
      </h2>
      <div className="md:flex">
        <div className="">
          <img className="h-full p-4" src={faq} alt="" />
        </div>
        <div className="text-left py-8 w-3/4">
          <div
            tabIndex={0}
            className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box py-3"
          >
            <div className="collapse-title text-xl font-medium">
              What is the difference between a chef and a cook?
            </div>
            <div className="collapse-content">
              <p>
                While the terms "chef" and "cook" are often used
                interchangeably, there is a difference. A chef is a professional
                cook who has completed culinary school training, has significant
                experience in a commercial kitchen, and is typically responsible
                for managing the kitchen and creating menus. A cook, on the
                other hand, may or may not have formal training and typically
                performs specific tasks within the kitchen.
              </p>
            </div>
          </div>
          <div
            tabIndex={1}
            className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box py-3"
          >
            <div className="collapse-title text-xl font-medium">
              What are some common kitchen safety tips?
            </div>
            <div className="collapse-content">
              <p>
                Some common kitchen safety tips include washing your hands
                before cooking, using caution when handling hot surfaces and
                objects, keeping knives and other sharp objects out of reach of
                children, and never leaving cooking food unattended on the
                stove.
              </p>
            </div>
          </div>
          <div
            tabIndex={2}
            className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box py-3"
          >
            <div className="collapse-title text-xl font-medium">
              What are some healthy cooking techniques?
            </div>
            <div className="collapse-content">
              <p>
                Some healthy cooking techniques include grilling, roasting,
                baking, and steaming. These methods typically require little to
                no added fat and can help retain the nutrients in the food
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QA;
