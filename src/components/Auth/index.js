import React, { PureComponent } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBInput,
  MDBBtn
} from 'mdbreact';
import './index.css';

class Auth extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      email: '',
      error: ''
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      error: ''
    });
  }

  signInValidation = () => {
    if ( this.state.email.length < 1 ) {
      this.setState({ error: 'Введите email' });
      return false;
    }

    if ( this.state.password.length < 1 ) {
      this.setState({ error: 'Введите пароль' });
      return false;
    }

    return true;
  }

  submitHandler = event => {
    event.preventDefault();

    if ( ! this.signInValidation() ) return false;

    this.props.signIn({ email: this.state.email, password: this.state.password });
  }

  render() {
    const { email, password, error } = this.state;

    return (
      <MDBMask id="auth" className="d-flex justify-content-center align-items-center">
        <MDBContainer>
          <MDBRow>
            <MDBCol md="10" lg="8" xl="7" sm="12" className="mx-auto">
              <MDBCard>
                <MDBCardBody>
                  <form onSubmit={this.submitHandler}>
                    <MDBInput type="email" name="email" label="Email" value={email} onChange={this.handleChange} />
                    <MDBInput type="password" name="password" label="Password" containerClass="pswd-wrapper"
                      value={password} onChange={this.handleChange} className={error ? 'is-invalid' : ''}>
                      <div className="invalid-feedback">{error}</div>
                    </MDBInput>
                    <div className="text-center black-text float-right btn-wrapper">
                      <MDBBtn size="lg" type="submit">Sign In</MDBBtn>
                    </div>
                  </form>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBMask>
    )
  }
}

export default Auth;
