import React from "react";
import "./general.scss";
import teamwork from "../../assets/teamwork.png";
import arrow from "../../assets/arrow.svg";
import { Button } from "react-bootstrap";

const Home = () => {
    return (
        <div className="Home flex-row pl-5">
            <div className="home-left text-align-center">
                <div>
                    <h1>We Make Virtual Meeting Feel Real</h1>
                </div>
                <div className="mt-5">
                    <h3>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </h3>
                </div>
                <div className="flex-row mt-5 content-center">
                    <div>
                        <Button className="button get-started">Get Started</Button>
                    </div>
                    <div className="flex-row explore">
                        <a href="/">
                            <h5 className="ml-3">Or Explore Our Solutions</h5>
                        </a>
                        <div className="ml-3">
                            <img src={arrow} alt="explore" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-right px-auto">
                {/* Resolution is very bad */}
                <img src={teamwork} alt="teamwork" className="teamwork" />
            </div>
        </div>
    );
};

export default Home;
