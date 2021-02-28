import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import '../styles/SidebarMenu.css'

export default class SidebarMenu extends Component {
  state = { activeItem: 'dashboard' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted vertical menu>
        <Menu.Item
          id='site-title'
          name='site-title'
        >
          <p>Website Title/Logo</p>
        </Menu.Item>
        <Menu.Item
          id='user-profile'
          name='profile'
          active={activeItem === 'profile'}
          onClick={this.handleItemClick}
        >
          <i class="huge icons">
            <i class="big circle outline icon"></i>
            <i class="user icon"></i>
          </i>
          <p>Changey McChangemaker</p>
        </Menu.Item>
        <Menu.Item
          name='dashboard'
          active={activeItem === 'dashboard'}
          onClick={this.handleItemClick, this.displayTab}
        />
        <Menu.Item
          name='directory'
          active={activeItem === 'directory'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='channels'
          active={activeItem === 'channels'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='events'
          active={activeItem === 'events'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='advertising'
          active={activeItem === 'advertising'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='fundraising'
          active={activeItem === 'fundraising'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}
