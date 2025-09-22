import "@/styles/css/nice-select.css";
import Link from "next/link";
import DefaultLayout from "@/components/Layout";
import LoanDeatilsArea from "./LoanDeatilsArea";
import breadcrumbBg1 from "@/assets/img/breadcrumb/bg-1.png";

const LoanDetailPage = () => {
  return (
    <>
      <DefaultLayout>
        <main>
          <section className="breadcrumb-area">
            <div
              className="breadcrumb-widget  pt-200 pb-110"
              style={{ backgroundImage: `url(${breadcrumbBg1.src})` }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="breadcrumb-content pt-85">
                      <h1>Loan details</h1>
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
          <LoanDeatilsArea />
        </main>
      </DefaultLayout>
    </>
  );
};

export default LoanDetailPage;
