import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import FormInput from '../components/FormInput';

import ReactSelect from 'react-select';
import { DatePicker } from '@mui/x-date-pickers';
// import dayjs from 'dayjs';
import { registerEmployee } from '../redux/employees';
import { format } from 'date-fns'
import { Modal } from 'grbn-react-modal'

const initialFormValue = {
  firstName: '',
  lastName: '',
  birthDate: '',
  startDate: '',
  street: '',
  city: '',
  state: '',
  zipCode: '',
  department: '',

};

const statesOptions = [
  {
      label: "Alabama",
      value: "AL"
  },
  {
      label: "Alaska",
      value: "AK"
  },
  {
      label: "American Samoa",
      value: "AS"
  },
  {
      label: "Arizona",
      value: "AZ"
  },
  {
      label: "Arkansas",
      value: "AR"
  },
  {
      label: "California",
      value: "CA"
  },
  {
      label: "Colorado",
      value: "CO"
  },
  {
      label: "Connecticut",
      value: "CT"
  },
  {
      label: "Delaware",
      value: "DE"
  },
  {
      label: "District Of Columbia",
      value: "DC"
  },
  {
      label: "Federated States Of Micronesia",
      value: "FM"
  },
  {
      label: "Florida",
      value: "FL"
  },
  {
      label: "Georgia",
      value: "GA"
  },
  {
      label: "Guam",
      value: "GU"
  },
  {
      label: "Hawaii",
      value: "HI"
  },
  {
      label: "Idaho",
      value: "ID"
  },
  {
      label: "Illinois",
      value: "IL"
  },
  {
      label: "Indiana",
      value: "IN"
  },
  {
      label: "Iowa",
      value: "IA"
  },
  {
      label: "Kansas",
      value: "KS"
  },
  {
      label: "Kentucky",
      value: "KY"
  },
  {
      label: "Louisiana",
      value: "LA"
  },
  {
      label: "Maine",
      value: "ME"
  },
  {
      label: "Marshall Islands",
      value: "MH"
  },
  {
      label: "Maryland",
      value: "MD"
  },
  {
      label: "Massachusetts",
      value: "MA"
  },
  {
      label: "Michigan",
      value: "MI"
  },
  {
      label: "Minnesota",
      value: "MN"
  },
  {
      label: "Mississippi",
      value: "MS"
  },
  {
      label: "Missouri",
      value: "MO"
  },
  {
      label: "Montana",
      value: "MT"
  },
  {
      label: "Nebraska",
      value: "NE"
  },
  {
      label: "Nevada",
      value: "NV"
  },
  {
      label: "New Hampshire",
      value: "NH"
  },
  {
      label: "New Jersey",
      value: "NJ"
  },
  {
      label: "New Mexico",
      value: "NM"
  },
  {
      label: "New York",
      value: "NY"
  },
  {
      label: "North Carolina",
      value: "NC"
  },
  {
      label: "North Dakota",
      value: "ND"
  },
  {
      label: "Northern Mariana Islands",
      value: "MP"
  },
  {
      label: "Ohio",
      value: "OH"
  },
  {
      label: "Oklahoma",
      value: "OK"
  },
  {
      label: "Oregon",
      value: "OR"
  },
  {
      label: "Palau",
      value: "PW"
  },
  {
      label: "Pennsylvania",
      value: "PA"
  },
  {
      label: "Puerto Rico",
      value: "PR"
  },
  {
      label: "Rhode Island",
      value: "RI"
  },
  {
      label: "South Carolina",
      value: "SC"
  },
  {
      label: "South Dakota",
      value: "SD"
  },
  {
      label: "Tennessee",
      value: "TN"
  },
  {
      label: "Texas",
      value: "TX"
  },
  {
      label: "Utah",
      value: "UT"
  },
  {
      label: "Vermont",
      value: "VT"
  },
  {
      label: "Virgin Islands",
      value: "VI"
  },
  {
      label: "Virginia",
      value: "VA"
  },
  {
      label: "Washington",
      value: "WA"
  },
  {
      label: "West Virginia",
      value: "WV"
  },
  {
      label: "Wisconsin",
      value: "WI"
  },
  {
      label: "Wyoming",
      value: "WY"
  }
];

