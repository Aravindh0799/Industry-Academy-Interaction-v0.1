import React, {useState} from 'react'

const Uploadpdf = ({ closeModal})=> {
    const [errors, setErrors] = useState("");

    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
      setFile(event.target.files[0]);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        if (!file) {
          alert('Please select a PDF file.');
          return;
        }

        const mail = localStorage.getItem('userMail');
        console.log('from the upload',mail)
        const postmail = localStorage.getItem('postedby');
        const city = localStorage.getItem('city');
        const desg = localStorage.getItem('desg');
        const text = `${mail} has applied for the job that you have posted - Job designation:${desg},
        City:  ${city}`
        const formData = new FormData();
        formData.append('pdfFile', file);
        formData.append('originalname', file.name);
        formData.append('path', file.path);
        formData.append('subject','application attached with resume');
        formData.append('to', postmail);
        formData.append('text',text);
        formData.append('appliedby',mail)

        console.log('to the to', postmail);
        try {
            const response = await fetch('http://localhost:6080/sendpdfemail', {
              method: 'POST',
              body: formData,
            });
      
            if (response.ok) {
              alert('Email sent successfully.');
              window.location.href = "jobs";
            } else {
              alert('An error occurred while sending the email.');
            }
          } catch (error) {
            console.error(error);
            alert('An error occurred while sending the email.');
          }


    }


  return (
    <div>
    <div>
    <h1>Upload PDF and Send Email</h1>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input type="file" name="pdfFile" accept=".pdf" required onChange={handleFileChange} />
        <button type="submit">Upload and Send</button>
      </form>
    </div>


    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
      <div className="modal">
            <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <div className="form-group">
                <input
                type="file"
                name="PdfFile"
                onChange={handleFileChange}
                accept=".pdf"
                />
                </div>
                {errors && <div className="error">{`Please include: ${errors}`}</div>}
                <button type="submit">
                    Upload and Submit
                </button>
            </form>
            </div>
        </div>
          
    </div>
  )
}

export default Uploadpdf;