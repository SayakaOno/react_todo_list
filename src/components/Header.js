import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="navbar">
        <div className="ui cards">
          <div className="card">
            <div className="content">
              <div className="header">TODO List</div>
              <div className="meta">How to use</div>
              <div className="description">
                <ul>
                  <li><strong>Add item:</strong> click "Add todo" button</li>
                  <li><strong>Edit item:</strong> double click text</li>
                  <li><strong>Finish editing:</strong> hit "Enter" key</li>
                  <li><strong>Delete item:</strong> click "garbage" button</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;