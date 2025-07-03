import Image from 'next/image';

const Banner = () => {
  return (
    <section className="banner-area-5 h-100" id="banner_animation">
      <div className="bg-shapes">
        <div className="shape" data-parallax='{"x": -30,"y": 90,"rotateZ":50}'>
          <Image
            className="layer"
            data-depth="-0.06"
            src="/img/home-4/shape-2.png"
            alt="Shape 2"
            width={100}
            height={100}
          />
        </div>
        <div className="shape" data-parallax='{"y": -250}'>
          <Image
            className="layer"
            data-depth="-0.15"
            src="/img/home-4/shape-3.png"
            alt="Shape 3"
            width={100}
            height={100}
          />
        </div>
        <div className="shape" data-parallax='{"x": -40, "y": -150}'>
          <Image
            className="layer"
            data-depth="-0.3"
            src="/img/home-4/shape-4.png"
            alt="Shape 4"
            width={100}
            height={100}
          />
        </div>
        <div
          className="shape"
          data-parallax='{"x": 300, "y": 370, "rotateZ":200}'
        >
          <Image
            className="layer"
            data-depth="0.5"
            src="/img/home-4/shape-5.png"
            alt="Shape 5"
            width={100}
            height={100}
          />
        </div>

        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      <div className="container">
        <div className="row align-items-end pt-170 pb-120">
          <div className="col-lg-6">
            <div
              className="banner-content wow fadeInRight"
              data-wow-delay="0.1s"
            >
              <h1>
                Smart finance solutions for your{' '}
                <span className="underline-shape">business</span>
              </h1>
              <p>
                Inventore veritatis et architecto beatae vitae dicta explicabo
                nemo enim ipsam voluptatem quia voluptas aspernatur magni.
              </p>

              <div className="d-flex flex-wrap mt-40">
                <a href="#" className="theme-btn me-4">
                  Get started now
                </a>
                <a href="#" className="under_link">
                  Explore more <i className="arrow_right"></i>
                </a>
              </div>

              <div className="co-operators">
                <p className="mb-4">We are cooperating with:</p>
                <div className="d-flex flex-wrap">
                  <a href="#">
                    <Image
                      src="/img/home-4/cooperator-1.png"
                      alt="cooperator 1"
                      width={80}
                      height={40}
                    />
                  </a>
                  <a href="#">
                    <Image
                      src="/img/home-4/cooperator-2.png"
                      alt="cooperator 2"
                      width={80}
                      height={40}
                    />
                  </a>
                  <a href="#">
                    <Image
                      src="/img/home-4/cooperator-3.png"
                      alt="cooperator 3"
                      width={80}
                      height={40}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div
              className="basic-loan-calculator wow fadeInLeft"
              data-wow-delay="0.1s"
            >
              <Image
                className="shape"
                src="/img/home-4/shape-1.png"
                alt="Shape 1"
                width={100}
                height={100}
              />
              <h4>Loan calculator</h4>
              <form action="" className="d-flex flex-column">
                <div className="mb-3">
                  <label className="label" htmlFor="loandetails01">
                    Type of Loan
                  </label>
                  <select className="w-100" id="loandetails01">
                    <option value="Debt-Financing">Debt Loan</option>
                    <option value="Equity-Finance">Installment loan</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="label" htmlFor="loan-amount">
                    Amount of money
                  </label>
                  <div className="input-field d-flex align-items-center">
                    <span>$</span>
                    <input
                      type="text"
                      id="loan-amount"
                      placeholder="Enter amount"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="label" htmlFor="loan-time">
                    For how long (days)
                  </label>
                  <div className="input-field">
                    <input
                      type="text"
                      id="loan-time"
                      placeholder="For how long (days)"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="label" htmlFor="loan-repayment">
                    Repayments
                  </label>
                  <div className="input-field d-flex align-items-center">
                    <span>$</span>
                    <input
                      type="text"
                      id="loan-repayment"
                      placeholder="Enter amount"
                      className="form-control"
                    />
                  </div>
                </div>

                <button type="submit" className="theme-btn w-100">
                  Apply for loans
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
