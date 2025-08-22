import { handleReply } from "./HandleReply";
import ReplyButton from "./ReplyButton";

const ReplyForm = () => {
  return (
    <>
      <form action={handleReply}>
        <div className="row gy-lg-0 gy-4 mt-5">
          <div className="col-md-6">
            <div className="floating-input">
              <input
                className="form-control"
                type="text"
                placeholder="Full name"
                id="f-name"
                name="name"
              />
              <label htmlFor="f-name">Full name*</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="floating-input">
              <input
                className="form-control"
                type="email"
                placeholder="email"
                id="email-address"
                name="email"
              />
              <label htmlFor="email-address">email*</label>
            </div>
          </div>
          <div className="col-12 mt-lg-30">
            <div className="floating-input">
              <input
                className="form-control"
                type="email"
                placeholder="Website (Optional)"
                id="websiteInfo"
                name="website"
              />
              <label htmlFor="websiteInfo">Website (Optional)</label>
            </div>
          </div>
          <div className="col-12 mt-lg-30">
            <div className="floating-input">
              <textarea
                className="form-control"
                placeholder="Comment type..."
                cols={30}
                rows={5}
                id="commentInfo"
                name="comment"
              ></textarea>
              <label htmlFor="commentInfo">Comment type...</label>
            </div>
          </div>
          <div className="col-12 mt-lg-30">
            <input type="checkbox" id="checkRadio" name="saveInfo" />
            <label className="check-label" htmlFor="checkRadio">
              Save my name, email, and website in this browser for the next time
              I comment.
            </label>
          </div>
          <div className="col-12">
            <ReplyButton />
          </div>
        </div>
      </form>
    </>
  );
};

export default ReplyForm;
