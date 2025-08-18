import "@/styles/css/elegant-icons.min.css";
import "@/styles/css/all.min.css";
import "@/styles/css/animate.css";
import "@/styles/css/nice-select.css";
import "@/styles/css/default.css";
import "@/styles/css/responsive.css";
import Link from "next/link";
import DefaultLayout from "@/components/Layout";
import LoanDeatilsArea from "./LoanDeatilsArea";

const LoanDetailPage = () => {
  return (
    <>
      <DefaultLayout>
        <main>
          <section className="breadcrumb-area">
            <div
              className="breadcrumb-widget  pt-200 pb-110"
              style={{ backgroundImage: `url(img/breadcrumb/bg-1.png)` }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="breadcrumb-content pt-85">
                      <h1>Loan details</h1>
                      <ul>
                        <li>
                          <Link href="index.html">home</Link>
                        </li>
                        <li>
                          <Link href="index.html">pages</Link>
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
