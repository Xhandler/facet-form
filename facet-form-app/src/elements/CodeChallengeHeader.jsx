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

export default CodeChallengeHeader;
