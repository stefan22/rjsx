import React, {Component} from 'react';
import '../scss/header.scss';

class Header extends Component {

  render() {
    const title = 'Add items to you list!';

    return (
      <div>
        <div>
          <div className="cal-lg-2 cal-md-2">
            <p></p>
          </div>
          <div className="cal-lg-8 cal-md-8">
            <h3>{title}</h3>
          </div>
          <div className="cal-lg-2 cal-md-2">
            <p></p>
          </div>
        </div>
      </div>

    );
  }

} //Header



export default Header;
