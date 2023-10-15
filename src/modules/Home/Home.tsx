import React from 'react';
import { Wrapper } from './Home.styled';
import withConnect from 'hoc/withWallet';
import withLocomotive from 'hoc/withLocomotiveScroll';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { FAQS, QUESTIONS } from './Home.hard';
const HomePage = ({ containerRef }: any) => {
  const [activeQ, setActiveQ] = React.useState(0);
  const [activeFAQ, setActiveFAQ] = React.useState(0);
  return (
    <Wrapper ref={containerRef} data-scroll-container>
      <div className="section1">
        <div className="bg"></div>
        <div className="left">
          <div className="title">Fine Art Investing for Everyone</div>
          <div className="subtitle">
            Buy and sell shares of contemporary artworks by world-class artists.
          </div>
          <button>Become a member</button>
        </div>
        <div className="right">
          <img src={require(`assets/homepage/home1.png`).default} alt="" />
        </div>
      </div>
      <div className="section2">
        <div className="title">Net Annualized Track Record</div>
        <div className="cards">
          <div className="card">
            <div className="image">
              <img
                src={require(`assets/homepage/record1.png`).default}
                alt=""
              />
            </div>
            <div className="info">
              <div className="head1">ancient treasure vase</div>
              <div className="head2">Annualized Net Return</div>
              <div className="head3">
                <div className="num1">21.5%</div>
                <div className="num2">638 days held</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <img
                src={require(`assets/homepage/record1.png`).default}
                alt=""
              />
            </div>
            <div className="info">
              <div className="head1">ancient treasure vase</div>
              <div className="head2">Annualized Net Return</div>
              <div className="head3">
                <div className="num1">21.5%</div>
                <div className="num2">638 days held</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <img
                src={require(`assets/homepage/record1.png`).default}
                alt=""
              />
            </div>
            <div className="info">
              <div className="head1">ancient treasure vase</div>
              <div className="head2">Annualized Net Return</div>
              <div className="head3">
                <div className="num1">21.5%</div>
                <div className="num2">638 days held</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section3">
        <div className="title">Featured collections</div>
        <div className="collection">
          <div className="top">
            <div className="bg">
              <img
                src={require(`assets/homepage/collection.png`).default}
                alt=""
              />
            </div>
            <div className="info">
              <div className="stats">
                <div className="row">
                  <TrendingUpIcon />
                  <div className="txt1">Painting value</div>
                  <div className="txt2">$ 2,907,000</div>
                </div>
                <div className="row">
                  <div className="txt1">
                    Current Market Valuation (Appraised by Appraisal)
                  </div>
                  <div className="txt2">$ 3,150,000</div>
                </div>
              </div>
              <div className="btn">View more details</div>
            </div>
          </div>
          <div className="bottom">
            <div className="txt1">Coming dec 2023</div>
            <div className="txt2">Artemisia Gentileschi talk</div>
            <div className="txt3">
              As of August 2023, large-format colorful examples that employ
              soak-stain from the 1970s account for nine of Helen
              Frankenthaler’s top ten auction records, suggesting particular
              demand for these works amongst collectors.
            </div>
          </div>
        </div>
        <div className="btn-view">View all upcoming collections</div>
      </div>
      <div className="section4">
        <div className="title">Invest in Multi-Million Dollar Art</div>
        <div className="row">
          <div className="left">
            <img src={require(`assets/homepage/section4.png`).default} alt="" />
          </div>
          <div className="right">
            <div className="questions">
              {QUESTIONS.map((item, key) => {
                return (
                  <div
                    className={
                      activeQ === key
                        ? 'question-wrapper more'
                        : 'question-wrapper'
                    }
                    key={key}
                    onClick={() => {
                      if (key === activeQ) {
                        setActiveQ(-1);
                        return;
                      }
                      setActiveQ(key);
                    }}
                  >
                    <div className="question">
                      <div className="txt">{item.q}</div>
                      {activeQ === key ? (
                        <KeyboardArrowUpIcon />
                      ) : (
                        <KeyboardArrowDownIcon />
                      )}
                    </div>
                    <div className="answer">{item.a}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="section5">
        <div className="bg">
          <img src={require(`assets/homepage/member.png`).default} alt="" />
        </div>
        <div className="content">
          <div className="title">exhibitions, Members only and more</div>
          <div className="sub">
            See how much your vacation rental could be making with ArtStock. Get
            a free revenue estimate for your property today.
          </div>
          <div className="btn">Become a member</div>
        </div>
      </div>
      <div className="section6">
        <div className="title">FAQ</div>
        <div className="faqs">
          {FAQS.map((item, key) => {
            return (
              <div
                className={activeFAQ === key ? 'faq more' : 'faq'}
                key={key}
                onClick={() => {
                  if (key === activeFAQ) {
                    setActiveFAQ(-1);
                    return;
                  }
                  setActiveFAQ(key);
                }}
              >
                <div className="txt">
                  <div className="q">{item.q}</div>
                  <div className="a">{item.a}</div>
                </div>
                <div className="ic">
                  {activeFAQ === key ? <CloseIcon /> : <AddIcon />}{' '}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default withConnect(withLocomotive(HomePage));
