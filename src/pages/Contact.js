import '../App.css';

const Contact = () => {
    return (
        <div>
            <h1 class="title">Contact Us!</h1>
            <div class="contact-main">
                <form class="contact-form">
                    <div class="form-group">
                        <label for="email">Email address</label>
                        <input type="email" class="form-control" id="form-email" placeholder="name@example.com" />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlSelect2">Type of contact:</label>
                        <select multiple class="form-control" id="form-contact">
                            <option>Complaint</option>
                            <option>Suggestion</option>
                            <option>Praise</option>
                            <option>Question</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="message">Message:</label>
                        <textarea class="form-control" id="form-message" rows="3"></textarea>
                    </div>
                    <div class="button">
                        <button class="form-submit">Submit form</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;