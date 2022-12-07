import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: rgb(238,174,202);
    background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    background-color: #FFFFFF;
    width: 50%;
    max-width: 350px;
    max-height: 350px;

    @media (max-width: 700px) {
        width: 90%;
        max-width: 300px;
        max-height: 300px;
    }
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`