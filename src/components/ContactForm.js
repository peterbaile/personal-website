import React, { Component } from 'react'

// To-do Email Function
class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            subject: "web",
            message: ""
        }
    }

    submitForm = e => {
        e.preventDefault();
        
    }

    render() {
        return (
            <div class="content" style={{margin: "2%"}}>

                <form onSubmit={this.submitForm.bind(this)}>
                    <div class="field">
                        <label class="label">Name</label>
                        <div class="control">
                            <input class="input" type="text" onChange={e => this.setState({name: e.target.value})} placeholder="Text input" />
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Email</label>
                        <div class="">
                            <input class="input" type="email" onChange={e => this.setState({email: e.target.value})} placeholder="Email input" />
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Subject</label>
                        <div class="control">
                            <div class="select">
                                <select>
                                    <option>Select dropdown</option>
                                    <option>With options</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Message</label>
                        <div class="control">
                            <textarea class="textarea" placeholder="Textarea" onChange={e => this.setState({message: e.target.value})}></textarea>
                        </div>
                    </div>

                    <div class="field is-grouped">
                        <div class="control">
                            <button class="button is-link">Submit</button>
                        </div>
                        <div class="control">
                            <button class="button is-text">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>

        )
    }
}

export default ContactForm;
