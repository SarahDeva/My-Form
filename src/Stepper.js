import React, { useState } from "react";
import "./App.css";

const Stepper = () => {
    const [step, setStep] = useState(1);
    const progress = document.querySelector('#progress');

    function goNext() {
        if (step === 6) return;
        setStep(step => step + 1);
    }

    function goPrev() {
        if (step === 1) return;
        setStep(step => step - 1);
    }

    return (
        <>
            <div>
                <div>
                    <div className="wrapper option-1 option-1-1">
                        <ol className="c-stepper">
                            <li type="button" onClick={OnboardingOne} className="c-stepper__item">
                                <h3 className="c-stepper__title">Step 1</h3>
                            </li>
                            <li type="button" onClick={OnboardingTwo} className="c-stepper__item">
                                <h3 className="c-stepper__title">Step 2</h3>
                            </li>
                            <li type="button" onClick={OnboardingThree} className="c-stepper__item">
                                <h3 className="c-stepper__title">Step 3</h3>
                            </li>
                            <li type="button" onClick={OnboardingFour} className="c-stepper__item">
                                <h3 className="c-stepper__title">Step 4</h3>
                            </li>
                            <li type="button" onClick={OnboardingFive} className="c-stepper__item">
                                <h3 className="c-stepper__title">Step 5</h3>
                            </li>
                            <li type="button" onClick={OnboardingSix} className="c-stepper__item">
                                <h3 className="c-stepper__title">Step 6</h3>
                            </li>
                        </ol>
                    </div>
                    <div>
                        {step === 1 && <OnboardingOne />}
                        {step === 2 && <OnboardingTwo />}
                        {step === 3 && <OnboardingThree />}
                        {step === 4 && <OnboardingFour />}
                        {step === 5 && <OnboardingFive />}
                        {step === 6 && <OnboardingSix />}
                    </div>
                </div>
                <div>
                    <progress className="progress" max="6" value={step} />
                </div>
                <button className="previous" onClick={goPrev}>Go Previous</button>
                <h7 className="h7">{step}<h8 className="h8">/6</h8></h7>
                <button className="next" onClick={goNext}>Go Next</button>
            </div>
        </>
    );

    function OnboardingOne() {
        setStep(step => 1)
        return (
            <img className="picture" src="https:\/\/www.thecocktaildb.com\/images\/media\/drink\/5noda61589575158.jpg" />
        )
    }

    function OnboardingTwo() {
        setStep(step => 2)
        return (
            <img className="picture" src="https:\/\/www.thecocktaildb.com\/images\/media\/drink\/bry4qh1582751040.jpg" />
        )
    }

    function OnboardingThree() {
        setStep(step => 3)
        return (
            <img className="picture" src="https:\/\/www.thecocktaildb.com\/images\/media\/drink\/loezxn1504373874.jpg" />
        )
    }

    function OnboardingFour() {
        setStep(step => 4)
        return (
            <img className="picture" src="https:\/\/www.thecocktaildb.com\/images\/media\/drink\/srpxxp1441209622.jpg" />
        )
    }

    function OnboardingFive() {
        setStep(step => 5)
        return (
            <img className="picture" src="https:\/\/www.thecocktaildb.com\/images\/media\/drink\/tqyrpw1439905311.jpg" />
        )
    }

    function OnboardingSix() {
        setStep(step => 6)
        return (
            <img className="picture" src="https:\/\/www.thecocktaildb.com\/images\/media\/drink\/dztcv51598717861.jpg" />
        )
    }
}


export default Stepper;