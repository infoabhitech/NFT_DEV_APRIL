import { useState } from 'react';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

export default function Home() {
  const [inputName, setInputName] = useState('');
  const [inputCountry, setInputCountry] = useState('');
  const [inputRegion, setInputRegion] = useState('');
  const [inputDescription, setInputDescription] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputIndustry, setInputIndustry] = useState('');

  const handleSaveData = async () => {
    const response = await fetch('/api/submitBusinessData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({inputName, inputCountry, inputRegion, inputDescription, inputEmail, inputIndustry}),
    });

    if (response.ok) {
      alert('Signup successfull & All set to Mint Tokens!');
      setInputName('');
      setInputCountry('');
      setInputRegion('');
      setInputDescription('');
      setInputEmail('');
      setInputIndustry('');
    } else {
      alert('Something went wrong!');
    }
  };

 return (
        <div className='flex justify-center'>
            <div style={{marginTop:'1rem'}} className='w-1/2 flex flex-col pb-12'>
                <h1 align="center" className="main-title about-h1 font-bold text-1xl text-left subpixel-antialiased">If you are a Business or a Brand, signup to get started..</h1>
                <input 
                type="text"
                placeholder='Business Name'
                className='mt-8 border rounded p-4'
                value={inputName}
                onChange={(e) => setInputName(e.target.value)} 
                />
                <CountryDropdown
                className='mt-8 border rounded p-4'
                value={inputCountry}
                onChange={(e) => setInputCountry(e)}
                />
                <input 
                type="text"
                placeholder='Nearest City'
                className='mt-8 border rounded p-4'
                value={inputRegion}
                onChange={(e) => setInputRegion(e.target.value)} 
                />
                <input 
                type="text"
                placeholder='Business Description'
                className='mt-8 border rounded p-4'
                value={inputDescription}
                onChange={(e) => setInputDescription(e.target.value)} 
                />
                <input 
                type="text"
                placeholder='Business Email'
                className='mt-8 border rounded p-4'
                value={inputEmail}
                onChange={(e) => setInputEmail(e.target.value)} 
                />
                <select
                className='mt-8 border rounded p-4'				 
				        value={inputIndustry} 
				        onChange={(e) => setInputIndustry(e.target.value)}>
                <option>Select Industry</option>
                <option name="Beauty"> Beauty</option>
                <option name="Climate Change, Environment, Sustainability">Climate Change, Environment, Sustainability</option>
				        <option name="Education">Education</option>
                <option name="Fashion">Fashion</option>
				        <option name="Food, Beverage">Food, Beverage</option>
				        <option name="Healthcare, Fitness, Well Being">Healthcare, Fitness, Well Being</option>
				        <option name="Luxury">Luxury</option>
				        <option name="Media, Entertainment">Media, Entertainment</option>
				        <option name="Retail, e-commerce">Retail, e-commerce</option>
				        <option name="Travel, Tourism, Hospitality">Travel, Tourism, Hospitality</option>
                <option name="Others">Others</option>
                </select>
                <button onClick={handleSaveData}
                className='font-bold mt-4 bg-purple-500 text-white rounded p-4 shadow-lg'
                >
                    Submit
                </button>
            </div>
        </div>
    )
}