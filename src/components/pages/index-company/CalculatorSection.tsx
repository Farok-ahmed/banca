import { fadeInUp } from "@/components/animation";
import IndexCalculator from "@/components/IndexCalculator";
import { AnimationH1 } from "@/components/animation/AnimationDiv";

const CalculatorSection = () => {
  return (
    <section className="calculator-area-2">
      <div className="container">
        <div className="section-title">
          <span className="short-title-2">Loan calculator</span>
          <AnimationH1
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="wow fadeInUp text-white"
          >
            Calculate and confirm your loans
          </AnimationH1>
        </div>

        <IndexCalculator />
      </div>
    </section>
  );
};

export default CalculatorSection;