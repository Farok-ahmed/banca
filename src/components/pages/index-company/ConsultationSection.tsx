import { SubmitButton } from "./FormButton";
import { handleSubmit } from "./handleSubmit";

const ConsultationSection = () => {
  return (
    <section className="get-touch-area-2">
      <div className="container">
        <div className="row align-items-center gy-md-0 gy-4">
          <div className="col-md-6">
            <h1>Get your own personal consultation</h1>
            <p>
              There are many variations of passages of Lorem Ipsum
              available, but the majority have suffered alteration in some
              form,
            </p>
            <div className="consult-num">
              <div>
                <h1>1M+</h1>
                <p>Total Customers</p>
              </div>
              <div>
                <h1>40+</h1>
                <p>Financial Consultants</p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="touch-form">
              <h3>Get in touch</h3>
              <form action={handleSubmit}>
                <input
                  className="form-control"
                  type="text"
                  name="fullName"
                  placeholder="Enter full name"
                  required
                />
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Enter email address"
                  required
                />
                <SubmitButton>Subscribe</SubmitButton>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;