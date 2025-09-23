import { subscribeEmail } from "./HandleReply";

const SubscribeForm = () => {
  return (
    <>
      <form action={subscribeEmail} className="mt-15">
        <input
          className="form-control"
          type="text"
          name="email"
          id="subscribeEmail"
          placeholder="Enter your email"
        />
        <button className="theme-btn w-100 mt-30" type="submit">
          Subscribe
        </button>
      </form>
    </>
  );
};

export default SubscribeForm;
