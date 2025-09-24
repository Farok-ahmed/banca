import JobApplicationSection from "@/components/JobForm";
import DefaultLayout from "@/components/Layout";
import breadcrumbBg2 from "@/assets/img/breadcrumb/bg-2.png";

const JobApplicationPage = () => {
  return (
    <>
      <DefaultLayout>
        <main>
          <section className="breadcrumb-area">
            <div
              className="breadcrumb-widget  pt-145"
              style={{ backgroundImage: `url(${breadcrumbBg2.src})` }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="breadcrumb-content pt-135 pb-180">
                      <h1>Officer Admin and Finance (LRS Position)</h1>
                      <div className="breadcrumb-job-info d-flex justify-content-center mt-20">
                        <div className="job-location me-3">
                          {" "}
                          <i className="icon_pin_alt"></i>NY, United States
                        </div>
                        <div className="job-catagory">
                          {" "}
                          <span>Administration</span> | Full-time
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <JobApplicationSection />
        </main>
      </DefaultLayout>
    </>
  );
};

export default JobApplicationPage;
