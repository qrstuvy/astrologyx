import { Component } from 'react';
import { signUp } from '../../utilities/users-service';
import '../Form.css'

export default class SignUpForm extends Component {
  state = {
    name: '',
    birthdate: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  // function getHoroscope(birthday) {
  //   const month = birthday.getMonth() + 1;  // the getMonth() method returns a zero-based value, so we need to add 1
  //   const day = birthday.getDate();
  //   const year = birthday.getFullYear();

  //   if ((month == 12 && day >= 22) || (month == 1 && day <= 19)){
  //      return "Capricorn"
  //   }
  //   else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
  //     return "Aquarius"
  //   }
  //   else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
  //     return "Pisces"
  //   }
  //   else if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
  //     return "Aries"
  //   }
  //   else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
  //     return "Taurus"
  //   }
  //   else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
  //     return "Gemini"
  //   }
  //   else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
  //     return "Cancer"
  //   }
  //   else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
  //     return "Leo"
  //   }
  //   else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
  //     return "Virgo"
  //   }
  //   else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
  //     return "Libra"
  //   }
  //   else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
  //     return "Scorpio"
  //   }
  //   else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
  //     return "Sagittarius"
  //   }
  // }

  // Your zodiac sign is: {getHoroscope(new Date(year, month, day))}
 


  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const formData = { ...this.state };
      delete formData.confirm;
      delete formData.error;
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await signUp(formData);
      // Update user state with user
      this.props.setUser(user);
    } catch {
      // Invalid signup
      this.setState({
        error: 'Sign Up Failed - Try Again'
      });
    }
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  }


  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <div className="form-container col-md-3">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
            <label>Birthdate</label>
            <input type="date" name="birthdate" value={this.state.birthdate} onChange={this.handleChange} required />
            <label>Email</label>
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
            <label>Password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
            <label>Confirm</label>
            <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
            <button type="submit" disabled={disable}>SIGN UP</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}