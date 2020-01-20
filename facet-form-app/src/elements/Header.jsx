import React from 'react';
import styled from 'styled-components';

function Header({ company, className }) {
    return (
        <header className={className}>
            <p>{company}</p>
        </header>
    );
};

Header.defaultProps = {
    company: 'Facet Wealth',
};

export default styled(Header)`
box-shadow: rgba(0, 0, 0, 0.24) 0px 6px 20px;
grid-area: header;
display:flex;
justify-content: space-around;
padding: .5rem 2rem .5rem 2rem;
border-bottom-left-radius: 50% 20%;
border-bottom-right-radius: 50% 20%;
font-weight: 600;
font-size: 1.5rem;
@media only screen and (max-width: 600px){
    font-size: 1rem;
}
background-color: rgba(63,76,107,1);
`;