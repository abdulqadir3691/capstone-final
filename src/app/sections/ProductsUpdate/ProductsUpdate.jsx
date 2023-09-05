import React from "react";
import Image from "next/image";
import Apple from "../../../assets/green-apple.svg";
import "./ProductsUpdate.css";

import cabbage from "../../../assets/cathrine cabage.svg";
import Latuce from "../../../assets/green-letce.svg";
import Chili from "../../../assets/green-chili.svg";
import Corn from "../../../assets/corn.svg";
import Ratings from "../../../assets/Rating (1)r.svg";
import DiscountBanner from "../../../assets/banner-discount.svg";
import Malta from "../../../assets/indian-malta.svg";
import Potato from "../../../assets/potato.svg";
import tomato from "../../../assets/tomato.svg";
import LadyFinger from "../../../assets/lady-fingre.svg";
import EggPlant from "../../../assets/egg-plant.png";
import Fresh from "../../../assets/cauliflower.svg";

const ProductsUpdate = () => {
  return (
    <div>
      <div className="container">
        <div className="row me-3 justify-content-center align-items-center">
          {/* <!-- Cards --> */}
          <div className="col-lg-9 col-md-12 mobile-res">
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="card row-card row-card-layout">
                  <div className="card-body justify-content-between d-flex">
                    <Image
                      className="pb-4 pe-4"
                      src={Apple}
                      alt="Description of the image"
                      width={102}
                      height={102}
                    />
                    <div>
                      <h6 className="card-h-typography">Green Apple</h6>
                      <span className="fw-bold price-style">$14.99</span>
                      <Image
                        className="rating-card pb-3"
                        src={Ratings}
                        alt=""
                        layout="responsive"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card row-card row-card-layout">
                  <div className="card-body justify-content-between d-flex">
                    <Image
                      className="pb-4 pe-4"
                      src={Malta}
                      alt="Description of the image"
                      width={102}
                      height={102}
                    />
                    <div>
                      <h6 className="card-h-typography">Indian Malta</h6>
                      <span className="fw-bold price-style">$14.99</span>
                      <Image
                        className="rating-card pb-3"
                        src={Ratings}
                        alt=""
                        layout="responsive"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card row-card row-card-layout">
                  <div className="card-body justify-content-between d-flex">
                    <Image
                      className="pb-4 pe-4"
                      src={Potato}
                      alt="Description of the image"
                      width={102}
                      height={102}
                    />
                    <div>
                      <h6 className="card-h-typography">Potato</h6>
                      <span className="fw-bold price-style">$14.99</span>
                      <Image
                        className="rating-card pb-3"
                        src={Ratings}
                        alt=""
                        layout="responsive"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="card row-card row-card-layout">
                  <div className="card-body justify-content-between d-flex">
                    <Image
                      className="pb-4 pe-4"
                      src={tomato}
                      alt="Description of the image"
                      width={102}
                      height={102}
                    />
                    <div>
                      <h6 className="card-h-typography">Tomato</h6>
                      <span className="fw-bold price-style">$14.99</span>
                      <Image
                        className="rating-card pb-3"
                        src={Ratings}
                        alt=""
                        layout="responsive"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card row-card row-card-layout">
                  <div className="card-body justify-content-between d-flex">
                    <Image
                      className="pb-4 pe-4"
                      src={LadyFinger}
                      alt="Description of the image"
                      width={102}
                      height={102}
                    />
                    <div>
                      <h6 className="card-h-typography">Lady Fingre</h6>
                      <span className="fw-bold price-style">$14.99</span>
                      <Image
                        className="rating-card pb-3"
                        src={Ratings}
                        alt=""
                        layout="responsive"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card row-card row-card-layout">
                  <div className="card-body justify-content-between d-flex">
                    <Image
                      className="pb-4 pe-4"
                      src={Corn}
                      alt="Description of the image"
                      width={102}
                      height={102}
                    />
                    <div>
                      <h6 className="card-h-typography">Corn</h6>
                      <span className="fw-bold price-style">$14.99</span>
                      <Image
                        className="rating-card pb-3"
                        src={Ratings}
                        alt=""
                        layout="responsive"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="card row-card row-card-layout">
                  <div className="card-body justify-content-between d-flex">
                    <Image
                      className="pb-4 pe-4"
                      src={Fresh}
                      alt="Description of the image"
                      width={102}
                      height={102}
                    />
                    <div>
                      <h6 className="card-h-typography">Fresh Flower</h6>
                      <span className="fw-bold price-style">$14.99</span>
                      <Image
                        className="rating-card pb-3"
                        src={Ratings}
                        alt=""
                        layout="responsive"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card row-card row-card-layout">
                  <div className="card-body justify-content-between d-flex">
                    <Image
                      className="pb-4 pe-4"
                      src={EggPlant}
                      alt="Description of the image"
                      width={102}
                      height={102}
                    />
                    <div>
                      <h6 className="card-h-typography">Egg Plant</h6>
                      <span className="fw-bold price-style">$14.99</span>
                      <Image
                        className="rating-card pb-3"
                        src={Ratings}
                        alt=""
                        layout="responsive"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card row-card row-card-layout">
                  <div className="card-body justify-content-between d-flex">
                    <Image
                      className="pb-4 pe-4"
                      src={Chili}
                      alt="Description of the image"
                      width={102}
                      height={102}
                    />
                    <div>
                      <h6 className="card-h-typography">Green Chili</h6>
                      <span className="fw-bold price-style">$14.99</span>
                      <Image
                        className="rating-card pb-3"
                        src={Ratings}
                        alt=""
                        layout="responsive"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  Banner */}
          <div className="col-lg-3 col-md-12 mb-4 mobile-res-sm-card">
            <div className="text-white">
              <card>
                <div className="mt-2">
                  <Image src={DiscountBanner} className="" alt="bannar" />
                  <div className="header">
                    <h5 className="card-title">Card title</h5>
                  </div>
                </div>
                {/* <div className="rounded-1 card-reviews discount-banner me-5 card-body ms-2 card-bg-img image-container">
              <Image className="" src={DiscountBanner} alt="" layout="responsive"/>

              <div className="text-overlay">
                <p className="card-top-h">Best Deal</p>
                <h4>Sale of the Month</h4>
               
                <div>
                <button className="mt-3 btn-style p-2 fs-6">
                   <span className="m-1 p-1">Shop Now</span> 
                   
                  </button>
                </div>
              </div>
            </div> */}
              </card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsUpdate;
