import React, { useState } from 'react';
import Axios  from "axios";

const ModalForm = ({ closeModal , rowToEdit }) =>{

  const [name,setName] = useState('')
  const [bio, setBio] = useState('');
  const [about, setAbout] = useState('');
  const [experience, setExperience] = useState('');
  const [education, setEducation] = useState('');
  const [skills, setSkills] = useState('');
  const [languages, setLanguages] = useState('');
  const [errors, setErrors] = useState('');
  const[modalOpen,setModalOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = localStorage.getItem("userMail")
  const profileData = {
    bio: bio,
    about: about,
    experience: experience,
    education: education,
    skills: skills.split(',').map((skill) => skill.trim()),
    languages: languages.split(',').map((lang) => lang.trim()),
    email:email
  };

  try {
    if (rowToEdit === null) {
      const response = await Axios.post('http://localhost:6080/insertprofile', profileData);
      console.log('Profile saved successfully:', response.data);
    } else {
    }
    
  } catch (error) {
    console.error('An error occurred while saving the profile:', error);
  }
    closeModal();
  };

  return (

      
   <div className='modal-container'>
      {console.log("Modal component is rendered")}
      <div className="modal">
        <form>
          <h2>Details</h2>
          <div className='form-group'>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="form-group">
          <label htmlFor="bio">Bio:</label>
          <textarea id="bio" value={bio} onChange={(e) => setBio(e.target.value)} />
          </div>

          <div className="form-group">
          <label htmlFor="about">About:</label>
              <textarea id="about" value={about} onChange={(e) => setAbout(e.target.value)} />
          </div>

          <div className='form-group'>
          <label htmlFor="experience">Experience:</label>
              <textarea id="experience" value={experience} onChange={(e) => setExperience(e.target.value)} />
          </div>

          <div className='form-group'>
          <label htmlFor="education">Education:</label>
              <textarea id="education" value={education} onChange={(e) => setEducation(e.target.value)} />
          </div>

          <div className='form-group'>
              <label htmlFor="skills">Skills:</label>
              <input type="text" id="skills" value={skills} onChange={(e) => setSkills(e.target.value)} />
          </div>

          <div className='form-group'>
          <label htmlFor="languages">Languages:</label>
          <input type="text" id="languages" value={languages} onChange={(e) => setLanguages(e.target.value)} />
          </div>
          
          {errors && <div className="error">{`Please include: ${errors}`}</div>}
          <button type="submit" className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
      
    
  );
}

export default ModalForm;
