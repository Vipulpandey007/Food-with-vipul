import User from "./User";
import { Component } from "react";

class About extends Component {
  constructor() {
    super();
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <h1 className="text-center text-4xl font-bold">About Me</h1>
        <div className="w-1/4 my-14 ml-14  px-12 h-80 py-10 rounded-lg shadow-2xl shadow-gray-950 flex items-center bg-white dark:bg-gray-900 transition-colors duration-100 group">
          <div className="h-72 overflow-y-hidden">
            <div className="flex h-full flex-col gap-10 translate-y-16 group-hover:translate-y-0 transition-transform duration-500 cursor-pointer">
              <div className="flex flex-col gap-6">
                <h2 className="text-xl md:text-2xl font-titleFont font-bold text-black dark:text-white">
                  <User />
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
