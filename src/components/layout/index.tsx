import React from 'react'
import Navigation from './navigation'
import { Outlet } from 'react-router-dom'
import Footer from './footer'
import Navigation2 from './navigation2'
import styled from 'styled-components'
const LayoutStyle = styled.div`
  min-height: 100vh;
`;
const MainLayout = () => {
  return (
    <LayoutStyle>
      <Navigation />
      <Outlet />
      <Footer />
    </LayoutStyle>
  )
}

export default MainLayout