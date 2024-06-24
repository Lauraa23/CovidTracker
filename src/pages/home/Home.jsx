import React from "react";
import "./Home.css";


const Home = () => {
  return (
    <div id="root">
      <section id="header">
        <nav id="navbarHome">
          <img
            className="logoNavbar"
            src="assets/images/logo-white.png"
            alt="coronavirus"
          />
          <div className="navLinks">
            <ul className="navbarItems">
              <li>Home</li>
              <li>Prevention</li>
              <li>Qurantine</li>
              <li>Pages</li>
              <li>About</li>
              <li>Help</li>
              <a href="src/pages/tracker1/Tracker1.jsx">Tracker</a>
            </ul>
          </div>
        </nav>
        <div className="bannerContainer">
          <div className="messageSection">
            <h3>Stay Home, And Prayer For Victim Of Corona Virus</h3>
            <p>
              Human coronaviruses are common and are tipically associated with
              mild illnesses, similar to the common cold. The corona virus
              COVID-19 is affecting 210 countries & territories around the world
              and 2 international conveyances
            </p>
            <div className="countryStat">Country</div>
          </div>
          <div className="imageSection">
            <img
              className="bannerRightImage"
              src="/assets/images/banner-right-image1.png"
              alt="bannerRight"
            />
          </div>
        </div>
      </section>
      <section id="symptonWrapper">
        <div className="basicSympton">
          <h2>Symptom</h2>
          <h3>Basic Symptom Against Corona virus</h3>
        </div>
        <div className="symptomCarousel">
          <div className="symptomCard">
            <span>
              <img src="/assets/images/banner-right.png" alt="lungs" />
            </span>
            <h4>Aches and pains</h4>
            <p>
              Fever is a key symptom, experts say. Don't fixate on a number, but
              know it's really not a fever until your temperature reaches at
              least 100
            </p>
          </div>
          <div className="symptomCard">
            <span>
              <img src="/assets/images/cough.svg" alt="" />
            </span>
            <h4>Runny nose</h4>
            <p>
              {" "}
              People of all ages who experience fever and/or cough associated
              with difficulty breathing/shortness of breath.
            </p>
          </div>
          <div className="symptomCard">
            <span>
              <img src="/assets/images/breathing.svg" alt="" />
            </span>
            <h4>Sore throat</h4>
            <p>
              Older people, and those with underlying medical problems like high
              blood pressure, heart and lung problems, diabetes, or cancer
            </p>
          </div>
        </div>
      </section>
      <section id="preventWrapper">
        <div className="preventTitle">
          <h2>Prevent</h2>
          <h3>Best way to prevent is avoid virus.</h3>
        </div>
        <div className="preventWrapperContainer">
          <div className="preventCardsLeft">
            <div className="preventExplanation">
              <div className="mainImageContainer">
                <div className="hexImageContainer"></div>
                <img src="/assets/icons/avoid.png" alt="personalContact" />
              </div>
              <div className="preventTextContent">
                <h4>Personal Contact</h4>
                <p>
                  Fever is a key symptom, experts say. Don't fixate on a number,
                  but know it's really not a fever until your temperature
                  reaches at least 100
                </p>
              </div>
            </div>
            <div className="preventExplanation">
              <div className="mainImageContainer">
                <div className="hexImageContainer"></div>
                <img src="/assets/icons/wash-hand.png" alt="washHands" />
              </div>
              <div className="preventTextContent">
                <h4>Wash hands</h4>
                <p>
                  Maintain at least 1 metre (3 feet) distance between yourself &
                  anyone who is coughing or sneezing. If you are too close, get
                  chance to infected.
                </p>
              </div>
            </div>
            <div className="preventExplanation">
              <div className="mainImageContainer">
                <div className="hexImageContainer"></div>
                <img src="/assets/images/icon2.png" alt="socialDistancing" />
              </div>
              <div className="preventTextContent">
                <h4>Social distancing</h4>
                <p>
                  Hands touch many surfaces and can pick up viruses. So, hands
                  can transfer the virus to your eyes, nose or mouth and can
                  make you sick.
                </p>
              </div>
            </div>
          </div>
          <div className="preventCardsRight">
            <div className="preventExplanation">
              <div className="mainImageContainer">
                <div className="hexImageContainer"></div>
                <img src="/assets/icons/mouth-tissue.png" alt="respiratory" />
              </div>
              <div className="preventTextContent">
                <h4>Respiratory hygiene</h4>
                <p>
                  Maintain good respiratory hygiene as covering your mouth &
                  nose with your bent elbow or tissue when cough or sneeze.
                </p>
              </div>
            </div>
            <div className="preventExplanation">
              <div className="mainImageContainer">
                <div className="hexImageContainer"></div>
                <img src="/assets/icons/soap.png" alt="disinfect" />
              </div>
              <div className="preventTextContent">
                <h4>Clean And Disinfect</h4>
                <p>
                  Fever is a key symptom, experts say. Don't fixate on a number,
                  but know it's really not a fever until your temperature
                  reaches at least 100
                </p>
              </div>
            </div>
            <div className="preventExplanation">
              <div className="mainImageContainer">
                <div className="hexImageContainer"></div>
                <img src="/assets/images/icon4.png" alt="personalContact" />
              </div>
              <div className="preventTextContent">
                <h4>Wear a Facemask</h4>
                <p>
                  Our comprehensive Online Marketing strategy will boost your
                  website trafic hence monthly sales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="diseaseSpreadsWrapper">
        <div className="diseaseSpreadsContainer">
          <div className="spreadsTitleCenter">
            <h2>Spreads</h2>
            <h3>Disease spreads from person to person</h3>
          </div>
          <div className="spreadsCards">
            <div className="spreadPersonalCard">
              <div className="spreadImageContent">
                <img src="/assets/images/p-1.jpg" alt="facemask" />
              </div>
              <div className="spreadTextContent">
                <h4>Wear Facemask</h4>
                <p>
                  Fever is a key symptom, experts say. Don't fixate on a number,
                  but know it's really not a fever until your temperature
                  reaches at least 100
                </p>
              </div>
            </div>
            <div className="spreadPersonalCard">
              <div className="spreadImageContent">
                <img src="/assets/images/p-2.jpg" alt="washHands" />
              </div>
              <div className="spreadTextContent">
                <h4>Wash your hands often</h4>
                <p>
                  Coughing is another key symptom, but it's not just any cough,
                  said Schaffner. It should be a dry cough that you feel in your
                  chest.
                </p>
              </div>
            </div>
            <div className="spreadPersonalCard">
              <div className="spreadImageContent">
                <img src="/assets/images/p-6.jpg" alt="distance" />
              </div>
              <div className="spreadTextContent">
                <h4>Keep social distance</h4>
                <p>
                  Shortness of breath can be a third -- and very serious --
                  manifestation of Covid-19, and it can occur on its own,
                  without a cough.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="questionsWrapper">
        <div className="questionsContainer">
          <div className="questionsTitle">
            <h2>Faqs</h2>
            <h3>Frequently Asked Questions</h3>
          </div>
          <div className="questionsContentCards">
            <div className="questionsPanelGroupLeft">
              <div className="questionsPanelContent">
                <p>01. How does COVID-19 spread?</p>
              </div>
              <div className="questionsPanelContent">
                <p>02. What are the symptoms of COVID-19?</p>
              </div>
              <div className="questionsPanelContent">
                <p>03. Should I wear mask?</p>
              </div>
            </div>
            <div className="questionsPanelGroupRight">
              <div className="questionsPanelContent">
                <p>04. What does it mean to self-isolate?</p>
              </div>
              <div className="questionsPanelContent">
                <p>05. Can children or adolescents catch COVID-19?</p>
              </div>
              <div className="questionsPanelContent">
                <p>06. Is there a vaccine or drug for COVID-19?</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="footerElementsContainer">
          <div className="covimapLogo">
            <img src="/assets/images/logo-white.png" alt="coronavirusWhite" />
            <p>
              These droplets can land on objects and surfaces around the person
              such as tables, doorknobs and handrails.
            </p>
            <ul>
              <li>i</li>
              <li>i</li>
              <li>i</li>
              <li>i</li>
            </ul>
          </div>
          <div className="quicLinks">
            <h4>Quic Links</h4>
            <p>Prevention</p>
            <p>Qurantine</p>
            <p>About</p>
            <p>Help</p>
          </div>
          <div className="about">
            <h4>About</h4>
            <p>Hand wash</p>
            <p>Social Distance</p>
            <p>Isolate</p>
            <p>Difference</p>
          </div>
          <div className="help">
            <h4>Help</h4>
            <p>Hand wash</p>
            <p>Social Distance</p>
            <p>Isolate</p>
            <p>Difference</p>
          </div>
        </div>
        <div className="lowerFooter">
          <p>© Copyright 2020. All Rights Reserved</p>
          <p>Design by COVIDongas</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
