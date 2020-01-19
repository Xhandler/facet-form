import React from 'react';
import styled from 'styled-components';
function CodeChallengeHeader({ name, company, className }) {
    return (
        <header className={className}>
            <p>
                Coding Challege for {company}
            </p>
            <p>
                By <b>{name}</b>
            </p>
        </header>
    );
};

CodeChallengeHeader.defaultProps = {
    name: 'Chandler Dibble',
    company: 'Facet Wealth'
};

export default styled(CodeChallengeHeader)`
border-bottom: 1px solid #333;
box-shadow: rgba(0, 0, 0, 0.24) 0px 6px 20px;
grid-area: header;
text-align: center;
display:flex;
justify-content: space-between;
padding: .5rem 2rem .5rem 2rem;
`;
