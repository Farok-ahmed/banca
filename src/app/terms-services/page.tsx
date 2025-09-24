import DefaultLayout from "@/components/Layout";
import React from "react";
import breadcrumbBg1 from "@/assets/img/breadcrumb/bg-1.png";
const TermsServices = () => {
  return (
    <DefaultLayout>
      <section className="breadcrumb-area">
        <div
          className="breadcrumb-widget  pt-200 pb-100"
          style={{ backgroundImage: `url(${breadcrumbBg1.src})` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="breadcrumb-content pb-90">
                  <h1>Terms & Services</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="loan-deatils-area bg_disable pt-140 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="loan-details-widget">
                <div className="section-title text-start">
                  <h3>Definitions</h3>
                  <br />
                  <p>
                    In this document, we may use certain words or phrases, and
                    it is important that you understand their meanings. The
                    following is a non-exhaustive list of word and phrase
                    definitions found in this document:
                  </p>
                  <br />
                  <ul className="px-4 py-2 list-circle-group">
                    <li>“Agreement” means these Terms of Service;</li>

                    <li>
                      “Services” means the services we provide, including our
                      WordPress themes (whether obtained from us directly via
                      Themeforest.net our website, by email, or otherwise) and
                      our website itself;
                    </li>

                    <li>“Website” means our website spider-themes.net</li>

                    <li>
                      “User” means anyone who uses our services, including
                      general visitors to our website;
                    </li>

                    <li>
                      “You” means the person bound by this Privacy Policy.
                    </li>
                  </ul>
                  <br />
                  <h4>What Banca offers</h4>
                  <br />
                  <p>
                    spider-themes is an online company that creates WordPress
                    themes. Currently, we only sell these themes on
                    Themeforest.net (“Themeforest”). Themeforest controls
                    transaction pricing support policies and manages licenses
                    for each purchase.
                  </p>
                  <br />
                  <p>
                    spider-themes provides technical support to anyone who
                    purchases our themes from Themeforest. This support is
                    provided on our current website, support policies and
                    support pricing are controlled by Themeforest.net.
                  </p>
                  <br />
                  <p>
                    When users buy our themes from Themeforest, they receive a
                    Themeforest purchase code which allows them to register with
                    our support center for our support. We only provide support
                    to verified theme buyers on Themeforest.
                  </p>
                  <br />
                  <h4>Eligibility</h4>
                  <br />
                  <p>
                    To use our services, you must meet certain conditions,
                    including but not limited to:
                  </p>
                  <br />
                  <ul className="px-4 py-2 list-circle-group">
                    <li>
                      You shall not violate any embargoed export control or
                      other laws of the Emirate of Ajman, United Arab Emirates,
                      or other countries, or this agreement with spider-themes
                      and your jurisdiction.
                    </li>

                    <li>
                      You must be of the minimum age required to enter into a
                      contract in the region where you live and in no event be
                      younger than 18.
                    </li>

                    <li>
                      If you register on behalf of an organization, you must be
                      authorized by that organization to bind it to this
                      agreement, and you agree that you and the organization
                      will be jointly and severally liable for any breach of
                      this agreement.
                    </li>

                    <li>
                      You must provide us with personal and other information
                      that we believe is necessary to provide you with our
                      services.
                    </li>
                  </ul>
                  <br />
                  <h3>Rules</h3>
                  <p>You must not:</p>
                  <br />

                  <ul className="px-4 py-2 list-circle-group">
                    <li>
                      Violate the laws of the Emirate of Ajman, United Arab
                      Emirates, or any foreign political entity having
                      jurisdiction over this agreement, whether that foreign
                      political entity is a country or territory (such as a
                      state or province) or a municipality (such as a city,
                      town, county or region) foreign.
                    </li>

                    <li>
                      Post or send any violent, threatening, pornographic,
                      racist, hateful, or otherwise objectionable content in the
                      opinion of spider-themes.
                    </li>

                    <li>
                      Violating anyone’s intellectual property defames anyone
                      impersonates anyone or otherwise violates the rights of a
                      third party.
                    </li>

                    <li>
                      Crack phishing SQL injections or otherwise compromise the
                      security or integrity of the spider-themes site service or
                      its users’ computers.
                    </li>

                    <li>
                      Do anything else that may bring Spider-Themes into
                      disrepute or violate anyone’s rights.
                    </li>
                  </ul>
                  <br />
                  <h3>Copyright</h3>
                  <br />
                  <p>
                    You agree not to copy, distribute, display, broadcast, or
                    otherwise reproduce any information on this website without
                    our prior written permission.
                  </p>
                  <br />
                  <p>
                    spider-themes must ensure that it has the right to use the
                    content that its users post to its site. Such content may
                    include but is not limited to, photos, video, text, audio,
                    and other materials. Whenever you submit content to our
                    site, you agree that you grant us the non-exclusive,
                    universal, perpetual, and irrevocable right to sublicense
                    commercial and non-commercial use to distribute, sell,
                    publish, and otherwise use the content you submit to us. You
                    warrant to us that you have the right to grant us this right
                    to the Content and that you will indemnify We bear and
                    defend against any damages arising from any breach of this
                    warranty against claims related thereto.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default TermsServices;
