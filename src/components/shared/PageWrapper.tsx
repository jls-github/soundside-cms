import React from 'react'
import { Container } from 'react-bootstrap'

interface PageWrapperProps {
    children?: React.ReactNode,
    containerClasses?: String
}

export default function PageWrapper({children, containerClasses}: PageWrapperProps): JSX.Element {
    return (
        <Container className={`w-50 py-4 ${containerClasses}`}>
            {children}
        </Container>
    )
}
