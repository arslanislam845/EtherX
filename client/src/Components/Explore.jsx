import "../App.css";
import { Link } from "react-router-dom";

const skills = [
  {
    name: "Web development",
    imageUrl: "https://ezitech.us/wp-content/uploads/2022/05/ffff-69x69.png",
    Url: "#",
  },
  {
    name: "ML & AI",
    imageUrl:
      "https://ezitech.us/wp-content/uploads/2022/05/artificial-intelligence-3-69x69.png",
    Url: "#",
  },
  {
    name: "VR & AR",
    imageUrl: "https://ezitech.us/wp-content/uploads/2022/05/AR-69x69.png",
    Url: "#",
  },
  {
    name: "Marketing",
    imageUrl:
      "https://ezitech.us/wp-content/uploads/2022/10/social-media-1-63x63.png",
    Url: "#",
  },
  {
    name: "Gaming",
    imageUrl: "https://ezitech.us/wp-content/uploads/2022/05/vvvv-69x69.png",
    Url: "#",
  },
  {
    name: "Designing",
    imageUrl: "https://ezitech.us/wp-content/uploads/2022/05/www-69x69.png",
    Url: "/interface",
  },
  
  {
    name: "Robotics",
    imageUrl: "https://ezitech.us/wp-content/uploads/2022/05/bbbb-69x69.png",
    Url: "#",
  },
  {
    name: "Cyber Security",
    imageUrl: "https://ezitech.us/wp-content/uploads/2022/05/cccccc-69x69.png",
    Url: "#",
  },
  {
    name: "Amazon",
    imageUrl: "https://ezitech.us/wp-content/uploads/2022/05/aaaa-69x69.png",
    Url: "#",
  },

  {
    name: "BlockChain",
    imageUrl:
      "https://ezitech.us/wp-content/uploads/2022/05/blockchain-69x69.png",
    Url: "#",
  },
];

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-14  Explorefont">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 text-center md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-5xl font-bold  sm:text-4xl tracking-normal">
              Explore Marketplace
            </h2>
            <p className="text-xl text-gray-500">
              Millons of people are use <b>EtherX</b> to turn their ideas into
              reality.
            </p>
          </div>

          <div className="flex item-center justify-end">
            <ul className="ml-5 flex flex-wrap flex-end grid-cols-3">
              {skills.map((skill) => (
                <Link to="/interface">
                  <li className="justify-center">
                    <div
                      className="space-y-2 rounded-xl mx-5 mt-5 hover:mt-3 w-48 h-40 flex flex-col justify-center items-center cursor-pointer"
                      style={{ boxShadow: "0 5px 20px rgb(0 0 0 / 10%)" }}
                    >
                      <div className="aspect-w-3 aspect-h-2 cursor-pointer ">
                        <img
                          className="rounded-lg object-cover justify-center w-full h-auto "
                          style={{ width: 69, height: 69 }}
                          src={skill.imageUrl}
                          alt=""
                        />
                      </div>
                      <div>
                        <h1 className="text-lg font-semibold pt-2 text-center">
                          {skill.name}
                        </h1>
                      </div>
                    </div>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
