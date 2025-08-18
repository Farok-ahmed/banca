"use client"

const SubscribeForm = () => {
  return (
    <>
      <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()} className="mt-15">
        <input
          className="form-control"
          type="text"
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
