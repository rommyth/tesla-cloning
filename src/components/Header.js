import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
// import { selectCars } from './carSlice'
import { useSelector } from 'react-redux';
import logo from '../images/logo.svg'

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    // const cars = useSelector(selectCars);
    // console.log(cars);

    const onContentClick = (value) => {
        const element = document.getElementById(`${value}`);
        element.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <Container>
            <a>
                <img src={logo} alt="" />
            </a>
            <Menu>
                {/* {cars && cars.map((car, index) => (
                    <a href="#">{car}</a>
                ))} */}
                <a onClick={() => onContentClick(1)}>Model S</a>
                <a onClick={() => onContentClick(2)}>Model 3</a>
                <a onClick={() => onContentClick(3)}>Model X</a>
                <a onClick={() => onContentClick(4)}>Model Y</a>
                <a onClick={() => onContentClick(5)}>Solar Panel</a>
                <a onClick={() => onContentClick(6)}>Solar Roof</a>
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Account</a>
                <CustomMenu onClick={() => setBurgerStatus(true)} />
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={() => setBurgerStatus(false)} />
                </CloseWrapper>
                {/* {cars && cars.map((car, index) => (
                    <li key={index}><a href="#">{car}</a></li>
                ))} */}
                <li><a href="#">Model S</a></li>
                <li><a href="#">Model 3</a></li>
                <li><a href="#">Model X</a></li>
                <li><a href="#">Model Y</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadster</a></li>
                <li><a href="#">Semi</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content:space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`;

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    font-size:10pt;
    cursor:pointer;
    a{
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 15px;
        flex-wrap: nowrap;
    }

    a:hover{
        font-weight: 600;
        text-transform: uppercase;
        padding: 10px 15px;
        flex-wrap: nowrap;
        background-color: rgba(0,0,0, .05);
        border-radius: 20px;
        transition: .2s;
    }

    @media(max-width: 768px){
        display: none;
    }
`;

const RightMenu = styled.div`
display: flex;
align-items:center;
font-size:10pt;
a{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
}
a:hover{
    font-weight: 600;
    text-transform: uppercase;
    padding: 10px 10px;
    flex-wrap: nowrap;
    background-color: rgba(0,0,0, .05);
    border-radius: 10px;
    transition: .2s;
}
`;

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`;

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background:white;
    width: 300px;
    z-index: 10;
    list-style: none;
    padding: 20px;
    display:flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s;
    li{
        padding: 15px 0;  
    }
    li:hover{
        padding:15px 15px;
        background-color: rgba(0,0,0, .05);
        border-radius: 20px;
        transition: 0.1s;
    }
    a{
        font-weight: 600;
    }
`;

const CustomClose = styled(CloseIcon)` 
    cursor: pointer;
`;

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;
