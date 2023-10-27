import React from 'react'
import styled from 'styled-components'

interface ErrorTextProps {
    text: string;
}

const ErrorTextStyle = styled.div`
    color: red;
    font-size: 14px;
    line-height: 14px;
`

const ErrorText = ({
    text
}: ErrorTextProps) => {
    return (
        <ErrorTextStyle>
            {
                text
            }
        </ErrorTextStyle>
    )
}

export default ErrorText