const departmentsOptions = [
  {
    label: "Sales",
    value: "Sales"
  },
  {
    label: "Marketing",
    value: "Marketing"
  },
  {
    label: "Engineering",
    value: "Engineering"
  },
  {
    label: "Human Resources",
    value: "Human Resources"
  },
  {
    label: "Legal",
    value: "Legal"
  },
]

const Home = () => {
    const dispatch = useDispatch()
    const [formValue, setFormValue] = useState(initialFormValue);
    const [active, setActive] = useState(false)

    function setFieldValue(field) {
        
        return (value) => {
        if (field === 'birthDate' || field === 'startDate') {
            const formattedDate = value ? format(new Date(value), 'dd MMM yyyy') : '';
            const newFormValue = {
              ...formValue,
              [field]: formattedDate,
            };
            setFormValue(newFormValue);
        } else {
            const newFormValue = {
              ...formValue,
              [field]: value,
            };
            setFormValue(newFormValue);
            
        }  
        };
      }

      function validateForm(values) {
        return Object.values(values).every(value => value !== '');
      }
      
      const handleSubmit = (e) => {
        e.preventDefault();      
        if (!validateForm(formValue)) {
            alert('Please complete all input.');
            return
        }
        dispatch(registerEmployee(formValue));
        setActive(true)
        // alert("Employee created")
      };

      const closeModal = () => {
        setActive(false)
    }
  
    const regexLetters = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]{2,}$/;
    const regexNumber = /^\d+$/;
    const regexMin = /^.{2,}$/

    return (
        <>
        <header>
        <h1>HRnet</h1>
        <Link to="/data">View Current Employees</Link>
        <h2>Create Employee</h2>
        </header>
        <form action="" type='submit'>
            <FormInput id="firstname" label="First Name" onInput={setFieldValue("firstName")} regex={regexLetters} errorMsg="Please, complete a correct first name"/>
            <FormInput id="lastname" label="Last Name" onInput={setFieldValue("lastName")} regex={regexLetters} errorMsg="Please, complete a correct last name"/>
            <div className="form-input-container">
                <label htmlFor="birth">Date of Birth</label>
                <DatePicker onChange={setFieldValue("birthDate")}/>
            </div>
            <div className="form-input-container">
                <label htmlFor="startdate">Start Date</label>
                <DatePicker onChange={setFieldValue("startDate")}/>
            </div>

            <fieldset className="address-section">
            <legend>Address</legend>
            <FormInput id="street" label="Street" onInput={setFieldValue("street")} regex={regexMin} errorMsg="Please, complete a correct street"/>
            <FormInput id="city" label="City" onInput={setFieldValue("city")}  regex={regexLetters} errorMsg="Please complete a city"/>
            
            <div className="form-input-container">
                <label htmlFor="state">State</label>
                <ReactSelect
                  defaultValue={null}
                  onChange={setFieldValue("state")}
                  options={statesOptions}
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: 5,
                    colors: {
                      ...theme.colors,
                      primary25: '#faf9f5',
                      primary: '#2c3e50',
                    },
                  })}
                />
            </div>
            <FormInput id="zip" label="Zip Code" onInput={setFieldValue("zipCode")}  regex={regexNumber} errorMsg="Please, complete a correct Zip Code"/>
            </fieldset>

            <div className="form-input-container">
            <label htmlFor="department">Department</label>
            <ReactSelect
                  defaultValue={null}
                  onChange={setFieldValue("department")}
                  options={departmentsOptions}
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: 5,
                    colors: {
                      ...theme.colors,
                      primary25: '#faf9f5',
                      primary: '#2c3e50',
                    },
                  })}
                />
            </div>

            <button type="submit" onClick={handleSubmit}>Save</button>
        </form>
            {active && 
            <Modal modalText="Employee created ! " onClose={closeModal} />
        }
    </>
    )
}

export default Home