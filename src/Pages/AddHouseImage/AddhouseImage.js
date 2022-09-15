import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import API_REQUEST from '../../Axios/axios';
import { Button } from '../../Components/ButtonLined/ButtonLined.styles';
import { FormButtonWrapper, InputFileWrapper, MainHeaderSubTitle, MainHeaderTitle, MainImgWrapper } from './AddHouseImage.styles';



const AddhouseImage = () => {

    const navigate          = useNavigate();
    const { _id }           = useParams();      //house id that will be used to add the images

    // eslint-disable-next-line
    const [image, setImage] = useState(null);
    const [array, setArray] = useState([]);



    // Change image and add the image to the array
    const handleImageOnChange = image => {
        setImage(image);
        setArray(array => [...array, image]);
    }



    // This function will iterate over the array and for each image, it will upload it
    const addFilesToArray = event => {
        event.preventDefault();
        
        try {
            array.map(async object => {
                // Create a form data and assign an image for each array image    
                const reader = new FileReader();
                reader.readAsDataURL(object);
                reader.onloadend = async () => {

                // make the request and send all the created form data objects
                await API_REQUEST.put(`/add-image/${_id}`, {image: reader.result});
                }
                
            }); 

            // After uploading photos navigate to edit house
            navigate(`/edit-house/${_id}`);    
        } 
        
        catch (error) {
            console.log(error);
        }
    }

  return (
    <MainImgWrapper>
        <form onSubmit={addFilesToArray}> 
            <MainHeaderTitle>Add image</MainHeaderTitle>
            <MainHeaderSubTitle>Add one or more house image.</MainHeaderSubTitle>

            {/* Basic file input */}
            <div>
                <InputFileWrapper onChange={e => handleImageOnChange(e.target.files[0])} 
                type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
            </div>

            {/* Map over the array and render when the length is more than 1 */}
            {array.length >= 1 && array.map(() => (
                <div>
                    <InputFileWrapper onChange={e => handleImageOnChange(e.target.files[0])} 
                    type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
                </div>
            ))}

            <FormButtonWrapper>
                <Button type='submit'>Upload image</Button>
                <Button onClick={() => navigate(`/edit-house/${_id}`)}>Skip</Button>
            </FormButtonWrapper>
        </form>
    </MainImgWrapper>
  )
}

export default AddhouseImage;