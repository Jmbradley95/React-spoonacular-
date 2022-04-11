import React from 'react'
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiNoodles, GiChopsticks } from 'react-icons/gi'
import styled from "styled-components"
import { NavLink } from 'react-router-dom'

export default function Category() {
  return (
    <List>
        <SLink to={'/cuisine/Italian'}>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </SLink>
        <SLink to={'/cuisine/American'}>
            <FaHamburger/>
            <h4>American</h4>
        </SLink>
        <SLink to={'/cuisine/Thai'}>
            <GiNoodles/>
            <h4>Thai </h4>
        </SLink>
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 1.5rem 0;
    align-items: space-around;
    `
const SLink = styled(NavLink)`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-radius: 50%;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    aspect-ratio: 1;
    margin: auto;
    height: 5rem;
    cursor: pointer;
    transform: scale(.8);

    h4{
        color: white;
        font-size: .8rem;
    }

    svg{
        color: white;
        font-size: 1.5rem;
    }
    &.active{
        background: linear-gradient(to right, #f27121, #e94057);

        svg{
            color: white;
        }

        h4{
            color: white;
        }
    }
`
