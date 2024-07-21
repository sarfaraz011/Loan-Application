import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

function LoanApplication() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
  });

  const nextStep = () => {
    setStep(prevStep => prevStep + 1);
  };

  const prevStep = () => {
    setStep(prevStep => prevStep - 1);
  };

  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Step1
            nextStep={nextStep}
            handleChange={handleChange}
            formData={formData}
          />
        );
      case 2:
        return (
          <Step2
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            formData={formData}
          />
        );
      case 3:
        return (
          <Step3
            prevStep={prevStep}
            formData={formData}
            nextStep={nextStep}
          />
        );
      case 4:
        return (
          <div className="flex items-center justify-center h-screen w-full">
            <div className="text-center">
              <h1 className="text-green-600 font-semibold mb-5">Submitted Successfully</h1>
              <button
                className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg mt-20 sm:mt-0"
                onClick={() => setStep(1)}
              >
                Go to Step 1
              </button>
            </div>
          </div>
        );
      default:
        return <div>Unknown step</div>;
    }
  };

  return (
    <div className='w-full h-screen'>
      {renderStep()}
    </div>
  );
}

export default LoanApplication;
