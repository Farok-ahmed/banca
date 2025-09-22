import "@/styles/css/nice-select.css";
import Link from "next/link";
import DefaultLayout from "@/components/Layout";
import DocumentForm from "./DocumentForm";
// Assets
import breadcrumbBg1 from "@/assets/img/breadcrumb/bg-1.png";

const DocumentUploadPage = () => {
  return (
    <>
      <DefaultLayout>
        <main>
          <section className="breadcrumb-area">
            <div
              className="breadcrumb-widget  pt-200 pb-100"
              style={{ backgroundImage: `url(${breadcrumbBg1.src})` }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="breadcrumb-content pt-90">
                      <h1>Documants Upload</h1>
                      <ul>
                        <li>
                          <Link href="/">home</Link>
                        </li>
                        <li>
                          <Link href="/">pages</Link>
                        </li>
                        <li>loan</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="loan-deatils-area bg_disable pt-140 pb-120">
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <div className="stepper-widget mt-sm-5 px-3 px-sm-0">
                    <ul>
                      <li className=" complete  mt-0">
                        <Link href="/loan-details">
                          <div className="number">
                            <i className="icon_check"></i> <span>1</span>
                          </div>{" "}
                          Loan Details
                        </Link>
                      </li>
                      <li className="complete">
                        <Link href="/personal-details">
                          <div className="number">
                            <i className="icon_check"></i> <span>2</span>
                          </div>
                          Personal Details
                        </Link>
                      </li>
                      <li className=" active">
                        <Link href="/document-upload">
                          <div className="number">
                            <i className="icon_check"></i> <span>3</span>
                          </div>
                          Documants Upload
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-9">
                  <div className="loan-details-widget">
                    <DocumentForm/>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </DefaultLayout>
    </>
  );
};

export default DocumentUploadPage;
