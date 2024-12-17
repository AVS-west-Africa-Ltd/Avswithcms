"use client";
import { useState } from "react";
import { useFileUpload } from "../libs/useFileUpload/useFileUpload";
import toast from "react-hot-toast";
import ToastNotification from "./Toast";
import Loader from "./Loader";
import { redirect } from "next/navigation";

const Form = () => {
  const [formData, setFormData] = useState({
    Name: "",
    LastName: "",
    Email: "",
    Phone: "",
    LookingFor: "",
    Comments: "",
    Attachments: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("bad");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (e.target.type === "file") {
      const file = e.target.files[0];

      // Create a temporary URL for the file
      const attachmentUrl = URL.createObjectURL(file);

      setFormData((prevData) => ({
        ...prevData,
        Attachments: file,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const showToast = (message) => {
    toast.success(message);
  };

  // async function handleSubmitWeb3Forms(event) {
  //   event.preventDefault();
  //   setIsSubmitting(true);

  //   try {
  //     const formData = new FormData(event.target);

  //     // Add the access key6d7af40f-6f66-480a-8932-64d13d82dd35
  //     formData.append("access_key", "854d1de7-5bee-49fe-a3c8-0874c4c2d7af"); //6d7af40f-6f66-480a-8932-64d13d82dd35"); //"854d1de7-5bee-49fe-a3c8-0874c4c2d7af");

  //     // Convert FormData to a plain object and then to JSON
  //     const object = Object.fromEntries(formData);
  //     const json = JSON.stringify(object);

  //     // Make the POST request
  //     const response = await fetch("https://api.web3forms.com/submit", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //       body: json,
  //     });

  //     if (!response.ok) {
  //       throw new Error(`Server error: ${response.status}`);
  //     }

  //     const result = await response.json();

  //     if (result.success) {
  //       showToast(result.message + "Thank You We will Contact You Soon");
  //       redirect("/");

  //       // Display success message

  //       // Reset the form data
  //       setFormData({
  //         Name: "",
  //         LastName: "",
  //         Email: "",
  //         Phone: "",
  //         LookingFor: "",
  //         Comments: "",
  //         Attachments: null,
  //       });
  //     } else {
  //       showToast("Submission failed. Please try again.");
  //     }
  //   } catch (error) {
  //     // Handle errors
  //     console.error("Form submission error:", error);
  //     showToast("An error occurred. Please try again.");
  //   } finally {
  //     // Ensure this runs regardless of success or failure
  //     setIsSubmitting(false);
  //   }
  // }
  // old code here
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(JSON.stringify(formData), "the form data");

  //   // if(formData.Attachments != null) {
  //   //   const uploadFile = useFileUpload();
  //   // const handleFileSelect = async (file) => {
  //   //   const uploadOk = await uploadFile(formData.Attachments.file.name, formData.Attachments.file)

  //   //   if (uploadOk) {
  //   //     /// should return the file url, file name and file size
  //   //   } else {
  //   //     // show error
  //   //   }
  //   //   }
  //   // }
  //   try {
  //     // Check if there is an attachment
  //     // if (formData.Attachments) {
  //     //   // Upload the file to Google Cloud Storage
  //     //   const { fileName, fileSize, fileUrl } = await uploadFile(formData.Attachments);

  //     //   // Update the form data with the Google Cloud Storage URL
  //     //   setFormData((prevData) => ({
  //     //     ...prevData,
  //     //     Attachments: {
  //     //       fileName,
  //     //       fileSize,
  //     //       url: fileUrl,
  //     //     },
  //     //   }));
  //     // }

  //     // Convert the form data to JSON
  //     const jsonData = JSON.stringify(formData);

  //     // Make the API request to create a record
  //     const response = await fetch("/api/airtable", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: jsonData,
  //     });

  //     // Log the raw response
  //     console.log("Raw Response:", await response.text());

  //     if (response.ok) {
  //       console.log("Record created successfully!");
  //       setFormData({
  //         Name: "",
  //         LastName: "",
  //         Email: "",
  //         Phone: "",
  //         LookingFor: "",
  //         Comments: "",
  //         Attachments: null,
  //       });
  //     } else {
  //       console.error("Failed to create record!!!");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };
  // nodemailer send mail
  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("../api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Send form data as JSON
      });

      if (response.ok) {
        const result = await response.json();
        showToast(result.message);
        setMessage(result.message);
        alert(result.message);
        setFormData({
          Name: "",
          LastName: "",
          Email: "",
          Phone: "",
          LookingFor: "",
          Comments: "",
        });
      } else {
        showToast("Failed to submit the form. Please try again.");
        setMessage("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      showToast("An error occurred. Please try again.");
      setMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center  text-white">
      <form
        onSubmit={handleSubmit}
        className=" px-8 pt-6 pb-8 mb-4 grid grid-cols-2 grid-rows-6 gap-x-2 md:gap-x-4"
      >
        <div className="mb-4">
          <label className={` text-sm  mb-2 ${formData.Name && "active"}`}>
            First Name
            <input
              className="appearance-none border-b-[1px] border-white bg-transparent  w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
              required
              placeholder=" "
            />
          </label>
        </div>

        <div className="mb-4">
          <label className={` text-sm  mb-2 ${formData.LastName && "active"}`}>
            Last Name:
            <input
              className="appearance-none border-b-[1px] border-white bg-transparent  w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="LastName"
              value={formData.LastName}
              onChange={handleChange}
              required
              placeholder=" "
            />
          </label>
        </div>

        <div className="mb-4">
          <label className={` text-sm  mb-2 ${formData.Email && "active"}`}>
            Email:
            <input
              className="appearance-none border-b-[1px] border-white bg-transparent  w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              required
              placeholder=" "
            />
          </label>
        </div>

        <div className="mb-4">
          <label className={` text-sm  mb-2 ${formData.Phone && "active"}`}>
            Phone Number:
            <input
              className="appearance-none border-b-[1px] border-white bg-transparent  w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              type="tel"
              name="Phone"
              value={formData.Phone}
              onChange={handleChange}
              required
              placeholder=" "
            />
          </label>
        </div>

        <div className="mb-4 col-span-2 relative">
          <label
            for="LookingFor"
            className={`text-sm mb-2 ${formData.lookingFor && "active"}`}
          >
            Looking For:
            <div className="relative">
              <select
                className=" border-b-[1px]  bg-gray-500 w-full py-2 px-3 pr-8 leading-tight focus:outline-none focus:shadow-outline"
                name="LookingFor"
                value={formData.LookingFor}
                onChange={handleChange}
              >
                <option value="">Select an option</option>
                <option value="Partnerships & Advisory">
                  Partnerships & Advisory
                </option>
                <option value="Technical Activation">
                  Technical Activation
                </option>
                <option value="Digital Activation">Digital Activation</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                &darr;
              </div>
            </div>
          </label>
        </div>

        <div className="mb-4 col-span-2 row-start-4">
          <label className={`text-sm  mb- ${formData.Comments && "active"}`}>
            Comment:
            <textarea
              className=" resize-none  appearance-none border-b-[1px] border-white bg-transparent  w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              name="Comments"
              value={formData.Comments}
              onChange={handleChange}
            />
          </label>
        </div>

        {/* <div className="mb-4 col-span-2 row-start-5">
          <label className="text-sm  mb-2">
            Attach Your Brief
            <input
              className="file:bg-transparent file:shadown-none file:border-solid file:border-[1px] file:px-3 file:py-2 file:text-white file:border-white w-full py-2  leading-tight focus:outline-none focus:shadow-outline"
              type="file"
              name="Attachments"
              accept=".pdf"
              placeholder="attachment"
              onChange={handleChange}
            />
          </label>
        </div> */}

        <div className=" justify-between col-span-2 row-start-6">
          <p className="text-xs py-5">
            <input
              type="checkbox"
              required
              style={{ marginRight: "5px", color: "red" }}
            />
            By clicking the submit button you agree to our Terms of Use and
            Privacy Policy ok.
          </p>

          {!isSubmitting ? (
            <button
              className="bg-white text-black hover:bg-black hover:text-white transition duration-300  py-2 px-4 focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit Form
            </button>
          ) : (
            <div className="bg-white text-black hover:bg-black hover:text-white transition duration-300 flex w-max items-center gap-2  py-2 px-4 focus:outline-none focus:shadow-outline">
              <span>Submitting...</span> <Loader width="w-5" height="h-5" />
            </div>
          )}
        </div>
      </form>
      <ToastNotification />
    </div>
  );
};

export default Form;
