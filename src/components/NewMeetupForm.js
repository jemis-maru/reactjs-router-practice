import { useEffect, useRef, useState } from 'react';
import Card from '../components/ui/Card.js';
import classes from './css/NewMeetupForm.module.css';

function NewMeetupForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();
        
    let [titleInput, changeTitleInput] = useState('');
    let [imageInput, changeImageInput] = useState('');
    let [addressInput, changeAddressInput] = useState('');
    let [descriptionInput, changeDescriptionInput] = useState('');

    function submitHandler(event) {
        event.preventDefault();


        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
        };

        console.log(meetupData);

        props.setMeetupDataToParent(meetupData);
        
        titleInputRef.current.value = titleInput;
        imageInputRef.current.value = imageInput;
        addressInputRef.current.value = addressInput;
        descriptionInputRef.current.value = descriptionInput;
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type='text' required id='title' ref={titleInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Meetup Image</label>
                    <input type='url' required id='image' ref={imageInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>Address</label>
                    <input type='text' required id='address' ref={addressInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea
                        id='description'
                        required
                        rows='5'
                        ref={descriptionInputRef}
                    ></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    );
}

export default NewMeetupForm;