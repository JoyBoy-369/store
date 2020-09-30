import React from 'react'
import FormInput from '../form-input'
import CustomButton from '../custom-button'

import './styles.scss'

class SignIn extends React.Component {
  constructor(props) {
    super()

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form>
          <FormInput name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='Email'
            required />
          <FormInput name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='Password'
            required />
          <CustomButton type='submit'>Sign In</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignIn