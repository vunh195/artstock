import React from 'react';
import { Wrapper } from './CollectionsDetail.styled';
export const CollectionsDetail = () => {
  return (
    <Wrapper>
      <div className="images">
        <div className="col">
          <img
            src={require(`assets/collections detail/detail1.png`).default}
            alt=""
            className="left"
          />
        </div>
        <div className="col">
          <div className="row">
            <img
              src={require(`assets/collections detail/detail2.png`).default}
              alt=""
              className="top-right"
            />
          </div>
          <div className="row">
            <div className="col2">
              <img
                src={require(`assets/collections detail/detail3.png`).default}
                alt=""
              />
            </div>
            <div className="col2">
              {' '}
              <img
                src={require(`assets/collections detail/detail3.png`).default}
                className="bottom-right"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="left">
          <div className="title">George Condo Comparable</div>
          <div className="tabs">
            <div className="tab active">Investment Opened</div>
            <div className="tab">Provenance</div>
            <div className="tab">Exhibition History</div>
            <div className="tab">Historical Sales</div>
            <div className="tab">Investment Rationale</div>
            <div className="tab">Investment Rationale</div>
          </div>
          <div className="row-data">
            <div className="label">Artist Information</div>
            <div className="txt">
              <div>
                This exhibition is a rare chance to experience two of Yayoi
                Kusama’s Infinity Mirror Rooms. These immersive installations
                will transport you into Kusama’s unique vision of endless
                reflections.
              </div>
              <div>
                Infinity Mirrored Room – Filled with the Brilliance of Life is
                one of Kusama’s largest installations to date and was made for
                her 2012 retrospective at the gallery. It is shown alongside
                Chandelier of Grief, a room which creates the illusion of a
                boundless universe of rotating crystal chandeliers.
              </div>
              <div>
                A small presentation of photographs – some on display for the
                first time – provides historical context for the global
                phenomenon that Kusama’s mirrored rooms have become today.
              </div>
            </div>
          </div>
          <div className="pseudo"></div>
          <div className="row-data">
            <div className="label">Provenance</div>
            <div className="txt">
              <div>
                Sprüth Magers Gallery, Los AngelesPrivate Collection (acquired
                from the above in 2020)
              </div>
            </div>
          </div>
          <div className="pseudo"></div>
          <div className="row-data">
            <div className="label">Exhibition History</div>
            <div className="txt">
              <div>
                Los Angeles, Sprüth Magers Gallery, George Condo, ‘What’s the
                Point?’, April - June, 2019
              </div>
            </div>
          </div>
          <div className="pseudo"></div>{' '}
          <div className="row-data">
            <div className="label">Historical Sales</div>
            <div className="txt">
              <div>
                <img
                  src={require(`assets/collections detail/chart.png`).default}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="pseudo"></div>{' '}
          <div className="row-data">
            <div className="label">Investment Rationale</div>
            <div className="txt">
              <div>
                George Condo is one of the most sought after contemporary
                artists, and was the 5th highest grossing contemporary artist at
                auction in 2021. Condo’s works have achieved average annual
                returns of 16.5% since 2002, compared to 7.4% for the S&P 500.
                Condo’s average price point increased 500% from 2015 to 2021.
                Condo’s sales values increased 50% in 2021 compared to 2020.
              </div>
              <div>
                The Outcast brings together the best of Condo. Combining his
                iconic use of portraiture with the imposing scale of his most
                desirable works. Condo’s market has seen exceptional growth and
                returns over the last 20 years, with a particular acceleration
                since 2017. International collectors have been captivated by
                Condo’s layering, brave compositions, and mix of fluid and
                deliberate brush strokes, elements that are all featured in this
                painting. This growing international appeal has resulted in
                Condo becoming one of the most sought after contemporary
                artists, and he was the 5th highest grossing contemporary artist
                at auction in 2021.
              </div>
              <div>
                Condo’s works have achieved average annual returns of 16.5%
                since 2002, compared to 7.4% for the S&P 500, and his average
                price point increased 500% from 2015 to 2021.
              </div>
              <div>
                George Condo’s market has seen consistent growth since his major
                George Condo: Mental States exhibition at New York’s New Museum
                in 2011. According to the LiveArt Index this growth has
                accelerated further since the start of 2017, with market gains
                of 319%.
              </div>
              <div>
                According to ArtTactic 10% (98 artworks) of George Condo works
                to appear at auction since 2000 have been repeat sales. Of these
                works 75 of them have realised increased prices, with an overall
                average compound growth rate of 22.4%.
              </div>
              <div>
                Condo’s market has continued to prosper throughout the pandemic,
                with three of his top five auction results being set since July
                2020. A major factor in this growth has been his international
                appeal with both Sotheby’s and Christie’s selling $2m+ works by
                Condo in their New York, London and Hong Kong auctions. This
                coupled with an increase in international, dedicated,
                exhibitions shows strong potential for continued market
                momentum.
              </div>
              <div>
                This unique blend of attributes marks the painting as an
                outstanding, investment grade, example from Condo’s larger
                portfolio. Mintus additionally believes that
              </div>
              <div>
                Condo’s market momentum has both short- and long-term strength,
                and as such believes that this painting should continue to
                appreciate in value over the next 2 to 7 years.
              </div>
            </div>
          </div>
          <div className="pseudo"></div>
        </div>
        <div className="right">
          <div className="asset-value">
            <div className="value">
              <div className="row1">
                <div className="label">Asset Value</div>
                <div className="val">$300,000</div>
              </div>{' '}
              <div className="row">
                <div className="label">Value Per Share</div>
                <div className="val2">$20.36</div>
              </div>{' '}
              <div className="row">
                <div className="label">Minimum Investment</div>
                <div className="val2">$3,000</div>
              </div>
            </div>
            <div className="btn">Check Availability</div>
          </div>
          <div className="investment-overview">
            <div className="head">Investment Overview</div>
            <div className="row">
              <div className="label">Auction History</div>
              <div className="val2">20+ Years</div>
            </div>{' '}
            <div className="row">
              <div className="label">2020 Auction Sales</div>
              <div className="val2">$55.2M</div>
            </div>
          </div>
          <div className="comparable">
            <div className="head">George Condo Comparable Sales</div>
            <img
              src={require(`assets/collections detail/chart.png`).default}
              alt=""
            />
          </div>
          <div className="asset-overview">
            <div className="head">Asset Overview</div>
            <div className="row">
              <div className="label">Initial Offer Price</div>
              <div className="val2">$2,907,000</div>
            </div>
          </div>
        </div>
      </div>
      <div className="exhibitions-details">
        <div className="left">
          <div className="title">Exhibitions Details</div>
          <div className="txt">
            This exhibition is a rare chance to experience two of Yayoi Kusama’s
            Infinity Mirror Rooms. These immersive installations will transport
            you into Kusama’s unique vision of endless reflections.
          </div>
          <div className="txt">
            Infinity Mirrored Room – Filled with the Brilliance of Life is one
            of Kusama’s largest installations to date and was made for her 2012
            retrospective at the gallery. It is shown alongside Chandelier of
            Grief, a room which creates the illusion of a boundless universe of
            rotating crystal chandeliers.
          </div>
          <div className="txt">
            A small presentation of photographs – some on display for the first
            time – provides historical context for the global phenomenon that
            Kusama’s mirrored rooms have become today.
          </div>
        </div>
        <div className="right">
          <img
            src={require(`assets/collections/collections1.png`).default}
            alt=""
          />
        </div>
      </div>
    </Wrapper>
  );
};
export default CollectionsDetail;
